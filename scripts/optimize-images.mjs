import fs from 'fs/promises'
import path from 'path'
import sharp from 'sharp'

const ROOT_DIR = process.cwd()
const IMAGES_DIR = path.resolve(ROOT_DIR, 'public', 'images')
const TARGET_BYTES = 600 * 1024 // 600 KB
const SUPPORTED_EXTS = new Set(['.jpg', '.jpeg', '.png', '.webp'])

const WIDTH_STEPS = [2000, 1600, 1400, 1200, 1000, 800, 640]
const QUALITY_STEPS = [85, 80, 75, 70, 65, 60, 55, 50, 45, 40, 35, 30]

async function ensureDir(dir) {
  try {
    await fs.access(dir)
  } catch {
    await fs.mkdir(dir, { recursive: true })
  }
}

async function* walk(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true })
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      yield* walk(fullPath)
    } else {
      yield fullPath
    }
  }
}

async function getFileSize(filePath) {
  const stat = await fs.stat(filePath)
  return stat.size
}

async function optimizeImage(filePath) {
  const ext = path.extname(filePath).toLowerCase()
  if (!SUPPORTED_EXTS.has(ext)) return null

  const originalSize = await getFileSize(filePath)
  if (originalSize <= TARGET_BYTES) return { filePath, originalSize, finalSize: originalSize, skipped: true }

  let bestBuffer = null
  let bestSize = Infinity

  let metadata
  let inputBuffer
  try {
    inputBuffer = await fs.readFile(filePath)
    metadata = await sharp(inputBuffer).metadata()
  } catch (err) {
    console.error('Failed to read metadata:', filePath, err.message)
    return { filePath, originalSize, finalSize: originalSize, error: err.message }
  }

  for (const width of WIDTH_STEPS) {
    for (const quality of QUALITY_STEPS) {
      try {
        const resizeWidth = metadata.width ? Math.min(metadata.width, width) : width
        let pipeline = sharp(inputBuffer).rotate().resize({ width: resizeWidth, withoutEnlargement: true })

        if (ext === '.jpg' || ext === '.jpeg') {
          pipeline = pipeline.jpeg({ quality, mozjpeg: true })
        } else if (ext === '.png') {
          pipeline = pipeline.png({ compressionLevel: 9, palette: true, colors: 256 })
        } else if (ext === '.webp') {
          pipeline = pipeline.webp({ quality })
        }

        const buffer = await pipeline.toBuffer()
        const size = buffer.length

        if (size < bestSize) {
          bestBuffer = buffer
          bestSize = size
        }

        if (size <= TARGET_BYTES) {
          await fs.writeFile(filePath, buffer)
          return { filePath, originalSize, finalSize: size, resizedTo: resizeWidth, quality }
        }
      } catch (err) {
        console.warn('Attempt failed:', filePath, `w=${width}`, `q=${quality}`, err.message)
      }
    }
  }

  if (bestBuffer) {
    await fs.writeFile(filePath, bestBuffer)
    return { filePath, originalSize, finalSize: bestSize, note: 'best-effort (still > target)' }
  }

  return { filePath, originalSize, finalSize: originalSize, error: 'no optimization applied' }
}

async function main() {
  await ensureDir(IMAGES_DIR)
  const results = []
  for await (const filePath of walk(IMAGES_DIR)) {
    const ext = path.extname(filePath).toLowerCase()
    if (!SUPPORTED_EXTS.has(ext)) continue
    const res = await optimizeImage(filePath)
    if (res) results.push(res)
  }

  let savedTotal = 0
  for (const r of results) {
    if (r.skipped) continue
    if (typeof r.originalSize === 'number' && typeof r.finalSize === 'number') {
      savedTotal += Math.max(0, r.originalSize - r.finalSize)
    }
    const rel = path.relative(ROOT_DIR, r.filePath)
    if (r.error) {
      console.log(`✖ ${rel}: ${Math.round(r.originalSize/1024)}KB → ${Math.round(r.finalSize/1024)}KB (error: ${r.error})`)
    } else if (r.note) {
      console.log(`• ${rel}: ${Math.round(r.originalSize/1024)}KB → ${Math.round(r.finalSize/1024)}KB (${r.note})`)
    } else if (r.skipped) {
      console.log(`= ${rel}: skipped (${Math.round(r.finalSize/1024)}KB ≤ target)`)    
    } else {
      console.log(`✓ ${rel}: ${Math.round(r.originalSize/1024)}KB → ${Math.round(r.finalSize/1024)}KB (w=${r.resizedTo}, q=${r.quality})`)
    }
  }

  console.log(`\nTotal saved: ${Math.round(savedTotal/1024)}KB`)
}

main().catch(err => {
  console.error(err)
  process.exit(1)
})


