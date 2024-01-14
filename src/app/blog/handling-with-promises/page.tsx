import FinalResult from "./Sessions/FinalResult";
import PreRequisites from "./Sessions/PreRequisites";
import UseCases from "./Sessions/UseCases";

const BlogPost = () => {
  return (
    <main className="px-3 mt-3">
      <h1>Handling with promises (with code Snipped)</h1>
      <PreRequisites />
      <FinalResult />
      <UseCases />
    </main>
  );
};

export default BlogPost;
