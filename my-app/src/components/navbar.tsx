import React from "react";
import Link from "next/link";
import imageLogo from "/public/JualBajuNih-2.png";
import { cookies } from "next/headers";
import LogoutButton from "./logout-button";
import LoginButton from "./login-button";
import ButtonChoose from "./button-choose";

export default function Navbar() {
  return (
    <>
      <div className="bg-white font-sans flex flex-col">
        <div className="flex justify-center items-center flex-row gap-[300px] text-sm ">
          <div className="flex gap-5">
            <span>Customer Service</span>
            <span>Mencari Lokasi Toko</span>
            <span>...</span>
          </div>
          <div className="max-w-[150px]">
            <Link href={"/"}>
              <img src={imageLogo.src} alt="logo" />
            </Link>
          </div>
          <div className="flex gap-5">
            <ButtonChoose />
            <span>Indonesia</span>
            <Link href={"/wishlist"}>
              <span className="text-red-400">Favorit</span>
            </Link>
            <span>Tas Belanja</span>
          </div>
        </div>
        <div className="flex justify-center items-center gap-[30px] text-md p-[10px]">
          <span>Wanita</span>
          <span>Pria</span>
          <span>Divided</span>
          <span>Baby</span>
          <span>Anak</span>
          <span>Sport</span>
        </div>
      </div>
    </>
  );
}
