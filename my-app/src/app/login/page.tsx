import Link from "next/link";
import React from "react";

export default function Login() {
  return (
    <>
      <div className="flex justify-center items-center pt-[50px]">
        <div className="max-w-[769px]">
          <div className="font-sans text-xl font-semibold">MASUK</div>
          <div className="flex w-[720px] gap-[64px] pt-[10px]">
            <div className="flex flex-col gap-[10px]">
              <span className="font-semibold text-xl">PELANGGAN LAMA</span>
              <span className="text-sm">
                Selamat datang kembali! Masuk ke akun Anda untuk melakukan
                Pembayaran yang lebih cepat
              </span>
              <form>
                <div className="flex flex-col pt-[20px]">
                  <span className="text-sm font-semibold">Email*</span>
                  <input
                    type="text"
                    className="bg-white border-[1px] border-black w-[328px] h-[48px] outline-black mt-[10px] mb-[30px] p-[8px]"
                    name="email"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-semibold">Kata Sandi*</span>
                  <input
                    type="password"
                    className="bg-white border-[1px] border-black w-[328px] h-[48px] outline-black mt-[10px] p-[8px]"
                    name="password"
                  />
                </div>
                <div className="flex flex-row gap-[30px]">
                  <div className="flex w-[107px] h-[48px] justify-center items-center bg-black mt-[40px] mb-[80px]">
                    <button type="submit" className="font-sans text-white">
                      MASUK
                    </button>
                  </div>
                  <div className="flex items-center mt-[40px] mb-[80px] text-sm">
                    <span>Lupa kata sandi anda?</span>
                  </div>
                </div>
              </form>
            </div>
            <div className="flex flex-col gap-[10px]">
              <span className="font-semibold text-xl">PELANGGAN BARU</span>
              <span className="text-sm">
                Buat akun untuk berbelanja lebih lancar dan mudah!
              </span>
              <div className="bg-white w-[328px] h-[50px] mt-[20px] border-[1.5px] border-black flex justify-center items-center">
                <Link href={"/register"}>
                  <button className="font-sans font-semibold">
                    BERGABUNGLAH DENGAN KAMI
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
