"use client";
import { navigation, phone } from "@/constants";
import React, { useEffect, useState } from "react";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import mergeNames from "@/util/mergeNames";
import { Bookmark, Hamburger } from "@/constants/icons";
import styles from "@/constants/styles";

const Header = () => {
  const [openNavigation, setOpenNavigation] = useState(false);
  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };

  const handleClick = () => {
    if (!openNavigation) return;

    enablePageScroll();
    setOpenNavigation(false);
  };

  const TOP_OFFSET = 50;
  const [showBackground, setShowBackground] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      console.log(window.scrollY);
      if (window.scrollY >= TOP_OFFSET) {
        setShowBackground(true);
      } else {
        setShowBackground(false);
      }
    };

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
          "fixed top-0 left-0 z-50 flex items-center z-10 justify-between w-full px-5 py-8   lg:px-8 xl:px-20 max-lg:py-4"
        )}
      >
        <a className="w-[3rem] aspect-square bg-red-500" href="#hero">
          {/* <img src={brainwave} width={190} height={40} alt="Brainwave" /> */}
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

        <div className="flex items-center gap-4 ">
          <a
            href="#signup"
            className={mergeNames(
              styles.hoverEffect,
              "flex items-center gap-1 hover:text-color-2 "
            )}
          >
            <span className="hidden uppercase lg:block">Booking</span>
            <Bookmark />
          </a>

          <button
            className={mergeNames(
              "flex items-center gap-1 hover:text-color-2",
              styles.hoverEffect
            )}
            href="#login"
            onClick={toggleNavigation}
          >
            <span className="hidden uppercase lg:flex">Menu</span>
            <Hamburger />
          </button>
        </div>
      </div>

      <div
        className={mergeNames(
          openNavigation
            ? "fixed top-0 left-0 right-0 z-50 h-[100vh] bg-white transition ease-in"
            : "flex ml-auto"
        )}
      >
        <button
          className={
            openNavigation
              ? "absolute z-10 flex ml-auto top-10 right-10"
              : "ml-auto hidden"
          }
          href="#login"
          onClick={toggleNavigation}
        >
          <Hamburger />
        </button>
        <div
          className={mergeNames(
            openNavigation
              ? "relative flex flex-col items-center h-full justify-center m-auto z-2"
              : "invisible transition ease-in"
          )}
        >
          {navigation.map((item) => (
            <a key={item.id} href={item.url} onClick={handleClick}>
              {item.title}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
