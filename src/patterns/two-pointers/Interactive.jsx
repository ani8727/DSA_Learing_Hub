import { useState } from 'react';

const Interactive = () => {
  const [showHint, setShowHint] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);
  const [showSolution, setShowSolution] = useState(false);

  return (
    <div className="space-y-8">
      <div className="bg-dark-700 rounded-2xl border border-dark-500 p-6 md:p-8">
        <span className="px-3 py-1 bg-yellow-500/20 text-yellow-400 rounded-full text-sm font-medium">Interactive Challenge</span>
        <h2 className="text-2xl font-bold text-white mt-4 mb-4">Valid Palindrome</h2>
        <p className="text-gray-300">Given a string s, return true if it is a palindrome after converting to lowercase and removing non-alphanumeric characters.</p>
      </div>

      <div className="bg-dark-700 rounded-2xl border border-dark-500 p-6 md:p-8">
        <h3 className="text-xl font-bold text-white mb-4">Example</h3>
        <div className="bg-dark-600 rounded-xl p-4">
          <p><span className="text-gray-500">Input: </span><code className="text-accent-primary">s = "A man, a plan, a canal: Panama"</code></p>
          <p><span className="text-gray-500">Output: </span><code className="text-green-400">true</code></p>
          <p><span className="text-gray-500">Explanation: </span><span className="text-gray-300">"amanaplanacanalpanama" is a palindrome</span></p>
        </div>
      </div>

      <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/10 rounded-2xl border border-blue-500/20 p-6 md:p-8">
        <h3 className="text-xl font-bold text-white mb-4">🤔 Try to Think</h3>
        <ul className="space-y-3">
          <li className="flex items-start space-x-3"><span className="text-blue-400">1.</span><span className="text-gray-300">Where should the two pointers start?</span></li>
          <li className="flex items-start space-x-3"><span className="text-blue-400">2.</span><span className="text-gray-300">How do you handle non-alphanumeric characters?</span></li>
          <li className="flex items-start space-x-3"><span className="text-blue-400">3.</span><span className="text-gray-300">When should you stop comparing?</span></li>
        </ul>
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        <button onClick={() => setShowHint(!showHint)} className="py-4 px-6 bg-dark-600 border border-dark-500 rounded-xl text-white font-medium hover:bg-dark-500 transition-all">💡 {showHint ? 'Hide' : 'Show'} Hint</button>
        <button onClick={() => setShowExplanation(!showExplanation)} className="py-4 px-6 bg-dark-600 border border-dark-500 rounded-xl text-white font-medium hover:bg-dark-500 transition-all">📖 {showExplanation ? 'Hide' : 'Show'} Explanation</button>
        <button onClick={() => setShowSolution(!showSolution)} className="py-4 px-6 bg-gradient-to-r from-accent-primary to-accent-secondary rounded-xl text-white font-medium hover:shadow-lg transition-all">✨ {showSolution ? 'Hide' : 'Reveal'} Solution</button>
      </div>

      {showHint && <div className="bg-yellow-500/10 rounded-2xl border border-yellow-500/20 p-6 animate-fadeIn"><h3 className="text-xl font-bold text-yellow-400 mb-4">💡 Hint</h3><p className="text-gray-300">Use two pointers from both ends. Skip non-alphanumeric characters. Compare lowercase versions.</p></div>}
      {showExplanation && <div className="bg-blue-500/10 rounded-2xl border border-blue-500/20 p-6 animate-fadeIn"><h3 className="text-xl font-bold text-blue-400 mb-4">📖 Explanation</h3><p className="text-gray-300">This is a converging two-pointer problem. Start from both ends, skip invalid characters, compare, and move inward until pointers meet.</p></div>}
      {showSolution && <div className="bg-green-500/10 rounded-2xl border border-green-500/20 p-6 animate-fadeIn"><h3 className="text-xl font-bold text-green-400 mb-4">✨ Solution</h3><pre className="bg-dark-800 rounded-xl p-6 overflow-x-auto"><code className="text-gray-300 text-sm font-mono">{`function isPalindrome(s) {
  let left = 0, right = s.length - 1;
  while (left < right) {
    while (left < right && !isAlphaNum(s[left])) left++;
    while (left < right && !isAlphaNum(s[right])) right--;
    if (s[left].toLowerCase() !== s[right].toLowerCase()) return false;
    left++; right--;
  }
  return true;
}

function isAlphaNum(c) {
  return /[a-zA-Z0-9]/.test(c);
}`}</code></pre></div>}
    </div>
  );
};

export default Interactive;
