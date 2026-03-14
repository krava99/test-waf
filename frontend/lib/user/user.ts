import { nextApi } from "../api/api";

export const getUsers = async () => {
  const res = await nextApi.get("/users");
  return res.data;
};
