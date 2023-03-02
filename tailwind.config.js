/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
    content: ["./src/**/*.{js,jsx}"],
    theme: {
        screens: {
            xs: "475px",
            ...defaultTheme.screens,
        },
        extend: {},
    },
    plugins: [],
};
