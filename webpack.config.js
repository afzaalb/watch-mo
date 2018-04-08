var path = require('path');

module.exports = {
    entry: path.resolve(__dirname, 'src') + '/app/index.js',
    output: {
        path: path.resolve(__dirname, 'dist') + '/app',
        filename: 'bundle.js',
        publicPath: '/app/'
    },
    module: {
        loaders: [
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
					}
		        ]
	      	}
        ]
    }
};
