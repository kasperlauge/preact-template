const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = {
	entry: "./src/main.tsx",
	optimization: {
		usedExports: true,
		runtimeChunk: "single",
		splitChunks: {
			cacheGroups: {
				vendor: {
					test: /[\\/]node_modules[\\/]/,
					name: "vendors",
					chunks: "all"
				}
			}
		}
	},
	plugins: [
		new CleanWebpackPlugin(["dist"]),
		new HtmlWebpackPlugin({
			title: "Todo",
			favicon: path.resolve(__dirname, "src/assets/favicon.ico"),
			template: "./src/index.html",
			filename: "./index.html"
		}),
		new webpack.HashedModuleIdsPlugin()
	],
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: "awesome-typescript-loader",
				include: path.resolve(__dirname, "src"),
				exclude: /node_modules/
			},
			{ enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
			{
				test: /\.css$/,
				use: [
					{ loader: "style-loader" },
					{
						loader: "css-loader",
						options: {
							modules: true
						}
					}
				],
				include: path.resolve(__dirname, "src")
			}
		]
	},
	resolve: {
		extensions: [".tsx", ".ts", ".js", "jsx"]
	}
};
