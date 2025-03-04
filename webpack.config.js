const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const WatchFilesPlugin = require("webpack-watch-files-plugin").default;
const CopyWebpackPlugin = require("copy-webpack-plugin");

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
              // basedir: path.resolve(__dirname, "src"),
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
        test: /\.css$/,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.scss$/,
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
        generator: {
          filename: "assets/[name][ext]",
        },
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
  plugins: [
    //     new HtmlWebpackPlugin({
    // title:
    //     }),
    new HtmlWebpackPlugin({
      title: "hotelScout",
      filename: "index.html",
      template: "./src/index.pug",
      cache: false,
    }),
    new HtmlWebpackPlugin({
      // title: "about",
      filename: "about.html",
      template: "./src/pages/about.pug",
      cache: false,
    }),
    // new HtmlWebpackPlugin({
    //   filename: "main.html",
    //   template: "./src/components/main/main.pug",
    //   cache: false,
    // }),
    new HtmlWebpackPlugin({
      filename: "registration.html",
      template: "./src/pages/registration.pug",
      cache: false,
    }),
    new HtmlWebpackPlugin({
      filename: "enter.html",
      template: "./src/pages/enterPage.pug",
      cache: false,
    }),
    new HtmlWebpackPlugin({
      filename: "ui-colors.html",
      template: "./src/pages/ui-kit.pug",
      cache: false,
    }),
    new HtmlWebpackPlugin({
      filename: "forms.html",
      template: "./src/pages/forms/forms.pug",
      cache: false,
    }),
    new HtmlWebpackPlugin({
      filename: "cards.html",
      template: "./src/pages/cards/cards.pug",
      cache: false,
    }),
    new HtmlWebpackPlugin({
      filename: "headers.html",
      template: "./src/pages/headers.pug",
      cache: false,
    }),
    new HtmlWebpackPlugin({
      filename: "search.html",
      template: "./src/pages/search/search.pug",
      cache: false,
    }),
    new HtmlWebpackPlugin({
      filename: "room.html",
      template: "./src/pages/room/room.pug",
      cache: false,
    }),
    new WatchFilesPlugin({
      files: ["./src/**/*.pug"],
      options: {
        force: true,
      },
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: "src/assets",
          to: "assets",
        },
      ],
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
    // watchFiles: ["src/**/*.pug", "src/**/*.scss", "src/**/*.js"],
    liveReload: true,
    client: {
      overlay: true,
      reconnect: true,
    },
    watchFiles: ["src/**/*"],
    historyApiFallback: true,
  },
  // watchOptions: {
  //   aggregateTimeout: 200,
  //   poll: 1000,
  //   ignored: /node_modules/,
  // },
  resolve: {
    extensions: [".js", ".pug", ".scss"],
    alias: {
      "@assets": path.resolve(__dirname, "dist/assets"),
    },
    // fallback: {
    //   zlib: require.resolve("browserify-zlib"),
    //   path: require.resolve("path-browserify"),
    //   querystring: require.resolve("querystring-es3"),
    //   fs: false, // Если не используется файловая система
    //   async_hooks: false, // Если async_hooks не нужен в браузере
    // },
  },
};
