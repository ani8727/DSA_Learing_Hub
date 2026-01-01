const Types = () => {
  const types = [
    {
      name: 'Fixed Size Window',
      description: 'The window size remains constant throughout the algorithm. Used when you need to find something in all subarrays of size k.',
      examples: ['Maximum sum subarray of size k', 'Average of all subarrays of size k', 'Maximum of all subarrays of size k'],
      characteristics: ['Window size is given as input', 'Slide one element at a time', 'Both pointers move together'],
      color: 'from-green-500/20 to-green-600/20',
      borderColor: 'border-green-500/30'
    },
    {
      name: 'Dynamic Size Window',
      description: 'The window size can grow and shrink based on certain conditions. Used when you need to find the smallest/largest subarray satisfying a condition.',
      examples: ['Smallest subarray with sum >= target', 'Longest substring with k distinct characters', 'Longest substring without repeating characters'],
      characteristics: ['Window size varies based on conditions', 'Expand by moving end pointer', 'Contract by moving start pointer'],
      color: 'from-blue-500/20 to-blue-600/20',
      borderColor: 'border-blue-500/30'
    },
    {
      name: 'Window with Hash Map',
      description: 'Uses a hash map to track elements/frequencies within the window. Essential for string problems with character constraints.',
      examples: ['Find all anagrams in string', 'Minimum window substring', 'Longest substring with at most k distinct chars'],
      characteristics: ['Hash map tracks element frequencies', 'Update map when elements enter/leave', 'Check conditions using map'],
      color: 'from-purple-500/20 to-purple-600/20',
      borderColor: 'border-purple-500/30'
    }
  ];

  return (
    <div className="space-y-8">
      {/* Introduction */}
      <div className="bg-dark-700 rounded-2xl border border-dark-500 p-6 md:p-8">
        <h2 className="text-2xl font-bold text-white mb-4">Types of Sliding Window</h2>
        <p className="text-gray-300 leading-relaxed">
          The Sliding Window pattern has several variations based on whether the window size is fixed or dynamic, 
          and what data structures are used to track window contents.
        </p>
      </div>

      {/* Types Grid */}
      <div className="space-y-6">
        {types.map((type, index) => (
          <div 
            key={index} 
            className={`bg-gradient-to-br ${type.color} rounded-2xl border ${type.borderColor} p-6 md:p-8`}
          >
            <h3 className="text-xl font-bold text-white mb-3">{type.name}</h3>
            <p className="text-gray-300 mb-6">{type.description}</p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-white font-semibold mb-3">Example Problems</h4>
                <ul className="space-y-2">
                  {type.examples.map((example, idx) => (
                    <li key={idx} className="flex items-center space-x-2 text-gray-300 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
                      <span>{example}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-3">Characteristics</h4>
                <ul className="space-y-2">
                  {type.characteristics.map((char, idx) => (
                    <li key={idx} className="flex items-center space-x-2 text-gray-300 text-sm">
                      <span className="text-accent-primary">✓</span>
                      <span>{char}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Comparison Table */}
      <div className="bg-dark-700 rounded-2xl border border-dark-500 p-6 md:p-8">
        <h2 className="text-2xl font-bold text-white mb-6">Comparison Table</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-dark-500">
                <th className="pb-4 text-gray-400 font-medium">Aspect</th>
                <th className="pb-4 text-gray-400 font-medium">Fixed Size</th>
                <th className="pb-4 text-gray-400 font-medium">Dynamic Size</th>
              </tr>
            </thead>
            <tbody className="text-gray-300">
              <tr className="border-b border-dark-600">
                <td className="py-4 text-white">Window Size</td>
                <td className="py-4">Constant (k)</td>
                <td className="py-4">Variable</td>
              </tr>
              <tr className="border-b border-dark-600">
                <td className="py-4 text-white">Movement</td>
                <td className="py-4">Both pointers move together</td>
                <td className="py-4">End expands, start contracts</td>
              </tr>
              <tr className="border-b border-dark-600">
                <td className="py-4 text-white">Use Case</td>
                <td className="py-4">Find in ALL k-size subarrays</td>
                <td className="py-4">Find OPTIMAL subarray</td>
              </tr>
              <tr>
                <td className="py-4 text-white">Complexity</td>
                <td className="py-4">O(n)</td>
                <td className="py-4">O(n)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* When to Choose */}
      <div className="bg-gradient-to-br from-accent-primary/10 to-accent-secondary/10 rounded-2xl border border-accent-primary/20 p-6 md:p-8">
        <h2 className="text-2xl font-bold text-white mb-4">🎯 Choosing the Right Type</h2>
        <div className="space-y-4">
          <div className="flex items-start space-x-3">
            <span className="text-green-400 font-bold">Fixed:</span>
            <span className="text-gray-300">When the problem mentions "subarray of size k" or "window of k elements"</span>
          </div>
          <div className="flex items-start space-x-3">
            <span className="text-blue-400 font-bold">Dynamic:</span>
            <span className="text-gray-300">When looking for "smallest/longest subarray" that satisfies a condition</span>
          </div>
          <div className="flex items-start space-x-3">
            <span className="text-purple-400 font-bold">Hash Map:</span>
            <span className="text-gray-300">When tracking characters, frequencies, or distinct elements</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Types;
