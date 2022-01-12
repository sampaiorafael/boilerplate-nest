module.exports = {
    type: 'postgres',
    host: process.env.DB_HOSTNAME || '0.0.0.0',
    port: Number(process.env.DB_PORT) || 5438,
    username: process.env.DB_USERNAME || 'root',
    password: process.env.DB_PASSWORD || 'development',
    database: process.env.DB_SCHEMA || 'api',
    entities: [`${__dirname}/../**/*.entity.{ts,js}`],
    synchronize: false,
    autoLoadEntities: false,
    migrationsTableName: 'migration',
    migrations: ['src/db/migrations/**/*.ts'],
    subscribers: ['src/db/subscribers/**/*.ts'],
    factories: ['src/db/factories/**/*{.ts,.js}'],
    seeds: ['src/db/seeds/**/*{.ts,.js}'],
    cli: {
      migrationsDir: 'src/db/migrations',
      subscribersDir: 'src/db/subscribers',
    },
    logging: true,
};
  