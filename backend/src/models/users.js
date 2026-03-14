// src/models/student.js
import { model } from 'mongoose';

import { Schema } from 'mongoose';

const userSchema = new Schema(
  {
    type: {
      type: String,
      default: 'client',
      required: true,
      enum: ['client', 'business', 'admin'],
    },

    name: {
      type: String,
      required: true,
      trim: true, // прибирає пробіли на початку та в кінці
    },

    email: {
      type: String,
      unique: true,
      required: true,
      trim: true,
    },

    password: {
      type: String,
      required: true,
      trim: true, // прибирає пробіли на початку та в кінці
    },
    age: {
      type: Number,
      required: true,
    },
    gender: {
      type: String,
      required: true,
      enum: ['male', 'female', 'other'],
    },
  },
  {
    timestamps: true,
  },
);

userSchema.pre('save', function () {
  if (!this.username) {
    this.username = this.email;
  }
});

userSchema.methods.toJSON = function () {
  const obj = this.toObject();
  delete obj.password;
  return obj;
};

export const Users = model('Users', userSchema);
