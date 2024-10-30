import { Pool } from "pg";


const connectionString =
  "postgresql://livraria:9yC4ubTi27eXrPHViIpQQXQ6eUR3ejGK@dpg-csf825pu0jms73fe71q0-a.oregon-postgres.render.com/livraria_m24a";

const pool = new Pool({
  connectionString,
  ssl: {
    rejectUnauthorized: false, 
  },
});

export default pool;