import * as path from "path";
import * as webpack from "webpack";
import * as HtmlWebpackPlugin from "html-webpack-plugin";
const FixDefaultImportPlugin = require("webpack-fix-default-import-plugin");

const configuration: webpack.Configuration = {
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
        modules: [path.resolve(__dirname, "node_modules")],
        alias: {
            "@src": path.resolve(__dirname, "src/"),
        }
    },
    // devtool: "cheap-module-eval-source-map",
    devtool: "cheap-module-source-map",
    module: {
        rules: [
            {
                exclude: [
                    /node_modules/,
                    /webpack.config/,
                ],
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
        new webpack.NamedModulesPlugin(),
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

export default configuration;
