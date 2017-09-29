const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const FixDefaultImportPlugin = require("webpack-fix-default-import-plugin");

module.exports = {
    entry: [
        "react-hot-loader/patch",
        "./src/index.tsx",
        "./src/index.html",
    ],
    output: {
        path: __dirname + "/build",
        publicPath: "/",
        filename: "bundle.js",
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx"],
        modules: [path.resolve(__dirname, "src/"), "node_modules"],
        alias: {
            "@src": path.resolve(__dirname, "src/"),
        }
    },
    // devtool: "cheap-module-eval-source-map",
    devtool: "cheap-module-source-map",
    module: {
        loaders: [
            {
                exclude: /node_modules/,
                test: /\.tsx?$/,
                loaders: [
                    "react-hot-loader/webpack",
                    "awesome-typescript-loader",
                ],
            },
            {
                test: /\.html$/,
                loader: "raw-loader"
             }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            cache: true,
        }),
        new webpack.HotModuleReplacementPlugin(),
        new FixDefaultImportPlugin(),
    ],
    devServer: {
        compress: true,
        disableHostCheck: true,
        historyApiFallback: {
            disableDotRule: true,
        },
        hot: true,
        https: false,
        overlay: {
            warnings: false,
            errors: true
        },
        host: "0.0.0.0",
        port: 9000,
        stats: true,
        watchContentBase: false,
    },
};
