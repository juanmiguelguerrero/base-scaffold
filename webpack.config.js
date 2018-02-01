const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	entry: [
		'./src/js/main.ts',
		'bootstrap',
		'./src/css/main.scss'
	],
    output: {
        filename: 'js/main.js',
		path: path.resolve(__dirname, 'public')
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
            },
			{
				test: /\.s?css$/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: ['css-loader', 'sass-loader']
				})
		    }
        ]
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js", ".css", ".scss"]
    },
	plugins: [
		new ExtractTextPlugin('./css/main.css')
  	]
};
