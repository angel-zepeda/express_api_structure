import { Client } from "pg";

export const client = new Client({
  host: "localhost",
  user: "angelzepeda",
  password: "angelzepeda",
  database: "pg_prueba"
});
