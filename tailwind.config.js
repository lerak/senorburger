// See https://tailwindcss.com/docs/configuration for details
module.exports = {
  theme:{
    fontFamily: {
      'SyneMono': ['"Syne Mono"', 'sans-serif']
    }
  },
  purge: ["./src/**/*.js"],
  // https://github.com/tailwindlabs/tailwindcss-forms
  plugins: [require("@tailwindcss/forms")],

        

};

