import Link from "next/link";
import React from "react";

export default function LoginButton() {
  return (
    <>
      <Link href={"/login"}>
        <button>
          <span>Masuk</span>
        </button>
      </Link>
    </>
  );
}
