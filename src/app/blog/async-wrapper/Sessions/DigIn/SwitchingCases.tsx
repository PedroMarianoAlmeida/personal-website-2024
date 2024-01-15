import CodeSniped from "@/Components/CodeSniped";
import {
  asyncWrapperSniped,
  consumingSniped,
} from "@/app/blog/async-wrapper/codeSnippets";
import Link from "next/link";

const SwitchingCases = () => (
  <>
    <h3>Types: Switching cases</h3>

    <p>
      Now the last lines of <code>asyncWrapper</code> that need explanation
    </p>
    <CodeSniped {...asyncWrapperSniped} highlightLines={[11, 15]} />
    <p>
      The <code>Promise</code> thing is there for the same reason of the{" "}
      <code>mainFunction</code> / <code>callback</code> (it is a an asynchronous
      function). But the returning type is the <code>asyncWrapperResponse</code>
      ... and this type can assume two different values: The{" "}
      <code>success</code> or the <code>error</code> type.
    </p>
    <CodeSniped {...asyncWrapperSniped} highlightLines={[2, 3, 7, 8, 18, 22]} />
    <p>And as you can see, there is only tow options:</p>
    <ul>
      <li>
        When there is an error, the <code>success</code> is <code>false</code>,
        and the other field is an <code>string</code> with the{" "}
        <code>error</code>
      </li>
      <li>
        When there is the happy path, the <code>success</code> is{" "}
        <code>true</code>, and the other field is the <code>result</code> field,
        with the same type as the <code>mainFunction</code> result
      </li>
    </ul>
    <p>And this is why this code works:</p>
    <CodeSniped {...consumingSniped} />
    <p>
      On line <code>2</code> is treating the case when <code>success</code> is{" "}
      <code>false</code>, so beyond this line, the <code>result</code> will be
      available, with all the types from the <code>mainFunction</code> result
    </p>
    <p>
      <b>Note:</b> Does{"'"}t forget to treat the <code>mainFunction</code>{" "}
      result on the <code>service.ts</code>, as explained{" "}
      <Link href="#error-handling">here</Link>
    </p>
  </>
);

export default SwitchingCases;
