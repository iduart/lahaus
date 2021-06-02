module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      textColor: {
        jungle: "#012D26",
        greengray: "#5B6866",
      },
      backgroundColor: {
        brand: "#3ECFAF",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
