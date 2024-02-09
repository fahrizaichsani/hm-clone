import React from "react";


interface BannerProps {
  url: string;
  title: string;
  content: string;
}

export default function Banner({ url, title, content }: BannerProps) {
  return (
    <div className="flex justify-center h-[650px] items-center">
      <div className="box-border h-[640px] w-[940px] overflow-hidden">
        <div className="flex flex-col items-center font-sans text-slate-50">
          <span className="absolute text-3xl font-semibold pt-[440px]">
            {title}
          </span>
          <span className="absolute text-center text-lg pt-[480px] pr-[400px] pl-[400px]">
            {content}
          </span>
        </div>
        <img src={url} alt="banner" />
      </div>
    </div>
  );
}
