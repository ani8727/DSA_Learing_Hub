const Types = () => {
  const types = [
    { name: 'Shortest Path', description: 'Find minimum distance between vertices.', examples: ['Network Delay Time', 'Cheapest Flights'], color: 'from-green-500/20 to-green-600/20', borderColor: 'border-green-500/30' },
    { name: 'Topological Sort', description: 'Order tasks with dependencies.', examples: ['Course Schedule', 'Alien Dictionary'], color: 'from-blue-500/20 to-blue-600/20', borderColor: 'border-blue-500/30' },
    { name: 'Cycle Detection', description: 'Find cycles in directed/undirected graphs.', examples: ['Course Schedule', 'Graph Valid Tree'], color: 'from-purple-500/20 to-purple-600/20', borderColor: 'border-purple-500/30' },
    { name: 'Minimum Spanning Tree', description: 'Connect all vertices with minimum total edge weight.', examples: ['Min Cost to Connect Points'], color: 'from-orange-500/20 to-orange-600/20', borderColor: 'border-orange-500/30' }
  ];

  return (
    <div className="space-y-8">
      <div className="bg-dark-700 rounded-2xl border border-dark-500 p-6 md:p-8">
        <h2 className="text-2xl font-bold text-white mb-4">Types of Graph Problems</h2>
        <p className="text-gray-300">Different categories of graph algorithm problems.</p>
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
