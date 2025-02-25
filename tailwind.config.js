/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'main-background': 'white',
        'primary': '#1B1D2D',
        'container-color': 'white',
        'disable': '#B8BBCA',
        'disableInput': '#B9BAC7',
        'gray-350': '#C4C4C4',
        'timesheet-dayoff': '#BABCCC',
        'timesheet-planned': '#AEE1F8',
        'timesheet-done': '#61D792',
        'timesheet-absenteeism': '#D11C1C',
        'timesheet-vacation': '#F7F792',
        'timesheet-sickleave': '#CEF064',
        'timesheet-businesstrip': '#8F62E4'
      },
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