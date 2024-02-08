import { Product } from "@/types";
import React from "react";
import Link from "next/link";
import AddWishlist from "./add-to-wishlist";

export default function Card({ value }: { value: Product }) {
  return (
    <>
      <div className="flex flex-col w-[300px] pt-[20px] pb-[20px]">
        <Link href={"/product/" + value.id}>
          <img src={value.thumbnail} alt="card" />
        </Link>
        <div className="font-sans flex flex-col">
          <div className="font-sans flex flex-row justify-between">
            <span>{value.name}</span>
            <AddWishlist/>
          </div>
          <span>{value.price}</span>
        </div>
      </div>
    </>
  );
}
