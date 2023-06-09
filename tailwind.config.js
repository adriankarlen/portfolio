/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        'node_modules/daisyui/dist/**/*.js',
        'node_modules/react-daisyui/dist/**/*.js',
    ],
    plugins: [require('@tailwindcss/typography'), require('daisyui')],
    daisyui: {
        themes: ['business'],
    },
};
