const Types = () => {
  const types = [
    { name: 'Cycle Detection', description: 'Detect if a cycle exists in linked list or sequence.', examples: ['Linked List Cycle', 'Happy Number'], color: 'from-green-500/20 to-green-600/20', borderColor: 'border-green-500/30' },
    { name: 'Find Middle Element', description: 'Find the middle node of a linked list in one pass.', examples: ['Middle of Linked List', 'Reorder List'], color: 'from-blue-500/20 to-blue-600/20', borderColor: 'border-blue-500/30' },
    { name: 'Find Cycle Start', description: 'Find where a cycle begins after detecting it.', examples: ['Linked List Cycle II', 'Find Duplicate Number'], color: 'from-purple-500/20 to-purple-600/20', borderColor: 'border-purple-500/30' }
  ];

  return (
    <div className="space-y-8">
      <div className="bg-dark-700 rounded-2xl border border-dark-500 p-6 md:p-8">
        <h2 className="text-2xl font-bold text-white mb-4">Types of Fast & Slow Pointer Problems</h2>
        <p className="text-gray-300">Different applications of the tortoise and hare algorithm.</p>
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
