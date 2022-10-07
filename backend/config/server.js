module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  admin: {
    auth: {
      secret: env('JWT_SECRET'),
    },
  },
  app: {
    keys: ['a']
  }
});
 
/*module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: ["http://localhost:1337/"]
  },
});*/
