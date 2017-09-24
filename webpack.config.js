const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const FixDefaultImportPlugin = require("webpack-fix-default-import-plugin");

module.exports = {
    entry: ["./src/index.tsx"],
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
    devtool: "cheap-module-eval-source-map",
    module: {
        loaders: [
            {
                exclude: /node_modules/,
                test: /\.tsx?$/,
                loader: "awesome-typescript-loader",
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            cache: true,
        }),
        new FixDefaultImportPlugin(),
    ],
    devServer: {
        historyApiFallback: true,
    },
};
