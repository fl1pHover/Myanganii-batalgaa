"use client";
import { bg_footer, footerData, logo } from "@/constants";
import mergeNames from "@/util/mergeNames";

import React from "react";
import Container from "./Container";
import IconBundle from "./IconBundle";

const Footer = () => {
  return (
    <div className="py-20 md:py-[100px] relative flex flex-col gap-20">
      <img
        src={bg_footer}
        className="absolute top-0 left-0 w-full h-full"
        alt=""
      />
      <div className="absolute top-0 left-0 z-0 w-full h-full bg-gradient-to-b from-white to-transparent "></div>
      <div
        className={mergeNames(
          "my-10 md:my-20 mx-10",
          "relative grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 z-1 my-0",
          "gap-10"
        )}
      >
        <img src={logo} alt="" />
        {footerData.map((item) => (
          <div className="flex flex-col px-0 text-left md:px-9">
            <h1 className="mb-4 font-semibold text-[24px]">{item.title}</h1>
            <ul>
              {item.contacts.map((contact) => (
                <li className="my-3">
                  <p className="text-[14px]">{contact.info}</p>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div className="flex flex-col gap-5 px-4 text-left md:px-9">
          <h1 className="font-semibold text-[24px]">Newslater</h1>
          <input type="email" className="input" placeholder="Email Address" />
        </div>
      </div>
      <Container className="relative flex flex-row items-center justify-between z-1">
        <p>Copyright xstheme | all right reserved</p>
        <IconBundle />
      </Container>
    </div>
  );
};

export default Footer;
