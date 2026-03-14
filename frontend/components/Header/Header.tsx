"use client";

import { userAuthStore } from "@/store/userStore";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ProfileInfo } from "../ProfileInfo/ProfileInfo";
import { logoutUser } from "@/lib/api/clientApi";

export default function Header() {
  const isAuth = userAuthStore((s) => s.isAuth);
  const clearIsAuth = userAuthStore((s) => s.clearIsAuth);

  const router = useRouter();

  const handleLogout = async () => {
    logoutUser();
    clearIsAuth();
    router.push("/sign-in");
  };

  console.log(isAuth);

  return (
    <header>
      <Link href="/" aria-label="Home">
        NoteHub
      </Link>
      <nav aria-label="Main Navigation">
        <ul>
          <li>
            <Link href="/users">Users</Link>
          </li>

          {!isAuth ? (
            <ul>
              <li>
                <Link href="/sign-in">Login</Link>
              </li>
              <li>
                <Link href="/sign-up">Register</Link>
              </li>
            </ul>
          ) : (
            <div>
              <ProfileInfo />
              <button onClick={handleLogout}>Log out</button>
            </div>
          )}

          <li></li>
        </ul>
      </nav>
    </header>
  );
}
