// CodeBlock.jsx
import React from 'react';

const CodeBlock = ({ code, language = 'cpp' }) => (
  <pre className="code-block">
    <code className={`language-${language}`}>
      {code}
    </code>
  </pre>
);

export default CodeBlock;