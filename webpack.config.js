var path = require("path");
var webpack = require('webpack');


module.exports = {
    context: __dirname,
    entry: [
        "./index.js"
    ],
    output: {
        path: path.resolve(__dirname + "/editor/dist"),
        // este determina donde sirve el dev server el bundle
        publicPath: "/dist/",
        filename: "bundle.js"
    },
    module: {
        loaders: [{
            test: /\.js?$/,
            exclude: /(node_modules)/,
            loader: 'babel', // 'babel-loader' is also a legal name to reference
            query: {
                presets: ['react', 'es2015','react-hmre']
            }
        },
        { 
            test: /\.css$/, 
            loader: "style-loader!css-loader" 
        },
        {
            test: /\.less$/,
            loaders:['style','css','less']
        }]
    },
    plugins: [
      new webpack.DefinePlugin({
          'process.env': {
              'NODE_ENV': '"development"',
              'API_HOSTNAME': '"'+process.env.API_HOSTNAME+'"'
          }
      })
    ],
    devServer: {
        historyApiFallback: true
    }
}