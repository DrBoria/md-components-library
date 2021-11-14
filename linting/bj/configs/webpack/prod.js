const merge = require('webpack-merge');
const { resolve } = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const prefixer = require('autoprefixer');
const baseConfig = require('./common');

const prodConfiguration = () => ({
  mode: 'production',
  entry: './index.tsx',
  module: {
    rules: [
      {
        test: /\.scss$/,
        loaders: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '/',
            },
          },
          {
            loader: 'css-loader',
            options: { importLoaders: 1 },
          },
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: [
                prefixer({
                  overrideBrowserslist: ['> 1%', 'last 2 versions'],
                }),
              ],
            },
          },
          'sass-loader',
        ],
      },
    ],
  },
  output: {
    filename: 'static/js/[name].js',
    chunkFilename: `static/js/[name].[chunkhash:8].js?v=###VERSION###`,
    path: resolve(__dirname, '../../dist'),
    publicPath: '../',
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'static/css/bundle.css',
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: '../node_modules/@authenticgaming/ag.ui.core/loaders/',
          to: './loaders',
        },
      ],
    }),
  ],
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
});

module.exports = env => merge(baseConfig(env), prodConfiguration());
