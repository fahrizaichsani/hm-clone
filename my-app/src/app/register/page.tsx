import React from "react";
import Link from "next/link";
import { MyResponse } from "@/types";
import { redirect } from "next/navigation";
import ErrorPopup from "@/components/error-popup";

export default function Register() {
  async function createUser(formData: FormData) {
    "use server";

    const rawFormData = {
      name: formData.get("name"),
      username: formData.get("username"),
      email: formData.get("email"),
      password: formData.get("password"),
    };

    const res = await fetch("http://localhost:3000/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(rawFormData),
      // next: { tags: ["register"] },
    });

    const result = (await res.json()) as MyResponse;

    if (!res.ok) {
      return redirect("/register?error=" + result.error);
    }

    return redirect("/login");
  }

  return (
    <>
      <div className="flex justify-center items-center pt-[50px]">
        <div className="max-w-[769px]">
        <ErrorPopup/>
          <div className="font-sans text-xl font-semibold">
            BERGABUNGLAH DENGAN KAMI
          </div>
          <div className="flex w-[720px] gap-[64px] pt-[10px]">
            <div className="flex flex-col gap-[10px]">
              <span className="text-sm">
                Masukkan keterangan lebih lanjut disini
              </span>
              <span className="text-sm text-left w-[550px]">
                Halo, untuk memberikan pengalaman berbelanja yang lebih aman dan
                menyenangkan, silahkan gunakan alamat email yang valid untuk
                mendaftar. Jika anda memerlukan bantuan, silahkan hubungi kami
                di 1500527 atau melalui alamat email info.id@hindo.co.id.
              </span>
              <form action={createUser}>
                <div className="flex flex-col pt-[20px]">
                  <span className="text-sm font-semibold">Name*</span>
                  <input
                    type="text"
                    className="bg-white border-[1px] border-black w-[328px] h-[48px] outline-black mt-[10px] mb-[30px] p-[8px]"
                    name="name"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-semibold">Username*</span>
                  <input
                    type="text"
                    className="bg-white border-[1px] border-black w-[328px] h-[48px] outline-black mt-[10px] mb-[30px] p-[8px]"
                    name="username"
                  />
                </div>
                <div className="flex flex-col">
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
                <div className="flex flex-row gap-[20px]">
                  <input type="checkbox" />
                  <span className="text-sm text-left w-[350px] pt-[36px]">
                    Saya menyetujui untuk mengizinkan H&M memproses data pribadi
                    saya untuk mengelola akun pribadi saya, sesuai dengan
                    Privacy policy H&M.
                  </span>
                </div>
                <div className="flex flex-row mt-[8px] gap-[20px]">
                  <input type="checkbox" />
                  <span className="text-sm text-left w-[350px] pt-[19px]">
                    Ya, kirim email kepada saya penawaran, pembaruan gaya, dan
                    undangan khusus ke penjualan dan acara.
                  </span>
                </div>
                <div className="flex flex-row">
                  <span className="text-sm text-left w-[350px] ml-[32px] mt-[10px]">
                    <span>
                      Ingin kotak masuk Anda lebih bergaya? Tidak masalah! Cukup
                      berlangganan buletin kami. Cari tahu apa yang sedang
                      hangat dan terjadi di dunia mode dan dekorasi rumah.
                    </span>
                  </span>
                </div>
                <div className="flex flex-row gap-[30px]">
                  <div className="flex w-[226px] h-[38px] justify-center items-center bg-black mt-[40px] mb-[80px]">
                    <button
                      type="submit"
                      className="font-sans text-white text-xs"
                    >
                      BERGABUNGLAH DENGAN KAMI
                    </button>
                  </div>
                  <div className="flex items-center mt-[40px] mb-[80px]">
                    <Link href={"/login"}>
                      <span className="text-sm underline hover:no-underline cursor-pointer">
                        Kembali untuk masuk
                      </span>
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
