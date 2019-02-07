const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = {
	entry: "./src/main.tsx",
	optimization: {
		usedExports: true,
		splitChunks: {
			chunks: "all"
		}
	},
	plugins: [
		new CleanWebpackPlugin(["dist"]),
		new HtmlWebpackPlugin({
			title: "Todo",
			favicon: path.resolve(__dirname, "src/assets/favicon.ico"),
			template: "./src/index.html",
			filename: "./index.html"
		})
	],
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: "awesome-typescript-loader",
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
				]
			}
		]
	},
	resolve: {
		extensions: [".tsx", ".ts", ".js", "jsx"]
	}
};
