import Link from "next/link";
import PortfolioItem from "./PortfolioItem";

export interface PortfolioList {
  name: string;
  description: string;
  videoUrl: string;
  projectUrl: string;
  codeUrl?: string;
}

const portfolioList: PortfolioList[] = [
  {
    name: "Better Image AI",
    description: "Wep app the improve prompts and generate images",
    videoUrl: "https://www.youtube.com/embed/RzEfBKXqp3U?si=EVyUGQ9jWIIE5ucO",
    projectUrl: "https://better-image-ai.vercel.app/",
    codeUrl:
      "https://github.com/PedroMarianoAlmeida/offical-turbo-v1/tree/main/apps/next-15/better-image-ai",
  },
];

const Portfolio = () => (
  <section
    id="portfolio"
    className="flex flex-col justify-center items-center gap-5 pt-20"
  >
    <h2 className="text-2xl font-bold">Featured Projects</h2>
    {portfolioList.map((portfolioItem, index, arr) => (
      <PortfolioItem
        key={portfolioItem.name}
        portfolioItem={portfolioItem}
        isLast={index === arr.length - 1}
      />
    ))}
    <p>
      My old projects (from 2021 and bellow) is available on my{" "}
      <Link
        href="https://pedroalmeidaprogrammer-2021.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-info underline"
      >
        previous website
      </Link>
    </p>
  </section>
);

export default Portfolio;
