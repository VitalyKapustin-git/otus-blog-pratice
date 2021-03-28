const path = require('path');
const miniCss = require('mini-css-extract-plugin');

module.exports = {
   entry: './src/index.js',
   output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist')
   },
	module: {
		rules: [{
					test:/\.(s*)css$/,
					use: [
					miniCss.loader,
					'css-loader',
					'sass-loader',
					]
				},
				{
					test: /\.(jpg|png|ttf)$/, 
					use: [
						{
						  loader: 'file-loader',
						},
					],
				}
		],
	},
   plugins: [
      new miniCss({
         filename: 'style.css',
      }),
   ]
};