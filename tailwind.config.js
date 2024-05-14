/** @type {import('tailwindcss').Config} */
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    darkMode: "selector",
    theme: {
        extend: {
            colors: {
                primary: "rgb(var(--color-primary) / <alpha-value>)",
                secondary: "rgb(var(--color-secondary) / <alpha-value>)",
            },
            fontFamily: {
                patua: ["Patua One", ...fontFamily.serif],
                rubik: ["Rubik", ...fontFamily.sans],
            },
        },
    },
    plugins: [],
};
