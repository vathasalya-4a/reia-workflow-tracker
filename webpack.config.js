const path = require('path');

module.exports = {
  entry: './src/index.js', // Entry point for your app
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'), // Output directory
  },
  module: {
    rules: [
      // CSS rule for handling .css files
      {
        test: /\.css$/,
        use: [
          'style-loader',  // Injects CSS into the DOM
          'css-loader',    // Resolves CSS imports
          'postcss-loader', // Processes CSS with PostCSS (and Tailwind)
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.css'], // Ensure you can import JS, JSX, and CSS
  },
};
