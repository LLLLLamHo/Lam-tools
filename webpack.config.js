const path = require( 'path' );

const config = {
    entry: {
        main: './test/src/index.js'
    },
    output: {
        path: __dirname + '/test/dist',
        filename: '[name].all.js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015'],
                        plugins: ['transform-runtime']
                    }
                }
            }
        ]
    }
};

module.exports = config;