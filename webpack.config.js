'use strict';

var webpack = require('webpack'),
  HtmlWebpackPlugin = require('html-webpack-plugin'),
  path = require('path'),
  srcPath = path.join(__dirname, 'src');

module.exports = {
  target: 'web',
  cache: true,
  entry: [
    'webpack-dev-server/client?http://0.0.0.0:8080',
    'webpack/hot/only-dev-server',
    path.join(srcPath, 'simone.js')
  ],
  resolve: {
    root: srcPath,
    extensions: ['', '.js', '.jsx'],
    modulesDirectories: ['node_modules', 'src']
  },
  output: {
    path: __dirname,
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {test: /\.jsx$/, exclude: /node_modules/, loaders: ['react-hot', 'babel-loader']},
      {test: /\.js$/, exclude: /node_modules/, loaders: ['react-hot', 'babel-loader']},
      { test: /\.css$/, loader: "style!css" }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('common', 'common.js'),
    new HtmlWebpackPlugin({
      inject: true,
      template: 'src/index.html'
    }),
    new webpack.NoErrorsPlugin()
  ],
  debug: true,
  devtool: 'eval-cheap-module-source-map',
  devServer: {
    historyApiFallback: true
  }
};
