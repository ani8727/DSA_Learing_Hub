const Types = () => {
  const types = [
    { name: 'Find Missing Number', description: 'Find the one missing number from range [0,n] or [1,n].', examples: ['Missing Number', 'Find Missing Number'], color: 'from-green-500/20 to-green-600/20', borderColor: 'border-green-500/30' },
    { name: 'Find All Missing', description: 'Find all missing numbers from the range.', examples: ['Find All Numbers Disappeared in an Array'], color: 'from-blue-500/20 to-blue-600/20', borderColor: 'border-blue-500/30' },
    { name: 'Find Duplicate', description: 'Find the duplicate number in the array.', examples: ['Find the Duplicate Number', 'Find All Duplicates'], color: 'from-purple-500/20 to-purple-600/20', borderColor: 'border-purple-500/30' },
    { name: 'First Missing Positive', description: 'Find the smallest positive integer not in array.', examples: ['First Missing Positive'], color: 'from-red-500/20 to-red-600/20', borderColor: 'border-red-500/30' }
  ];

  return (
    <div className="space-y-8">
      <div className="bg-dark-700 rounded-2xl border border-dark-500 p-6 md:p-8">
        <h2 className="text-2xl font-bold text-white mb-4">Types of Cyclic Sort Problems</h2>
        <p className="text-gray-300">Different variations of the cyclic sort pattern.</p>
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
