/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
	content: ['./src/**/*.{js,jsx}'],
	theme: {
		screens: {
			xs: '475px',
			...defaultTheme.screens,
		},
		extend: {
			colors: {
				secondary: {
					900: '#14142B',
				},
			},
		},
	},
	plugins: [],
};
