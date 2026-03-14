import { nextApi } from "./api";

export const checkSession = async () => {
  // Виводимо повну адресу в консоль сервера перед запитом
  console.log(
    "Attempting request to:",
    nextApi.defaults.baseURL + "/auth/session",
  );

  const res = await nextApi.post("/auth/session");
  return res;
};
