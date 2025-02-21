"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import PageDashboard from "@/app/dashboard/page";
import Login from "@/components/Login";

export default function App() {
  const [isAuth, setIsAuth] = useState<boolean | null>(null);
  const router = useRouter();

  useEffect(() => {
    const auth = localStorage.getItem("auth");
    if (!auth) {
      router.push("/login");
    } else {
      setIsAuth(true);
    }
  }, []);

  if (isAuth === null) {
    return <p>Cargando...</p>; // Evita parpadeos mientras se verifica la sesión
  }

  return <PageDashboard />;
}
