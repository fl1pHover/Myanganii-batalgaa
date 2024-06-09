import mergeNames from "@/util/mergeNames";

import React, { Suspense } from "react";
import HeroCard from "./HeroCard";
import LinkMore from "../ui/LinkMore";
import Container from "../ui/Container";
import { bg, project } from "@/constants";
import ScrollTop from "../ui/ScrollTop";

const Hero = () => {
  return (
    <section id="hero" className="py-10 lg:py-0">
      <div className="w-full h-[60vh] xs:h-[80vh] relative">
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
            <div className="max-w-[500px] flex flex-col gap-8 items-center xs:items-start ">
              <h1 className="text-[18px] xs:text-[36px] font-semibold text-center xs:text-left">
                Dream Comes True With Our Talented Architect
              </h1>

              <div className="inline-flex">
                <LinkMore href="/" title="Browse More" />
              </div>
            </div>
          </Container>
        </div>
      </div>
      <Container
        className={mergeNames(
          "px-8 py-8 bg-white grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 justify-between place-items-center",
          "lg:-translate-y-[100px]"
        )}
      >
        <Suspense fallback={<p>loading</p>}>
          {project.map((item, i) => (
            <Suspense fallback={<p>asdasd</p>} key={i}>
              <HeroCard
                key={item.id}
                // href={item.url}
                title={item.title}
                description={item.description}
                image={`/img/${item.image}`}
                green
                front={true}
              />
            </Suspense>
          ))}
        </Suspense>
      </Container>
    </section>
  );
};

export default Hero;
