"use client";

import "@mantine/carousel/styles.css";
import { Carousel } from "@mantine/carousel";

import mergeNames from "@/util/mergeNames";
import LinkMore from "./LinkMore";

// autoplay
import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";

const CustomCarousel = ({ data }) => {
  const autoplay = useRef(Autoplay({ delay: 4000 }));
  return (
    <Carousel
      // Size
      height={400}
      slideSize={{
        base: "100%",
        xs: "75%",
        sm: "50%",
        md: "33%",
        lg: "30%",
        xl: "25%",
      }}
      slideGap="xl"
      align="center"
      withIndicators
      slidesToScroll={1}
      loop
      // AUto play plugin zaaval tatna ingenee
      plugins={[autoplay.current]}
      onMouseEnter={autoplay.current.stop}
      onMouseLeave={autoplay.current.reset}
      controlSize={40}
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
                "group group-hover:bg-black/90",
                "bg-color-0/60 absolute top-0 left-0 w-full h-full duration-500 border-4 border-transparent group-hover:border-color-2"
              )}
            >
              <div
                className={mergeNames(
                  "flex flex-col justify-end h-full px-10 pt-10  duration-400  z-1 ",
                  "pb-10 group-hover:pb-16"
                )}
              >
                <div className={mergeNames("flex flex-col gap-5")}>
                  <h1
                    className={mergeNames(
                      "smallTitle w-[70%] leading-7 text-white"
                    )}
                  >
                    {i.title}
                  </h1>
                  <LinkMore href="/" title="Read More" green />
                </div>
              </div>
            </div>
          </div>
        </Carousel.Slide>
      ))}
    </Carousel>
  );
};

export default CustomCarousel;
