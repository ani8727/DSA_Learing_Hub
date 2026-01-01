const Theory = () => {
  return (
    <div className="space-y-8">
      {/* Introduction */}
      <div className="bg-dark-700 rounded-2xl border border-dark-500 p-6 md:p-8">
        <h2 className="text-2xl font-bold text-white mb-4">Understanding the Theory</h2>
        <p className="text-gray-300 leading-relaxed">
          The Sliding Window technique is an optimization strategy that reduces the time complexity of algorithms 
          that involve contiguous sequences. By maintaining a "window" of elements and updating it incrementally, 
          we avoid redundant computations.
        </p>
      </div>

      {/* How It Works */}
      <div className="bg-dark-700 rounded-2xl border border-dark-500 p-6 md:p-8">
        <h2 className="text-2xl font-bold text-white mb-6">How It Works</h2>
        
        <div className="space-y-6">
          <div className="flex items-start space-x-4">
            <div className="w-10 h-10 rounded-full bg-accent-primary/20 text-accent-primary flex items-center justify-center font-bold flex-shrink-0">1</div>
            <div>
              <h3 className="text-white font-semibold mb-2">Initialize the Window</h3>
              <p className="text-gray-400">Set up pointers (usually `start` and `end`) to define the window boundaries. Initialize any tracking variables (sum, count, hash map, etc.).</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="w-10 h-10 rounded-full bg-accent-primary/20 text-accent-primary flex items-center justify-center font-bold flex-shrink-0">2</div>
            <div>
              <h3 className="text-white font-semibold mb-2">Expand the Window</h3>
              <p className="text-gray-400">Move the `end` pointer to expand the window and include new elements. Update your tracking variables with the new element.</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="w-10 h-10 rounded-full bg-accent-primary/20 text-accent-primary flex items-center justify-center font-bold flex-shrink-0">3</div>
            <div>
              <h3 className="text-white font-semibold mb-2">Contract the Window (if needed)</h3>
              <p className="text-gray-400">When a condition is violated or window size exceeds limit, move the `start` pointer to shrink the window. Update tracking variables by removing the element that's leaving.</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="w-10 h-10 rounded-full bg-accent-primary/20 text-accent-primary flex items-center justify-center font-bold flex-shrink-0">4</div>
            <div>
              <h3 className="text-white font-semibold mb-2">Update the Result</h3>
              <p className="text-gray-400">At each step, check if the current window satisfies the problem's requirements and update the result accordingly.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Visual Representation */}
      <div className="bg-dark-700 rounded-2xl border border-dark-500 p-6 md:p-8">
        <h2 className="text-2xl font-bold text-white mb-6">Visual Representation</h2>
        
        <div className="bg-dark-800 rounded-xl p-6 font-mono text-sm overflow-x-auto">
          <div className="text-gray-400 mb-4">Array: [1, 3, 2, 6, -1, 4, 1, 8, 2], Window Size K = 5</div>
          
          <div className="space-y-4">
            <div>
              <span className="text-gray-500">Step 1: </span>
              <span className="text-accent-primary">[</span>
              <span className="text-yellow-400">1, 3, 2, 6, -1</span>
              <span className="text-accent-primary">]</span>
              <span className="text-gray-500">, 4, 1, 8, 2</span>
              <span className="text-gray-400 ml-4">→ Sum = 11</span>
            </div>
            <div>
              <span className="text-gray-500">Step 2: </span>
              <span className="text-gray-500">1, </span>
              <span className="text-accent-primary">[</span>
              <span className="text-yellow-400">3, 2, 6, -1, 4</span>
              <span className="text-accent-primary">]</span>
              <span className="text-gray-500">, 1, 8, 2</span>
              <span className="text-gray-400 ml-4">→ Sum = 14</span>
            </div>
            <div>
              <span className="text-gray-500">Step 3: </span>
              <span className="text-gray-500">1, 3, </span>
              <span className="text-accent-primary">[</span>
              <span className="text-yellow-400">2, 6, -1, 4, 1</span>
              <span className="text-accent-primary">]</span>
              <span className="text-gray-500">, 8, 2</span>
              <span className="text-gray-400 ml-4">→ Sum = 12</span>
            </div>
          </div>
        </div>
        <p className="text-gray-400 text-sm mt-4">
          Notice how we slide the window by removing the leftmost element and adding the new rightmost element.
        </p>
      </div>

      {/* Complexity Analysis */}
      <div className="bg-dark-700 rounded-2xl border border-dark-500 p-6 md:p-8">
        <h2 className="text-2xl font-bold text-white mb-6">Complexity Analysis</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-dark-600 rounded-xl p-5">
            <h3 className="text-white font-semibold mb-3 flex items-center">
              <span className="text-green-400 mr-2">⏱️</span> Time Complexity
            </h3>
            <p className="text-gray-300 text-lg font-mono mb-2">O(n)</p>
            <p className="text-gray-400 text-sm">
              Each element is visited at most twice (once when expanding, once when contracting), 
              resulting in linear time complexity.
            </p>
          </div>
          
          <div className="bg-dark-600 rounded-xl p-5">
            <h3 className="text-white font-semibold mb-3 flex items-center">
              <span className="text-blue-400 mr-2">💾</span> Space Complexity
            </h3>
            <p className="text-gray-300 text-lg font-mono mb-2">O(1) or O(k)</p>
            <p className="text-gray-400 text-sm">
              O(1) for simple sum/count problems. O(k) when using a hash map to track 
              k distinct elements in the window.
            </p>
          </div>
        </div>
      </div>

      {/* Key Insights */}
      <div className="bg-gradient-to-br from-accent-primary/10 to-accent-secondary/10 rounded-2xl border border-accent-primary/20 p-6 md:p-8">
        <h2 className="text-2xl font-bold text-white mb-4">🔑 Key Insights</h2>
        <ul className="space-y-3">
          <li className="flex items-start space-x-3">
            <span className="w-2 h-2 rounded-full bg-accent-primary mt-2 flex-shrink-0"></span>
            <span className="text-gray-300">The pattern works because we're dealing with contiguous elements – the order matters!</span>
          </li>
          <li className="flex items-start space-x-3">
            <span className="w-2 h-2 rounded-full bg-accent-primary mt-2 flex-shrink-0"></span>
            <span className="text-gray-300">Fixed windows slide by exactly one position each step; dynamic windows may shrink multiple times per expansion.</span>
          </li>
          <li className="flex items-start space-x-3">
            <span className="w-2 h-2 rounded-full bg-accent-primary mt-2 flex-shrink-0"></span>
            <span className="text-gray-300">Always ask: "What information do I need to track, and how can I update it incrementally?"</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Theory;
