import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export default {
  mode: 'development',
  entry: './src/javascripts/index.js',
  output: {
    path: path.join(path.resolve(), '../dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
        {
            test: /\.s[ac]ss$/i,
            use: ["style-loader", "css-loader", "sass-loader"],
        },
        {
          test: /\.m?js$/,
          exclude: /(node_modules)/,
          use: {
            loader: 'babel-loader',
          }
        },
        {
          test: /\.(png|jpe?g|gif|svg)$/,
          type: "asset/resource",
          generator:{
            filename: '[name].[ext]'
          }
        },
        { test: /\.html$/, use: "html-loader" },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({ template: './index.html' }),
],
  devtool: 'source-map',
};