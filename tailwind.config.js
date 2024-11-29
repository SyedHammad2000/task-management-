/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['"Roboto"', "sans-serif"],
        parkinsans: ['"Parkinsans"'],
        oswald: ['"Oswald"'], // Add your new font here
        syne: ['"Syne"'],
        merriweather: ['"Merriweather"'], // Add your new font here
      },
    },
  },
  plugins: [],
};
