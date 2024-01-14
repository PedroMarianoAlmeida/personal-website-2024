export interface CodeSnipedProps {
  fileName?: string;
  lines: { content: string; isHighLight?: true; indentation?: number }[];
  initialLineNumber?: number;
}

const CodeSniped = ({
  lines,
  fileName,
  initialLineNumber = 1,
}: CodeSnipedProps) => (
  <>
    {fileName ? <code>{fileName}</code> : null}
    <div className="mockup-code">
      {lines.map(({ content, isHighLight, indentation }, index) => (
        <pre
          className={`py-0 my-0 ${
            isHighLight ? "bg-warning text-warning-content" : ""
          }`}
          data-prefix={initialLineNumber + index}
        >
          {"  ".repeat(indentation || 0)}
          <code>{content}</code>
        </pre>
      ))}
    </div>
  </>
);

export default CodeSniped;
