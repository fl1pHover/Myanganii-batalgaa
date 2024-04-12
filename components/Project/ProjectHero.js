import React from "react";
import Container from "../ui/Container";
import { projects } from "@/constants";
import CustomCarousel from "../ui/CustomCarousel";
import { LineTitle, SectionTitle } from "../ui/Title";
import mergeNames from "@/util/mergeNames";
import LinkMore from "../ui/LinkMore";

const ProjectHero = () => {
  return (
    <div className="flex flex-col gap-20 mt-28">
      <Container className="grid grid-cols-2">
        <SectionTitle section="CHECK OUT" title="Recent Projects" />
        <div className="my-auto ml-auto cursor-pointer">
          <LinkMore title="View all projects" />
        </div>
      </Container>
      <CustomCarousel data={projects} />
    </div>
  );
};

export default ProjectHero;
