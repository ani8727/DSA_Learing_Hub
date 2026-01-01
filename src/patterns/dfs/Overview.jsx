import { useOutletContext } from 'react-router-dom';

const Overview = () => {
  const { pattern } = useOutletContext();

  return (
    <div className="space-y-8">
      <div className="bg-dark-700 rounded-2xl border border-dark-500 p-6 md:p-8">
        <h2 className="text-2xl font-bold text-white mb-4">What is Depth-First Search (DFS)?</h2>
        <p className="text-gray-300 leading-relaxed mb-6">
          DFS is a traversal algorithm that explores as far as possible along each branch before backtracking. 
          It uses a stack (or recursion) to track the path and naturally visits nodes in depth-first order.
        </p>
        <p className="text-gray-300 leading-relaxed">
          DFS is ideal for path-finding problems, topological sorting, detecting cycles, and exploring all 
          possible paths in a graph or tree.
        </p>
      </div>

      <div className="bg-dark-700 rounded-2xl border border-dark-500 p-6 md:p-8">
        <h2 className="text-2xl font-bold text-white mb-4">When to Use This Pattern</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {['Path finding in maze/grid', 'Tree traversals (pre/in/post)', 'Cycle detection', 'Topological sorting', 'Connected components', 'Backtracking problems'].map((item, index) => (
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
              <p className="text-gray-400 text-sm">Recursion stack can be O(V) deep</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-br from-accent-primary/10 to-accent-secondary/10 rounded-2xl border border-accent-primary/20 p-6 md:p-8">
        <h2 className="text-2xl font-bold text-white mb-4">💡 Real-World Analogy</h2>
        <p className="text-gray-300 leading-relaxed">
          Imagine exploring a maze. DFS is like always taking the leftmost path until you hit a dead end, 
          then backtracking to the last junction and trying the next path. You fully explore one branch 
          before trying another.
        </p>
      </div>
    </div>
  );
};

export default Overview;
