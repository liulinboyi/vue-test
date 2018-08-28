// see http://vuejs-templates.github.io/webpack for documentation.
var path = require('path')
var ip = require('ip').address();

module.exports = {
  build: {
    entry:'./src/main.js',
    env: require('./prod.env'),
    index: path.resolve(__dirname, '../dist/index.html'),
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/vue_ml/',
    productionSourceMap: true,
    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],
    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report
  },
  dev: {
    entry:'./src/main.js',
    env: require('./dev.env'),
    host: ip,
    port: 8888,
    autoOpenBrowser: true,
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    useEslint: true,
    //开发环境支持跨域请求数据（注：与mockjs逻辑发生冲突，此时会优先使用mockData数据；）
    //比如要访问http://www.mininglamp.com/news/get_list
    //在代码里面只需要写'/api/news/get_list';
    // '/api' 等于写 'http://www.mininglamp.com'
    proxyTable: {
        '/api': {
            target:'http://www.mininglamp.com',//表示你跨域请求的接口的域名
            changeOrigin:true,//如果接口跨域，需要进行这个参数配置
            pathRewrite: {"^/api" : ""} //后面可以使重写的新路径，一般不做更改
        }
    },
    // CSS Sourcemaps off by default because relative paths are "buggy"
    // with this option, according to the CSS-Loader README
    // (https://github.com/webpack/css-loader#sourcemaps)
    // In our experience, they generally work as expected,
    // just be aware of this issue when enabling this option.
    cssSourceMap: false,
    useMock: true//true:使用mockjs中的数据，false:使用proxyTable代理
  },
  //生产环境资源配置
  baseUrl:'/travel/umsweb',
  staticUrl:'/travel/umsweb/static/',
  publicPath:'/travel/umsweb/static/'
}
