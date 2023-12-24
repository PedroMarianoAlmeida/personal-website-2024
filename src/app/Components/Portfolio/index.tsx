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
    videoUrl: "https://www.youtube.com/embed/zhKt7Hcd5ME?si=DLHFES8CpTE7zwr7", //Replace for the right URL
    projectUrl: "https://www.nobordersjobs.com/",
  },
  {
    name: "SEO Helper",
    description:
      "Wep app to help with SEO, providing hashtags and image to any kind of social media",
    videoUrl: "https://www.youtube.com/embed/zhKt7Hcd5ME?si=DLHFES8CpTE7zwr7", //Replace for the right URL
    projectUrl: "https://noborderjobs.com/",
  },
];

const Portfolio = () => (
  <section
    id="portfolio"
    className="flex flex-col justify-center items-center gap-5 pt-20"
  >
    <h2 className="text-2xl font-bold">Featured Projects</h2>
    {portfolioList.map((portfolioItem , index, arr) => (
      <PortfolioItem portfolioItem={portfolioItem} isLast={index === arr.length - 1}/>
    ))}
  </section>
);

export default Portfolio;
