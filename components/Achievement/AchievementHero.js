import React from "react";
import LinkMore from "../ui/LinkMore";
import mergeNames from "@/util/mergeNames";
import { LineTitle, SectionTitle } from "../ui/Title";
import Container from "../ui/Container";
import Achievements from "./Achievements";

const AchievementHero = () => {
  return (
    <Container className={mergeNames("sectionGrid")}>
      <img
        src="./hero-bg.jpg"
        className="aspect-[6/5] object-cover h-full"
        alt=""
      />
      <div className="inline-flex flex-col p-0 gap-14 lg:p-10">
        <SectionTitle section="FUN FACT" title="Our Achievements" />

        <div className="inline-flex flex-col mb-10 gap-14 lg:mb-0">
          <p className="">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam quis nostrud.
          </p>
          <Achievements />
        </div>
      </div>
    </Container>
  );
};

export default AchievementHero;
