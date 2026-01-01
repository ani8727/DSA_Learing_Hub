import { useState } from 'react';

const Interactive = () => {
  const [showHint, setShowHint] = useState(false);
  const [showSolution, setShowSolution] = useState(false);

  return (
    <div className="space-y-8">
      <div className="bg-dark-700 rounded-2xl border border-dark-500 p-6 md:p-8">
        <span className="px-3 py-1 bg-yellow-500/20 text-yellow-400 rounded-full text-sm font-medium">Interactive Challenge</span>
        <h2 className="text-2xl font-bold text-white mt-4 mb-4">Insert Interval</h2>
        <p className="text-gray-300">Given a sorted list of non-overlapping intervals, insert a new interval and merge if necessary. Return the new list of intervals.</p>
      </div>

      <div className="bg-dark-700 rounded-2xl border border-dark-500 p-6">
        <div className="bg-dark-600 rounded-xl p-4">
          <p><span className="text-gray-500">Input: </span><code className="text-accent-primary">intervals = [[1,3],[6,9]], newInterval = [2,5]</code></p>
          <p><span className="text-gray-500">Output: </span><code className="text-green-400">[[1,5],[6,9]]</code></p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <button onClick={() => setShowHint(!showHint)} className="py-4 px-6 bg-dark-600 border border-dark-500 rounded-xl text-white font-medium hover:bg-dark-500">💡 {showHint ? 'Hide' : 'Show'} Hint</button>
        <button onClick={() => setShowSolution(!showSolution)} className="py-4 px-6 bg-gradient-to-r from-accent-primary to-accent-secondary rounded-xl text-white font-medium">✨ {showSolution ? 'Hide' : 'Reveal'} Solution</button>
      </div>

      {showHint && <div className="bg-yellow-500/10 rounded-2xl border border-yellow-500/20 p-6 animate-fadeIn"><p className="text-gray-300">Divide into three parts: intervals that come before, intervals that overlap (merge), and intervals that come after the new interval.</p></div>}
      {showSolution && <div className="bg-green-500/10 rounded-2xl border border-green-500/20 p-6 animate-fadeIn"><pre className="bg-dark-800 rounded-xl p-6 overflow-x-auto"><code className="text-gray-300 text-sm font-mono">{`function insert(intervals, newInterval) {
  const result = [];
  let i = 0;
  
  // Add all intervals before newInterval
  while (i < intervals.length && intervals[i][1] < newInterval[0]) {
    result.push(intervals[i++]);
  }
  
  // Merge overlapping intervals
  while (i < intervals.length && intervals[i][0] <= newInterval[1]) {
    newInterval[0] = Math.min(newInterval[0], intervals[i][0]);
    newInterval[1] = Math.max(newInterval[1], intervals[i][1]);
    i++;
  }
  result.push(newInterval);
  
  // Add remaining intervals
  while (i < intervals.length) {
    result.push(intervals[i++]);
  }
  return result;
}`}</code></pre></div>}
    </div>
  );
};

export default Interactive;
