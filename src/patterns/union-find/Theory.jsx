const Theory = () => {
  return (
    <div className="space-y-8">
      <div className="bg-dark-700 rounded-2xl border border-dark-500 p-6 md:p-8">
        <h2 className="text-2xl font-bold text-white mb-4">Understanding the Theory</h2>
        <p className="text-gray-300 leading-relaxed">
          Union-Find uses a forest of trees where each tree represents a set. Each element points to its parent, 
          and the root of the tree is the representative of the set. Two elements are in the same set if they 
          have the same root.
        </p>
      </div>

      <div className="bg-dark-700 rounded-2xl border border-dark-500 p-6 md:p-8">
        <h2 className="text-2xl font-bold text-white mb-6">Core Operations</h2>
        <div className="space-y-6">
          <div className="flex items-start space-x-4">
            <div className="w-10 h-10 rounded-full bg-accent-primary/20 text-accent-primary flex items-center justify-center font-bold">1</div>
            <div>
              <h3 className="text-white font-semibold mb-2">Find(x)</h3>
              <p className="text-gray-400">Follow parent pointers to find the root (representative) of x's set.</p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <div className="w-10 h-10 rounded-full bg-accent-primary/20 text-accent-primary flex items-center justify-center font-bold">2</div>
            <div>
              <h3 className="text-white font-semibold mb-2">Union(x, y)</h3>
              <p className="text-gray-400">Merge the sets containing x and y by linking their roots.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-dark-700 rounded-2xl border border-dark-500 p-6 md:p-8">
        <h2 className="text-2xl font-bold text-white mb-6">Optimizations</h2>
        <div className="space-y-4">
          <div className="bg-dark-600 rounded-xl p-4">
            <h3 className="text-white font-semibold mb-2">Path Compression</h3>
            <p className="text-gray-400">During Find, point each visited node directly to root.</p>
          </div>
          <div className="bg-dark-600 rounded-xl p-4">
            <h3 className="text-white font-semibold mb-2">Union by Rank/Size</h3>
            <p className="text-gray-400">Attach smaller tree under root of larger tree.</p>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-br from-accent-primary/10 to-accent-secondary/10 rounded-2xl border border-accent-primary/20 p-6 md:p-8">
        <h2 className="text-2xl font-bold text-white mb-4">🔑 Key Insights</h2>
        <ul className="space-y-3">
          <li className="flex items-start space-x-3"><span className="w-2 h-2 rounded-full bg-accent-primary mt-2"></span><span className="text-gray-300">With both optimizations, operations are nearly O(1)</span></li>
          <li className="flex items-start space-x-3"><span className="w-2 h-2 rounded-full bg-accent-primary mt-2"></span><span className="text-gray-300">Cannot efficiently split/disconnect sets</span></li>
          <li className="flex items-start space-x-3"><span className="w-2 h-2 rounded-full bg-accent-primary mt-2"></span><span className="text-gray-300">Perfect for problems where we only add connections</span></li>
        </ul>
      </div>
    </div>
  );
};

export default Theory;
