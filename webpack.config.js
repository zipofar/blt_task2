const path = require('path');
const webpack = require('webpack');

var isProduction = (process.env.NODE_ENV === 'production');

module.exports = {
    entry: {
      app: ['./src/js/app.js'],
    },
    output: {
      path: path.resolve(__dirname, 'public'),
      filename: 'app.js',
      publicPath: '/public',
    },
    devServer: {
      publicPath: '/public',
      port: 9000
    }
};
