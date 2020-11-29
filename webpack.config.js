const { ESBuildPlugin } = require('esbuild-loader')
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/main.ts",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          // {
          //   test: /\.tsx?$/,
          //   exclude: /node_modules/,
          //   loader: "babel-loader",
          // },
          // {
          //   loader: "ts-loader",
          //   options: {
          //     transpileOnly: true,
          //   },
          // },
          {
            loader: "esbuild-loader",
            options: {
              loader: 'tsx',
              tsconfigRaw: require('./tsconfig.json')
            }
          }
        ],
      },
    ],
  },
  plugins: [new ESBuildPlugin(), new HtmlWebpackPlugin()],
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
};
