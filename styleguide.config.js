const path = require('path');
const isReactProp = require('is-react-prop').default;
const { ProvidePlugin, DefinePlugin } = require("webpack");

const NO_FILTER_PROPS = ['width', 'height', 'margin', 'padding', 'color'];

module.exports = {
  // Fix for fixed element to be in block
  styles: {
    StyleGuide: {
      '@global body': {
        fontFamily: 'Helvetica',
      },
    },
    Playground: {
      preview: {
        position: 'relative',
        transform: 'translate3d(0, 0, 0)',
        outline: '1px solid #661',
      },
    },
  },
  webpackConfig: {
    module: {
      rules: [
        {
          test: /\.(js|ts)x?$/,
          exclude: /node_modules/,
          loader: "babel-loader",
        },
        {
          test: /\.css$/i,
          use: ["style-loader", "css-loader", "postcss-loader"],
        },
        {
          test: /\.(jpg|jpeg|png|gif|mp3)$/,
          use: ["url-loader"],
        },
        {
          test: /\.svg$/i,
          issuer: /\.[jt]sx?$/,
          use: ["@svgr/webpack", "url-loader"],
        },
      ],
    },
    plugins: [
      new ProvidePlugin({
        React: "react", // automatically import react where needed
      }),
      new DefinePlugin({
        process: { env: {} },
      }),
    ],
    resolve: {
      fallback: {
        crypto: false,
      },
      extensions: [".js", "jsx", ".ts", ".tsx", ".json"],
    },
  },
  // Sections that is displayed in styleguidelist
  sections: [
    {
      name: 'Default Components',
      components: 'default/*/*.tsx',
    },
    {
      name: 'Other Components',
      components: 'others/*/*.tsx',
    },
  ],

  // Theme provider
  styleguideComponents: {
    Wrapper: path.join(__dirname, 'src/styles/ThemeProviderWrapper.tsx'),
  },
};
