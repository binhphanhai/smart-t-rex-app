const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: {
    bundle: "./src/index.js",
  },
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "bundle.js",
  },
  devServer: {
    port: 3000,
    watchContentBase: true,
    open: true,
    clientLogLevel: "silent",
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

            return "/public/icons/[contenthash].[ext]";
          },
        },
      },
    ],
  },
  plugins: [new MiniCssExtractPlugin({ filename: "style.css" })],
};
