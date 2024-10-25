// src/routes/userRoutes.ts
import { Router } from 'express';
import { getUsers, addUser } from '../controllers/userController';

const router = Router();

// Rota para obter todos os usuários
router.post('/getUsers', (req, res) => {
  addUser(req, res);
});

// Rota para adicionar um novo usuário
router.post('/users', (req, res) => {
  addUser(req, res);
});

export default router;