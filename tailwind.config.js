const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
    darkMode: 'class',
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        typography: (theme) => ({}),
        colors: {
            transparent: 'transparent',
            current: 'currentColor',
            neutral: '#FFFFFF',
            'bright-blue': '#3A7BFD',
            'check-bg-one': '#57DDFF',
            'check-bg-two': '#C058f3',
            // Light theme colors
            'very-light-gray': '#FAFAFA',
            'very-light-grayish-blue': '#E4E5F1',
            'dark-grayish-blue': '#D2D3DB',
            'very-dark-grayish-blue': '#484B6A',
            // Dark theme colors
            'very-dark-blue': '#161722',
            'very-dark-desaturated-blue': '#25273C',
            'light-grayish-blue': '#CACDE8',
            'very-light-grayish-blue': '#E4E5F1',
            'dark-grayish-blue': '#777A92',
            'very-dark-grayish-blue': '	#4D5066',
        },
        extend: {
            fontFamily: {
                josefin: ['Josefin Sans', ...fontFamily.sans],
            },
        },
    },
    variants: {},
    plugins: [require('@tailwindcss/typography')],
};
