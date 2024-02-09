import React from "react";

export default function Footer() {
  return (
    <>
      <div className="bg-[#e4e4e4]">
        {/* footer content */}
        <div className="font-sans flex flex-col justify-center items-center">
          <div className="flex flex-row gap-[200px] text-sm pt-[60px] pl-[50px] pr-[150px]">
            <div className="flex flex-col gap-2">
              <span className="pb-2 font-semibold">SHOP</span>
              <span>Pria</span>
              <span>Wanita</span>
              <span>Divided</span>
              <span>Baby</span>
              <span>Anak</span>
              <span>Sport</span>
              <span>Sale</span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="pb-2 font-semibold">INFORMASI PERUSAHAAN</span>
              <span>Berkarir disini</span>
              <span>Mengenai kami</span>
              <span>Sustainability</span>
              <span>Pres</span>
              <span>Hubungan Investor</span>
              <span>Tata Kelola Perusahaan</span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="pb-2 font-semibold">BANTUAN</span>
              <span>Customer Service</span>
              <span>My clothing brand</span>
              <span>Lokasi Toko</span>
              <span>Kebijakan Privasi</span>
              <span>Kontak</span>
            </div>
          </div>
          <div className="text-center pt-[100px] pr-[200px] pl-[200px] pb-[30px]">
            <span>
              E-commerce website JualBajuNih is a cutting-edge online
              marketplace that caters to tech enthusiasts and gadget
              aficionados. Offering a diverse range of the latest electronic
              devices, accessories, and innovative tech solutions, the platform
              provides a user-friendly interface for seamless navigation and an
              enhanced shopping experience. With a commitment to quality,
              competitive pricing, and secure transactions, TechTrends Emporium
              ensures that customers can explore and purchase the most
              sought-after tech products conveniently from the comfort of their
              homes. Regular updates on trending gadgets and exclusive deals
              contribute to making this e-commerce destination a go-to hub for
              tech-savvy consumers seeking the newest and most reliable
              innovations in the digital realm.
            </span>
          </div>
          <div className="pb-[60px]">
            <span>Indonesia|Rp</span>
          </div>
        </div>
      </div>
    </>
  );
}
