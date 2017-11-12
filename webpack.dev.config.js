const path = require('path');
const webpack = require('webpack');

const BUILD_DIR = path.resolve(__dirname,'build/client');
const ENTRY_DIR = ['./src/app.ts'];

const DEV_ENTRY = ENTRY_DIR.concat(['webpack-hot-middleware/client']);

let webpackConfig = {
    entry: {
        app: DEV_ENTRY
    },
    output: {
        path: BUILD_DIR,
        filename: '[name].bundle.js',
        publicPath: '/'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    module:{
        loaders: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader'
            }
        ]
    },
    resolve: {
        extensions: ['.tsx','.ts','.js']
    },
}

module.exports = webpackConfig;