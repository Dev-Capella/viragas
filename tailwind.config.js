/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./resources/**/*.blade.php",
        "./resources/**/*.js",
        "./resources/**/*.jsx",
        "./resources/**/*.vue",
    ],
    theme: {
        extend: {keyframes: {
            'fade-in': {
              '0%': { opacity: '0' },
              '100%': { opacity: '1' },
            },
          }, animation: {
            'fade-in': 'fade-in 4s ease-in-out forwards',
          },},
    },

    plugins: [],
};
