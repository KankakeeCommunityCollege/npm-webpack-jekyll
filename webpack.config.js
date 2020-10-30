const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: './src/js/index.js',
  watch: true,
  output: {
    filename: 'js/[name].js',
    path: path.resolve(__dirname, '_pages/assets'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [
          path.resolve(__dirname, 'node_modules')
        ],
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: require.resolve('jquery'),
        loader: 'expose-loader',
        options: {
          exposes: ['$', 'jQuery', 'jquery']
        }
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  [
                    'postcss-preset-env',
                    {
                      // Options
                    },
                  ],
                ],
              },
            },
          },
          'sass-loader'
        ]
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin({ path: '_pages/assets/' }),
    new MiniCssExtractPlugin({ filename: 'css/styles.css' })
  ]
};
