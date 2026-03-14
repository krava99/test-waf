import axios, { AxiosError } from "axios";

export type ApiError = AxiosError<{ error: string }>;

export const globalApi = axios.create({
  baseURL: "http://localhost:5000",
  withCredentials: true,
  // headers: { "Content-Type": "application/json" },
});
