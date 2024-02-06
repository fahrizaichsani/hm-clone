import Card from "@/components/card";
import Sidebar from "@/components/sidebar";
import React from "react";

interface Props {
  url: string;
  title: string;
  content: string;
}

export default function Product() {
  const hero: Props = {
    url: "https://images.unsplash.com/photo-1519748771451-a94c596fad67?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "",
    content: "",
  };
  return (
    <>
      <div className="flex flex-row mt-[30px] gap-[50px]">
        <div>
          <Sidebar />
        </div>
        <div className="flex flex-wrap gap-[4px]">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </>
  );
}
