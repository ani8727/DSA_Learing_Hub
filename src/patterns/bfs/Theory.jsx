const Theory = () => {
  return (
    <div className="space-y-8">
      <div className="bg-dark-700 rounded-2xl border border-dark-500 p-6 md:p-8">
        <h2 className="text-2xl font-bold text-white mb-4">Understanding the Theory</h2>
        <p className="text-gray-300 leading-relaxed">
          BFS uses a queue (FIFO) to process nodes level by level. When processing a node, we add all its 
          unvisited neighbors to the queue. This guarantees we find the shortest path in unweighted graphs.
        </p>
      </div>

      <div className="bg-dark-700 rounded-2xl border border-dark-500 p-6 md:p-8">
        <h2 className="text-2xl font-bold text-white mb-6">Step-by-Step Approach</h2>
        <div className="space-y-6">
          <div className="flex items-start space-x-4">
            <div className="w-10 h-10 rounded-full bg-accent-primary/20 text-accent-primary flex items-center justify-center font-bold">1</div>
            <div>
              <h3 className="text-white font-semibold mb-2">Initialize</h3>
              <p className="text-gray-400">Create a queue, add start node, mark as visited.</p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <div className="w-10 h-10 rounded-full bg-accent-primary/20 text-accent-primary flex items-center justify-center font-bold">2</div>
            <div>
              <h3 className="text-white font-semibold mb-2">Process Queue</h3>
              <p className="text-gray-400">Dequeue a node and process it (check if target, etc.).</p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <div className="w-10 h-10 rounded-full bg-accent-primary/20 text-accent-primary flex items-center justify-center font-bold">3</div>
            <div>
              <h3 className="text-white font-semibold mb-2">Expand Neighbors</h3>
              <p className="text-gray-400">Add all unvisited neighbors to queue and mark visited.</p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <div className="w-10 h-10 rounded-full bg-accent-primary/20 text-accent-primary flex items-center justify-center font-bold">4</div>
            <div>
              <h3 className="text-white font-semibold mb-2">Repeat</h3>
              <p className="text-gray-400">Continue until queue is empty or target is found.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-dark-700 rounded-2xl border border-dark-500 p-6 md:p-8">
        <h2 className="text-2xl font-bold text-white mb-6">Level-Order Tree Traversal</h2>
        <div className="bg-dark-600 rounded-xl p-6 font-mono text-sm">
          <p className="text-gray-400 mb-2">Tree:      1</p>
          <p className="text-gray-400 mb-2">          / \</p>
          <p className="text-gray-400 mb-2">         2   3</p>
          <p className="text-gray-400 mb-4">        / \   \</p>
          <p className="text-gray-400 mb-4">       4   5   6</p>
          <p className="text-green-400">BFS Result: [[1], [2,3], [4,5,6]]</p>
        </div>
      </div>

      <div className="bg-gradient-to-br from-accent-primary/10 to-accent-secondary/10 rounded-2xl border border-accent-primary/20 p-6 md:p-8">
        <h2 className="text-2xl font-bold text-white mb-4">🔑 Key Insights</h2>
        <ul className="space-y-3">
          <li className="flex items-start space-x-3"><span className="w-2 h-2 rounded-full bg-accent-primary mt-2"></span><span className="text-gray-300">BFS finds shortest path in unweighted graphs</span></li>
          <li className="flex items-start space-x-3"><span className="w-2 h-2 rounded-full bg-accent-primary mt-2"></span><span className="text-gray-300">Track level by processing queue size at each iteration</span></li>
          <li className="flex items-start space-x-3"><span className="w-2 h-2 rounded-full bg-accent-primary mt-2"></span><span className="text-gray-300">Mark visited BEFORE adding to queue to avoid duplicates</span></li>
        </ul>
      </div>
    </div>
  );
};

export default Theory;
