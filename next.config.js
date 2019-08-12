require("dotenv").config();
const withSass = require("@zeit/next-sass");
const TsConfigPathsPlugin = require("tsconfig-paths-webpack-plugin");
const Dotenv = require("dotenv-webpack");

module.exports = withSass({
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: "[name]__[local]--[hash:base64:5]"
  },
  sassLoaderOptions: {
    includePaths: ["components/**", "pages/**"]
  },
  webpack(config) {
    if (config.resolve.plugins) {
      config.resolve.plugins.push(new TsConfigPathsPlugin());
    } else {
      config.resolve.plugins = [new TsConfigPathsPlugin()];
    }

    config.plugins.push(new Dotenv());

    return config;
  }
});
