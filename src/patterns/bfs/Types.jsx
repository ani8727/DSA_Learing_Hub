const Types = () => {
  const types = [
    { name: 'Level-Order Traversal', description: 'Process tree nodes level by level.', examples: ['Binary Tree Level Order', 'Average of Levels'], color: 'from-green-500/20 to-green-600/20', borderColor: 'border-green-500/30' },
    { name: 'Shortest Path', description: 'Find shortest path in unweighted graph/grid.', examples: ['Shortest Path in Binary Matrix', 'Word Ladder'], color: 'from-blue-500/20 to-blue-600/20', borderColor: 'border-blue-500/30' },
    { name: 'Multi-Source BFS', description: 'Start BFS from multiple sources simultaneously.', examples: ['Rotting Oranges', '01 Matrix'], color: 'from-purple-500/20 to-purple-600/20', borderColor: 'border-purple-500/30' },
    { name: 'Graph Traversal', description: 'Explore all connected nodes in a graph.', examples: ['Clone Graph', 'Number of Islands'], color: 'from-orange-500/20 to-orange-600/20', borderColor: 'border-orange-500/30' }
  ];

  return (
    <div className="space-y-8">
      <div className="bg-dark-700 rounded-2xl border border-dark-500 p-6 md:p-8">
        <h2 className="text-2xl font-bold text-white mb-4">Types of BFS Problems</h2>
        <p className="text-gray-300">Different applications of Breadth-First Search.</p>
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
