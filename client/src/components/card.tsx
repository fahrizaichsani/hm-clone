import { Product } from "@/types";
import React from "react";
import Link from "next/link";

export default function Card({ value }: { value: Product }) {
  return (
    <>
      <div className="flex flex-col w-[300px] pt-[20px] pb-[20px]">
        <Link href={"/products/" + value.id}>
        <img src={value.thumbnail} alt="card" />
        <div className="font-sans flex flex-col">
          <span>{value.name}</span>
          <span>{value.price}</span>
        </div>
        </Link>
      </div>
    </>
  );
}
