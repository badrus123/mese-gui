const path = require('path')

module.exports = {
  chainWebpack: config => {
      config.plugin('copy')
            .tap(args => {
              args[0].push({
                from: path.resolve(__dirname, 'src/img'),
                to: path.resolve(__dirname, 'dist/images'),
                toType: 'dir'
              })
              return args
            })
  },
  css: {
    loaderOptions: {
      sass: {
          prependData: `@import "@/sass/app.scss";`
      }
    }
  }
};

if (process.env.NODE_ENV == "development") {
  module.exports = Object.assign({
    devServer: {
      proxy: 'http://localhost:8080',
    }
  }, module.exports)
}
