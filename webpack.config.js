const path = require("path");
const webpack = require("webpack");
const dotenv = require("dotenv");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const HtmlWebPackPlugin = require("html-webpack-plugin");

// const env = dotenv.config().parsed;
// const envKeys = Object.keys(env).reduce((prev, next) => {
//   prev[`process.env.${next}`] = JSON.stringify(env[next]);
//   return prev;
// }, {});

module.exports = {
  entry: "./src/main.js",
  output: {
    path: path.join(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "/"
  },
  devServer: {
    port: process.env.NODE_PORT,
    historyApiFallback: true, // Reloads the app on last visited route (important)
    open: true
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader"
      },
      {
        test: /\.(png|jpg)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              outputPath: "assets/images/"
            }
          }
          // ,
          // {
          //   loader: "url-loader",
          //   options: {
          //     limit: 4096,
          //     name: "[name].[ext]"
          //   }
          // }
        ]
      },
      {
        test: /\.(eot|woff|ttf|otf)$/,
        loader: "file-loader",
        options: {
          outputPath: "assets/fonts/"
        }
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(["dist"]),
    new HtmlWebPackPlugin({
      template: "./src/index.html"
    }),
    new webpack.DefinePlugin(envKeys)
  ]
};
