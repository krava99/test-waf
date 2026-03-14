import { LoginRequest, RegisterRequest, User } from "@/types/auth";
import { nextApi } from "./api";

export const registerUser = async (data: RegisterRequest) => {
  const res = await nextApi.post<User>("/auth/register", data);
  return res.data;
};

export const loginUser = async (data: LoginRequest) => {
  const res = await nextApi.post<User>("/auth/login", data);
  return res.data;
};

export const logoutUser = async () => {
  const res = await nextApi.post<{ message: string }>("/auth/logout");
  return res.data;
};
