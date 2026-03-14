"use client";

import { checkSession } from "@/lib/api/serverApi";
import { userAuthStore } from "@/store/userStore";
import { useEffect } from "react";

type Props = {
  children: React.ReactNode;
};

export const AuthProvider = ({ children }: Props) => {
  const setUser = userAuthStore((s) => s.setUser);
  const clearIsAuth = userAuthStore((s) => s.clearIsAuth);

  useEffect(() => {
    const fetchUser = async () => {
      const isAuthorized = await checkSession();

      // if (isAuthorized) {
      //   const user = await getMe();
      //   if (user) setUser(user);
      // } else {
      //   clearIsAuth();
      // }
    };

    fetchUser();
  }, [setUser, clearIsAuth]);

  return children;
};
