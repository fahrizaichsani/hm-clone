import React from "react";
import Link from "next/link";
import DiscountBanner from "@/components/discountBanner";
import Banner from "@/components/banner";
import FeatureProducts from "@/components/featured-products";
import { Product } from "@/types";

async function getData(): Promise<Product[]> {
  const res = await fetch(process.env.NEXT_PUBLIC_BASE_URL + "/api/product");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const resJson = await res.json();

  return resJson.data;
}

interface BannerProps {
  url: string;
  title: string;
  content: string;
}

interface DiscountBannerProps {
  url: string;
}

export default async function Home() {
  const data = await getData();
  const sliceData = data.slice(0, 10);

  const bannerOne: BannerProps = {
    url: "https://images.unsplash.com/photo-1538329972958-465d6d2144ed?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Hello...",
    content:
      "Ex occaecat veniam tempor eiusmod nulla ullamco magna. Quis pariatur aute magna ea incididunt velit commodo mollit excepteur. Aute fugiat anim dolore aliquip voluptate ad deserunt.",
  };
  const bannerTwo: BannerProps = {
    url: "https://images.unsplash.com/flagged/photo-1570733117311-d990c3816c47?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "",
    content:
      "Laborum consequat deserunt ullamco culpa tempor proident aliquip incididunt voluptate amet veniam incididunt.",
  };
  const discountBanner: DiscountBannerProps = {
    url: "https://d29c1z66frfv6c.cloudfront.net/pub/media/banner/24/01/W05-Special-25-50-Off-Bhs.jpg",
  };

  return (
    <>
      <DiscountBanner {...discountBanner} />
      <Banner {...bannerOne} />
      <Banner {...bannerTwo} />
      <div className="flex flex-wrap justify-center items-center gap-[8px] pl-[260px] pr-[260px]">
        {sliceData.map((value) => {
          return <FeatureProducts value={value} key={value._id.toString()} />;
        })}
      </div>
      <div>
        <Link
          href={"/product"}
          className="flex justify-center items-center pb-[30px]"
        >
          <button className="font-sans text-red-400">See all</button>
        </Link>
      </div>
    </>
  );
}
