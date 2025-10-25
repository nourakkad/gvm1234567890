/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Rebuilt brand color system from the logo (blue/green/gold)
        primary: {
          50: '#e6eeff',
          100: '#cddcff',
          200: '#9ab9ff',
          300: '#6a95ff',
          400: '#3c6eff',
          500: '#1f52f2',
          600: '#0e3ab9', // Brand blue
          700: '#0b2f95',
          800: '#092571',
          900: '#061b4d',
        },
        accent: {
          50: '#eafff3',
          100: '#c8ffe4',
          200: '#96f7c3',
          300: '#5eea9e',
          400: '#2fdb7d',
          500: '#15c969', // Brand green
          600: '#10a755',
          700: '#0c8443',
          800: '#096634',
          900: '#064b26',
        },
        gold: {
          50: '#fff7e6',
          100: '#ffeac2',
          200: '#ffd07a',
          300: '#ffc24d',
          400: '#f9b42d',
          500: '#f2b01e', // Brand gold
          600: '#d69717',
          700: '#b87d14',
          800: '#8f5f10',
          900: '#6b450c',
        },
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'gradient': 'gradient 8s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
    },
  },
  plugins: [],
}

