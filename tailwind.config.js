module.exports = {
    purge: [],
    darkMode: "class", // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                "shuttle-gray": {
                    DEFAULT: "#586B7A",
                    50: "#AEBBC5",
                    100: "#A4B2BD",
                    200: "#8FA0AE",
                    300: "#7A8F9F",
                    400: "#677D8F",
                    500: "#586B7A",
                    600: "#43515C",
                    700: "#2D373F",
                    800: "#181D21",
                    900: "#030303",
                },
            },
            fontFamily: {
                sans: ["Cabin"],
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
