const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  
  //*开发时（生产环境用nginx）挂代理跨域 地址为要访问的服务器
  //!开启代理服务器 方式一 
  //?缺点：只能访问一台服务器，若本地有跟服务器接口一样的文件,会直接访问本地文件，不会访问网络接口
  /* devServer: {
    proxy:"http://localhost:80"
  } */

  //!开启代理服务器 方式二
  //?用于解决以上问题
  devServer: {
    proxy: {
      "/me": {
        target: "http://localhost:80",
        pathRewrite: { "^/me": "" },
        ws: true,//用于支持websocket
        changeOrigin: true//! 用于控制请求头中  HOST的值 true表示host显示虚假主机名（跟访问的服务器同名）；false 表示 host显示真实主机名
      },
      "/demo": {
        target: "http://localhost:8011",
        pathRewrite: { "^/demo": "" },
        ws: true,
        changeOrigin: true
      }
    }
  }
})
