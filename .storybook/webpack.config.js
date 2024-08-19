const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  stories: ["../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: ["@storybook/addon-essentials"],
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.css$/,
      use: ["style-loader", "css-loader"],
      include: path.resolve(__dirname, "../"),
    });

    config.plugins.push(
      new HtmlWebpackPlugin({
        template: "../index.html", // Path to your HTML template
      })
    );

    return config;
  },
};
