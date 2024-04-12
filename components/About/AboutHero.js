import React from "react";
import LinkMore from "../ui/LinkMore";
import mergeNames from "@/util/mergeNames";
import { LineTitle } from "../ui/Title";
import Container from "../ui/Container";

const AboutHero = () => {
  return (
    <Container
      className={mergeNames("grid grid-cols-1 lg:grid-cols-2 py-14 lg:py-0")}
    >
      <div className="inline-flex flex-col gap-10">
        <div className="inline-flex flex-col gap-8">
          <LineTitle title="about us" />
          <h1 className={mergeNames("sectionTitle")}>
            We Over 15 Years To Design Thousand Of Successful Dreamst
          </h1>
        </div>

        <div className="inline-flex flex-col gap-8 mb-10 lg:mb-0">
          <p className="w-[80%]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim.
          </p>
          <LinkMore href="/about" title="Learn More" />
        </div>
      </div>
      <img
        src="./hero-bg.jpg"
        className="aspect-[6/5] object-cover h-full"
        alt=""
      />
    </Container>
  );
};

export default AboutHero;
