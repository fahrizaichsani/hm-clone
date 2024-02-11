import PageProtect from "@/components/page-protect";
import WishlistCard from "@/components/wishlistCard";
import React from "react";

export default function Wishlist() {
  return (
    <>
      <PageProtect>
        <div className="flex justify-center items-center">
          <div className="max-w-[1160px] mx-[121px] mt-[50px]">
            <div className="text-xl font-sans font-semibold flex justify-center items-center">
              <span>FAVORIT</span>
            </div>
            <div className="text-sm font-sans flex justify-end items-end mt-[50px] mr-[10px]">
              <span>2 Barang</span>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-[8px] mb-[80px]">
              <WishlistCard />
              <WishlistCard />
              <WishlistCard />
              <WishlistCard />
              <WishlistCard />
              <WishlistCard />
              <WishlistCard />
              <WishlistCard />
              <WishlistCard />
              <WishlistCard />
              <WishlistCard />
              <WishlistCard />
            </div>
          </div>
        </div>
      </PageProtect>
    </>
  );
}
