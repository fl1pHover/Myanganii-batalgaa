import AboutHero from "@/components/About/AboutHero";
import Hero from "@/components/Home/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Hero />
      <AboutHero />
    </main>
  );
}
