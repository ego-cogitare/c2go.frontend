const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackCleanupPlugin = require('webpack-cleanup-plugin');
const config = require('./src/config/config.prod');

module.exports = {
  entry: './src/app.jsx',
  devtool: null,
  output: {
    path: "./public",
    publicPath: "/",
    filename: 'app.[hash].min.js'
  },
  module: {
    loaders: [
      {
        test : /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader : 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0'],
          plugins: [
            'transform-decorators-legacy',
            'transform-class-properties',
            'react-html-attrs'
          ]
        }
      },
      {
        test: /\.(css|scss)$/,
        loader: ExtractTextPlugin.extract('style', 'css')
      },
      {
        test: /\.(svg|png|jpg|jpeg|gif)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "file-loader?name=images/[hash:8].[ext]"
      },
      {
        test: /\.(woff|woff2|ttf|eot|otf)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "file-loader?name=fonts/[name].[ext]"
      }
    ]
  },
  resolve: {
    extensions: ['.js', ''],
    alias: {
      config: path.resolve(__dirname, './src/config/config.prod'),
    }
  },
  plugins: [
    new webpack.ProvidePlugin({ config: 'config' }),
    new WebpackCleanupPlugin({
      exclude: ['vendors/**/*', 'icons/**/*'],
    }),
    new HtmlWebpackPlugin({
      title: 'C2Go',
      inject: false,
      template: 'src/staticFiles/index.ejs',
      externalSources: {
        css: [
          './vendors/font-awesome/css/font-awesome.min.css',
          './vendors/swiper/dist/css/swiper.min.css',
          './vendors/rome/dist/rome.min.css',
        ],
        js: [
          'https://maps.googleapis.com/maps/api/js?key=' + config.GOOGLE_APP_ID + '&libraries=places',
          'https://apis.google.com/js/api.js',
          './vendors/jquery/dist/jquery.min.js',
          './vendors/swiper/dist/js/swiper.min.js',
          './vendors/rome/dist/rome.min.js',
        ]
      },
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true
      }
    }),
    new ExtractTextPlugin("app.[hash].min.css"),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false })
  ]
};
