import React from "react";
import LinkMore from "../../components/ui/LinkMore";
import mergeNames from "@/util/mergeNames";
import { LineTitle, SectionTitle } from "../../components/ui/Title";
import Container from "../../components/ui/Container";
import { bg } from "@/constants";

const AboutHero = () => {
  return (
    <Container className={mergeNames("sectionGrid")}>
      <div className="inline-flex flex-col gap-10">
        <SectionTitle
          section="about us"
          title="We Over 15 Years To Design Thousand Of Successful Dreamst"
        />

        <div className="inline-flex flex-col gap-8 mb-10 lg:mb-0">
          <p className="w-full lg:w-[80%] p">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim.
          </p>
          <LinkMore href="/about" title="Learn More" />
        </div>
      </div>
      <img src={bg} className="aspect-[6/5] object-cover h-full" alt="" />
    </Container>
  );
};

export default AboutHero;
