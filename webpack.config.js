const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	entry: [
		'./src/js/main.ts',
		'./src/css/main.scss'
	],
    output: {
        filename: 'js/main.js',
        path: __dirname + '/public'
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
            },
			{
				test: /\.scss$/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: ['css-loader', 'sass-loader']
				})
		    }
        ]
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"]
    },
	plugins: [
		new ExtractTextPlugin('/css/main.css')
  	],
	watch: true
};
