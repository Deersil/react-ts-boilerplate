const path = require('path');
const TSDocgenPlugin = require('react-docgen-typescript-webpack-plugin');

module.exports = (baseConfig, env, defaultConfig) => {
  defaultConfig.module.rules.push({
    test: /\.(ts|tsx)$/,
    loader: require.resolve('awesome-typescript-loader'),
  });
  defaultConfig.plugins.push(new TSDocgenPlugin()); // optional
  defaultConfig.resolve.extensions.push('.ts', '.tsx');
  return defaultConfig;
};