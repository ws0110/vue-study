const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,

  chainWebpack: (config) => {
    config.plugins.delete("prefetch");
  },

  devServer: {
    proxy: {
      //   "/ROOT" : {
      //     target : 'http://127.0.0.1:8080/',
      //     changeOrigin : true,
      //     logLevel : 'debug'
      //   },
      "/oauth2.0": {
        target: "https://nid.naver.com/",
        changeOrigin: true,
        logLevel: "debug",
      },
      "/v1": {
        target: "https://openapi.naver.com/",
        changeOrigin: true,
        logLevel: "debug",
      },
    },
  },
});
