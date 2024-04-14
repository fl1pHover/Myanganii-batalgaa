import LinkMore from "@/components/ui/LinkMore";
import mergeNames from "@/util/mergeNames";
import React from "react";

const PortfolioCard = ({ image, title, description, link }) => {
  return (
    <div className="max-w-[390px] lg:w-full aspect-[3/2] relative group overflow-hidden ">
      <img
        src={`${image}`}
        className="absolute top-0 left-0 z-0 object-cover w-full h-full"
        alt=""
      />
      <div
        className={mergeNames(
          "bg-black/80 absolute top-0 left-0 w-full h-full opacity-0 group-hover:opacity-100 duration-500 border-4 border-transparent group-hover:border-color-2",
          "translate-y-[100%] group-hover:translate-y-0 "
        )}
      >
        <div
          className={mergeNames(
            "flex flex-col justify-between h-full p-5 xl:p-10 opacity-0 duration-400 group-hover:opacity-100 z-1 "
          )}
        >
          <div className={mergeNames("flex flex-col gap-5 xl:gap-10")}>
            <h1 className={mergeNames("smallTitle", "text-white")}>{title}</h1>
            <p className="text-base text-color-3 line-clamp-4">{description}</p>
          </div>
          <LinkMore href={link} title="Read More" green />
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;
