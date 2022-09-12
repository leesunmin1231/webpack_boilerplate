import path from 'path';

export default {
  mode: 'development',
  entry: './public/javascripts/index.js',
  output: {
    path: path.join(path.resolve(), 'public/dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
        {
            test: /\.s[ac]ss$/i,
            use: ["style-loader", "css-loader", "sass-loader"],
        },
        { 
            test: /\.ejs$/, 
            use: 'ejs-loader?variable=data' 
        },
        {
          test: /\.m?js$/,
          exclude: /(node_modules)/,
          use: {
            loader: 'babel-loader',
          }
        }
    ],
  },
  devtool: 'source-map',
};