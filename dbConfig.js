import pkg from "pg";
const { Pool } = pkg;

// PostgreSQL connection configuration
const pool = new Pool({
  host: "autorack.proxy.rlwy.net",
  port: 22108,
  user: "postgres",
  password: "ctcPttlrTJhvSmXOqTAxaikhasFJVzHR",
  database: "railway",
});

// Test database connection
(async () => {
  try {
    await pool.query("SELECT NOW()");
    console.log("Database connected successfully!");
  } catch (error) {
    console.error("Error connecting to the database:", error.message);
  }
})();

export default pool;

//postgres:ctcPttlrTJhvSmXOqTAxaikhasFJVzHR@autorack.proxy.rlwy.net:22108/railway
// postgresql: url: autorack.proxy.rlwy.net;
// port: 22108;
// username: postgres;
// maintenance database: railway
// password: ctcPttlrTJhvSmXOqTAxaikhasFJVzHR;
