/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        light: {
          base: '#FFFFFF',
          green: '#2E5A27',
          blue: '#1B3B6F'
        },
        dark: {
          base: '#121212',
          green: '#3D7A38',
          blue: '#264F94'
        }
      },
      fontFamily: {
        sans: ['Inter Variable', 'sans-serif'],
      },
    },
  },
  plugins: [],
}