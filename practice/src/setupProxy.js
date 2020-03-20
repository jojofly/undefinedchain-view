const proxy = require('http-proxy-middleware');
module.exports = function(app) {
  app.use(
    '/api',
    proxy.createProxyMiddleware({
      target: 'http://localhost:8080/',
      changeOrigin: true,
      pathRewrite: {'^/api': ''}
    })
  );
  app.use(
    '/baidu',
    proxy.createProxyMiddleware({
      target: 'https://news.baidu.com/',
      changeOrigin: true,
      pathRewrite: {'^/api': ''}
    })
  );
};