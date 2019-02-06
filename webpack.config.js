const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const ENV = process.env.NODE_ENV || "development";

module.exports = {
	entry: "./src/main.tsx",
	devtool: "source-map",
	plugins: [
		new HtmlWebpackPlugin({
			title: "Todo",
			favicon: path.resolve(__dirname, "src/assets/favicon.ico"),
			template: "./src/index.html",
			filename: "./index.html"
		})
	],
	mode: "development",
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
			},
			{
				test: /\.(svg|woff2?|ttf|eot|jpe?g|png|gif)(\?.*)?$/i,
				loader:
					ENV === "production"
						? "file?name=[path][name]_[hash:base64:5].[ext]"
						: "url"
			}
		]
	},
	resolve: {
		extensions: [".tsx", ".ts", ".js", "jsx"]
	},
	output: {
		filename: "[name].bundle.js",
		path: path.resolve(__dirname, "dist")
	}
};
