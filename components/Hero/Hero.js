import styles from "@/constants/styles";
import mergeNames from "@/util/mergeNames";

import React from "react";
import HeroCard from "./HeroCard";
import LinkMore from "../ui/LinkMore";
import Container from "../ui/Container";
import { bg, project } from "@/constants";
import ScrollTop from "../ui/ScrollTop";

const Hero = () => {
  return (
    <div>
      <div className="w-full h-[80vh] relative">
        <div className="w-full h-full">
          <img
            src={bg}
            className="absolute top-0 left-0 z-0 object-cover w-full h-full"
            alt=""
          />
          <div className="absolute top-0 left-0 z-0 w-full h-full bg-gradient-to-t from-white to-transparent "></div>
          <Container
            className={mergeNames(
              "relative h-full flex flex-col justify-center"
            )}
          >
            <div className="max-w-[500px] flex flex-col gap-8 text-center xs:text-left">
              <h1 className="text-[18px] xs:text-[36px] font-medium">
                Dream Comes True With Our Talented Architect
              </h1>

              <LinkMore href="/" title="Browse More" />
            </div>
          </Container>
        </div>
      </div>
      <Container
        className={mergeNames(
          "px-8 py-8 bg-white grid grid-cols-1 lg:grid-cols-3 gap-8 justify-between place-items-center",
          "lg:-translate-y-[100px]"
        )}
      >
        {project.slice(0, 3).map((item) => (
          <HeroCard
            key={item.id}
            href={item.url}
            title={item.title}
            description={item.description}
            image={item.image}
            green
          />
        ))}
      </Container>
    </div>
  );
};

export default Hero;
