const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path')
 //webpack is a module bundler, runs through dependencies from one or more
 // entry points and then bundles everything you need(js,react,css,etc) into 
 //a budles file which is static assets to serve your content
 
module.exports = {
  entry: "/client/index.js",
  //determines which entry point to start dependency graph^
  //output tells webpack where to emit the bundle it created and how to name this fild
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [["@babel/preset-env"], ["@babel/preset-react"]],
            //preset env supports es 2015, and  preset react transforms react jsx into js
          },
        },
      },
      {
        //install sass 
        test: /\.s[ac]ss$/i,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  //need loaders- webpack only understands js and json, so need to convert others
  mode: "development",
  //what is this?
  plugins: [
    new HtmlWebpackPlugin({
        title: 'development',
        template: 'index.html',
    })
  ],
  devServer: {
    static: {
      directory: path.resolve(__dirname, "build"),
      publicPath: "/build",
    },
    port: 8080,
    //redirect to frontend server
  },
  //proxy???
};