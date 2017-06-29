
const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = {

	entry: {
		'polyfills': './public/polyfills.ts',
    	'vendor': './public/vendor.ts',
    	'app': './public/main.ts'
  	},
	devtool: 'eval-source-map',
	output: {
	path: path.resolve(__dirname, 'dist'),
	publicPath: '/',
	filename: '[name].[hash].js'
	},

	resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
	module: {
	  rules: [
       {
        test: /\.ts$/,
        loaders: [{
          loader: 'awesome-typescript-loader',
          options: { configFileName: path.resolve('tsconfig.json') }
        } , 'angular2-template-loader']
      },
      {
        test: /\.html$/,
        loader: 'html-loader'
      },
      {
      test: /\.(png|jpeg|gif|svg|woff|woff2|ttf|eot|ico)$/,
      loader: 'file-loader?name=assets/[name].[hash].[ext]'
      },
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
	  ],
	},
 
	plugins: [
			new webpack.ContextReplacementPlugin(
				/angular(\|\/)core(\|\/)(esm(\|\/)src|src)(\|\/)linker/,
				path.resolve('./src'), // каталог с исходными файлами
				{} // карта маршрутов
			),

			new webpack.optimize.CommonsChunkPlugin({
				name: ['app', 'vendor', 'polyfills']
			}),

			new HtmlWebpackPlugin({
				template: path.resolve(__dirname, 'public/index.html'),
			}),

			new ExtractTextPlugin({ filename: '[name].[hash].css', disable: false, allChunks: true }),

			new webpack.optimize.UglifyJsPlugin({
		  mangle: {
			keep_fnames: true
		  }
		}),

		new webpack.LoaderOptionsPlugin({
	      htmlLoader: {
	        minimize: false
	      }
	    }),

	    new OpenBrowserPlugin({ url: 'http://localhost:8090' }),

		new webpack.ProvidePlugin({
			"$":"jquery",
			"jQuery":"jquery",
			"window.jQuery":"jquery"
		}),

	],
	

	devServer: {
    contentBase: "./public",
    proxy: {
      "/api": {
        target: "http://localhost:3333/",
        pathRewrite: {
          "^/api": ""
        }
      }
    }
  }

};
