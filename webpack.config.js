/*
    ./webpack.config.js
*/
const webpack = require("webpack")
const path = require("path")
const ExtractTextWebpackPlugin = require("extract-text-webpack-plugin")
const UglifyJsPlugin = require("uglifyjs-webpack-plugin")
const OptimizeCSSAssets = require("optimize-css-assets-webpack-plugin")
const DashboardPlugin = require("webpack-dashboard/plugin")

module.exports = {
  entry: "./src/index.ts",
  output: {
    path: path.resolve(__dirname, "./dist/"),
    filename: "index.js",
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.scss/,
        use: ["css-hot-loader"].concat(
          ExtractTextWebpackPlugin.extract({
            use: ["css-loader", "sass-loader", "postcss-loader"],
            fallback: "style-loader",
          })
        ),
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
          "file-loader?context=source/assets/images/&name=images/[path][name].[ext]",
          {
            loader: "image-webpack-loader",
            query: {
              mozjpeg: {
                progressive: true,
              },
              gifsicle: {
                interlaced: false,
              },
              optipng: {
                optimizationLevel: 4,
              },
              pngquant: {
                quality: "75-90",
                speed: 3,
              },
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  plugins: [new ExtractTextWebpackPlugin("styles.css"), new DashboardPlugin()],
  devServer: {
    contentBase: path.resolve(__dirname, "./dist"),
    historyApiFallback: true,
    inline: true,
    open: true,
    port: 3090,
    host: "0.0.0.0",
  },
  devtool: "eval-source-map",
}
if (process.env.NODE_ENV === "production") {
  module.exports.plugins.push(
    new webpack.optimize.UglifyJsPlugin(),
    new OptimizeCSSAssets()
  )
}
