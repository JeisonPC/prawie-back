//Development
/* module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', '127.0.0.1'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'prawie_db'),
      user: env('DATABASE_USERNAME', 'jeisonpc'),
      password: env('DATABASE_PASSWORD', 'C@shBack96'),
      ssl: env.bool('DATABASE_SSL', false),
    },
  },
}); */

//Production
/* module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST'),
      port: env.int('DATABASE_PORT'),
      database: env('DATABASE_NAME'),
      user: env('DATABASE_USERNAME'),
      password: env('DATABASE_PASSWORD'),
      ssl: env.bool('DATABASE_SSL', false),
    },
  },
});
 */

const parse = require("pg-connection-string").parse;
const config = parse(process.env.DATABASE_URL);
module.exports = () => ({
  connection: {
    client: "postgres",
    connection: {
      host: config.host,
      port: config.port,
      database: config.database,
      user: config.user,
      password: config.password,
      ssl: false,
    },
    debug: false,
  },
});
