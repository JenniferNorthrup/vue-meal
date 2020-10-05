const VueLoaderPlugin = require('vue-loader/lib/plugin');
const path = require('path');

module.exports = {
  entry: './src/main.js',
  resolve: {
    alias: {
      'vue$': 'vue/app/vue.esm.js'
    }
  },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'app'),
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: {
          loader: 'vue'
        }
      },
      {
        test: /\.less$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'less-loader'
        ]
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: file => (
          /node_modules/.test(file) &&
          !/\.vue\.js/.test(file)
        )
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin()
  ]
};


