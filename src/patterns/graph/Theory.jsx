const Theory = () => {
  return (
    <div className="space-y-8">
      <div className="bg-dark-700 rounded-2xl border border-dark-500 p-6 md:p-8">
        <h2 className="text-2xl font-bold text-white mb-4">Understanding the Theory</h2>
        <p className="text-gray-300 leading-relaxed">
          Graphs can be directed or undirected, weighted or unweighted, cyclic or acyclic. The choice of 
          algorithm depends on these properties and the problem requirements.
        </p>
      </div>

      <div className="bg-dark-700 rounded-2xl border border-dark-500 p-6 md:p-8">
        <h2 className="text-2xl font-bold text-white mb-6">Key Algorithms</h2>
        <div className="space-y-4">
          <div className="bg-dark-600 rounded-xl p-4">
            <h3 className="text-white font-semibold mb-2">Dijkstra's Algorithm</h3>
            <p className="text-gray-400">Shortest path from source to all vertices (non-negative weights). O((V+E)logV)</p>
          </div>
          <div className="bg-dark-600 rounded-xl p-4">
            <h3 className="text-white font-semibold mb-2">Bellman-Ford</h3>
            <p className="text-gray-400">Shortest path with negative weights, detects negative cycles. O(VE)</p>
          </div>
          <div className="bg-dark-600 rounded-xl p-4">
            <h3 className="text-white font-semibold mb-2">Topological Sort</h3>
            <p className="text-gray-400">Linear ordering of DAG vertices. O(V+E)</p>
          </div>
          <div className="bg-dark-600 rounded-xl p-4">
            <h3 className="text-white font-semibold mb-2">Floyd-Warshall</h3>
            <p className="text-gray-400">All-pairs shortest paths. O(V³)</p>
          </div>
        </div>
      </div>

      <div className="bg-dark-700 rounded-2xl border border-dark-500 p-6 md:p-8">
        <h2 className="text-2xl font-bold text-white mb-6">Topological Sort (Kahn's Algorithm)</h2>
        <div className="bg-dark-600 rounded-xl p-6 font-mono text-sm">
          <p className="text-gray-300">1. Calculate in-degree for all vertices</p>
          <p className="text-gray-300">2. Add all vertices with in-degree 0 to queue</p>
          <p className="text-gray-300">3. While queue not empty:</p>
          <p className="text-gray-300 ml-4">- Remove vertex, add to result</p>
          <p className="text-gray-300 ml-4">- Reduce in-degree of neighbors by 1</p>
          <p className="text-gray-300 ml-4">- If neighbor's in-degree becomes 0, add to queue</p>
          <p className="text-gray-300">4. If result.length !== V, cycle exists!</p>
        </div>
      </div>

      <div className="bg-gradient-to-br from-accent-primary/10 to-accent-secondary/10 rounded-2xl border border-accent-primary/20 p-6 md:p-8">
        <h2 className="text-2xl font-bold text-white mb-4">🔑 Key Insights</h2>
        <ul className="space-y-3">
          <li className="flex items-start space-x-3"><span className="w-2 h-2 rounded-full bg-accent-primary mt-2"></span><span className="text-gray-300">BFS for unweighted shortest path, Dijkstra for weighted</span></li>
          <li className="flex items-start space-x-3"><span className="w-2 h-2 rounded-full bg-accent-primary mt-2"></span><span className="text-gray-300">Topological sort only works on DAGs (Directed Acyclic Graphs)</span></li>
          <li className="flex items-start space-x-3"><span className="w-2 h-2 rounded-full bg-accent-primary mt-2"></span><span className="text-gray-300">Use priority queue (min-heap) for Dijkstra's algorithm</span></li>
        </ul>
      </div>
    </div>
  );
};

export default Theory;
