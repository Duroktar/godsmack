import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import path from "path";
import webpack from "webpack";
import { Options } from "ts-loader";

const tsLoaderOptions: Partial<Options> = {
  configFile: "tsconfig.json",
  transpileOnly: true,
  compiler: 'ttypescript',
};

/** @type {import("webpack").Configuration} */
module.exports = {
  mode: "development",
  entry: ["./src/game.vanilla.ts"],
  plugins: [
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({
      title: 'minesweeper',
      template: 'public/index.html',
      cache: false,
    }),
    new ForkTsCheckerWebpackPlugin(),
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, "public"),
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    }
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: "/node_modules/",
        use: [
          {
            loader: "ts-loader",
            options: tsLoaderOptions
          }
        ]
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
    ]
  },
  devtool: 'inline-source-map',
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    historyApiFallback: true,
    host: "127.0.0.1",
    port: 8080,
    open: false
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  }
};
