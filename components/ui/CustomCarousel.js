"use client";

import "@mantine/carousel/styles.css";
import { Carousel } from "@mantine/carousel";
import { projects } from "@/constants";
import mergeNames from "@/util/mergeNames";
import LinkMore from "./LinkMore";
const CustomCarousel = ({ data }) => {
  return (
    <Carousel
      withIndicators
      height={400}
      slideSize="25%"
      slideGap="xl"
      loop
      align="center"
      slidesToScroll={1}
    >
      {data.map((i) => (
        <Carousel.Slide key={i.id}>
          <div className="relative h-full overflow-hidden group ">
            <img
              src={`/${i.image}`}
              className="absolute top-0 left-0 z-0 object-cover w-full h-full"
              alt=""
            />
            <div
              className={mergeNames(
                "bg-black/80 absolute top-0 left-0 w-full h-full opacity-0 group-hover:opacity-100 duration-500 border-4 border-transparent group-hover:border-color-2"
              )}
            >
              <div
                className={mergeNames(
                  "flex flex-col justify-between h-full p-5 xl:p-10 opacity-0 duration-400 group-hover:opacity-100 z-1 ",
                  "-translate-y-10 group-hover:translate-y-0 "
                )}
              >
                <div className={mergeNames("flex flex-col gap-5 xl:gap-10")}>
                  <h1 className={mergeNames("smallTitle")}>{i.title}</h1>
                </div>
                <LinkMore href="/" title="Read More" green />
              </div>
            </div>
          </div>
        </Carousel.Slide>
      ))}
    </Carousel>
  );
};

export default CustomCarousel;
