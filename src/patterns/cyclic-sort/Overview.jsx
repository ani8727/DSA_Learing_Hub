import { useOutletContext } from 'react-router-dom';

const Overview = () => {
  const { pattern } = useOutletContext();

  return (
    <div className="space-y-8">
      <div className="bg-dark-700 rounded-2xl border border-dark-500 p-6 md:p-8">
        <h2 className="text-2xl font-bold text-white mb-4">What is the Cyclic Sort Pattern?</h2>
        <p className="text-gray-300 leading-relaxed mb-6">
          Cyclic Sort is an optimal technique to solve problems involving arrays containing numbers in a given range. 
          If we have numbers from 1 to n, we can place each number at its correct index (number 1 at index 0, etc.).
        </p>
        <p className="text-gray-300 leading-relaxed">
          This pattern achieves O(n) time with O(1) space by iterating through the array and swapping each number 
          to its correct position.
        </p>
      </div>

      <div className="bg-dark-700 rounded-2xl border border-dark-500 p-6 md:p-8">
        <h2 className="text-2xl font-bold text-white mb-4">When to Use This Pattern</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {['Finding missing numbers', 'Finding duplicate numbers', 'Finding corrupt pair', 'First missing positive', 'Numbers in range [1,n]', 'Numbers in range [0,n]'].map((item, index) => (
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
              <p className="text-gray-400 text-sm">Each number is swapped at most once</p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center flex-shrink-0">💾</div>
            <div>
              <h3 className="text-white font-semibold mb-1">Space Complexity: O(1)</h3>
              <p className="text-gray-400 text-sm">In-place sorting, no extra space needed</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-br from-accent-primary/10 to-accent-secondary/10 rounded-2xl border border-accent-primary/20 p-6 md:p-8">
        <h2 className="text-2xl font-bold text-white mb-4">💡 Real-World Analogy</h2>
        <p className="text-gray-300 leading-relaxed">
          Imagine organizing numbered books on a shelf where book #1 goes in slot #1, book #2 in slot #2, etc. 
          You go through each slot, and if the book there isn't the right one, you swap it with the book in 
          its correct slot. Eventually, all books are in order!
        </p>
      </div>
    </div>
  );
};

export default Overview;
