import { useState } from 'react';

const Interactive = () => {
  const [showHint, setShowHint] = useState(false);
  const [showSolution, setShowSolution] = useState(false);

  return (
    <div className="space-y-8">
      <div className="bg-dark-700 rounded-2xl border border-dark-500 p-6 md:p-8">
        <span className="px-3 py-1 bg-yellow-500/20 text-yellow-400 rounded-full text-sm font-medium">Interactive Challenge</span>
        <h2 className="text-2xl font-bold text-white mt-4 mb-4">Maximum Depth of Binary Tree</h2>
        <p className="text-gray-300">Given the root of a binary tree, return its maximum depth. The maximum depth is the number of nodes along the longest path from root to the farthest leaf.</p>
      </div>

      <div className="bg-dark-700 rounded-2xl border border-dark-500 p-6">
        <div className="bg-dark-600 rounded-xl p-4">
          <p><span className="text-gray-500">Input: </span><code className="text-accent-primary">root = [3,9,20,null,null,15,7]</code></p>
          <p><span className="text-gray-500">Output: </span><code className="text-green-400">3</code></p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <button onClick={() => setShowHint(!showHint)} className="py-4 px-6 bg-dark-600 border border-dark-500 rounded-xl text-white font-medium hover:bg-dark-500">💡 {showHint ? 'Hide' : 'Show'} Hint</button>
        <button onClick={() => setShowSolution(!showSolution)} className="py-4 px-6 bg-gradient-to-r from-accent-primary to-accent-secondary rounded-xl text-white font-medium">✨ {showSolution ? 'Hide' : 'Reveal'} Solution</button>
      </div>

      {showHint && <div className="bg-yellow-500/10 rounded-2xl border border-yellow-500/20 p-6 animate-fadeIn"><p className="text-gray-300">The depth of a node is 1 + max(depth of left subtree, depth of right subtree). Base case: null node has depth 0.</p></div>}
      {showSolution && <div className="bg-green-500/10 rounded-2xl border border-green-500/20 p-6 animate-fadeIn"><pre className="bg-dark-800 rounded-xl p-6 overflow-x-auto"><code className="text-gray-300 text-sm font-mono">{`function maxDepth(root) {
  if (!root) return 0;
  
  const leftDepth = maxDepth(root.left);
  const rightDepth = maxDepth(root.right);
  
  return 1 + Math.max(leftDepth, rightDepth);
}

// Iterative with stack
function maxDepthIterative(root) {
  if (!root) return 0;
  
  const stack = [[root, 1]];
  let maxDepth = 0;
  
  while (stack.length > 0) {
    const [node, depth] = stack.pop();
    maxDepth = Math.max(maxDepth, depth);
    if (node.left) stack.push([node.left, depth + 1]);
    if (node.right) stack.push([node.right, depth + 1]);
  }
  return maxDepth;
}`}</code></pre></div>}
    </div>
  );
};

export default Interactive;
