import CodeSniped from "@/Components/CodeSniped";
import {
  asyncWrapperWithoutTypesSniped,
  serviceSniped,
} from "@/app/blog/async-wrapper/codeSnippets";

const MainCode = () => (
  <>
    <h3>Main Code</h3>
    <p>So the first part is use the wrapper</p>
    <CodeSniped {...serviceSniped} highlightLines={[2, 3, 10]} />
    <p>
      The <code>mainFunction</code> is YOUR function that calls any async data
      (fetch, axios, etc). And it is <i>wrapped</i> in the{" "}
      <code>asyncWrapper</code>.
    </p>
    <p>
      The <code>functionThatHaveTheAsyncLogic</code> will return to your code
      the object already treated, this is why I suggest use the{" "}
      <code>service</code> convention name, but feel free to use any another
      name.
    </p>
    <p>
      Jumping to the second ... that is to make sure that your function is being
      called! (otherwise this code is useless)
    </p>
    <CodeSniped
      {...asyncWrapperWithoutTypesSniped}
      highlightLines={[14, 17, 18]}
    />
    <p>
      So as you can see, the <code>asyncWrapper</code> has a param that is a
      function called <code>callback</code> (don{"'"}t worry about the{" "}
      <code>{"Promise<T>"}</code> at the moment) ... and this is YOUR function
      (the <code>mainFunction</code> that came from YOURS{" "}
      <code>service.ts</code>)
    </p>
    <p>
      So if the <code>mainFunction</code> runs <u>without error</u>, then the
      wrapper return an object with the <code>mainFunction</code> result in{" "}
      <code>result</code>property, and the boolean <code>success</code> as true
    </p>
    <p>
      But if the <code>mainFunction</code> return an <u>error</u>, what will
      happen? It is the next highlight code
    </p>
  </>
);

export default MainCode;
