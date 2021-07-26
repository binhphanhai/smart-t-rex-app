const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    bundle: "./src/index.js",
  },
  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  devServer: {
    port: 3000,
    watchContentBase: true,
    open: true,
    clientLogLevel: "silent",
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: "style.css" }),
    new HtmlWebpackPlugin({
      title: "Caching",
      template: "src/index.html",
    }),
  ],
  optimization: {
    runtimeChunk: "single",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.(css|scss)$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loader: "file-loader",
        options: {
          name(resourcePath, resourceQuery) {
            if (process.env.WEBPACK_DEV_SERVER) {
              return "[path][name].[ext]";
            }

            return "/public/assets/[contenthash].[ext]";
          },
        },
      },
    ],
  },
};
