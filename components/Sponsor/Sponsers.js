import { bg, sponsors } from "@/constants";
import mergeNames from "@/util/mergeNames";
import React from "react";
import Container from "../ui/Container";

const Sponsers = () => {
  return (
    <div
      className={mergeNames(
        "py-[100px] relative flex flex-col gap-20",
        "banner_container"
      )}
    >
      <img
        src={bg}
        className="absolute top-0 left-0 z-0 object-cover w-full h-full bg-gradient-to-r from-black to-black "
        alt=""
      />
      <div className="absolute top-0 left-0 z-0 w-full h-full bg-black/90"></div>

      <Container className="relative flex flex-col gap-10 px-20 z-1">
        <h1
          className={mergeNames("sectionTitle", "text-color-white text-center")}
        >
          Sponsors
        </h1>
        <div className="flex flex-row flex-wrap justify-around w-full gap-20">
          {sponsors.map((i) => (
            <img
              src={i.image}
              alt=""
              className="object-contain max-w-[120px] aspect-square"
            />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Sponsers;
