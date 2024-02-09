import React from "react";

interface DiscountBannerProps {
  url: string;
}

export default function DiscountBanner({ url }: DiscountBannerProps) {
  return (
    <div className="flex justify-center items-center p-[20px]">
      <div className="box-border w-[940px]">
        <img src={url} alt="banner" />
      </div>
    </div>
  );
}
