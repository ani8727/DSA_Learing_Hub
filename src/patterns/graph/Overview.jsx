import { useOutletContext } from 'react-router-dom';

const Overview = () => {
  const { pattern } = useOutletContext();

  return (
    <div className="space-y-8">
      <div className="bg-dark-700 rounded-2xl border border-dark-500 p-6 md:p-8">
        <h2 className="text-2xl font-bold text-white mb-4">What are Graph Algorithms?</h2>
        <p className="text-gray-300 leading-relaxed mb-6">
          Graphs are versatile data structures consisting of vertices (nodes) and edges connecting them. 
          Graph algorithms solve problems related to traversal, shortest paths, connectivity, and optimization.
        </p>
        <p className="text-gray-300 leading-relaxed">
          Mastering graph algorithms is essential as many real-world problems (social networks, maps, 
          dependencies) can be modeled as graphs.
        </p>
      </div>

      <div className="bg-dark-700 rounded-2xl border border-dark-500 p-6 md:p-8">
        <h2 className="text-2xl font-bold text-white mb-4">When to Use Graph Patterns</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {['Shortest path problems', 'Network flow and connectivity', 'Topological sorting', 'Detecting cycles', 'Minimum spanning trees', 'Bipartite graph checking'].map((item, index) => (
            <div key={index} className="flex items-start space-x-3 p-4 bg-dark-600 rounded-xl">
              <span className="w-6 h-6 rounded-full bg-accent-primary/20 text-accent-primary flex items-center justify-center flex-shrink-0 text-sm">✓</span>
              <span className="text-gray-300">{item}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-dark-700 rounded-2xl border border-dark-500 p-6 md:p-8">
        <h2 className="text-2xl font-bold text-white mb-4">Key Graph Representations</h2>
        <div className="space-y-4">
          <div className="flex items-start space-x-4">
            <div className="w-10 h-10 rounded-xl bg-green-500/20 text-green-400 flex items-center justify-center flex-shrink-0">📋</div>
            <div>
              <h3 className="text-white font-semibold mb-1">Adjacency List</h3>
              <p className="text-gray-400 text-sm">Array of lists - Space: O(V+E), good for sparse graphs</p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center flex-shrink-0">📊</div>
            <div>
              <h3 className="text-white font-semibold mb-1">Adjacency Matrix</h3>
              <p className="text-gray-400 text-sm">2D array - Space: O(V²), good for dense graphs</p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <div className="w-10 h-10 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center flex-shrink-0">🔗</div>
            <div>
              <h3 className="text-white font-semibold mb-1">Edge List</h3>
              <p className="text-gray-400 text-sm">List of edge pairs - Simple, good for Kruskal's MST</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-br from-accent-primary/10 to-accent-secondary/10 rounded-2xl border border-accent-primary/20 p-6 md:p-8">
        <h2 className="text-2xl font-bold text-white mb-4">💡 Real-World Analogy</h2>
        <p className="text-gray-300 leading-relaxed">
          Think of a city map where intersections are vertices and roads are edges. Finding the shortest route 
          from home to work is a shortest path problem. Determining if you can reach every part of the city 
          is a connectivity problem.
        </p>
      </div>
    </div>
  );
};

export default Overview;
