import { create } from "zustand";
import { User } from "@/types/auth";
import { persist, createJSONStorage } from "zustand/middleware";

type UserStore = {
  user: User | null;
  isAuth: boolean;
  setUser: (user: User) => void;
  clearIsAuth: () => void;
};

export const userAuthStore = create<UserStore>()(
  persist(
    (set) => ({
      user: null,
      isAuth: false,

      setUser: (user: User) => {
        set({ user, isAuth: true });
      },

      clearIsAuth: () => {
        set({ user: null, isAuth: false });
      },
    }),
    {
      name: "auth-storage",
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({
        isAuth: state.isAuth,
        user: state.user,
      }),
    },
  ),
);
