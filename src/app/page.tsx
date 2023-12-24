import HeroSection from "./Components/HeroSection";
import Portfolio from "./Components/Portfolio";
import SkillSection from "./Components/SkillSection.tsx";

export default function Home() {
  return (
    <main className="px-6 py-12 flex flex-col">
      <HeroSection />
      <SkillSection />
      <Portfolio />
    </main>
  );
}
