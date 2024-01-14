import CodeSniped from "@/Components/CodeSniped";
import {
  asyncWrapperSniped,
  serviceSniped,
  consumingSniped,
} from "@/app/blog/handling-with-promises/codeSnippets";
const FinalResult = () => (
  <>
    <h2>Final Result</h2>
    <p>
      If you want just copy and use by yourself, here are the code! (but I will
      explain each line of this code in the article, so stay tunned)
    </p>
    <h3>Code</h3>
    <CodeSniped {...asyncWrapperSniped} />

    <h3>Function that will use</h3>
    <CodeSniped {...serviceSniped} />
    <h3>Consuming the Async Data</h3>
    <CodeSniped {...consumingSniped} />
  </>
);

export default FinalResult;
