const path = require("path");

module.exports = {
  css: {
    loaderOptions: {
      sass: { prependData: `@import "@/assets/css/_variables.scss";` }
    }
  }
};
