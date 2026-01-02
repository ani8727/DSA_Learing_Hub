import React, { useState } from 'react';
import { FiCopy, FiCheck } from 'react-icons/fi';

const CodeBlock = ({ 
  code, 
  language = 'cpp',
  title = '',
  showLineNumbers = false,
  className = '' 
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const languageLabels = {
    cpp: 'C++',
    javascript: 'JavaScript',
    python: 'Python',
    java: 'Java',
    typescript: 'TypeScript',
  };

  return (
    <div className={`code-block ${className}`}>
      {/* Header */}
      <div className="code-header">
        <div className="flex items-center gap-3">
          <span className="text-xs font-mono text-accent-primary uppercase tracking-wider">
            {languageLabels[language] || language}
          </span>
          {title && (
            <>
              <span className="text-dark-500">|</span>
              <span className="text-sm text-gray-400">{title}</span>
            </>
          )}
        </div>
        <button
          onClick={handleCopy}
          className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-dark-700 hover:bg-dark-600 text-gray-400 hover:text-white transition-all text-sm border border-dark-600"
          title="Copy code"
        >
          {copied ? (
            <>
              <FiCheck className="w-4 h-4 text-accent-success" />
              <span className="text-accent-success">Copied!</span>
            </>
          ) : (
            <>
              <FiCopy className="w-4 h-4" />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>

      {/* Code Content */}
      <pre className="!bg-transparent !border-none !p-0 !m-0">
        <code className={`language-${language} text-sm leading-relaxed`}>
          {code}
        </code>
      </pre>
    </div>
  );
};

export default CodeBlock;
