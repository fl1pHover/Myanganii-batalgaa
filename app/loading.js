import { PageHeader } from "@/components/ui/Title";
import React from "react";

const Loading = () => {
  return (
    <main className="absolute top-0 left-0 flex items-center justify-center w-screen h-screen text-2xl z-100">
      <div className="fade">
        <div class="loader"></div>
      </div>
    </main>
  );
};

export default Loading;
