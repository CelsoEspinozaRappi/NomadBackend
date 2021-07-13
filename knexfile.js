'use strict';

require('dotenv').config();

const config = {

  development: {
    client: 'mysql',
    connection: {
      host : process.env.DB_HOST_DEV,
      user : process.env.DB_USER_DEV,
      password : process.env.DB_PASS_DEV,
      database : process.env.DB_NAME_DEV,
      port: process.env.DB_PORT_DEV,
    },
    migrations: {
      directory: __dirname + '/knex/migrations',
      tableName: "knex_migrations"
    },
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'mysql',
    connection: {
      host : process.env.DB_HOST_PROD,
      user : process.env.DB_USER_PROD,
      password : process.env.DB_PASS_PROD,
      database : process.env.DB_NAME_PROD,
      port: process.env.DB_PORT_PROD,
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};

module.exports = config[process.env.NODE_ENV];
