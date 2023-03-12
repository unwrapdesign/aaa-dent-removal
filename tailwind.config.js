/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
const unwrapTheme = require('@unwrapdev/library/tailwind.config');
module.exports = {
	content: ['./src/**/*.{js,jsx}', './node_modules/@unwrapdev/library/dist/**/*.tsx'],
	theme: {
		...unwrapTheme.theme,
		screens: {
			xs: '475px',
			...defaultTheme.screens,
		},
		extend: {
			...unwrapTheme.theme.extend,
			colors: {
				secondary: {
					900: '#14142B',
				},
			},
		},
	},
	plugins: [],
};
