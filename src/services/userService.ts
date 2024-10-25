// src/services/userService.ts
import { isValidEmail, isValidName } from '../helpers/validationHelper';
import { UserRepository } from '../repositories/userRepository';
import { User } from '../models/userModel'; // Supondo que você tenha um modelo User
import { promisify } from 'util';
import crypto from 'crypto';

const pbkdf2 = promisify(crypto.pbkdf2); // Promisify para usar com async/await

export class UserService {
  private userRepository: UserRepository;

  constructor() {
    this.userRepository = new UserRepository();
  }

  async createUser(name: string, email: string, password: string): Promise<User> {
    if (!isValidName(name)) {
      throw new Error('Nome inválido');
    }
    if (!isValidEmail(email)) {
      throw new Error('Email inválido');
    }

    const formattedName = name.charAt(0).toUpperCase() + name.slice(1);

    // Hash da senha usando PBKDF2
    const salt = crypto.randomBytes(16).toString('hex'); // Gera um salt aleatório
    const iterations = 100000; // Número de iterações
    const keyLength = 64; // Tamanho da chave em bytes

    const passwordHash = await pbkdf2(password, salt, iterations, keyLength, 'sha256');

    // Adiciona o usuário ao repositório e retorna o usuário criado
    return await this.userRepository.addUser(formattedName, email, passwordHash.toString('hex'));
  }

  async listUsers(): Promise<User[]> {
    const queryText = 'SELECT * FROM users'; // Ajuste conforme necessário
    try {
      const { rows } = await this.userRepository.pool.query(queryText);
      return rows; // Retorna os usuários encontrados
    } catch (error) {
      console.error('Erro ao listar usuários:', error);
      throw new Error('Erro ao listar usuários'); // Lança um erro se a consulta falhar
    }
  }
}