"use client";

import { logout } from "@/actions/logout";

export default function LogoutButton() {
  return (
    <>
      <button onClick={() => logout()}>
        <span className="text-red-400">Keluar</span>
      </button>
    </>
  );
}
