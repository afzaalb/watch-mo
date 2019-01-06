const path = require('path');
const webpack = require('webpack');
const dotenv = require('dotenv');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const env = dotenv.config().parsed;
const envKeys = Object.keys(env).reduce((prev, next) => {
  prev[`process.env.${next}`] = JSON.stringify(env[next]);
  return prev;
}, {});

module.exports = {
    entry: './src/app/index.js',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    devServer: {
        port: process.env.NODE_PORT,
        open: true,
        hot: true
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                include: path.resolve(__dirname, 'src'),
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015'],
		            plugins: ['transform-class-properties']
                }
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
			{
		        test: /\.(png|jpg|gif|svg)$/,
		        use: [
					{
					  	loader: 'url-loader',
					  	options: {
					    	limit: 10240,
							name: "[name].[ext]"
					  	}
					},
                    {
					  	loader: 'file-loader',
                        options: {
                            outputPath: 'assets/images/'
                        }
					}
		        ]
	      	},
            {
                test: /\.(eot|woff|ttf|otf)$/,
                loader: "file-loader",
                options: {
                    outputPath: 'assets/fonts/'
                }
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin('dist'),
        new HtmlWebPackPlugin({
            template: './src/index.html'
        }),
        new webpack.DefinePlugin(envKeys)
    ]
};
