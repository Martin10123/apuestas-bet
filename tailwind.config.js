/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#22c55e",
        secondary: "#729a78",
        tertiary: "#eefdef",
        quaternary: "#f8fff8",
      },
      backgroundColor: (theme) => theme("colors"),
      textColor: (theme) => theme("colors"),
      borderColor: (theme) => theme("colors"),
    },
  },
  plugins: [],
};
