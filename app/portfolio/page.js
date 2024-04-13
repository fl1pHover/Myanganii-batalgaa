"use client";
import Container from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/Title";
import mergeNames from "@/util/mergeNames";
import React, { useState } from "react";
import PortfolioCard from "./PortfolioCard";

const categories = [
  {
    id: 1,
    title: "all",
  },
  {
    id: 2,
    title: "Building",
  },
  {
    id: 3,
    title: "Interior",
  },
  {
    id: 4,
    title: "Motel",
  },
];

const Portfolio = () => {
  const [select, setSelect] = useState(1);
  return (
    <section className="flex flex-col sectionPadding_top">
      <Container className="flex flex-col gap-20 md:gap-28">
        <div className="flex items-center justify-between w-full ">
          <PageHeader
            header="Get Enjoyed Our Successfull Projects"
            currentPage="portfolio"
          />
        </div>
        <section className="flex flex-col gap-10">
          <div
            className={mergeNames(
              "text-[14px] sm:text-[18px] font-bold grid grid-cols-2 md:flex gap-2 md:gap-8 flex-wrap justify-center sm:justify-start"
            )}
          >
            {/* Select buttons */}
            {categories.map((c) => (
              <button
                key={c.id}
                className={mergeNames(
                  select == c.id ? "text-color-2" : "",
                  "uppercase duration-400 p-2 bg-gray-0 md:bg-transparent"
                )}
                onClick={() => setSelect(c.id)}
              >
                {c.title}
              </button>
            ))}
          </div>
          {/* Cards */}
          <div className="grid w-full grid-cols-1 mx-auto md:grid-cols-2 lg:grid-cols-3 duration-400">
            <PortfolioCard
              image="https://demo.xstheme.com/lacasa/wp-content/uploads/sites/13/2018/01/10-390x254.jpeg"
              title="Modern architech design"
            />
          </div>
        </section>
      </Container>
    </section>
  );
};

export default Portfolio;
