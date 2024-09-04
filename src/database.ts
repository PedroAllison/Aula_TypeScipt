import { Pool } from 'pg';

// Substitua pela sua string de conexão do Render.com
const connectionString = 'postgresql://poquera_user:WBXfo7IaDA9sv99mgHZiOodtb0bIRUBp@dpg-crcbvmlumphs73dk1i90-a.oregon-postgres.render.com/poquera';

const pool = new Pool({
  connectionString,
  ssl: {
    rejectUnauthorized: false, // Permite conexões SSL não autorizadas
  }
});

export default pool;