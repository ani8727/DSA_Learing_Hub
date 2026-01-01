const Types = () => {
  const types = [
    {
      name: 'Opposite Direction (Converging)',
      description: 'Pointers start at opposite ends and move toward each other. Most common for pair-finding in sorted arrays.',
      examples: ['Two Sum (sorted)', 'Container with Most Water', 'Valid Palindrome'],
      color: 'from-green-500/20 to-green-600/20',
      borderColor: 'border-green-500/30'
    },
    {
      name: 'Same Direction (Fast/Slow)',
      description: 'Both pointers start at the same end but move at different speeds. Useful for in-place modifications.',
      examples: ['Remove Duplicates', 'Move Zeroes', 'Remove Element'],
      color: 'from-blue-500/20 to-blue-600/20',
      borderColor: 'border-blue-500/30'
    },
    {
      name: 'Expanding Outward',
      description: 'Pointers start at a center point and expand outward. Common for palindrome substring problems.',
      examples: ['Longest Palindromic Substring', 'Palindrome Substrings Count'],
      color: 'from-purple-500/20 to-purple-600/20',
      borderColor: 'border-purple-500/30'
    }
  ];

  return (
    <div className="space-y-8">
      <div className="bg-dark-700 rounded-2xl border border-dark-500 p-6 md:p-8">
        <h2 className="text-2xl font-bold text-white mb-4">Types of Two Pointers</h2>
        <p className="text-gray-300">Different pointer arrangements solve different categories of problems.</p>
      </div>

      <div className="space-y-6">
        {types.map((type, index) => (
          <div key={index} className={`bg-gradient-to-br ${type.color} rounded-2xl border ${type.borderColor} p-6 md:p-8`}>
            <h3 className="text-xl font-bold text-white mb-3">{type.name}</h3>
            <p className="text-gray-300 mb-4">{type.description}</p>
            <div>
              <h4 className="text-white font-semibold mb-2">Example Problems</h4>
              <div className="flex flex-wrap gap-2">
                {type.examples.map((example, idx) => (
                  <span key={idx} className="px-3 py-1 bg-dark-600/50 rounded-lg text-sm text-gray-300">{example}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-gradient-to-br from-accent-primary/10 to-accent-secondary/10 rounded-2xl border border-accent-primary/20 p-6 md:p-8">
        <h2 className="text-2xl font-bold text-white mb-4">🎯 Choosing the Right Type</h2>
        <div className="space-y-4">
          <div className="flex items-start space-x-3">
            <span className="text-green-400 font-bold">Converging:</span>
            <span className="text-gray-300">Finding pairs with specific sum/difference in sorted array</span>
          </div>
          <div className="flex items-start space-x-3">
            <span className="text-blue-400 font-bold">Same Direction:</span>
            <span className="text-gray-300">In-place array modifications, partitioning</span>
          </div>
          <div className="flex items-start space-x-3">
            <span className="text-purple-400 font-bold">Expanding:</span>
            <span className="text-gray-300">Finding palindromes or symmetric patterns</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Types;
