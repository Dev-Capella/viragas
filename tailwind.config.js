/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./resources/**/*.blade.php",
        "./resources/**/*.js",
        "./resources/**/*.jsx",
        "./resources/**/*.vue",
    ],
    theme: {
        extend: {
            keyframes: {
                fadeInLeftToRight: {
                    "0%": { left: "-100%" },
                    "50%": { left: "100%" },
                    "100%": { left: "-100%" },
                },
            },

            animation: {
                "fade-in": "fade-in 4s ease-in-out forwards",
                "fade-in-left-to-right": "fadeInLeftToRight 4s linear infinite",
            },
        },
    },

    plugins: [],
};
