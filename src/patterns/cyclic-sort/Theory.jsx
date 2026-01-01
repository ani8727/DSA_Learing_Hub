const Theory = () => {
  return (
    <div className="space-y-8">
      <div className="bg-dark-700 rounded-2xl border border-dark-500 p-6 md:p-8">
        <h2 className="text-2xl font-bold text-white mb-4">Understanding the Theory</h2>
        <p className="text-gray-300 leading-relaxed">
          For arrays with numbers in range [1,n] or [0,n], each number has a predetermined correct position. 
          Number i should be at index i-1 (or i for 0-indexed). We swap elements to their correct positions.
        </p>
      </div>

      <div className="bg-dark-700 rounded-2xl border border-dark-500 p-6 md:p-8">
        <h2 className="text-2xl font-bold text-white mb-6">Step-by-Step Approach</h2>
        <div className="space-y-6">
          <div className="flex items-start space-x-4">
            <div className="w-10 h-10 rounded-full bg-accent-primary/20 text-accent-primary flex items-center justify-center font-bold">1</div>
            <div>
              <h3 className="text-white font-semibold mb-2">Iterate Through Array</h3>
              <p className="text-gray-400">Start from index 0 and examine each element.</p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <div className="w-10 h-10 rounded-full bg-accent-primary/20 text-accent-primary flex items-center justify-center font-bold">2</div>
            <div>
              <h3 className="text-white font-semibold mb-2">Check Correct Position</h3>
              <p className="text-gray-400">If current number isn't at its correct index, swap it there.</p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <div className="w-10 h-10 rounded-full bg-accent-primary/20 text-accent-primary flex items-center justify-center font-bold">3</div>
            <div>
              <h3 className="text-white font-semibold mb-2">Move Forward</h3>
              <p className="text-gray-400">Only advance to next index when current position has correct number.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-dark-700 rounded-2xl border border-dark-500 p-6 md:p-8">
        <h2 className="text-2xl font-bold text-white mb-6">Visual Example</h2>
        <div className="bg-dark-600 rounded-xl p-6 font-mono text-sm">
          <p className="text-gray-400 mb-2">Input: [3, 1, 5, 4, 2]</p>
          <p className="text-gray-300">i=0: 3 not at index 2 → swap with index 2 → [5, 1, 3, 4, 2]</p>
          <p className="text-gray-300">i=0: 5 not at index 4 → swap with index 4 → [2, 1, 3, 4, 5]</p>
          <p className="text-gray-300">i=0: 2 not at index 1 → swap with index 1 → [1, 2, 3, 4, 5]</p>
          <p className="text-gray-300">i=0: 1 is at correct index → move to i=1</p>
          <p className="text-green-400 mt-4">Output: [1, 2, 3, 4, 5]</p>
        </div>
      </div>

      <div className="bg-gradient-to-br from-accent-primary/10 to-accent-secondary/10 rounded-2xl border border-accent-primary/20 p-6 md:p-8">
        <h2 className="text-2xl font-bold text-white mb-4">🔑 Key Insights</h2>
        <ul className="space-y-3">
          <li className="flex items-start space-x-3"><span className="w-2 h-2 rounded-full bg-accent-primary mt-2"></span><span className="text-gray-300">Each element is swapped at most once → O(n) time</span></li>
          <li className="flex items-start space-x-3"><span className="w-2 h-2 rounded-full bg-accent-primary mt-2"></span><span className="text-gray-300">Numbers outside range indicate missing/duplicate</span></li>
          <li className="flex items-start space-x-3"><span className="w-2 h-2 rounded-full bg-accent-primary mt-2"></span><span className="text-gray-300">After sorting, positions without correct number reveal the answer</span></li>
        </ul>
      </div>
    </div>
  );
};

export default Theory;
