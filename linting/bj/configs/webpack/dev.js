// development config
const merge = require('webpack-merge');
const baseConfig = require('./common');
const { resolve } = require('path');
const prefixer = require('autoprefixer');

const PORT = 3030;

const devConfiguration = () => ({
  mode: 'development',
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        loaders: [
          'style-loader',
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
  entry: [
    resolve(__dirname, `../../src`, 'index.tsx'), // the entry point of our app
  ],
  devServer: {
    hot: true, // enable HMR on the server
    port: PORT,
    https: true,
    open: false,
    quiet: false,
    host: '0.0.0.0',
    public: 'https://localhost:' + PORT,
    stats: 'minimal', // only outputs when errors or new compilation happen.
  },
  devtool: 'eval-source-map',
});

module.exports = env => merge(baseConfig(env), devConfiguration());
