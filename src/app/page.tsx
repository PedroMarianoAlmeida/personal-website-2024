import HeroSection from "@/components/HeroSection";
import History from "@/components/History";
import Portfolio from "@/components/Portfolio";
import SkillSection from "@/components/SkillSection.tsx";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <main className="px-6 flex flex-col">
      <HeroSection />
      <Portfolio />
      <Testimonials />
      <SkillSection />
      <History />
    </main>
  );
}
