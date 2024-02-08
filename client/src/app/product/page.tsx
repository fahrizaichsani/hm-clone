import Card from "@/components/card";
import Sidebar from "@/components/sidebar";
import React from "react";
import { Product } from "@/types";

async function getData(): Promise<Product[]> {
  const res = await fetch("http://localhost:4002/products");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return await res.json();
}

export default async function Product() {
  const data = await getData();

  return (
    <>
      <div className="flex flex-row mt-[30px]">
        <div>
          <Sidebar />
        </div>
        <div className="flex flex-wrap gap-[4px] ml-[80px]">
          {data.map((value) => {
            return <Card value={value}/>;
          })}
        </div>
      </div>
    </>
  );
}
