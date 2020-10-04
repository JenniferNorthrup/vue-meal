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
};
