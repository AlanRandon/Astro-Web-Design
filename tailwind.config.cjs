/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{astro,html,md,mdx,svelte,ts,css}"],
  theme: {
    extend: {
      fontFamily: {
        bodoni: ["Libre Bodoni", "serif"],
      },
    },
  },
  plugins: [],
}
