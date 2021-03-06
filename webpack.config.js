
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

var customEnrty = {};

let arrEntry = ["style", "dataIn", "index", "drawChart"];
for (let i=0; i<arrEntry.length; i++) {
  customEnrty[arrEntry[i]] = path.resolve(__dirname, './assets/js/'+arrEntry[i]+'.js')
}





module.exports = {
  entry: customEnrty,
  output: {
    path: path.resolve(__dirname, './build'),
    filename: '[name].bunde.js'
  },
  plugins: [
    new MiniCssExtractPlugin({
      linkType: "text/css",
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "index.html"),
      favicon: "./assets/img/f.png",
    })
  ],
  module: {
    rules: [
      {
        test: /\.js?$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ['file-loader']
      },
      {
        test: /\.(sass|scss|css)$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", 'sass-loader'],
      },
      {
        test: /\.(?:ico|gif|svg|png|jpg|jpeg)$/i,
        type: 'asset/resource',
        use: [ 
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'assets/img/',
              publicPath: 'assets/img/'
            }
          }
        ]
      },
    ]
  },
}