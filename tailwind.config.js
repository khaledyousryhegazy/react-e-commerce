/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        colorBlue: "var(--blue)",
        colorBlurBlue: "var(--blur-blue)",
        colorGrayDark: "var(--gray-dark)",
        colorGrayLight: "var(--gray-light)",
        colorWhite: "var(--white)",
        colorDark: "var(--dark)",
      },
      backgroundImage: {
        bgContact: "url('./src/assets/bgContact.png')",
      },
    },
  },
  plugins: [],
};
