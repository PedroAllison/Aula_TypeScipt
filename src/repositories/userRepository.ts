// userRepository.ts
import { Pool } from 'pg'; // Supondo que você esteja usando PostgreSQL
import { User } from '../models/userModel.js'; // Supondo que você tenha um modelo User

export class UserRepository {
  public pool: Pool;

  constructor() {
    this.pool = new Pool({
      // Configurações do banco de dados
    });
  }

  async addUser(name: string, email: string, passwordHash: string): Promise<User> {
    const queryText = 'INSERT INTO users(name, email, password) VALUES($1, $2, $3) RETURNING *';
    const values = [name, email, passwordHash];

    const result = await this.pool.query(queryText, values);

    return result.rows[0]; // Retorna o usuário criado
  }
}