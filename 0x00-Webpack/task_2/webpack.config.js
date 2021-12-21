const path = require('path');

module.exports = {
	mode: 'production',
	entry: {
		main: path.resolve(__dirname, './js/dashboard_main.js'),
	},
	output: {
		path: path.resolve(__dirname, 'public'),
		filename: 'bundle.js',
	},
	performance: {
		maxAssetSize: 1000000,
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
};
