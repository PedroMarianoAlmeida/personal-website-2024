import CodeSniped from "@/Components/CodeSniped";
import {
  asyncWrapperSniped,
  asyncWrapperWithoutTypesSniped,
} from "@/app/blog/async-wrapper/codeSnippets";

const SuccessHandlingTypes = () => (
  <>
    <h3>Types: The happy path</h3>
    <p>
      Now you is prepared to <i>heaviest</i> TypeScript part in the code, and it
      is easier that looks like!
    </p>
    <CodeSniped {...asyncWrapperWithoutTypesSniped} highlightLines={[14]} />
    <p>
      Starting for line <code>14</code>, the <code>callback</code> (AKA{" "}
      <code>mainFunction</code> in your <code>service</code> file)
    </p>
    <p>
      That it is an <b>asynchronous</b> function (so returns a{" "}
      <code>Promise</code>), and this <code>Promise</code>, returns{" "}
      <i>something</i>... and this <i>something</i> has <i>some type</i>.... and
      this type is the <code>T</code> in <code>{"Promise<T>"}</code>.
    </p>
    <p>
      In plain english, <code>{"Promise<T>"}</code> means: An async function
      with some type in the return (and this type <code>T</code> will be used in
      somewhere else in my type definition).
    </p>
    <CodeSniped {...asyncWrapperWithoutTypesSniped} highlightLines={[17]} />
    <p>
      The <code>result</code> variable is the <code>Promise</code> from the{" "}
      <code>mainFunction</code> resolved, so the type of <code>result</code> is
      the <code>T</code> from <code>{"Promise<T>"}</code> (which means: The type
      of the data from the <code>mainFunction</code> result... or the{" "}
      <i>error</i>, but we already discuss this part).
    </p>
    <p>So now the only part missing on Happy Path is actual type it</p>
    <CodeSniped {...asyncWrapperSniped} highlightLines={[6, 7, 8, 9, 18]} />
    <p>
      That{"'"}s it! So when the data from <code>mainFunction</code> is actually
      fetched, the <code>asyncWrapper</code> returns an object with the{" "}
      <code>result</code> property typed as the same type as the{" "}
      <code>mainFunction</code> result (and the <code>success</code> as{" "}
      <code>true</code>)
    </p>
  </>
);

export default SuccessHandlingTypes;
