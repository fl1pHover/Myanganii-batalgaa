import mergeNames from "@/util/mergeNames";
import React from "react";

const SectionTitle = ({ section, title }) => {
  return (
    <div className="inline-flex flex-col gap-8">
      <LineTitle title={section} />
      <h1 className={mergeNames("sectionTitle")}>{title}</h1>
    </div>
  );
};

const LineTitle = ({ title }) => {
  return (
    <h1
      className={mergeNames(
        "uppercase flex items-center gap-5 tracking-widest font-bold text-gray-3"
      )}
    >
      {title}
      <span className="w-[100px] bg-color-0 h-[2px]"></span>
    </h1>
  );
};

export { LineTitle, SectionTitle };
