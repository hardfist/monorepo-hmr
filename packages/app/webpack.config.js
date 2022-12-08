/**
 * @type {import('webpack').Configuration}
 */
module.exports = {
  target: 'node',
  mode: 'development',
  entry: {
    main: './src/index.ts',
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: false, // Set to true if you are using fork-ts-checker-webpack-plugin
              projectReferences: true,
            },
          },
        ],
      },
    ],
  },
};
