const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Neue Haas Grotesk Text', ...fontFamily.sans],
				serif: ['Voyage', ...fontFamily.serif],
				heading: ['Neue Haas Grotesk Display', ...fontFamily.sans]
			}
		}
	},
	plugins: [require('@tailwindcss/typography'), require('tailwind-scrollbar')]
};
