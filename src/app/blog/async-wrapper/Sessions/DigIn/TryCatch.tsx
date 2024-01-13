import CodeSniped from "@/Components/CodeSniped";
import {
  serviceSniped,
  asyncWrapperWithoutTypesSniped,
} from "@/app/blog/async-wrapper/codeSnippets";

const TryCatch = () => (
  <>
    <h3>Try Catch</h3>
    <p>
      For this reason we have the <code>try/catch</code> block, so if in line 19
      the <code>mainFunction</code> return an error, this will be treated on the{" "}
      <code>catch</code> block
    </p>
    <CodeSniped
      {...asyncWrapperWithoutTypesSniped}
      highlightLines={[16, 19, 22]}
    />
    <p id="error-handling">
      And not only the <code>mainFunction</code>, all sanitization can be handle
      in this way. The wrapper not <i>wrap</i> only the{" "}
      <code>mainFunction</code>, wrap the entire dataflow until the right data
      be available.
    </p>
    <CodeSniped {...serviceSniped} highlightLines={[5, 6, 7]} />

    <p>
      So that is the first reason that I create this function, to encapsulate
      all <code>try/catch</code>blocks and how to handle with errors in one
      place.
    </p>
  </>
);

export default TryCatch;
