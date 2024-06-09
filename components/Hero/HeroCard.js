import React from "react";
import LinkMore from "../ui/LinkMore";

import mergeNames from "@/util/mergeNames";

const HeroCard = ({ image, title, description, front = false }) => {
  return (
    <div className="w-[340px] lg:w-full aspect-5/3 xl:aspect-square relative group overflow-hidden ">
      <img
        src={front ? image : `/api/upload/${image}`}
        className="absolute top-0 left-0 z-0 grid object-cover w-full h-full place-items-center bg-gray-1 text-gray-2"
        alt="Зураггүй байна"
      />
      <div
        className={mergeNames(
          "bg-black/80 absolute top-0 left-0 w-full h-full opacity-0 group-hover:opacity-100 duration-500 border-4 border-transparent group-hover:border-color-2"
        )}
      >
        <div
          className={mergeNames(
            "flex flex-col justify-between h-full p-5  opacity-0 duration-400 group-hover:opacity-100 z-1 ",
            "-translate-y-10 group-hover:translate-y-0 "
          )}
        >
          <div className={mergeNames("flex flex-col gap-4  md:gap-3")}>
            <h1
              className={mergeNames(
                "text-[20px] lg:text-[24px] xl:text-[20px] font-semibold",
                "text-white"
              )}
            >
              {title}
            </h1>
            <p className="text-[13px] lg:text-[14px] text-gray-1 ">
              {description}
            </p>
          </div>
          {/* <LinkMore href="/" title="Read More" green /> */}
        </div>
      </div>
    </div>
  );
};

export default HeroCard;
