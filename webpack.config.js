const path = require('path');
const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');

module.exports = {
  module: {
    rules: [
      {
        test: /\.svg$/,
        loader: 'svg-sprite-loader',
        include: path.join(__dirname, "src/app/components/icons/svg"),
        options: {
          symbolId: "app-icon-[name]",
        }
      }
    ]
  },
  plugins: [
    new SpriteLoaderPlugin({
      plainSprite: true,
    })
  ]
}
