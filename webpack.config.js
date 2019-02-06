const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: "./src/main.tsx",
    devtool: "source-map",
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Todo',
            template: './src/index.html',
            filename: './index.html'
        })
    ],
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'awesome-typescript-loader',
                exclude: /node_modules/,
            },
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
            {
                test: /\.css$/,
                use: [
                  { loader: 'style-loader' },
                  {
                    loader: 'css-loader',
                    options: {
                      modules: true
                    }
                  },
                ]
              }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js', 'jsx']
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
};