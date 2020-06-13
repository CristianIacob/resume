module.exports = {
  purge: {
    content: ["./components/**/*.jsx", "./components/**/*.js", "./src/**/*.jsx", "./src/**/*.js"],
    options: {
      whitelist: ["mx-6"], // unwanted purge fix
    },
  },
  theme: {
    extend: {},
    fontFamily: {
      sans: ["Open Sans", "sans-serif"],
      serif: ["Poppins"],
    },
  },
};
