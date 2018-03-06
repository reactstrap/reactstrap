var path = require('path');
var webpack = require('webpack');

const merge = require('webpack-merge');
const base = require('./webpack.base.config.js');

var ExtractTextPlugin = require('extract-text-webpack-plugin');
var StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

var paths = [
  '/',
  '/components/',
  '/components/alerts/',
  '/404.html'
];

module.exports = merge(base, {
  devtool: 'cheap-eval-source-map',
  devServer: {
    contentBase: ['./build', path.join(__dirname, "/development/")],
    historyApiFallback: true,
    stats: {
      chunks: false
    },
    inline: false
  },
  entry: {
    //need to combine these
    fed: "./docs/lib/app",
    //main: './docs/lib/app'
  },
  //not sure about this line
  node: {
    fs: 'empty'
  },
  //not sure about this
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
    libraryTarget: 'umd'
  },
  plugins: [
    //not sure about this either
    // new ExtractTextPlugin({
    //   disable: true
    // }),
    new ExtractTextPlugin("/assets/style.css"),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new CopyWebpackPlugin([{
      from: './docs/static',
      to: 'assets'
    }]),
    new StaticSiteGeneratorPlugin('fed', paths, {}, {
      window: {}
    }),
  ],
  module: {
    rules: [{
      test: /\.svg$/,
      use: [{
        loader: 'svg-sprite-loader'
      }]
    }]
  }
});