// Тип даних для реєстрації
export interface RegisterRequest {
  type: "client" | "business";
  name: string;
  email: string;
  password: string;
  age: number;
  gender: "male" | "female" | "other";
}

// Тип даних для логіну
export interface LoginRequest {
  email: string;
  password: string;
}

// Тип відповіді користувача від бекенду
export interface User {
  _id: string;
  type: "client" | "business";
  name: string;
  email: string;
  password?: string; // password не обов'язково, бо видаляється у toJSON
  age: number;
  gender: "male" | "female" | "other";
  createdAt: string;
  updatedAt: string;
}
