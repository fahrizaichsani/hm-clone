import Banner from "@/components/banner";
// import DiscountBanner from "@/components/discountBanner";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import React from "react";

interface BannerProps {
  url: string
  title: string
  content: string
}

interface DiscountBannerProps {
    url: string
}

export default function Page() {
  const bannerOne: BannerProps = {
    url: "https://images.unsplash.com/photo-1538329972958-465d6d2144ed?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Hello...",
    content: "Ex occaecat veniam tempor eiusmod nulla ullamco magna. Quis pariatur aute magna ea incididunt velit commodo mollit excepteur. Aute fugiat anim dolore aliquip voluptate ad deserunt."
  };
  const bannerTwo: BannerProps = {
    url: "https://images.unsplash.com/flagged/photo-1570733117311-d990c3816c47?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "",
    content: "Laborum consequat deserunt ullamco culpa tempor proident aliquip incididunt voluptate amet veniam incididunt."
  };
  const discountBanner: DiscountBannerProps ={
    url: ''
  }
 
  return (
    <>
      <Navbar />
      {/* <DiscountBanner {...discountBanner}/> */}
      <Banner {...bannerOne} />
      <Banner {...bannerTwo} />
      <Footer />
    </>
  );
}