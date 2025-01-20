const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const WatchFilesPlugin = require("webpack-watch-files-plugin").default;

module.exports = {
  mode: "development",
  cache: false,
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/hotelScout/",
    clean: true,
    // publicPath: "/",
  },
  module: {
    rules: [
      {
        test: /\.pug$/,
        use: [
          {
            loader: "pug-loader",
            options: {
              pretty: true, // Отключает минификацию Pug для удобства отладки
            },
          },
        ],
      },
      {
        test: /\.module\.scss$/, // Обрабатываем файлы с .module.scss
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: {
                localIdentName: "[path][name]__[local]--[hash:base64:5]", // Правильное вложение
              },
            },
          },
          "sass-loader",
        ],
      },
      {
        test: /\.scss$/, // Для обычных SCSS файлов
        exclude: /\.module\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|jpg|gif|ico|svg)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[ext]",
            outputPath: "assets/",
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "hotelScout",
      filename: "index.html",
      template: "./src/index.pug",
      cache: false,
    }),
    new WatchFilesPlugin({
      files: ["./src/**/*.pug"],
      options: {
        force: true,
      },
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
      watch: true,
    },
    hot: true,
    compress: true,
    port: 8080,
    open: true,
    watchFiles: ["src/**/*.pug", "src/**/*.scss", "src/**/*.js"],
    liveReload: true,
    client: {
      overlay: true,
      reconnect: true,
    },
    watchFiles: ["src/**/*"],
  },
  // watchOptions: {
  //   aggregateTimeout: 200,
  //   poll: 1000,
  //   ignored: /node_modules/,
  // },
  resolve: {
    extensions: [".js", ".pug", ".scss"],
  },
};
