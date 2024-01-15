import CodeSniped from "@/components/CodeSniped";
import {
  asyncWrapperSniped,
  serviceSniped,
  consumingSniped,
} from "@/app/blog/async-wrapper/codeSnippets";
const FinalResult = () => (
  <>
    <h2>Final Result</h2>
    <p>
      If you want just copy and use by yourself, here are the code! (but I will
      explain each line of this code in the article, so stay tuned)
    </p>
    <h3>Code</h3>
    <CodeSniped {...asyncWrapperSniped} />

    <h3>Function Utilizing the Async Logic</h3>
    <CodeSniped {...serviceSniped} />
    <h3>Consuming the Async Data</h3>
    <CodeSniped {...consumingSniped} />
  </>
);

export default FinalResult;
