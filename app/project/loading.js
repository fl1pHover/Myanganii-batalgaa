import Container from "@/components/ui/Container";
import React from "react";

export default function Loading() {
  return (
    <div className="grid w-full grid-cols-1 gap-6 mx-auto md:grid-cols-2 lg:grid-cols-3 duration-400">
      {[...Array(3).keys()].map((i) => (
        <div
          key={i}
          className="max-w-[390px] lg:w-full aspect-[3/2] animate-pulse bg-gray-1 relative group overflow-hidden border border-1 border-gray-1"
          style={{ animationDelay: `${i * 0.05}s`, animationDuration: "1s" }}
        ></div>
      ))}
    </div>
  );
}
