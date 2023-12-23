import HeroSection from "./Components/HeroSection";
import Portfolio from "./Components/Portfolio";

export default function Home() {
  return (
    <main className="px-6 py-12 flex flex-col">
      <HeroSection />
      <Portfolio />
    </main>
  );
}
