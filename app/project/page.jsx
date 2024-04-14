"use client";
import Container from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/Title";
import mergeNames from "@/util/mergeNames";
import Link from "next/link";
import { Suspense } from "react";
import { useEffect, useState } from "react";
import PortfolioCard from "./PortfolioCard";
import Loading from "./loading";

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

export default function ProjectPage() {
  const [projects, setProjects] = useState([]);
  const getProjects = async () => {
    try {
      await fetch(`/api/project`).then(async (d) => {
        if (d.status == 200) {
          let data = await d.json();
          console.log(data);
          setProjects(data.data);
        }
      });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getProjects();
  }, []);
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
          <Suspense fallback={<p>loading</p>}>
            <div className="grid w-full grid-cols-1 gap-6 mx-auto md:grid-cols-2 lg:grid-cols-3 duration-400">
              {projects?.map((project, i) => {
                return (
                  <div key={i}>
                    <PortfolioCard
                      // image="https://demo.xstheme.com/lacasa/wp-content/uploads/sites/13/2018/01/10-390x254.jpeg"
                      image={
                        project.image == "" &&
                        "https://st4.depositphotos.com/14953852/24787/v/450/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg"
                      }
                      title={project.title}
                      link={`/project/${project._id}`}
                    />
                  </div>
                );
              })}

              {/* {/* <div> {JSON.stringify(project)}</div> */}
            </div>
            <Loading />
          </Suspense>
        </section>
      </Container>
    </section>
  );
}
