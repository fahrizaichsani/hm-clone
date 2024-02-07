import React from "react";

export default function WishlistCard() {
  return (
    <>
      <div className="flex flex-col w-[280px] pt-[20px] pb-[20px]">
        <img
          src="https://d29c1z66frfv6c.cloudfront.net/pub/media/catalog/product/medium/ed4efaa6bf08c8312d27ff02ac321861bfc7268b_xxl-1.jpg"
          alt="card"
        />
        <div className="font-sans flex flex-col">
          <span>Slim Fit Linen jacket</span>
          <span>Rp 1.199.000</span>
        </div>
      </div>
    </>
  );
}
