const pgp = require("pg-promise")();

const cn = {
  port: process.env.PG_PORT,
  host: process.env.PG_HOST,
  database: process.env.PG_DATABASE,
  user: process.env.PG_USER,
};

const db = pgp(cn);

module.exports = db;
