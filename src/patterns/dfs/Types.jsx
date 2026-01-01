const Types = () => {
  const types = [
    { name: 'Tree Traversal', description: 'Pre-order, in-order, post-order traversals.', examples: ['Binary Tree Inorder', 'Validate BST'], color: 'from-green-500/20 to-green-600/20', borderColor: 'border-green-500/30' },
    { name: 'Path Finding', description: 'Find paths from source to target.', examples: ['Path Sum', 'All Paths From Source'], color: 'from-blue-500/20 to-blue-600/20', borderColor: 'border-blue-500/30' },
    { name: 'Backtracking', description: 'Explore all possibilities with pruning.', examples: ['Permutations', 'Subsets', 'N-Queens'], color: 'from-purple-500/20 to-purple-600/20', borderColor: 'border-purple-500/30' },
    { name: 'Graph Exploration', description: 'Connected components, cycle detection.', examples: ['Number of Islands', 'Course Schedule'], color: 'from-orange-500/20 to-orange-600/20', borderColor: 'border-orange-500/30' }
  ];

  return (
    <div className="space-y-8">
      <div className="bg-dark-700 rounded-2xl border border-dark-500 p-6 md:p-8">
        <h2 className="text-2xl font-bold text-white mb-4">Types of DFS Problems</h2>
        <p className="text-gray-300">Different applications of Depth-First Search.</p>
      </div>

      <div className="space-y-6">
        {types.map((type, index) => (
          <div key={index} className={`bg-gradient-to-br ${type.color} rounded-2xl border ${type.borderColor} p-6 md:p-8`}>
            <h3 className="text-xl font-bold text-white mb-3">{type.name}</h3>
            <p className="text-gray-300 mb-4">{type.description}</p>
            <div className="flex flex-wrap gap-2">
              {type.examples.map((example, idx) => (
                <span key={idx} className="px-3 py-1 bg-dark-600/50 rounded-lg text-sm text-gray-300">{example}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Types;
