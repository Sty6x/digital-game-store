const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
      '/api',
      createProxyMiddleware({
        target: 'https://api.skinport.com/v1/items',
        changeOrigin: true,
      })
    );
  };