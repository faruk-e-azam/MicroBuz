"use client";
import { useEffect, useState } from "react";

export function useAuth() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // mock auth
    setUser({ name: "John Doe" });
  }, []);

  return { user };
}
