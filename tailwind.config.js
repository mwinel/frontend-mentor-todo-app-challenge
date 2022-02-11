const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
    darkMode: 'class',
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        typography: (theme) => ({}),
        extend: {
            fontFamily: {
                josefin: ['Josefin Sans', ...fontFamily.sans],
            },
        },
    },
    variants: {},
    plugins: [require('@tailwindcss/typography')],
};
