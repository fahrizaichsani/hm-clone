import AddWishlist from "@/components/add-to-wishlist";
import { convertToRupiah } from "@/helpers/convertRupiah";
import { Product } from "@/types";
import React from "react";

interface DetailProductProps {
  params: {
    id: number;
  };
}

async function getDataById(id: number): Promise<Product> {
  const res = await fetch(`http://localhost:4003/products/${id}`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return await res.json();
}

export default async function DetailProduct({ params }: DetailProductProps) {
  const data = await getDataById(params.id);

  return (
    <>
      <div className="max-w-[1080px] ml-[35px] flex flex-row justify-start items-start mb-[120px]">
        <div className="w-[480px] flex flex-row gap-[4px] mt-[50px]">
          <img src={data.images[0]} alt="item-pic-1" />
          <img src={data.images[1]} alt="item-pic-2" />
          <div className="flex flex-col justify-start items-start pl-[30px] mt-[30px]">
            <div className="font-sans flex flex-col">
              <div className="flex flex-row gap-[20px]">
                <span className="font-semibold">{data.name}</span>
                <AddWishlist />
              </div>
              <span className="text-xl mt-[8px]">{convertToRupiah(data.price)}</span>
              <div className="text-md flex gap-[8px]">
                <span className="mt-[15px]">#{data.tags[0]}</span>
                <span className="mt-[15px]">#{data.tags[1]}</span>
                <span className="mt-[15px]">#{data.tags[2]}</span>
              </div>
            </div>
            <div className="flex flex-row font-sans mt-[12px] gap-[6px]">
              <span>{data.description}</span>
            </div>
            <div className="grid grid-cols-4 grid-flow-row gap-3 mt-[30px]">
              <div className="bg-white border-[1px] border-black h-[42px] w-[88px] flex justify-center items-center  hover:bg-black cursor-pointer group">
                <button
                  type="submit"
                  className="font-sans text-black group-hover:text-white"
                >
                  XS
                </button>
              </div>
              <div className="bg-white border-[1px] border-black h-[42px] w-[88px] flex justify-center items-center hover:bg-black cursor-pointer group">
                <button
                  type="submit"
                  className="font-sans text-black group-hover:text-white"
                >
                  S
                </button>
              </div>
              <div className="bg-white border-[1px] border-black h-[42px] w-[88px] flex justify-center items-center hover:bg-black cursor-pointer group">
                <button
                  type="submit"
                  className="font-sans text-black group-hover:text-white"
                >
                  M
                </button>
              </div>
              <div className="bg-white border-[1px] border-black h-[42px] w-[88px] flex justify-center items-center hover:bg-black cursor-pointer group">
                <button
                  type="submit"
                  className="font-sans text-black group-hover:text-white"
                >
                  L
                </button>
              </div>
              <div className="bg-white border-[1px] border-black h-[42px] w-[88px] flex justify-center items-center hover:bg-black cursor-pointer group">
                <button
                  type="submit"
                  className="font-sans text-black group-hover:text-white"
                >
                  XL
                </button>
              </div>
              <div className="bg-white border-[1px] border-black h-[42px] w-[88px] flex justify-center items-center hover:bg-black cursor-pointer group">
                <button
                  type="submit"
                  className="font-sans text-black group-hover:text-white"
                >
                  XXL
                </button>
              </div>
            </div>
            <div>
              <div className="flex w-[388px] h-[48px] justify-center items-center bg-black mt-[40px] mb-[80px] cursor-pointer">
                <button className="font-sans text-white text-md font-semibold">
                  Masukkan Ke Keranjang
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
