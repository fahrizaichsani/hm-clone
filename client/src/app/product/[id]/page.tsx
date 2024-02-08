import React from "react";

interface DetailProductProps {
  params: {
    id: number;
  };
}

async function getProductById(id: number) {
  const res = await fetch(`http://localhost:3010/products/${id}`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return await res.json();
}

export default function DetailProduct({ params }: DetailProductProps) {
  return (
    <>
      <div className="max-w-[1080px] ml-[35px] flex flex-row justify-start items-start mb-[120px]">
        <div className="w-[480px] flex flex-row gap-[4px] mt-[50px]">
          <img
            src="https://d29c1z66frfv6c.cloudfront.net/pub/media/catalog/product/large/c1749a5fc2013d6de9dc4c5217cd1a2b7c3f9186_xxl-1.jpg"
            alt="item-pic-1"
          />
          <img
            src="https://d29c1z66frfv6c.cloudfront.net/pub/media/catalog/product/large/6e4391552116bb3cec8216cc89d8cfcfa67f534d_xxl-1.jpg"
            alt="item-pic-2"
          />
          <div className="flex flex-col justify-start items-start pl-[30px] mt-[30px]">
            <div className="font-sans flex flex-col">
              <span className="font-semibold">Loose Fit Sweatshirt</span>
              <span className="text-xl mt-[5px]">Rp 200.000</span>
            </div>
            <span className="mt-[20px] font-semibold font-sans text-xs">
              Blue
            </span>
            <div className="flex flex-row mt-[10px] font-sans gap-[6px]">
              <img
                src="https://d29c1z66frfv6c.cloudfront.net/pub/media/catalog/product/swatch/7baa82d6118ac5a6a642e2bcfb8604bdcb971b9c_xxl-1.jpg"
                alt="shirt-color"
                className="w-[60px] h-[90px]"
              />
              <img
                src="https://d29c1z66frfv6c.cloudfront.net/pub/media/catalog/product/swatch/4b2ee17f173568af296d1771d17026475737204d_xxl-1.jpg"
                alt="shirt-color"
                className="w-[60px] h-[90px]"
              />
              <img
                src="https://d29c1z66frfv6c.cloudfront.net/pub/media/catalog/product/swatch/cc783b01c22bb9a1f73293e2ac74c6d4c2727298_xxl-1.jpg"
                alt="shirt-color"
                className="w-[60px] h-[90px]"
              />
              <img
                src="https://d29c1z66frfv6c.cloudfront.net/pub/media/catalog/product/swatch/d1bd5863dee99eb9febdefe072e40f7d1c8a868e_xxl-1.jpg"
                alt="shirt-color"
                className="w-[60px] h-[90px]"
              />
              <img
                src="https://d29c1z66frfv6c.cloudfront.net/pub/media/catalog/product/swatch/843e3abdc103edc8ed2fe90b7199a957eb76c100_xxl-1.jpg"
                alt="shirt-color"
                className="w-[60px] h-[90px]"
              />
              <img
                src="https://d29c1z66frfv6c.cloudfront.net/pub/media/catalog/product/swatch/2ec58641c8bb49893d432418c2ed595b7e73c8bb_xxl-1.jpg"
                alt="shirt-color"
                className="w-[60px] h-[90px]"
              />
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
                  Masukkan Ke Wishlist
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
