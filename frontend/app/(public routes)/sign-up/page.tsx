"use client";

// Додаємо імпорти
import { useState } from "react";
import { useRouter } from "next/navigation";

import { ApiError } from "@/app/api/api";

import { RegisterRequest } from "@/types/auth";
import { registerUser } from "@/lib/api/clientApi";

const SignUp = () => {
  const router = useRouter();
  const [error, setError] = useState("");

  const handleSubmit = async (formData: FormData) => {
    try {
      const formValues: RegisterRequest = {
        type: formData.get("type") as "client" | "business",
        name: formData.get("name") as string,
        email: formData.get("email") as string,
        password: formData.get("password") as string,
        age: Number(formData.get("age")),
        gender: formData.get("gender") as "male" | "female" | "other",
      };
      const res = await registerUser(formValues);
      if (res) {
        router.push("/users");
      } else {
        setError("Invalid email or password");
      }
    } catch (error) {
      setError(
        (error as ApiError).response?.data?.error ??
          (error as ApiError).message ??
          "Oops... some error",
      );
    }
  };

  return (
    <>
      <h1>Sign up</h1>
      <form action={handleSubmit}>
        <label>
          Name
          <input type="text" name="name" required />
        </label>

        <label>
          Email
          <input type="email" name="email" required />
        </label>

        <label>
          Password
          <input type="password" name="password" required />
        </label>

        <label>
          Age
          <input type="number" name="age" required />
        </label>

        <label>
          Gender
          <select name="gender">
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </label>

        <label>
          Type
          <select name="type">
            <option value="client">Client</option>
            <option value="business">Business</option>
          </select>
        </label>

        <button type="submit">Register</button>
      </form>
      {error && <p>{error}</p>}
    </>
  );
};

export default SignUp;
