const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
//const bundleAnalyzerPlugin=require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
module.exports = {
  entry: './src/index.js',
  devServer: {
    static: './dist',
    port:9000
  },
  plugins: [
    new HtmlWebpackPlugin({
      // Please change the template path!
      template: './src/index.html',
    }),
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 
        'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
 /*  Plugin:[
    new bundleAnalyzerPlugin()
  ], */
  /* devServer:{
    contentBase: path.join(__dirname,'src'),
    port:9000
  } */
  optimization: {
    runtimeChunk: 'single',
  },
};