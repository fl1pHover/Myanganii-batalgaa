"use client";
import { bg_footer, footerData, logo } from "@/constants";
import mergeNames from "@/util/mergeNames";

import React from "react";
import Container from "./Container";

const Footer = () => {
  return (
    <div className="py-[100px] relative flex flex-col gap-20">
      <img
        src={bg_footer}
        className="absolute top-0 left-0 w-full h-full"
        alt=""
      />
      <div className="absolute top-0 left-0 z-0 w-full h-full bg-gradient-to-b from-white to-transparent "></div>
      <div
        className={mergeNames(
          "banner_container",
          "relative grid grid-cols-5 z-1"
        )}
      >
        <img src={logo} alt="" />
        {footerData.map((item) => (
          <div className="flex flex-col text-left px-9">
            <h1 className="smallTitle">{item.title}</h1>
            <ul>
              {item.contacts.map((contact) => (
                <li>{contact.info}</li>
              ))}
            </ul>
          </div>
        ))}
        <div className="flex flex-col text-left px-9">
          <h1 className="smallTitle">Newslater</h1>
          <input type="email" placeholder="Email Address" />
        </div>
      </div>
      <Container className="relative z-1">
        <p>Copyright xstheme | all right reserved</p>
      </Container>
    </div>
  );
};

export default Footer;
