import AboutHero from "@/components/About/AboutHero";
import AchievementHero from "@/components/Achievement/AchievementHero";
import Hero from "@/components/Hero/Hero";
import ProjectHero from "@/components/Project/ProjectHero";
import CustomCarousel from "@/components/ui/CustomCarousel";
import { projects } from "@/constants";
import { Carousel } from "@mantine/carousel";
import "@mantine/core/styles.css";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Hero />
      <div className="flex flex-col gap-24">
        <AboutHero />
        <AchievementHero />
      </div>
      <ProjectHero />
    </main>
  );
}
