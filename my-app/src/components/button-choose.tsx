import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import React from "react";
import LoginButton from "./login-button";
import LogoutButton from "./logout-button";

export default function ButtonChoose() {
  const token = cookies().get("Authorization")?.value;
  if (!token) {
    return <><LoginButton/></>
  }
  if (token) {
    return <><LogoutButton/></>
  }
}
