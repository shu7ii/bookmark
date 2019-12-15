const path = require('path');

/** @type import('webpack').Configuration */
module.exports = {
  mode: 'development',
  entry: {
    main: path.resolve('src', 'ts', 'main.tsx')
  },
  output: {
    filename: '[name].js',
    path: path.resolve('dist'),
    chunkFilename: '_[name].chunk.js'
  },
  module: {
    rules: [{ test: /\.tsx?/, loader: 'ts-loader' }]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  }
};
