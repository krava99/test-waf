// src/controllers/usersController.js
import createHttpError from 'http-errors';
import { Users } from '../models/users.js';

// Отримати список усіх користувачів
export const getUsers = async (req, res) => {
  const users = await Users.find();
  res.status(200).json(users);
};

// Отримати одного користувача за id
export const getUserById = async (req, res) => {
  const { userId } = req.params;
  const user = await Users.findById(userId);

  if (!user) {
    throw createHttpError(404, 'User not found');
  }

  res.status(200).json(user);
};

export const createUser = async (req, res) => {
  const user = await Users.create(req.body);

  res.status(201).json(user);
};

export const updateUser = async (req, res) => {
  const { userId } = req.params;

  const user = await Users.findOneAndUpdate(
    { _id: userId }, // Шукаємо по id
    req.body,
    { new: true }, // повертаємо оновлений документ
  );

  if (!user) {
    throw createHttpError(404, 'User not found');
  }

  res.status(200).json(user);
};

export const deleteUser = async (req, res) => {
  const { userId } = req.params;
  const user = await Users.findOneAndDelete({
    _id: userId,
  });

  if (!user) {
    throw createHttpError(404, 'User not found');
  }

  res.status(200).json(user);
};
