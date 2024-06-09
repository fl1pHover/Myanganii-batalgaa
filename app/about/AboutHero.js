import React from "react";
import LinkMore from "../../components/ui/LinkMore";
import mergeNames from "@/util/mergeNames";
import { LineTitle, SectionTitle } from "../../components/ui/Title";
import Container from "../../components/ui/Container";
import { bg } from "@/constants";
import { Strings } from "@/constants/string";

const AboutHero = ({ more = false }) => {
  return (
    <Container className={mergeNames("sectionGrid")}>
      <div className="inline-flex flex-col gap-10">
        <SectionTitle section={Strings.about} title={Strings.aboutText} />

        <div className="inline-flex flex-col gap-8 mb-10 lg:mb-0">
          <p className="w-full lg:w-[80%] p">{Strings.aboutDescription}</p>
          {more && <LinkMore href="/about" title={Strings.more} />}
        </div>
      </div>
      <img src={bg} className="aspect-[6/5] object-cover h-full" alt="" />
    </Container>
  );
};

export default AboutHero;
