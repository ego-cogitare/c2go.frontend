const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackCleanupPlugin = require('webpack-cleanup-plugin');
const config = require('./src/config/config.dev');

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
      exclude: config.cleanupPluginExcludes,
    }),
    new HtmlWebpackPlugin({
      title: 'C2Go',
      inject: false,
      template: 'src/staticFiles/index.ejs',
      externalSources: {
        css: [
          {
            href: '/vendors/font-awesome/css/font-awesome.min.css',
          },
          {
            href: '/vendors/swiper/dist/css/swiper.min.css',
          },
          {
            href: '/vendors/rome/dist/rome.min.css',
          },
          {
            href: '/vendors/wickedpicker/dist/wickedpicker.min.css',
          },
          {
            href: '/manifest.json',
            rel: 'manifest'
          },
        ],
        js: [
          'https://maps.googleapis.com/maps/api/js?key=' + config.GOOGLE_APP_ID + '&libraries=places',
          'https://apis.google.com/js/api.js',
          'https://www.gstatic.com/firebasejs/5.4.1/firebase.js',
          '/vendors/jquery/dist/jquery.min.js',
          '/vendors/swiper/dist/js/swiper.min.js',
          '/vendors/rome/dist/rome.min.js',
          '/vendors/wickedpicker/dist/wickedpicker.min.js',
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
