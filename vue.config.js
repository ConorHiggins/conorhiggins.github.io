const CompressionPlugin = require('compression-webpack-plugin');
const BrotliPlugin = require('brotli-webpack-plugin');

let plugins = [];
if (process.env.NODE_ENV === "production") {
  const compressionTest = /\.(js|css|json|txt|html|ico|svg)(\?.*)?$/i;
  plugins = [
    new CompressionPlugin({
      algorithm: 'gzip',
      test: compressionTest,
      threshold: 10240,
      minRatio: 0.7
    }),
    new BrotliPlugin({
      test: compressionTest,
      threshold: 10240,
      minRatio: 0.7
    })
  ];
}

module.exports = {
  publicPath: './',
  configureWebpack: {
    plugins
  },
}