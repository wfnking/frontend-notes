// ./CodeBlock.js
import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vsDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

const CodeBlock = ({ language, value }) => {
  return (
    <SyntaxHighlighter language={language} style={vsDark}>
      {value}
    </SyntaxHighlighter>
  );
};

export default CodeBlock;
