import CodeSniped from "@/Components/CodeSniped";
import {
  asyncWrapperWithoutTypesSniped,
  asyncWrapperSniped,
} from "@/app/blog/async-wrapper/codeSnippets";
import Link from "next/link";

const ErrorHandling = () => (
  <>
    <h3>Types: On Catch Block</h3>
    <p>Let{"'"}s start dig in on Types</p>
    <CodeSniped
      {...asyncWrapperWithoutTypesSniped}
      highlightLines={[19, 20, 21, 22, 23]}
    />
    <p>
      In this part part I am only ensuring that the error message will be a
      string, or will be <i>Unknown Error</i> string or any message that come
      from the Error object (when there is one).
    </p>
    <p>
      There is a better explanation in the{" "}
      <Link
        href="https://kentcdodds.com/blog/get-a-catch-block-error-message-with-typescript"
        target="_blank"
        rel="noopener noreferrer"
      >
        Kent C Dodds article
      </Link>{" "}
      that <i>inspired</i> this part of my code (I basically adapt to my
      necessities)
    </p>
    <p>
      And when there is an error, I am sending an object with the message (witch
      is a <code>string</code>) in one property, and the{" "}
      <code>success: false</code> (so ALWAYS that goes to catch block, the
      success will be false)
    </p>
    <p>
      So now it is time to understand the first <code>interface</code>
    </p>
    <CodeSniped {...asyncWrapperSniped} highlightLines={[1, 2, 3, 4]} />
    <p>
      This is just the TypeScript code doing what I explain above, when there is
      an error, the <code>asyncWrapper</code> will return this interface... and
      message as string and the <code>success</code> as <code>false</code>
    </p>
    <p>
      But how the function <i>knows</i> when use this error interface? First let
      {"'"}s see the success case
    </p>
  </>
);

export default ErrorHandling;
