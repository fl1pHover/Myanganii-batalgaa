"use client";
import { logo, navigation, phone } from "@/constants";
import React, { useEffect, useState } from "react";
import mergeNames from "@/util/mergeNames";
import { Bookmark, Close, Hamburger } from "@/constants/icons";
import IconBundle from "./IconBundle";

const Navbar = () => {
  const [openNavigation, setOpenNavigation] = useState(false);
  const toggleNavigation = () => {
    setOpenNavigation(!openNavigation);
    // if (openNavigation) {
    //   setOpenNavigation(false);
    //   // enablePageScroll();
    // } else {
    //   setOpenNavigation(true);
    //   // disablePageScroll();
    // }
  };

  const handleClick = () => {
    if (!openNavigation) return;
    // enablePageScroll();
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
    <nav className="relative">
      <div
        className={mergeNames(
          "navbar",
          showBackground ? "bg-white shadow" : "bg-transparent"
        )}
      >
        <a href="/">
          <img src={logo} width={190} height={40} alt="logo" />
        </a>

        <nav className={`items-center hidden gap-5 lg:gap-20 md:flex`}>
          <h1 className="uppercase">
            Утас:
            <span className="font-bold"> {phone}</span>
          </h1>
          <h1 className="w-[2px] h-6 bg-black"></h1>
          <IconBundle />
        </nav>

        <div className="flex items-center gap-4">
          <a
            href="/booking"
            className="flex items-center gap-1 py-2 hoverEffect hover:text-color-2"
          >
            <NavButton
              title="Booking"
              icon={<Bookmark className="text-xl" />}
            />
          </a>

          <button
            className="flex items-center gap-1 py-2 hoverEffect hover:text-color-2"
            onClick={toggleNavigation}
          >
            <NavButton title="Menu" icon={<Hamburger className="text-xl" />} />
          </button>
        </div>
      </div>

      <div className={mergeNames(openNavigation && "navbar_mobile")}>
        <button
          className={mergeNames(
            "hoverEffect",
            openNavigation ? " flex" : "ml-auto hidden duration-400",
            "absolute z-10 ml-auto top-10 right-10 py-5 hover:text-color-2"
          )}
          onClick={toggleNavigation}
        >
          <Close className="text-[50px]" />
        </button>
        <div className={mergeNames(openNavigation ? "navbar_items" : "hidden")}>
          {navigation.map((item) => (
            <a
              key={item.id}
              href={item.url}
              className={mergeNames("navbar_item")}
              onClick={handleClick}
            >
              {item.title}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

const NavButton = (props) => {
  return (
    <>
      <span className="hidden font-bold uppercase lg:flex">{props.title}</span>
      {props.icon}
    </>
  );
};

export default Navbar;
