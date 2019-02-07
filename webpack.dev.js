const path = require("path");
const webpack = require("webpack");
const merge = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
	mode: "development",
	devtool: "source-map",
	devServer: {
		contentBase: "./dist",
		hot: true
	},
	output: {
		filename: "[name].bundle.js",
		path: path.resolve(__dirname, "dist")
	},
	plugins: [new webpack.HotModuleReplacementPlugin()],
	module: {
		rules: [
			{
				test: /\.(svg|woff2?|ttf|eot|jpe?g|png|gif)(\?.*)?$/i,
				loader: "url"
			}
		]
	}
});
