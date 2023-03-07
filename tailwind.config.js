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
				primary: {
					DEFAULT: '#42A3DA',
					50: '#DCEEF8',
					100: '#CAE5F5',
					200: '#A8D5EE',
					300: '#86C4E7',
					400: '#64B4E1',
					500: '#42A3DA',
					600: '#2587BF',
					700: '#1C6690',
					800: '#134561',
					900: '#0A2332',
				},
				secondary: {
					900: '#14142B',
				},
			},
		},
	},
	plugins: [],
};
