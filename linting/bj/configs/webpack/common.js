const { CheckerPlugin } = require('awesome-typescript-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { resolve, join } = require('path');
const prefixer = require('autoprefixer');

const { appSrc, appRoot } = require('./paths');

module.exports = env => {
  const platform = env && env.PLATFORM ? env.PLATFORM : '';
  return {
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.jsx', '.css', '.scss'],
      alias: {
        '@': appRoot,
        '@components': resolve(appRoot, './src/components/'),
        '@containers': resolve(appRoot, './src/containers/'),
        '@helpers': resolve(appRoot, './src/helpers/'),
        '@constants': resolve(appRoot, './src/constants/'),
        '@services': resolve(appRoot, './src/services/'),
        '@utils': resolve(appRoot, './src/utils/'),
        '@redux': resolve(appRoot, './src/redux/'),
        '@ducks': resolve(appRoot, './src/redux/ducks/'),
        '@libs': resolve(appRoot, './src/libs/'),
        '@styles': resolve(appRoot, './src/assets/scss/'),
        '@images': resolve(appRoot, './src/assets/images/'),
        '@icons': resolve(appRoot, './src/assets/icons/'),
        '@definitions': resolve(appRoot, './src/definitions/'),
        '@mocks': resolve(appRoot, './src/mocks/'),
        react: resolve(join(appRoot, './node_modules/react')),
        'react-dom': resolve(join(appRoot, './node_modules/react-dom')),
      },
    },
    context: appSrc,
    module: {
      rules: [
        {
          test: /\.js$/,
          use: ['babel-loader', 'source-map-loader'],
          exclude: `${appRoot}/node_modules/`,
          include: appSrc,
        },
        {
          test: /\.(tsx|ts)$/,
          use: ['babel-loader', 'awesome-typescript-loader'],
          exclude: `${appRoot}/node_modules/`,
        },
        {
          test: /\.css?$/,
          loader: [
            platform === 'production' ? MiniCssExtractPlugin.loader : 'style-loader',
            'css-loader',
            {
              loader: 'postcss-loader',
              options: {
                ident: 'postcss',
                plugins: [prefixer()],
              },
            },
          ],
        },
        {
          test: /\.svg$/,
          include: resolve(appSrc, 'assets/icons'),
          use: [
            {
              loader: 'babel-loader',
            },
            {
              loader: 'react-svg-loader',
              options: {
                jsx: true, // true outputs JSX tags
                svgo: {
                  plugins: [
                    {
                      cleanupIDs: false,
                    },
                  ],
                },
              },
            },
          ],
        },
        {
          loader: require.resolve('file-loader'),
          // Exclude `js` files to keep "css" loader working as it injects
          // it's runtime that would otherwise processed through "file" loader.
          // Also exclude `html` and `json` extensions so they get processed
          // by webpacks internal loaders.
          include: [/\.(jpe?g|png|gif|svg)$/],
          exclude: resolve(appSrc, 'assets/icons'),
          options: {
            name: 'static/media/[name].[hash:8].[ext]',
          },
        },
      ],
    },
    plugins: [new CheckerPlugin(), new HtmlWebpackPlugin({ template: 'index.html.ejs' })],
    performance: {
      hints: false,
    },
    optimization: {
      splitChunks: {
        chunks: 'all',
        minChunks: 2,
      },
    },
  };
};
