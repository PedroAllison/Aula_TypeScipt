import { Request, Response } from 'express';
import { UserService } from '../services/userService';
import { hashPassword } from '../helpers/hashHelper';

const userService = new UserService();

export const getUsers = async (req: Request, res: Response): Promise<Response> => {
  try {
    const users = await userService.listUsers();
    return res.status(200).json(users);
  } catch (err) {
    console.error('Erro ao buscar usuários:', err);
    return res.status(500).json({ error: 'Erro ao buscar usuários' });
  }
};

export const addUser = async (req: Request, res: Response): Promise<Response> => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ error: 'Nome, email e senha são obrigatórios.' });
  }

  try {
    const hashedPassword = hashPassword(password);
    const user = await userService.createUser(name, email, hashedPassword);
    return res.status(201).json(user);
  } catch (err: any) {
    console.error('Erro ao adicionar usuário:', err);
    return res.status(400).json({ error: err.message });
  }
};