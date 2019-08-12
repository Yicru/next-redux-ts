require("dotenv").config();
const withSass = require("@zeit/next-sass");
const TsConfigPathsPlugin = require("tsconfig-paths-webpack-plugin");
const Dotenv = require("dotenv-webpack");

module.exports = withSass({
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
