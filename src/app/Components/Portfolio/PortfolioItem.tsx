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
          <Link
            className="btn btn-primary max-w-32"
            href={projectUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit
          </Link>
        </div>

        <iframe
          src={videoUrl}
          title={name}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        />
      </div>
    </div>
  );
};

export default PortfolioItem;
