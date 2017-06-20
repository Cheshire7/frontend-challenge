
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	entry: {
		bundle: './public/app.ts'
	},
	output: {
	filename: '[name].js',
	path: path.resolve(__dirname, 'dist'),
	library: '[name]'
	},
	resolve: {
    extensions: ['.ts', '.tsx', '.js'] 
  },
	module: {
	  rules: [
	    
	    {
	        test: /\.scss$/,
	        exclude: /node_modules/,
	        use: ExtractTextPlugin.extract({
	          fallback: 'style-loader',
	          use: [
	            'css-loader',
	            {
	              loader: 'sass-loader',
	              query: {
	                sourceMap: false,
	              },
	            },
	          ],
	        }),
       },
       { 
       	 	test: /\.ts?$/,
        	loader: 'ts-loader' 
       }
	  ],
	},
 
	plugins: [
	new HtmlWebpackPlugin({
	  template: path.resolve(__dirname, 'public/index.html'),
	}),
	new ExtractTextPlugin({ filename: 'style.css', disable: false, allChunks: true }),
	],

	devServer: {
	host: '0.0.0.0',
	port: 3333,
	},

};


