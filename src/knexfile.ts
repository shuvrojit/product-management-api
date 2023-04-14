import {Knex} from 'knex';

const config: Knex.Config = {
  client: 'mysql2',
  connection: {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'lalaland',
    database: 'products',
  },
};

export default config;

