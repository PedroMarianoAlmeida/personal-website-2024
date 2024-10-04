import Link from "next/link";
import { PortfolioList } from ".";

interface PortfolioItemProps {
  portfolioItem: PortfolioList;
  isLast: boolean;
}

const PortfolioItem = ({
  portfolioItem: { name, description, projectUrl, videoUrl },
  isLast,
}: PortfolioItemProps) => {
  return (
    <div className={`w-full ${isLast ? "" : "mb-5"}`}>
      <div className="container grid gap-8 px-4 xl:px-6 xl:grid-cols-2 xl:gap-12">
        <div className="flex flex-col gap-3 justify-center">
          <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl xl:text-4xl">
            {name}
          </h2>
          <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-info">
            {description}
          </p>
          {/* <Link href={projectUrl} target="_blank" rel="noopener noreferrer"> */}
          <button className="btn btn-primary max-w-32">Visit</button>- Not
          working because I stop paying the OpenAI api
          {/* </Link> */}
        </div>

        <iframe
          src={videoUrl}
          title={name}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          className="w-full h-full max-w-md min-h-60"
        />
      </div>
    </div>
  );
};

export default PortfolioItem;
