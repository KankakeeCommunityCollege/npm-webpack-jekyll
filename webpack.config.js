const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: './assets/js/index.js',
  mode: 'development',
  output: {
    filename: 'js/bundle.js',
    path: path.resolve(__dirname, '_pages/assets'),
  },
  module: {
    rules: [
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
