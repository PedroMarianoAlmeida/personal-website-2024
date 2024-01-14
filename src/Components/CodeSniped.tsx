export interface CodeSnipedProps {
  fileName?: string;
  lines: { content: string; indentation?: number }[];
  initialLineNumber?: number;
  highlightLines?: number[];
}

const CodeSniped = ({
  lines,
  fileName,
  initialLineNumber = 1,
  highlightLines = [],
}: CodeSnipedProps) => (
  <>
    {fileName ? <code>{fileName}</code> : null}
    <div className="mockup-code">
      {lines.map(({ content, indentation }, index) => {
        const lineNumber = initialLineNumber + index;
        const isHighLightLine = highlightLines.includes(lineNumber);
        const spaces = "  ".repeat(indentation || 0);
        return (
          <pre
            className={`py-0 my-0 ${
              isHighLightLine ? "bg-warning text-warning-content" : ""
            }`}
            data-prefix={lineNumber}
            key={lineNumber}
          >
            {spaces}
            <code>{content}</code>
          </pre>
        );
      })}
    </div>
  </>
);

export default CodeSniped;
