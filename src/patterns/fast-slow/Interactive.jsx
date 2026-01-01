import { useState } from 'react';

const Interactive = () => {
  const [showHint, setShowHint] = useState(false);
  const [showSolution, setShowSolution] = useState(false);

  return (
    <div className="space-y-8">
      <div className="bg-dark-700 rounded-2xl border border-dark-500 p-6 md:p-8">
        <span className="px-3 py-1 bg-yellow-500/20 text-yellow-400 rounded-full text-sm font-medium">Interactive Challenge</span>
        <h2 className="text-2xl font-bold text-white mt-4 mb-4">Find the Duplicate Number</h2>
        <p className="text-gray-300">Given an array nums containing n + 1 integers where each integer is in range [1, n], find the duplicate. There is only one duplicate but it could appear more than once.</p>
      </div>

      <div className="bg-dark-700 rounded-2xl border border-dark-500 p-6">
        <div className="bg-dark-600 rounded-xl p-4">
          <p><span className="text-gray-500">Input: </span><code className="text-accent-primary">nums = [1,3,4,2,2]</code></p>
          <p><span className="text-gray-500">Output: </span><code className="text-green-400">2</code></p>
        </div>
      </div>

      <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/10 rounded-2xl border border-blue-500/20 p-6">
        <h3 className="text-xl font-bold text-white mb-4">🤔 Think About It</h3>
        <p className="text-gray-300">How can you treat the array as a linked list? What would following arr[i] as the next pointer create?</p>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <button onClick={() => setShowHint(!showHint)} className="py-4 px-6 bg-dark-600 border border-dark-500 rounded-xl text-white font-medium hover:bg-dark-500">💡 {showHint ? 'Hide' : 'Show'} Hint</button>
        <button onClick={() => setShowSolution(!showSolution)} className="py-4 px-6 bg-gradient-to-r from-accent-primary to-accent-secondary rounded-xl text-white font-medium">✨ {showSolution ? 'Hide' : 'Reveal'} Solution</button>
      </div>

      {showHint && <div className="bg-yellow-500/10 rounded-2xl border border-yellow-500/20 p-6 animate-fadeIn"><p className="text-gray-300">Treat each value as a pointer to the next index. Since there's a duplicate, following these pointers creates a cycle. Use Floyd's algorithm!</p></div>}
      {showSolution && <div className="bg-green-500/10 rounded-2xl border border-green-500/20 p-6 animate-fadeIn"><pre className="bg-dark-800 rounded-xl p-6 overflow-x-auto"><code className="text-gray-300 text-sm font-mono">{`function findDuplicate(nums) {
  let slow = nums[0], fast = nums[0];
  do {
    slow = nums[slow];
    fast = nums[nums[fast]];
  } while (slow !== fast);
  
  slow = nums[0];
  while (slow !== fast) {
    slow = nums[slow];
    fast = nums[fast];
  }
  return slow;
}`}</code></pre></div>}
    </div>
  );
};

export default Interactive;
