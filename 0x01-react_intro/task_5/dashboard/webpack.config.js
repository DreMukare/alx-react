const path = require('path');

module.exports = {
	mode: 'development',
	devtools: 'inline-source-map',
	entry: {
		main: path.resolve(__dirname, './src/index.js'),
	},
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist'),
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /\.(gif|svg|png|jpg|jpeg)$/i,
				type: 'asset/resource',
				use: [
					{
						loader: ['file-loader', 'image-webpack-loader'],
						options: {
							bypassOnDebug: true,
							disable: true,
						},
					},
				],
			},
		],
	},
	devServer: {
		static: path.join(__dirname, './public'),
		open: true,
		port: 8564,
	},
	performance: {
		maxAssetSize: 1000000,
	},
};
