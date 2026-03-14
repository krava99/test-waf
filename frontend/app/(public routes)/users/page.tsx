"use client";

import { getUsers } from "@/lib/user/user";
import { useEffect, useState } from "react";

export default function UsersPage() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await getUsers();
        setUsers(res);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };
    fetchUsers();
  }, []);

  console.log(users);
  return <div>q</div>;
  //   <ul>
  //     {users.map((user: { id: string; name: string; email: string }) => (
  //       <li key={user.id}>
  //         {user.name} - {user.email}
  //       </li>
  //     ))}
  //   </ul>
  // );
}
