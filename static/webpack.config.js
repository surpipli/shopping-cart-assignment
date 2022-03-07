const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: ["./public/src/index.js", "./public/src/style.scss"],
  mode: "development",
  output: {
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [new MiniCssExtractPlugin({ filename: "[name].css" })],
  experiments: {
    topLevelAwait: true,
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // CSS plugin which will generate new css file out of scss
          MiniCssExtractPlugin.loader,
          // Translates CSS into CommonJS
          "css-loader",

          "postcss-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
    ],
  },
};
