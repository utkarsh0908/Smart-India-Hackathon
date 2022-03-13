const withPlugins = require('next-compose-plugins');

module.exports = withPlugins([

], {
  async rewrites() {
      return !process.env.NODE_ENV === 'production'
      ? [
          {
            source: '/login',
            destination: `http://localhost:3000/login`,
          },
          {
              source: '/register',
            destination: `http://localhost:3000/`,
          }
        ]
      : [];
   }
});