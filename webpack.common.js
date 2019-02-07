const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
var WebpackPwaManifest = require("webpack-pwa-manifest");

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
		new webpack.HashedModuleIdsPlugin(),
		new WebpackPwaManifest({
			name: "todo",
			short_name: "todo",
			start_url: "/",
			display: "standalone",
			orientation: "portrait",
			background_color: "#fff",
			theme_color: "#673ab8",
			icons: [
				{
					src: path.resolve(__dirname, "src/assets/icon.png"),
					type: "image/png",
					sizes: "512x512"
				}
			]
		})
	],
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: "ts-loader",
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
		extensions: [".tsx", ".ts", ".js", "jsx"],
		alias: {
			react: "preact-compat",
			"react-dom": "preact-compat",
			// Not necessary unless you consume a module using `createClass`
			"create-react-class": "preact-compat/lib/create-react-class",
			// Not necessary unless you consume a module requiring `react-dom-factories`
			"react-dom-factories": "preact-compat/lib/react-dom-factories"
		}
	}
};
