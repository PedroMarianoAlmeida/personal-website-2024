import HeroSection from "@/components/HeroSection";
import History from "@/components/History";
import Portfolio from "@/components/Portfolio";
import SkillSection from "@/components/SkillSection.tsx";

export default function Home() {
  return (
    <main className="px-6 flex flex-col">
      <HeroSection />
      <SkillSection />
      <Portfolio />
      <History />
    </main>
  );
}
