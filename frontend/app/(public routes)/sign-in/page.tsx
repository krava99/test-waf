// app/(public routes)/sign-in/page.tsx

"use client";

// Додаємо імпорти
import { useState } from "react";
import { useRouter } from "next/navigation";

import { LoginRequest } from "@/types/auth";
import { userAuthStore } from "@/store/userStore";
import { loginUser } from "@/lib/api/clientApi";

const SignIn = () => {
  const setUser = userAuthStore((s) => s.setUser);
  const router = useRouter();
  const [error, setError] = useState("");

  const handleSubmit = async (formData: FormData) => {
    try {
      const formValues: LoginRequest = {
        email: formData.get("email") as string,
        password: formData.get("password") as string,
      };
      const res = await loginUser(formValues);
      if (res) {
        setUser(res);
        router.push("/");
      } else {
        setError("Invalid email or password");
      }
    } catch {
      setError("Invalid email or password");
    }
  };
  return (
    <form action={handleSubmit}>
      <h1>Sign in</h1>
      <label>
        Email <input type="email" name="email" required />
      </label>

      <label>
        Password
        <input type="password" name="password" required />
      </label>
      <button type="submit">Log in</button>
      {error && <p>{error}</p>}
    </form>
  );
};

export default SignIn;
