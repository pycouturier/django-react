const path = require('path');

module.exports = {
  mode: 'development', // "production" | "development" | "none"
  entry: './react_django_scaffold/frontend/src/index.jsx', // string | object | array
  output: {
    path: path.resolve(__dirname, 'react_django_scaffold/frontend/static'), // string
    filename: 'bundle.js', // string
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: [path.resolve(__dirname, 'react_django_scaffold/frontend/src')],
        loader: 'babel-loader',
      }],
  },
};
