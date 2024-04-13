import AboutHero from "@/app/about/AboutHero";
import AchievementHero from "@/components/Achievement/AchievementHero";
import Container from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/Title";

export default function About() {
  return (
    <section className="flex flex-col sectionPadding_top">
      <Container className="flex items-center justify-between w-full ">
        <PageHeader
          header="Dream Comes True With Our Talented Architect"
          currentPage="About"
        />
      </Container>

      <img
        src="https://demo.xstheme.com/lacasa/wp-content/uploads/sites/13/2018/01/lamsum.jpg"
        alt=""
        className="banner_container"
      />

      <AboutHero />
      <div className="py-[80px]">
        <AchievementHero />
      </div>
    </section>
  );
}
