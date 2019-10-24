const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const LiveReloadPlugin = require('webpack-livereload-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
require('dotenv').config();

process.env.NODE_ENV == "development"? null: process.env.NODE_ENV = 'production';

var debug = process.env.NODE_ENV !== 'production';

for (let i =0; i<10; i++) console.log('');
console.log('environment:  ' + process.env.NODE_ENV);
for (let i =0; i<10; i++) console.log('');



module.exports = {
  entry: {
    index: [
      'whatwg-fetch',
      `${__dirname}/src/index.js`,
    ],
  },
  output: {
    filename: '[name]-[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
  },

  optimization: {
    minimizer: !debug
      ? [new TerserPlugin({
        parallel: 4,
        sourceMap: true, // Must be set to true if using source-maps in production
        terserOptions: {
          warnings: false,
          compress: {
            drop_console: true,
          },
        },
      }),
      new OptimizeCSSAssetsPlugin({}),
      ]
      : [],
  },

  mode: process.env.NODE_ENV,

  module: {
    rules: [

      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: {

            },
          },

          {
            loader: 'ejs-html-loader',
            options: {},
          },

        ],
      },

      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader',
          options: {
            babelrc: true,
            presets: [
              '@babel/preset-react',
              '@babel/preset-env',
            ],
          },
        }],
      },


      {
        test: /\.(woff|woff2|eot|ttf|svg)$/,
        // loader: 'url-loader?limit=100000',
        use: [
          {
            loader: 'file-loader', //  ?limit=100000
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/',
              publicPath: '../fonts/',
            },
          },
        ],
      },


      {
        test: /\.s(a|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
            // options: { minimize: true },
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: function () { // postcss plugins, can be exported to postcss.config.js
                return [
                  require('autoprefixer'),
                ];
              },
            },
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
    ],
  },


  devServer: {
    contentBase: 'dist/',
    port: 3000,
    host: '0.0.0.0',
    compress: false,
    // open: true,
    // openPage: 'main.html',
    disableHostCheck: true,
  },

  plugins: [ // Array of plugins to apply to build chunk
    new CleanWebpackPlugin(),

    // new LiveReloadPlugin({}),

    new HtmlWebpackPlugin({
      filename: 'index.html', // Output
      template: './src/index.html',// Input
      async: ['index'],
    }),

    new MiniCssExtractPlugin({
      filename: 'css/[name]-[contenthash].css',
    }),


  ],

};