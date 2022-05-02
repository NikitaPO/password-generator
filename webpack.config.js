const path = require('path');

module.exports = {
  module: {
    rules: [
      {
        test: /\.svg$/,
        loader: 'svg-sprite-loader',
        include: path.join(__dirname, "src/app/components/icons/svg"),
        options: {
          symbolId: "app-icon-[name]"
        }
      }
    ]
  }
}
