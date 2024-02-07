import React from "react";
import Link from "next/link";
import imageLogo from "../../../client/public/JualBajuNih-2.png";

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
            <Link href={"/login"}>
              <button>
                <span>Masuk</span>
              </button>
            </Link>
            <span>Indonesia</span>
            <Link href={"/wishlist"}>
            <span>Favorit</span>
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
          <div className="absolute border-b-[1px] border-black right-8 text-sm font-sans">
            <input
              type="text"
              placeholder="Cari produk"
              className="placeholder-black text-md outline-none"
            />
          </div>
        </div>
      </div>
    </>
  );
}
