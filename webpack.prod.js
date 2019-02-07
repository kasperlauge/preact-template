const path = require("path");
const merge = require("webpack-merge");
const common = require("./webpack.common.js");
const WorkboxPlugin = require("workbox-webpack-plugin");

module.exports = merge(common, {
	mode: "production",
	output: {
		filename: "[name].[contenthash].bundle.js",
		path: path.resolve(__dirname, "dist")
	},
	module: {
		rules: [
			{
				test: /\.(svg|woff2?|ttf|eot|jpe?g|png|gif)(\?.*)?$/i,
				loader: "file?name=[path][name]_[hash:base64:5].[ext]",
				include: path.resolve(__dirname, "src/assets")
			}
		]
	},
	plugins: [
		new WorkboxPlugin.GenerateSW({
			clientsClaim: true,
			skipWaiting: true
		})
	]
});
