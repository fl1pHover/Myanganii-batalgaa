import React from "react";
import LinkMore from "../ui/LinkMore";
import mergeNames from "@/util/mergeNames";
import { LineTitle, SectionTitle } from "../ui/Title";
import Container from "../ui/Container";
import Achievements from "./Achievements";
import { bg } from "@/constants";
import { Strings } from "@/constants/string";

const AchievementHero = () => {
  return (
    <Container className={mergeNames("sectionGrid")}>
      <img src={bg} className="aspect-[6/5] object-cover h-full" alt="" />
      <div className="inline-flex flex-col p-0 gap-14 lg:p-10">
        <SectionTitle section={Strings.facts} title={Strings.achievement} />

        <div className="inline-flex flex-col mb-10 gap-14 lg:mb-0">
          <p className="p">
            {Strings.achievementText}
          </p>
          <Achievements />
        </div>
      </div>
    </Container>
  );
};

export default AchievementHero;
