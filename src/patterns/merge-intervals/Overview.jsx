import { useOutletContext } from 'react-router-dom';

const Overview = () => {
  const { pattern } = useOutletContext();

  return (
    <div className="space-y-8">
      <div className="bg-dark-700 rounded-2xl border border-dark-500 p-6 md:p-8">
        <h2 className="text-2xl font-bold text-white mb-4">What is the Merge Intervals Pattern?</h2>
        <p className="text-gray-300 leading-relaxed mb-6">
          The Merge Intervals pattern deals with overlapping intervals. Given a collection of intervals, 
          this pattern helps merge all overlapping intervals, insert new intervals, or find conflicts.
        </p>
        <p className="text-gray-300 leading-relaxed">
          The key technique is to sort intervals by start time and then iterate through them, merging 
          overlapping ones or identifying gaps.
        </p>
      </div>

      <div className="bg-dark-700 rounded-2xl border border-dark-500 p-6 md:p-8">
        <h2 className="text-2xl font-bold text-white mb-4">When to Use This Pattern</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {['Merge overlapping intervals', 'Insert new interval', 'Interval scheduling conflicts', 'Meeting rooms problems', 'Non-overlapping intervals', 'Interval list intersections'].map((item, index) => (
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
              <h3 className="text-white font-semibold mb-1">Time Complexity: O(n log n)</h3>
              <p className="text-gray-400 text-sm">Sorting dominates, merging is linear</p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center flex-shrink-0">💾</div>
            <div>
              <h3 className="text-white font-semibold mb-1">Space Complexity: O(n)</h3>
              <p className="text-gray-400 text-sm">For storing merged intervals result</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-br from-accent-primary/10 to-accent-secondary/10 rounded-2xl border border-accent-primary/20 p-6 md:p-8">
        <h2 className="text-2xl font-bold text-white mb-4">💡 Real-World Analogy</h2>
        <p className="text-gray-300 leading-relaxed">
          Think of scheduling meetings. If you have meetings from 9-10, 9:30-11, and 11-12, the first two overlap 
          and should be merged into 9-11. This pattern helps you find the actual time blocks you're busy!
        </p>
      </div>
    </div>
  );
};

export default Overview;
