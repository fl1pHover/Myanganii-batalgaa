"use client";
import { UpArrow } from "@/constants/icons";
import mergeNames from "@/util/mergeNames";
import React, { useEffect, useState } from "react";

const ScrollTop = () => {
  const isBrowser = () => typeof window !== "undefined"; //The approach recommended by Next.js

  function scrollToTop() {
    if (!isBrowser()) return;
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 10) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <button
      className={mergeNames(
        "fixed bottom-10 right-10 p-4 duration-400 rounded-2xl z-50",
        "bg-color-2 text-white text-2xl ",
        isVisible ? "visible opacity-100" : "invisible opacity-0"
      )}
      onClick={scrollToTop}
    >
      <UpArrow />
    </button>
  );
};

export default ScrollTop;
