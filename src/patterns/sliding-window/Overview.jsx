import { useOutletContext } from 'react-router-dom';

const Overview = () => {
  const { pattern } = useOutletContext();

  return (
    <div className="space-y-8">
      {/* Introduction Card */}
      <div className="bg-dark-700 rounded-2xl border border-dark-500 p-6 md:p-8">
        <h2 className="text-2xl font-bold text-white mb-4">What is the Sliding Window Pattern?</h2>
        <p className="text-gray-300 leading-relaxed mb-6">
          The Sliding Window pattern is used to perform operations on a specific window size of an array or linked list. 
          This technique involves maintaining a subset of data in a window that slides through the larger dataset, 
          updating the window's contents as it moves.
        </p>
        <p className="text-gray-300 leading-relaxed">
          Think of it like looking through a window at a train passing by – you can only see a portion of the train at any time, 
          but the window "slides" to reveal new parts as the train moves.
        </p>
      </div>

      {/* When to Use */}
      <div className="bg-dark-700 rounded-2xl border border-dark-500 p-6 md:p-8">
        <h2 className="text-2xl font-bold text-white mb-4">When to Use This Pattern</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            'Finding subarrays or substrings with certain properties',
            'Maximum/minimum sum of subarrays of size K',
            'Longest substring with K distinct characters',
            'Finding anagrams in a string',
            'Smallest subarray with a given sum',
            'String permutation matching'
          ].map((item, index) => (
            <div key={index} className="flex items-start space-x-3 p-4 bg-dark-600 rounded-xl">
              <span className="w-6 h-6 rounded-full bg-accent-primary/20 text-accent-primary flex items-center justify-center flex-shrink-0 text-sm">✓</span>
              <span className="text-gray-300">{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Key Characteristics */}
      <div className="bg-dark-700 rounded-2xl border border-dark-500 p-6 md:p-8">
        <h2 className="text-2xl font-bold text-white mb-4">Key Characteristics</h2>
        <div className="space-y-4">
          <div className="flex items-start space-x-4">
            <div className="w-10 h-10 rounded-xl bg-green-500/20 text-green-400 flex items-center justify-center flex-shrink-0">
              <span className="text-xl">⚡</span>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-1">Time Complexity: O(n)</h3>
              <p className="text-gray-400 text-sm">Converts O(n²) brute force approaches to linear time solutions</p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center flex-shrink-0">
              <span className="text-xl">💾</span>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-1">Space Complexity: O(1) to O(k)</h3>
              <p className="text-gray-400 text-sm">Minimal extra space, sometimes a hash map for character frequencies</p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <div className="w-10 h-10 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center flex-shrink-0">
              <span className="text-xl">🔄</span>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-1">Window Types</h3>
              <p className="text-gray-400 text-sm">Can be fixed-size or dynamic (growing/shrinking based on conditions)</p>
            </div>
          </div>
        </div>
      </div>

      {/* Prerequisites */}
      <div className="bg-dark-700 rounded-2xl border border-dark-500 p-6 md:p-8">
        <h2 className="text-2xl font-bold text-white mb-4">Prerequisites</h2>
        <div className="flex flex-wrap gap-3">
          {pattern.prerequisites.map((prereq, index) => (
            <span key={index} className="px-4 py-2 bg-dark-600 rounded-xl text-gray-300 border border-dark-500">
              {prereq}
            </span>
          ))}
        </div>
      </div>

      {/* Real-World Analogy */}
      <div className="bg-gradient-to-br from-accent-primary/10 to-accent-secondary/10 rounded-2xl border border-accent-primary/20 p-6 md:p-8">
        <h2 className="text-2xl font-bold text-white mb-4">💡 Real-World Analogy</h2>
        <p className="text-gray-300 leading-relaxed">
          Imagine you're calculating the moving average of stock prices over the last 5 days. Instead of recalculating 
          the sum of all 5 prices each day, you can simply subtract yesterday's oldest price and add today's new price. 
          This is exactly how the sliding window works – you "slide" the window forward by removing the element at the 
          start and adding the new element at the end.
        </p>
      </div>
    </div>
  );
};

export default Overview;
