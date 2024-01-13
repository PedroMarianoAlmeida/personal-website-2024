import Link from "next/link";
import PortfolioItem from "./PortfolioItem";

export interface PortfolioList {
  name: string;
  description: string;
  videoUrl: string;
  projectUrl: string;
}

const portfolioList: PortfolioList[] = [
  {
    name: "No Border Jobs",
    description:
      "Job platform focused exclusively in remote and global opportunities.",
    videoUrl: "https://www.youtube.com/embed/t2rsif_PT7w?si=MlMYb7-BDhWR4utr", //Replace for the right URL
    projectUrl: "https://www.nobordersjobs.com/",
  },
  {
    name: "SEO Helper",
    description:
      "Wep app to help with SEO, providing hashtags and image to any kind of social media",
    videoUrl: "https://www.youtube.com/embed/zqw8P6qM2aw?si=vFUIFfj6Twf6eaJQ",
    projectUrl: "https://hashtag-thumbnail-generator.vercel.app/",
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
