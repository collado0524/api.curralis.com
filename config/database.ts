export default ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', '127.0.0.1'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'curralis'),
      user: env('DATABASE_USERNAME', 'curralis'),
      password: env('DATABASE_PASSWORD', 'C3nt1n3l4.'),
      ssl: env.bool('DATABASE_SSL', false),
    },
  },
});
