import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import React from "react";

export default function PageProtect({
  children,
}: {
  children: React.ReactNode;
}) {
  const token = cookies().get("Authorization")?.value;
  if (!token) {
    redirect("/login");
  }
  return <>{children}</>;
}
