var path = require('path');
var webpack = require('webpack');  

var ROOT_PATH = path.resolve(__dirname);
var config = {
    entry: [path.resolve(__dirname, './app/main.js')],
    output: {
        path: path.resolve(__dirname, './build'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            { test: /\.js?$/, loaders: ['babel'], exclude: /node_modules/ },
            { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},
            { test: /\.css$/, loader: "style!css" },
            { test: /\.less$/, loader: "style!css!less" }
        ]
    },
    plugins: [
      new webpack.NoErrorsPlugin()
    ]
};

module.exports = config;