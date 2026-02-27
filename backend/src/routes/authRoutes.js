// src/routes/authRoutes.js

import { Router } from 'express';
import {
  loginUser,
  logoutUser,
  refreshUserSession,
  registerUser,
} from '../controllers/authController.js';

import { validateBody } from '../middleware/validateBody.js';
import {
  loginUserSchema,
  registerUserSchema,
} from '../validation/authValidation.js';

const router = Router();

router.post('/auth/register', validateBody(registerUserSchema), registerUser);

router.post('/auth/login', validateBody(loginUserSchema), loginUser);

router.post('/auth/logout', logoutUser);

router.post('/auth/refresh', refreshUserSession);

export default router;
