'use strict';
const path = require('path');
const webpack = require('webpack');

const libraryName = 'Reactstrap';

module.exports = function (env) {
  let outputFile;
  const plugins = [
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(env)
    }),
    new webpack.optimize.OccurenceOrderPlugin()
  ];

  if (env === 'production') {
    plugins.push(new webpack.optimize.UglifyJsPlugin(
      {
        minimize: true,
        compress: {
          warnings: false
        },
        mangle: true
      }
    ));
    outputFile = libraryName.toLowerCase() + '.min.js';
  } else {
    outputFile = libraryName.toLowerCase() + '.js';
  }

  const config = {
    devtool: 'source-map',
    entry: [__dirname + '/src/index.js'],
    output: {
      path: __dirname + '/dist',
      filename: outputFile,
      library: libraryName,
      libraryTarget: 'umd',
      umdNamedDefine: true
    },
    externals: [
      {
        react: {
          root: 'React',
          commonjs2: 'react',
          commonjs: 'react',
          amd: 'react'
        }
      },
      {
        'react-dom': {
          root: 'ReactDOM',
          commonjs2: 'react-dom',
          commonjs: 'react-dom',
          amd: 'react-dom'
        }
      },
      {
        'react-transition-group': {
          commonjs: 'react-transition-group',
          commonjs2: 'react-transition-group',
          amd: 'react-transition-group',
        }
      }
    ],
    module: {
      loaders: [
        {
          test: /\.(json)$/,
          loaders: [
            'json-loader?cacheDirectory'
          ]
        },
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          loaders: [
            'babel-loader?cacheDirectory'
          ]
        },
      ]
    },
    resolve: {
      alias: {
        reactstrap: 'src/index'
      },
      extensions: ['', '.js', '.json'],
      root: [
        path.resolve('./src')
      ]
    },
    plugins: plugins
  };

  return config;
};
