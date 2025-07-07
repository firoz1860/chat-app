// craco.config.js
module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      // Disable source-map-loader for node_modules
      webpackConfig.module.rules = webpackConfig.module.rules.map((rule) => {
        if (rule.oneOf) {
          rule.oneOf = rule.oneOf.map((loader) => {
            if (
              loader.enforce === 'pre' &&
              loader.use &&
              loader.use.some((u) => u.loader && u.loader.includes('source-map-loader'))
            ) {
              loader.exclude = /node_modules/;
            }
            return loader;
          });
        }
        return rule;
      });
      return webpackConfig;
    },
  },
};
