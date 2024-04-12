"use client";
import { logo, navigation, phone } from "@/constants";
import React, { useEffect, useState } from "react";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import mergeNames from "@/util/mergeNames";
import { Bookmark, Close, Hamburger } from "@/constants/icons";
import styles from "@/constants/styles";

const Navbar = () => {
  const [openNavigation, setOpenNavigation] = useState(false);
  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      // enablePageScroll();
    } else {
      setOpenNavigation(true);
      // disablePageScroll();
    }
  };

  const handleClick = () => {
    if (!openNavigation) return;

    enablePageScroll();
    setOpenNavigation(false);
  };

  const [showBackground, setShowBackground] = useState(false);

  const handleScroll = () => {
    if (window.scrollY >= 50) {
      setShowBackground(true);
    } else {
      setShowBackground(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <div
        className={mergeNames(
          showBackground ? "bg-white shadow" : "bg-transparent",
          "fixed top-0 left-0 flex items-center z-10 justify-between w-full duration-500 px-5 py-8 lg:px-8 xl:px-20 max-lg:py-4"
        )}
      >
        <a className="w-[3rem] aspect-square bg-red-500" href="/">
          <img src={logo} width={190} height={40} alt="Brainwave" />
        </a>

        <nav className={`flex   absolute left-[50%] -translate-x-[50%]`}>
          <div className="items-center hidden gap-10 lg:flex">
            <h1 className="uppercase">
              Call us:
              <span className="font-bold"> {phone}</span>
            </h1>
            <h1 className="w-[2px] h-full bg-black"></h1>
            <h1 className="uppercase">Call us: (+437) </h1>
          </div>
        </nav>

        <div className="flex items-center gap-4 font-bold">
          <a
            href="#signup"
            className={mergeNames(
              "hoverEffect",
              "flex items-center gap-1 hover:text-color-2 py-2"
            )}
          >
            <h1 className="hidden uppercase lg:block">Booking</h1>
            <Bookmark />
          </a>

          <button
            className={mergeNames(
              "hoverEffect",
              "flex items-center gap-1 hover:text-color-2 py-2"
            )}
            href="#login"
            onClick={toggleNavigation}
          >
            <h1 className="hidden uppercase lg:flex">Menu</h1>
            <Hamburger />
          </button>
        </div>
      </div>

      <div
        className={mergeNames(
          openNavigation
            ? "fixed top-0 left-0 right-0 z-50 h-[100vh] bg-white transition ease-in duration-400"
            : "flex ml-auto"
        )}
      >
        <button
          className={mergeNames(
            "hoverEffect",
            openNavigation ? " flex " : "ml-auto hidden",
            "absolute z-10 ml-auto top-10 right-10 py-5 hover:text-color-2"
          )}
          href="#login"
          onClick={toggleNavigation}
        >
          <Close className="text-[50px]" />
        </button>
        <div
          className={mergeNames(
            openNavigation ? "relative" : "hidden ",
            "flex flex-col items-center h-full justify-center m-auto z-2 gap-4"
          )}
        >
          {navigation.map((item) => (
            <a
              key={item.id}
              href={item.url}
              className={mergeNames(
                "hoverEffect",
                "text-[25px] uppercase font-bold text-color-1 hover:text-color-2 cursor-pointer"
              )}
              onClick={handleClick}
            >
              {item.title}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
