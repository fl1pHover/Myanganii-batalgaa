import { RightArrow } from "@/constants/icons";
import mergeNames from "@/util/mergeNames";
import React from "react";

const LinkMore = ({ ...props }) => {
  return (
    <div className="inline-flex">
      <a
        href={props.href}
        className={mergeNames(
          "uppercase text-[16px] inline-flex items-center gap-2 group hover:text-color-2  hoverEffect",
          props.green ? "text-color-2" : ""
        )}
      >
        {props.title}
        <span className="font-[32px] group-hover:translate-x-2 hoverEffect">
          <RightArrow />
        </span>
      </a>
    </div>
  );
};

export default LinkMore;
