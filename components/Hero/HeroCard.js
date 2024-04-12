import React from "react";
import LinkMore from "../ui/LinkMore";
import styles from "@/constants/styles";
import mergeNames from "@/util/mergeNames";

const HeroCard = ({ image, title, description }) => {
  return (
    <div className="w-[340px] lg:w-full aspect-[6/5] relative group overflow-hidden ">
      <img
        src={`/${image}`}
        className="absolute top-0 left-0 z-0 object-cover w-full h-full"
        alt=""
      />
      <div
        className={mergeNames(
          "bg-black/80 absolute top-0 left-0 w-full h-full opacity-0 group-hover:opacity-100 duration-500 border-4 border-transparent group-hover:border-color-2"
        )}
      >
        <div
          className={mergeNames(
            "flex flex-col justify-between h-full p-5 xl:p-10 opacity-0 duration-400 group-hover:opacity-100 z-1 ",
            "-translate-y-10 group-hover:translate-y-0 "
          )}
        >
          <div className={mergeNames("flex flex-col gap-5 xl:gap-10")}>
            <h1 className={mergeNames("smallTitle")}>{title}</h1>
            <p className="text-base text-color-3 line-clamp-4">{description}</p>
          </div>
          <LinkMore href="/" title="Read More" green />
        </div>
      </div>
    </div>
  );
};

export default HeroCard;
