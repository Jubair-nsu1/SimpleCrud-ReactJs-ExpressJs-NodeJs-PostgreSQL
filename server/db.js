const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: "mango123",
  host: "localhost",
  port: 5432,
  database: "crud"
});

module.exports = pool;