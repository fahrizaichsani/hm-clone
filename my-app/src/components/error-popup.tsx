"use client";

import { useSearchParams } from "next/navigation";

export default function ErrorPopup() {
  const searchParams = useSearchParams();
  const errorMessage = searchParams.get("error");
  return (
    <>
      {errorMessage && (
        <p className="animate-pulse rounded bg-red-400 px-4 py-2 text-center text-white mb-7">
          {errorMessage}
        </p>
      )}
    </>
  );
}
