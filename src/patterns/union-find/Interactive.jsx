import { useState } from 'react';

const Interactive = () => {
  const [showHint, setShowHint] = useState(false);
  const [showSolution, setShowSolution] = useState(false);

  return (
    <div className="space-y-8">
      <div className="bg-dark-700 rounded-2xl border border-dark-500 p-6 md:p-8">
        <span className="px-3 py-1 bg-yellow-500/20 text-yellow-400 rounded-full text-sm font-medium">Interactive Challenge</span>
        <h2 className="text-2xl font-bold text-white mt-4 mb-4">Redundant Connection</h2>
        <p className="text-gray-300">Given a graph that started as a tree with N nodes and one additional edge was added. Find the edge that can be removed to make the graph a tree again. If there are multiple answers, return the edge that appears last.</p>
      </div>

      <div className="bg-dark-700 rounded-2xl border border-dark-500 p-6">
        <div className="bg-dark-600 rounded-xl p-4">
          <p><span className="text-gray-500">Input: </span><code className="text-accent-primary">edges = [[1,2],[1,3],[2,3]]</code></p>
          <p><span className="text-gray-500">Output: </span><code className="text-green-400">[2,3]</code></p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <button onClick={() => setShowHint(!showHint)} className="py-4 px-6 bg-dark-600 border border-dark-500 rounded-xl text-white font-medium hover:bg-dark-500">💡 {showHint ? 'Hide' : 'Show'} Hint</button>
        <button onClick={() => setShowSolution(!showSolution)} className="py-4 px-6 bg-gradient-to-r from-accent-primary to-accent-secondary rounded-xl text-white font-medium">✨ {showSolution ? 'Hide' : 'Reveal'} Solution</button>
      </div>

      {showHint && <div className="bg-yellow-500/10 rounded-2xl border border-yellow-500/20 p-6 animate-fadeIn"><p className="text-gray-300">Process edges one by one. If both nodes are already connected (same root), that edge creates a cycle!</p></div>}
      {showSolution && <div className="bg-green-500/10 rounded-2xl border border-green-500/20 p-6 animate-fadeIn"><pre className="bg-dark-800 rounded-xl p-6 overflow-x-auto"><code className="text-gray-300 text-sm font-mono">{`function findRedundantConnection(edges) {
  const n = edges.length;
  const parent = Array.from({ length: n + 1 }, (_, i) => i);
  
  function find(x) {
    if (parent[x] !== x) {
      parent[x] = find(parent[x]);
    }
    return parent[x];
  }
  
  for (const [u, v] of edges) {
    const rootU = find(u);
    const rootV = find(v);
    
    if (rootU === rootV) {
      return [u, v]; // This edge creates a cycle
    }
    parent[rootU] = rootV; // Union
  }
  return [];
}`}</code></pre></div>}
    </div>
  );
};

export default Interactive;
