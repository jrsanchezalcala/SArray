  let isDev = process.env.NODE_ENV === "dev";
  module.exports = {
    entry: './index.js',
    watch : isDev,
    mode : isDev ? "development" : "production",
    devtool : isDev ? "eval-source-map" : false,
    output: {
      filename: 'index.js',
      library: {
        type: 'umd',
        name: 'zarray',
      },
      // prevent error: `Uncaught ReferenceError: self is not define`
      globalObject: 'this'
    }
  };
  