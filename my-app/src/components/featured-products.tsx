import { Product } from "@/types";
import React from "react";
import Link from "next/link";
import { convertToRupiah } from "@/db/helpers/convertRupiah";

export default function FeatureProducts({ value }: { value: Product }) {
  return (
    <>
      <div className="flex flex-col w-[300px] pt-[20px] pb-[20px]">
        <Link href={"/product/" + value._id}>
          <img src={value.thumbnail} alt="card" />
        </Link>
        <div className="font-sans flex flex-col">
          <span>{value.name}</span>
          <span>{convertToRupiah(value.price)}</span>
        </div>
      </div>
    </>
  );
}
