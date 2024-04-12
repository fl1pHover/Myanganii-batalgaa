import { achievements } from "@/constants";
import mergeNames from "@/util/mergeNames";
import React from "react";

const Achievements = () => {
  return (
    <div className={mergeNames("grid grid-cols-3 w-full place-items-center")}>
      {achievements.map((i) => (
        <div key={i.id} className="flex flex-col gap-3 text-center">
          <h1 className="text-color-2 text-[36px] font-semibold">{i.count}</h1>
          <h2 className="text-[18px] font-semibold">{i.title}</h2>
        </div>
      ))}
    </div>
  );
};

export default Achievements;
