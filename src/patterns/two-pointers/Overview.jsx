import { useOutletContext } from 'react-router-dom';

const Overview = () => {
  const { pattern } = useOutletContext();

  return (
    <div className="space-y-8">
      <div className="bg-dark-700 rounded-2xl border border-dark-500 p-6 md:p-8">
        <h2 className="text-2xl font-bold text-white mb-4">What is the Two Pointers Pattern?</h2>
        <p className="text-gray-300 leading-relaxed mb-6">
          The Two Pointers pattern uses two pointers to iterate through data structures (usually arrays or linked lists). 
          The pointers can move toward each other from opposite ends, move in the same direction at different speeds, 
          or start from the same position and expand outward.
        </p>
        <p className="text-gray-300 leading-relaxed">
          This pattern is extremely efficient for problems involving pairs, triplets, or when you need to compare 
          elements at different positions in a sorted array.
        </p>
      </div>

      <div className="bg-dark-700 rounded-2xl border border-dark-500 p-6 md:p-8">
        <h2 className="text-2xl font-bold text-white mb-4">When to Use This Pattern</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            'Finding pairs in sorted arrays',
            'Removing duplicates in place',
            'Checking palindromes',
            'Comparing strings',
            'Finding triplets with target sum',
            'Container with most water'
          ].map((item, index) => (
            <div key={index} className="flex items-start space-x-3 p-4 bg-dark-600 rounded-xl">
              <span className="w-6 h-6 rounded-full bg-accent-primary/20 text-accent-primary flex items-center justify-center flex-shrink-0 text-sm">✓</span>
              <span className="text-gray-300">{item}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-dark-700 rounded-2xl border border-dark-500 p-6 md:p-8">
        <h2 className="text-2xl font-bold text-white mb-4">Key Characteristics</h2>
        <div className="space-y-4">
          <div className="flex items-start space-x-4">
            <div className="w-10 h-10 rounded-xl bg-green-500/20 text-green-400 flex items-center justify-center flex-shrink-0">⚡</div>
            <div>
              <h3 className="text-white font-semibold mb-1">Time Complexity: O(n)</h3>
              <p className="text-gray-400 text-sm">Linear time by avoiding nested loops</p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center flex-shrink-0">💾</div>
            <div>
              <h3 className="text-white font-semibold mb-1">Space Complexity: O(1)</h3>
              <p className="text-gray-400 text-sm">No extra space needed, operates in-place</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-br from-accent-primary/10 to-accent-secondary/10 rounded-2xl border border-accent-primary/20 p-6 md:p-8">
        <h2 className="text-2xl font-bold text-white mb-4">💡 Real-World Analogy</h2>
        <p className="text-gray-300 leading-relaxed">
          Imagine you're looking for a specific sum in a deck of numbered cards laid out in order. Instead of checking 
          every possible pair (slow!), you put one finger on the smallest card and one on the largest. If the sum is 
          too big, move the right finger left. If too small, move the left finger right. You find the answer in one pass!
        </p>
      </div>
    </div>
  );
};

export default Overview;
