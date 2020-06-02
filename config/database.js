module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'mysql',
        host: env('DATABASE_HOST', '127.0.0.1'),
        port: env.int('DATABASE_PORT', 3306),
        database: env('DATABASE_NAME', 'melih_longus'),
        username: env('DATABASE_USERNAME', 'melih_longus'),
        password: env('DATABASE_PASSWORD', 'wal7eTBM5l'),
        ssl: env.bool('DATABASE_SSL', false),
      },
      options: {}
    },
  },
});
