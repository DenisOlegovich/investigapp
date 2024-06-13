/** @type {import('tailwindcss').Config} */
// TODO: импорты работают только с относительным путем, через @/... не работает
import extendedBaseTheme from './themes/tailwind'

module.exports = {
    content: [
        './app/**/*.{js,ts,jsx,tsx,mdx}',
        // './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        screens: extendedBaseTheme.screens,
        colors: extendedBaseTheme.colors,
        extend: {
            spacing: extendedBaseTheme.spacing,
            lineHeight: extendedBaseTheme.lineHeight,
            fontFamily: extendedBaseTheme.fontFamily,
            fontSize: extendedBaseTheme.fontSize,
        },
    },
}
