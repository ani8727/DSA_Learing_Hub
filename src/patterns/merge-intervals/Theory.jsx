const Theory = () => {
  return (
    <div className="space-y-8">
      <div className="bg-dark-700 rounded-2xl border border-dark-500 p-6 md:p-8">
        <h2 className="text-2xl font-bold text-white mb-4">Understanding the Theory</h2>
        <p className="text-gray-300 leading-relaxed">
          The core idea is: two intervals overlap if one starts before the other ends. By sorting intervals 
          by start time, we can efficiently check overlaps by comparing each interval with the previous one.
        </p>
      </div>

      <div className="bg-dark-700 rounded-2xl border border-dark-500 p-6 md:p-8">
        <h2 className="text-2xl font-bold text-white mb-6">Step-by-Step Approach</h2>
        <div className="space-y-6">
          <div className="flex items-start space-x-4">
            <div className="w-10 h-10 rounded-full bg-accent-primary/20 text-accent-primary flex items-center justify-center font-bold">1</div>
            <div>
              <h3 className="text-white font-semibold mb-2">Sort by Start Time</h3>
              <p className="text-gray-400">Sort all intervals by their start time.</p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <div className="w-10 h-10 rounded-full bg-accent-primary/20 text-accent-primary flex items-center justify-center font-bold">2</div>
            <div>
              <h3 className="text-white font-semibold mb-2">Check for Overlap</h3>
              <p className="text-gray-400">Current interval overlaps with previous if current.start ≤ previous.end.</p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <div className="w-10 h-10 rounded-full bg-accent-primary/20 text-accent-primary flex items-center justify-center font-bold">3</div>
            <div>
              <h3 className="text-white font-semibold mb-2">Merge or Add</h3>
              <p className="text-gray-400">If overlapping, merge by extending the end. Otherwise, add as new interval.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-dark-700 rounded-2xl border border-dark-500 p-6 md:p-8">
        <h2 className="text-2xl font-bold text-white mb-6">Visual Example</h2>
        <div className="bg-dark-600 rounded-xl p-6 font-mono text-sm">
          <p className="text-gray-400 mb-2">Input: [[1,3], [2,6], [8,10], [15,18]]</p>
          <p className="text-gray-300 mb-4">After sorting: [[1,3], [2,6], [8,10], [15,18]]</p>
          <p className="text-gray-300">1. [1,3] - add to result</p>
          <p className="text-gray-300">2. [2,6] overlaps [1,3] → merge to [1,6]</p>
          <p className="text-gray-300">3. [8,10] no overlap → add to result</p>
          <p className="text-gray-300">4. [15,18] no overlap → add to result</p>
          <p className="text-green-400 mt-4">Output: [[1,6], [8,10], [15,18]]</p>
        </div>
      </div>

      <div className="bg-gradient-to-br from-accent-primary/10 to-accent-secondary/10 rounded-2xl border border-accent-primary/20 p-6 md:p-8">
        <h2 className="text-2xl font-bold text-white mb-4">🔑 Key Insights</h2>
        <ul className="space-y-3">
          <li className="flex items-start space-x-3"><span className="w-2 h-2 rounded-full bg-accent-primary mt-2"></span><span className="text-gray-300">Sorting is crucial - makes checking overlaps O(n)</span></li>
          <li className="flex items-start space-x-3"><span className="w-2 h-2 rounded-full bg-accent-primary mt-2"></span><span className="text-gray-300">Two intervals [a,b] and [c,d] overlap if c ≤ b (when sorted)</span></li>
          <li className="flex items-start space-x-3"><span className="w-2 h-2 rounded-full bg-accent-primary mt-2"></span><span className="text-gray-300">Merged interval: [min(a,c), max(b,d)]</span></li>
        </ul>
      </div>
    </div>
  );
};

export default Theory;
