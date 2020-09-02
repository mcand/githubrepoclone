module.exports = {
  mode: 'development',
  entry: {
    app: './src/App.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: require.resolve('babel-loader'),
      },
    ],
  },
};
