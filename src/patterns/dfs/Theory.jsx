const Theory = () => {
  return (
    <div className="space-y-8">
      <div className="bg-dark-700 rounded-2xl border border-dark-500 p-6 md:p-8">
        <h2 className="text-2xl font-bold text-white mb-4">Understanding the Theory</h2>
        <p className="text-gray-300 leading-relaxed">
          DFS can be implemented recursively (using call stack) or iteratively (using explicit stack). 
          It naturally follows a "go deep, then backtrack" pattern, making it perfect for exhaustive searches.
        </p>
      </div>

      <div className="bg-dark-700 rounded-2xl border border-dark-500 p-6 md:p-8">
        <h2 className="text-2xl font-bold text-white mb-6">Tree Traversal Orders</h2>
        <div className="space-y-4">
          <div className="bg-dark-600 rounded-xl p-4">
            <h3 className="text-white font-semibold mb-2">Pre-order (Root → Left → Right)</h3>
            <p className="text-gray-400">Process node, then children. Good for copying trees.</p>
          </div>
          <div className="bg-dark-600 rounded-xl p-4">
            <h3 className="text-white font-semibold mb-2">In-order (Left → Root → Right)</h3>
            <p className="text-gray-400">Process left, node, right. Gives sorted order for BST.</p>
          </div>
          <div className="bg-dark-600 rounded-xl p-4">
            <h3 className="text-white font-semibold mb-2">Post-order (Left → Right → Root)</h3>
            <p className="text-gray-400">Process children, then node. Good for deletion/evaluation.</p>
          </div>
        </div>
      </div>

      <div className="bg-dark-700 rounded-2xl border border-dark-500 p-6 md:p-8">
        <h2 className="text-2xl font-bold text-white mb-6">Recursive DFS Template</h2>
        <div className="bg-dark-600 rounded-xl p-6 font-mono text-sm">
          <p className="text-gray-300">function dfs(node, visited) {'{'}</p>
          <p className="text-gray-300 ml-4">if (!node || visited.has(node)) return;</p>
          <p className="text-gray-300 ml-4">visited.add(node);</p>
          <p className="text-gray-300 ml-4">// Process node</p>
          <p className="text-gray-300 ml-4">for (neighbor of node.neighbors) {'{'}</p>
          <p className="text-gray-300 ml-8">dfs(neighbor, visited);</p>
          <p className="text-gray-300 ml-4">{'}'}</p>
          <p className="text-gray-300">{'}'}</p>
        </div>
      </div>

      <div className="bg-gradient-to-br from-accent-primary/10 to-accent-secondary/10 rounded-2xl border border-accent-primary/20 p-6 md:p-8">
        <h2 className="text-2xl font-bold text-white mb-4">🔑 Key Insights</h2>
        <ul className="space-y-3">
          <li className="flex items-start space-x-3"><span className="w-2 h-2 rounded-full bg-accent-primary mt-2"></span><span className="text-gray-300">Recursion = implicit stack, Iteration = explicit stack</span></li>
          <li className="flex items-start space-x-3"><span className="w-2 h-2 rounded-full bg-accent-primary mt-2"></span><span className="text-gray-300">DFS doesn't guarantee shortest path</span></li>
          <li className="flex items-start space-x-3"><span className="w-2 h-2 rounded-full bg-accent-primary mt-2"></span><span className="text-gray-300">Use visited set to handle graphs with cycles</span></li>
        </ul>
      </div>
    </div>
  );
};

export default Theory;
