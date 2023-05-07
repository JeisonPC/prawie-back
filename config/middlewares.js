module.exports = [
  'strapi::errors',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'connect-src': ["'self'", 'https:'],
          'img-src': ["'self'", 'data:', 'blob:', 'dl.airtable.com', 'https://res.cloudinary.com'],
          'media-src': ["'self'", 'data:', 'blob:', 'dl.airtable.com', 'https://res.cloudinary.com'],
          upgradeInsecureRequests: null,
        },
      },
      enabled: true,
      headers: '*',
      origin: ['http://localhost:1337', 'https://prawie.com', 'https://prawie-backend.fly.dev']
    },
  },
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];


module.exports = [
  'strapi::errors',
  'strapi::security',
  'strapi::poweredBy',
  {
    name: 'strapi::cors',
    config: {
      enabled: true,
      headers: '*',
      origin: ['http://localhost:1337', 'https://prawie.com']
    }
  },
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
