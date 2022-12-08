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
            loader: 'esbuild-loader',
            options: {
              loader: 'ts',
            },
          },
        ],
      },
    ],
  },
};
