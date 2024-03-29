module.exports = {
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.plugins.push(new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/));
    return config;
  },
  webpack5: false,
};
