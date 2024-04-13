import mergeNames from "@/util/mergeNames";
import React from "react";

const Container = ({ children, className }) => {
  return (
    <div
      className={mergeNames(
        "w-lg px-4 w-full md:w-[750px] lg:w-[940px] xl:w-[1170px] mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Container;
