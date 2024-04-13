import { navigation } from "@/constants";
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

const PageHeader = ({ header, currentPage }) => {
  return (
    <div className="grid w-full grid-cols-1 md:grid-cols-2">
      <h1 className={mergeNames("largeTitle text-center md:text-left")}>
        {header}
      </h1>
      <div className="flex items-center gap-2 pt-10 ml-auto mr-auto md:mr-0 uppercase text-[16px]">
        <a href="/" className="hover_green">
          {navigation[0].title}
        </a>
        <span>/</span>
        <p className="text-gray-2"> {currentPage}</p>
      </div>
    </div>
  );
};

export { LineTitle, SectionTitle, PageHeader };
