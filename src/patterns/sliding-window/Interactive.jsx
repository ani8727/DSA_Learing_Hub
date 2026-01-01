import { useState } from 'react';

const Interactive = () => {
  const [showHint, setShowHint] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);
  const [showSolution, setShowSolution] = useState(false);

  const problem = {
    title: 'Maximum Average Subarray',
    description: `You are given an integer array nums consisting of n elements, and an integer k.

Find a contiguous subarray whose length is equal to k that has the maximum average value and return this value.`,
    examples: [
      {
        input: 'nums = [1, 12, -5, -6, 50, 3], k = 4',
        output: '12.75',
        explanation: 'Maximum average is (12 + -5 + -6 + 50) / 4 = 51 / 4 = 12.75'
      },
      {
        input: 'nums = [5], k = 1',
        output: '5.0',
        explanation: 'The only subarray is [5], so the average is 5.0'
      }
    ],
    constraints: [
      'n == nums.length',
      '1 <= k <= n <= 10^5',
      '-10^4 <= nums[i] <= 10^4'
    ],
    hint: 'This is a classic fixed-size sliding window problem. Instead of calculating the average for every window from scratch, think about how you can update the sum incrementally as the window slides.',
    explanation: `This is a Fixed Window Sliding Window problem because:

1. We need to find a subarray of EXACTLY size k - the window size is fixed
2. We want to find the maximum among ALL windows of size k
3. We can optimize by sliding the window and updating the sum incrementally

Approach:
- Calculate the sum of the first k elements
- Slide the window: subtract the leftmost element, add the new rightmost element
- Track the maximum sum seen
- Return max_sum / k`,
    solution: `function findMaxAverage(nums, k) {
  // Calculate sum of first window
  let windowSum = 0;
  for (let i = 0; i < k; i++) {
    windowSum += nums[i];
  }
  
  let maxSum = windowSum;
  
  // Slide the window
  for (let i = k; i < nums.length; i++) {
    // Add new element, remove old element
    windowSum = windowSum + nums[i] - nums[i - k];
    maxSum = Math.max(maxSum, windowSum);
  }
  
  return maxSum / k;
}

// Time: O(n), Space: O(1)`
  };

  return (
    <div className="space-y-8">
      {/* Problem Statement */}
      <div className="bg-dark-700 rounded-2xl border border-dark-500 p-6 md:p-8">
        <div className="flex items-center space-x-3 mb-4">
          <span className="px-3 py-1 bg-yellow-500/20 text-yellow-400 rounded-full text-sm font-medium">
            Interactive Challenge
          </span>
        </div>
        <h2 className="text-2xl font-bold text-white mb-4">{problem.title}</h2>
        <p className="text-gray-300 whitespace-pre-line">{problem.description}</p>
      </div>

      {/* Examples */}
      <div className="bg-dark-700 rounded-2xl border border-dark-500 p-6 md:p-8">
        <h3 className="text-xl font-bold text-white mb-4">Examples</h3>
        <div className="space-y-4">
          {problem.examples.map((example, index) => (
            <div key={index} className="bg-dark-600 rounded-xl p-4">
              <p className="text-gray-400 text-sm mb-2">Example {index + 1}:</p>
              <div className="space-y-2">
                <div>
                  <span className="text-gray-500">Input: </span>
                  <code className="text-accent-primary">{example.input}</code>
                </div>
                <div>
                  <span className="text-gray-500">Output: </span>
                  <code className="text-green-400">{example.output}</code>
                </div>
                <div>
                  <span className="text-gray-500">Explanation: </span>
                  <span className="text-gray-300">{example.explanation}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Constraints */}
      <div className="bg-dark-700 rounded-2xl border border-dark-500 p-6 md:p-8">
        <h3 className="text-xl font-bold text-white mb-4">Constraints</h3>
        <ul className="space-y-2">
          {problem.constraints.map((constraint, index) => (
            <li key={index} className="flex items-center space-x-2 text-gray-300">
              <span className="w-1.5 h-1.5 rounded-full bg-gray-500"></span>
              <code className="text-sm">{constraint}</code>
            </li>
          ))}
        </ul>
      </div>

      {/* Try to Think Section */}
      <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/10 rounded-2xl border border-blue-500/20 p-6 md:p-8">
        <h3 className="text-xl font-bold text-white mb-4">🤔 Try to Think</h3>
        <p className="text-gray-300 mb-4">
          Before looking at the hints, try to answer these questions:
        </p>
        <ul className="space-y-3">
          <li className="flex items-start space-x-3">
            <span className="w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center flex-shrink-0 text-sm">1</span>
            <span className="text-gray-300">Is this a fixed or dynamic window problem?</span>
          </li>
          <li className="flex items-start space-x-3">
            <span className="w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center flex-shrink-0 text-sm">2</span>
            <span className="text-gray-300">What information do you need to track as the window slides?</span>
          </li>
          <li className="flex items-start space-x-3">
            <span className="w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center flex-shrink-0 text-sm">3</span>
            <span className="text-gray-300">How can you avoid recalculating the sum from scratch for each window?</span>
          </li>
        </ul>
      </div>

      {/* Interactive Buttons */}
      <div className="grid md:grid-cols-3 gap-4">
        <button
          onClick={() => setShowHint(!showHint)}
          className="reveal-btn py-4 px-6 bg-dark-600 border border-dark-500 rounded-xl text-white font-medium hover:bg-dark-500 transition-all flex items-center justify-center space-x-2"
        >
          <span>💡</span>
          <span>{showHint ? 'Hide Hint' : 'Show Hint'}</span>
        </button>
        <button
          onClick={() => setShowExplanation(!showExplanation)}
          className="reveal-btn py-4 px-6 bg-dark-600 border border-dark-500 rounded-xl text-white font-medium hover:bg-dark-500 transition-all flex items-center justify-center space-x-2"
        >
          <span>📖</span>
          <span>{showExplanation ? 'Hide Explanation' : 'Reveal Explanation'}</span>
        </button>
        <button
          onClick={() => setShowSolution(!showSolution)}
          className="reveal-btn py-4 px-6 bg-gradient-to-r from-accent-primary to-accent-secondary rounded-xl text-white font-medium hover:shadow-lg transition-all flex items-center justify-center space-x-2"
        >
          <span>✨</span>
          <span>{showSolution ? 'Hide Solution' : 'Reveal Solution'}</span>
        </button>
      </div>

      {/* Hint */}
      {showHint && (
        <div className="bg-yellow-500/10 rounded-2xl border border-yellow-500/20 p-6 md:p-8 animate-fadeIn">
          <h3 className="text-xl font-bold text-yellow-400 mb-4">💡 Hint</h3>
          <p className="text-gray-300">{problem.hint}</p>
        </div>
      )}

      {/* Explanation */}
      {showExplanation && (
        <div className="bg-blue-500/10 rounded-2xl border border-blue-500/20 p-6 md:p-8 animate-fadeIn">
          <h3 className="text-xl font-bold text-blue-400 mb-4">📖 Explanation</h3>
          <p className="text-gray-300 whitespace-pre-line">{problem.explanation}</p>
        </div>
      )}

      {/* Solution */}
      {showSolution && (
        <div className="bg-green-500/10 rounded-2xl border border-green-500/20 p-6 md:p-8 animate-fadeIn">
          <h3 className="text-xl font-bold text-green-400 mb-4">✨ Solution</h3>
          <pre className="bg-dark-800 rounded-xl p-6 overflow-x-auto">
            <code className="text-gray-300 text-sm font-mono whitespace-pre">
              {problem.solution}
            </code>
          </pre>
        </div>
      )}
    </div>
  );
};

export default Interactive;
