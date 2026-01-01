const Theory = () => {
  return (
    <div className="space-y-8">
      <div className="bg-dark-700 rounded-2xl border border-dark-500 p-6 md:p-8">
        <h2 className="text-2xl font-bold text-white mb-4">Understanding the Theory</h2>
        <p className="text-gray-300 leading-relaxed">
          The Two Pointers technique optimizes algorithms by using two reference points that move through the data structure 
          based on certain conditions. This eliminates the need for nested loops, reducing time complexity from O(n²) to O(n).
        </p>
      </div>

      <div className="bg-dark-700 rounded-2xl border border-dark-500 p-6 md:p-8">
        <h2 className="text-2xl font-bold text-white mb-6">How It Works</h2>
        <div className="space-y-6">
          <div className="flex items-start space-x-4">
            <div className="w-10 h-10 rounded-full bg-accent-primary/20 text-accent-primary flex items-center justify-center font-bold flex-shrink-0">1</div>
            <div>
              <h3 className="text-white font-semibold mb-2">Initialize Pointers</h3>
              <p className="text-gray-400">Place pointers at appropriate positions based on the problem (start/end, both at start, etc.)</p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <div className="w-10 h-10 rounded-full bg-accent-primary/20 text-accent-primary flex items-center justify-center font-bold flex-shrink-0">2</div>
            <div>
              <h3 className="text-white font-semibold mb-2">Compare Elements</h3>
              <p className="text-gray-400">Evaluate the elements at both pointer positions against the problem's condition.</p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <div className="w-10 h-10 rounded-full bg-accent-primary/20 text-accent-primary flex items-center justify-center font-bold flex-shrink-0">3</div>
            <div>
              <h3 className="text-white font-semibold mb-2">Move Pointers</h3>
              <p className="text-gray-400">Based on the comparison, move one or both pointers in the appropriate direction.</p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <div className="w-10 h-10 rounded-full bg-accent-primary/20 text-accent-primary flex items-center justify-center font-bold flex-shrink-0">4</div>
            <div>
              <h3 className="text-white font-semibold mb-2">Repeat Until Done</h3>
              <p className="text-gray-400">Continue until pointers meet or cross, or until the required condition is satisfied.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-dark-700 rounded-2xl border border-dark-500 p-6 md:p-8">
        <h2 className="text-2xl font-bold text-white mb-6">Visual Example: Two Sum in Sorted Array</h2>
        <div className="bg-dark-800 rounded-xl p-6 font-mono text-sm overflow-x-auto">
          <div className="text-gray-400 mb-4">Array: [1, 2, 3, 4, 6], Target: 6</div>
          <div className="space-y-4">
            <div><span className="text-gray-500">Step 1: </span><span className="text-accent-primary">[1</span>, 2, 3, 4, <span className="text-accent-secondary">6]</span> → 1 + 6 = 7 &gt; 6 → move right pointer</div>
            <div><span className="text-gray-500">Step 2: </span><span className="text-accent-primary">[1</span>, 2, 3, <span className="text-accent-secondary">4]</span>, 6 → 1 + 4 = 5 &lt; 6 → move left pointer</div>
            <div><span className="text-gray-500">Step 3: </span>1, <span className="text-accent-primary">[2</span>, 3, <span className="text-accent-secondary">4]</span>, 6 → 2 + 4 = 6 = Target ✓ Found!</div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-br from-accent-primary/10 to-accent-secondary/10 rounded-2xl border border-accent-primary/20 p-6 md:p-8">
        <h2 className="text-2xl font-bold text-white mb-4">🔑 Key Insights</h2>
        <ul className="space-y-3">
          <li className="flex items-start space-x-3">
            <span className="w-2 h-2 rounded-full bg-accent-primary mt-2 flex-shrink-0"></span>
            <span className="text-gray-300">Works best on sorted arrays or when order doesn't matter for the result</span>
          </li>
          <li className="flex items-start space-x-3">
            <span className="w-2 h-2 rounded-full bg-accent-primary mt-2 flex-shrink-0"></span>
            <span className="text-gray-300">The movement direction of pointers depends on how current values compare to target</span>
          </li>
          <li className="flex items-start space-x-3">
            <span className="w-2 h-2 rounded-full bg-accent-primary mt-2 flex-shrink-0"></span>
            <span className="text-gray-300">Can be combined with sorting as preprocessing step for O(n log n) total</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Theory;
