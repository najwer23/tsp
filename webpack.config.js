
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');

let customEnrty = {};

let arrEntry = ["dataIn", "index", "drawChart", "style"];
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
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(?:ico|gif|svg|png|jpg|jpeg)$/i,
        type: 'asset/resource',
      },
    ]
  },
}