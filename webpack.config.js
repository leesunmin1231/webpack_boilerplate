import path from 'path';
import nodeExternals from 'webpack-node-externals';

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
            test: /\.css$/i,
            use: [
                'style-loader',
                'css-loader'
            ],
        },
        { 
            test: /\.ejs$/, 
            use: 'ejs-loader?variable=data' 
        },
    ],
  },
  devtool: 'eval-source-map',
  externals: [nodeExternals()]
};