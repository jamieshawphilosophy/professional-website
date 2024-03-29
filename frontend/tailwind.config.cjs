/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
      fontFamily: {
        sans: ["Rubik Variable", "Roboto Flex Variable", ...defaultTheme.fontFamily.sans],
      },
    },
	},
	plugins: ['prettier-plugin-tailwindcss', require('@tailwindcss/typography'), require("daisyui"),],
  daisyui: {
    themes: ["emerald", "dark"],
  },
}
