const path = require('path');

module.exports = {
  entry: "./src/index.jsx",
  output: {
    path: path.resolve("dist"),
    filename: "bundle.js",
    publicPath: '/'
  },
  module: {
    rules: [
      {
        loader: "babel-loader",
        // Skip any files outside of your project's `src` directory
        include: [
          path.resolve(__dirname, "src"),
        ],

        // Only run `.js` and `.jsx` files through Babel
        test: /\.jsx?$/,
        resolve: { extensions: [".js", ".jsx"] },

        // Options to configure babel with
        query: {
          plugins: ['transform-class-properties', 'transform-object-rest-spread'],
          presets: ['es2015', 'react'],
        },
        exclude: [
          path.resolve(__dirname, "node_modules"),
        ]
      }
    ]
  },
  devServer: {
    historyApiFallback: true,
  }
}
