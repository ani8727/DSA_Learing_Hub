const Theory = () => {
  return (
    <div className="space-y-8">
      <div className="bg-dark-700 rounded-2xl border border-dark-500 p-6 md:p-8">
        <h2 className="text-2xl font-bold text-white mb-4">Understanding the Theory</h2>
        <p className="text-gray-300 leading-relaxed">
          The Fast & Slow Pointers (Floyd's Cycle Detection) uses the mathematical principle that if two pointers 
          move at different speeds in a cyclic structure, they will eventually meet. The fast pointer moves 2 steps 
          while the slow pointer moves 1 step.
        </p>
      </div>

      <div className="bg-dark-700 rounded-2xl border border-dark-500 p-6 md:p-8">
        <h2 className="text-2xl font-bold text-white mb-6">How Cycle Detection Works</h2>
        <div className="space-y-6">
          <div className="flex items-start space-x-4">
            <div className="w-10 h-10 rounded-full bg-accent-primary/20 text-accent-primary flex items-center justify-center font-bold">1</div>
            <div>
              <h3 className="text-white font-semibold mb-2">Initialize Both Pointers</h3>
              <p className="text-gray-400">Start both slow and fast pointers at the head of the list.</p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <div className="w-10 h-10 rounded-full bg-accent-primary/20 text-accent-primary flex items-center justify-center font-bold">2</div>
            <div>
              <h3 className="text-white font-semibold mb-2">Move at Different Speeds</h3>
              <p className="text-gray-400">Move slow by 1 step, fast by 2 steps in each iteration.</p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <div className="w-10 h-10 rounded-full bg-accent-primary/20 text-accent-primary flex items-center justify-center font-bold">3</div>
            <div>
              <h3 className="text-white font-semibold mb-2">Check for Meeting</h3>
              <p className="text-gray-400">If they meet, there's a cycle. If fast reaches null, no cycle exists.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-dark-700 rounded-2xl border border-dark-500 p-6 md:p-8">
        <h2 className="text-2xl font-bold text-white mb-6">Finding the Cycle Start</h2>
        <p className="text-gray-300 mb-4">After detecting a cycle, to find where it starts:</p>
        <ol className="space-y-2 text-gray-300">
          <li>1. When pointers meet, reset slow to head</li>
          <li>2. Move both pointers one step at a time</li>
          <li>3. The point where they meet is the cycle start</li>
        </ol>
      </div>

      <div className="bg-gradient-to-br from-accent-primary/10 to-accent-secondary/10 rounded-2xl border border-accent-primary/20 p-6 md:p-8">
        <h2 className="text-2xl font-bold text-white mb-4">🔑 Key Insights</h2>
        <ul className="space-y-3">
          <li className="flex items-start space-x-3">
            <span className="w-2 h-2 rounded-full bg-accent-primary mt-2"></span>
            <span className="text-gray-300">Fast pointer covers 2x distance of slow pointer</span>
          </li>
          <li className="flex items-start space-x-3">
            <span className="w-2 h-2 rounded-full bg-accent-primary mt-2"></span>
            <span className="text-gray-300">In a cycle, fast will eventually lap slow and they'll meet</span>
          </li>
          <li className="flex items-start space-x-3">
            <span className="w-2 h-2 rounded-full bg-accent-primary mt-2"></span>
            <span className="text-gray-300">For finding middle: when fast reaches end, slow is at middle</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Theory;
