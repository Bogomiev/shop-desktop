/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        alertIn: "alertIn .8s both",
        alertOut: "alertOut .8s both",
      },
      keyframes: {
        alertIn: {
          "0%": {
            transform: "var(--elm-translate) scale(0.7)",
            opacity: 0.7,
          },
          "80%": { transform: "translate(0px) scale(0.7)", opacity: 0.7 },
          "100%": { transform: "scale(1)", opacity: 1 },
        },
        alertOut: {
          "0%": { transform: "scale(1)", opacity: 1 },
          "20%": { transform: "translate(0px) scale(0.7)", opacity: 0.7 },
          "100%": {
            transform: "var(--elm-translate) scale(0.7)",
            opacity: 0.7,
          },
        },
      },
    },
  },
  plugins: [],
}