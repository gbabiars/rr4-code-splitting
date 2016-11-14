const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = env => {
  return {
    // entry tells webpack where to start looking.
    entry: {
      app: path.join(__dirname, 'src'),
      vendor: ['react', 'react-dom', 'react-router'],
    },

    output: {
      filename: '[name].[hash].js',
      path: path.join(__dirname, 'dist'),
    },

    module: {
      loaders: [
        {
          test: /\.(js)$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          query: {
            cacheDirectory: true,
          },
        },
      ],
    },

    plugins: [
      new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor',
        minChunks: Infinity,
        filename: '[name].[hash].js',
      }),

      new HtmlWebpackPlugin({
        template: path.join(__dirname, 'src/index.html'),
        filename: 'index.html',
        inject: 'body',
      }),
    ],
  };
};
