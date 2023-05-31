const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  publicPath: process.env.NODE_ENV === 'production'
  ? '/music-tag-editor/'
  : '/',
  transpileDependencies: true,
  configureWebpack: {
    resolve: {
      fallback: {
        "stream": require.resolve("stream-browserify")
      }
    },
    devtool: 'source-map'
  }
});
