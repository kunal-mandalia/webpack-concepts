module.exports = {
	entry: './src/index.js',
	output: {
		filename: 'bundle.js',
		path: __dirname,
		publicPath: __dirname
	},
	module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              modules: true
            }
          }
        ]
      }
    ]
  }
}
