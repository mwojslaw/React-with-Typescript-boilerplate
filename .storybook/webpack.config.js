const autoprefixer = require("autoprefixer")

module.exports = function(storybookConfig) {
  storybookConfig.module.rules = [
    ...storybookConfig.module.rules,
    { test: /\.tsx?$/, loader: 'awesome-typescript-loader' },
    {
      test: /\.css$/,
      use: [
          {
              loader: 'style-loader',
          },
          {
              loader: 'css-loader',
              options:{
                  modules: true,
                  importLoaders: 1,
                  localIdentName: '[name]__[local]___[hash:base64:5]'
              }
          },
          {
              loader: 'postcss-loader',
              options: {
                  plugins: function () {
                      return [autoprefixer]
                  }
              }
          }
      ]
    },
  ];

  storybookConfig.devtool = "cheap-module-source-map";
  storybookConfig.resolve.extensions = [
    ...storybookConfig.resolve.extensions,
    ".ts",
    ".tsx",
  ];

  return storybookConfig
}