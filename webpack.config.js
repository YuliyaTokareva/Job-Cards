const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = (env, argv) => {
  const isProduction = argv.mode === 'production';
  let mode = 'development';
  if (process.env.NODE_ENV === 'production') {
    mode = 'production';
  }
  const config = {
    entry: './src/index.jsx',
    output: {
      filename: 'bundle.js'
    },
    module: {
      rules: [
        {
          test: /.(js|jsx?)$/,
          exclude: /node_modules/,
          use: ['babel-loader']
        },
        {
          test: /\.(png|jpe?g|gif|svg|webp|ico)$/i,
          type: mode === 'production' ? 'asset' : 'asset/resource'
        },
        {
          test: /.s?css$/,
          use: [
            isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
            'css-loader',
            'sass-loader'
          ]
        }
      ]
    },

    resolve: {
      extensions: ['.js', '.jsx']
    },
    plugins: [
      new webpack.ProgressPlugin(),
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        template: './src/index.html'
      })
    ],
    devServer: {
      historyApiFallback: true,
      open: true,
      hot: true,
      port: 8090
    }
  };

  if (isProduction) {
    config.plugins.push(new webpack.HotModuleReplacementPlugin());
  }

  if (isProduction) {
    config.plugins.push(
      new MiniCssExtractPlugin({
        filename: '[name].css'
      })
    );
  }

  return config;
};

// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// const webpack = require('webpack');
// const path = require('path');
// module.exports = (env, argv) => {
//   const isProduction = argv.mode === 'production';
//   const config = {
//     entry: './src/index.jsx',
//     output: {
//       filename: 'bundle.js'
//     },

//     module: {
//       rules: [
//         {
//           test: /.(js|jsx?)$/,
//           exclude: /node_modules/,
//           use: ['babel-loader']
//         },
//         {
//           test: /.s?css$/,
//           use: [
//             isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
//             'css-loader',
//             'sass-loader'
//           ]
//         },
//         {
//           test: /\.(svg|png|jpe?g)$/,

//           use: [
//             {
//               loader: 'file-loader',

//               options: {
//                 name: '[name].[ext]',
//                 outputPath: 'img/'
//               }
//             }
//           ]
//         },
//         {
//           // test: /\.html$/,
//           // use: [
//           //   // ...The other file-loader and extract-loader go here.
//           //   {
//           //     loader: 'html-loader'
//           //     // options: {
//           //     //   // THIS will resolve relative URLs to reference from the app/ directory
//           //     //   root: path.resolve(__dirname, 'app')
//           //     // }
//           //   }
//           // ]
//         }
//       ]
//     },
//     resolve: {
//       extensions: ['.js', '.jsx']
//     },
//     plugins: [
//       new webpack.ProgressPlugin(),
//       new CleanWebpackPlugin(),
//       new HtmlWebpackPlugin({
//         template: './src/index.html'
//       })
//     ],
//     devServer: {
//       historyApiFallback: true,
//       open: true,
//       hot: true,
//       port: 8090,
//       historyApiFallback: true
//     }
//   };

//   if (isProduction) {
//     config.plugins.push(new webpack.HotModuleReplacementPlugin());
//   }

//   if (isProduction) {
//     config.plugins.push(
//       new MiniCssExtractPlugin({
//         filename: '[name].css'
//       })
//     );
//   }

//   return config;
// };
