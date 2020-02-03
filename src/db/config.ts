import { Pool } from "pg";

export const pool = new Pool({
  host: "localhost",
  user: "angelzepeda",
  password: "angelzepeda",
  database: "pg_prueba"
});
