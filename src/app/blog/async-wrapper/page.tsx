import DigIn from "./Sessions/DigIn";
import Final from "./Sessions/Final";
import FinalResult from "./Sessions/FinalResult";
import PreRequisites from "./Sessions/PreRequisites";
import UseCases from "./Sessions/UseCases";

const BlogPost = () => {
  return (
    <main className="px-3 mt-3">
      <h1>
        Effective Promise Handling in TypeScript with Async Wrapper: A Code
        Tutorial
      </h1>
      <PreRequisites />
      <FinalResult />
      <UseCases />
      <DigIn />
      <Final />
    </main>
  );
};

export default BlogPost;
