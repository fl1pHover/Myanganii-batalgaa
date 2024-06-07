import React, { Suspense } from "react";
import Container from "../ui/Container";
import { projects } from "@/constants";
import CustomCarousel from "../ui/CustomCarousel";
import { LineTitle, SectionTitle } from "../ui/Title";
import mergeNames from "@/util/mergeNames";
import LinkMore from "../ui/LinkMore";

const ProjectHero = () => {
  return (
    <div className="flex flex-col gap-20 pb-8 mt-28">
      <Container className="grid grid-cols-1 md:grid-cols-2">
        <SectionTitle section="Ажлууд" title="Сүүлийн төслүүд" />
        <div className="hidden my-auto ml-auto cursor-pointer sm:block">
          <LinkMore title="Бүгд төслийг харах" />
        </div>
      </Container>
      <CustomCarousel data={projects} />
    </div>
  );
};

export default ProjectHero;
