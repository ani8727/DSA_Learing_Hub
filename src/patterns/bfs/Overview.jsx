import { useOutletContext } from 'react-router-dom';

const Overview = () => {
  const { pattern } = useOutletContext();

  return (
    <div className="space-y-8">
      <div className="bg-dark-700 rounded-2xl border border-dark-500 p-6 md:p-8">
        <h2 className="text-2xl font-bold text-white mb-4">What is Breadth-First Search (BFS)?</h2>
        <p className="text-gray-300 leading-relaxed mb-6">
          BFS is a traversal algorithm that explores all nodes at the current depth level before moving to 
          nodes at the next depth level. It uses a queue to track nodes to visit next.
        </p>
        <p className="text-gray-300 leading-relaxed">
          BFS is ideal for finding the shortest path in unweighted graphs and for level-order traversal of trees.
        </p>
      </div>

      <div className="bg-dark-700 rounded-2xl border border-dark-500 p-6 md:p-8">
        <h2 className="text-2xl font-bold text-white mb-4">When to Use This Pattern</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {['Shortest path in unweighted graph', 'Level-order tree traversal', 'Finding nearest neighbors', 'Multi-source BFS', 'Checking bipartiteness', 'Word ladder problems'].map((item, index) => (
            <div key={index} className="flex items-start space-x-3 p-4 bg-dark-600 rounded-xl">
              <span className="w-6 h-6 rounded-full bg-accent-primary/20 text-accent-primary flex items-center justify-center flex-shrink-0 text-sm">✓</span>
              <span className="text-gray-300">{item}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-dark-700 rounded-2xl border border-dark-500 p-6 md:p-8">
        <h2 className="text-2xl font-bold text-white mb-4">Key Characteristics</h2>
        <div className="space-y-4">
          <div className="flex items-start space-x-4">
            <div className="w-10 h-10 rounded-xl bg-green-500/20 text-green-400 flex items-center justify-center flex-shrink-0">⚡</div>
            <div>
              <h3 className="text-white font-semibold mb-1">Time Complexity: O(V + E)</h3>
              <p className="text-gray-400 text-sm">Visits each vertex and edge once</p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center flex-shrink-0">💾</div>
            <div>
              <h3 className="text-white font-semibold mb-1">Space Complexity: O(V)</h3>
              <p className="text-gray-400 text-sm">Queue can hold up to V vertices</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-br from-accent-primary/10 to-accent-secondary/10 rounded-2xl border border-accent-primary/20 p-6 md:p-8">
        <h2 className="text-2xl font-bold text-white mb-4">💡 Real-World Analogy</h2>
        <p className="text-gray-300 leading-relaxed">
          Imagine ripples spreading from a stone dropped in water. BFS explores outward in layers, like how 
          each ripple expands before the next one forms. First you reach all points 1 step away, then 2 steps, and so on.
        </p>
      </div>
    </div>
  );
};

export default Overview;
