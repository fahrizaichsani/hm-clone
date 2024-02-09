"use client"
import Card from "@/components/card";
import Sidebar from "@/components/sidebar";
import React, { useEffect, useState } from "react";
import { Product } from "@/types";



export default function Product() {
  const [product, setProduct] = useState<Product[]>()
  async function getData() {
    const res = await fetch("http://localhost:4003/products");
  
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
  
    const resJson: Product[] = await res.json();
    setProduct(resJson)
  }
  
  useEffect(() => {
    getData()
  }, [])

  return (
    <>
      <div className=" absolute border-b-[1px] border-black right-8 text-sm font-sans">
        <input
          type="text"
          placeholder="Cari produk"
          className="placeholder-black text-md outline-none"
        />
      </div>
      <div className="flex flex-row mt-[30px]">
        <div>
          <Sidebar />
        </div>
        <div className="flex flex-wrap gap-[4px] ml-[80px]">
          {product?.map((value) => {
            return <Card value={value} key={value._id}/>;
          })}
        </div>
      </div>
    </>
  );
}
