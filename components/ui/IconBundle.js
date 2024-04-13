import { socials } from "@/constants";
import { FacebookIcon } from "@/constants/icons";
import React from "react";

const IconBundle = () => {
  return (
    <div className="flex flex-row gap-4">
      {socials.map((i) => (
        <a
          key={i}
          href={i.url}
          className="text-xl hoverEffect hover:text-color-2"
          target="_blank"
        >
          {i.icon}
        </a>
      ))}
    </div>
  );
};

export default IconBundle;
