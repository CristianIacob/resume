const Uglify = require("uglifyjs-webpack-plugin");

module.exports = {
  webpack(cfg, { dev }) {
    if (!dev) {
      cfg.plugins = cfg.plugins.filter((plugin) => plugin.constructor.name !== "UglifyJsPlugin");
      cfg.plugins.push(new Uglify());
    }
    return cfg;
  },
};
