import { useOutletContext } from 'react-router-dom';

const Overview = () => {
  const { pattern } = useOutletContext();

  return (
    <div className="space-y-8">
      <div className="bg-dark-700 rounded-2xl border border-dark-500 p-6 md:p-8">
        <h2 className="text-2xl font-bold text-white mb-4">What is Union-Find (Disjoint Set)?</h2>
        <p className="text-gray-300 leading-relaxed mb-6">
          Union-Find is a data structure that tracks elements partitioned into disjoint (non-overlapping) sets. 
          It provides near-constant-time operations for adding sets, merging sets, and determining if two elements 
          are in the same set.
        </p>
        <p className="text-gray-300 leading-relaxed">
          It's particularly useful for solving problems involving connectivity, grouping, and detecting cycles in graphs.
        </p>
      </div>

      <div className="bg-dark-700 rounded-2xl border border-dark-500 p-6 md:p-8">
        <h2 className="text-2xl font-bold text-white mb-4">When to Use This Pattern</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {['Dynamic connectivity queries', 'Detecting cycles in undirected graphs', 'Counting connected components', 'Minimum spanning tree (Kruskal)', 'Grouping elements', 'Network connectivity'].map((item, index) => (
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
              <h3 className="text-white font-semibold mb-1">Time Complexity: O(α(n)) ≈ O(1)</h3>
              <p className="text-gray-400 text-sm">Inverse Ackermann function, effectively constant</p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center flex-shrink-0">💾</div>
            <div>
              <h3 className="text-white font-semibold mb-1">Space Complexity: O(n)</h3>
              <p className="text-gray-400 text-sm">Arrays for parent and rank of each element</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-br from-accent-primary/10 to-accent-secondary/10 rounded-2xl border border-accent-primary/20 p-6 md:p-8">
        <h2 className="text-2xl font-bold text-white mb-4">💡 Real-World Analogy</h2>
        <p className="text-gray-300 leading-relaxed">
          Think of social groups. Each person starts in their own group. When two people become friends, their groups 
          merge. To check if two people are connected (directly or through mutual friends), we just check if they're 
          in the same group.
        </p>
      </div>
    </div>
  );
};

export default Overview;
