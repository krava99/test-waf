// src/routes/studentsRoutes.js

import { Router } from 'express';
import {
  getUsers,
  getUserById,
  createUser,
  deleteUser,
  updateUser,
} from '../controllers/usersController.js';
import { createUserSchema } from '../validation/users.schema.js';
import { validateBody } from '../middleware/validateBody.js';
import { updateUserSchema } from '../validation/users.schema.js';
import { authenticate } from '../middleware/authenticate.js';

const router = Router();

router.use('/users', authenticate);

router.get('/users', getUsers);
router.get('/users/:userId', getUserById);
router.post('/users', validateBody(createUserSchema), createUser);
router.delete('/users/:userId', deleteUser);
router.patch('/users/:userId', validateBody(updateUserSchema), updateUser);

export default router;
