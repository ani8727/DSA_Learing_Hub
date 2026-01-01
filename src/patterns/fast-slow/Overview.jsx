import { useOutletContext } from 'react-router-dom';

const Overview = () => {
  const { pattern } = useOutletContext();

  return (
    <div className="space-y-8">
      <div className="bg-dark-700 rounded-2xl border border-dark-500 p-6 md:p-8">
        <h2 className="text-2xl font-bold text-white mb-4">What is the Fast & Slow Pointers Pattern?</h2>
        <p className="text-gray-300 leading-relaxed mb-6">
          Also known as the Tortoise and Hare algorithm, this pattern uses two pointers that move at different speeds 
          through a data structure. The fast pointer moves twice as fast as the slow pointer.
        </p>
        <p className="text-gray-300 leading-relaxed">
          This technique is particularly useful for detecting cycles in linked lists or arrays, finding the middle 
          element of a linked list, and solving problems involving circular arrays.
        </p>
      </div>

      <div className="bg-dark-700 rounded-2xl border border-dark-500 p-6 md:p-8">
        <h2 className="text-2xl font-bold text-white mb-4">When to Use This Pattern</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {['Cycle detection in linked list', 'Finding middle of linked list', 'Detecting cycle start point', 'Happy number problem', 'Palindrome linked list', 'Cycle in circular array'].map((item, index) => (
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
              <p className="text-gray-400 text-sm">Linear time to detect cycle or find middle</p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center flex-shrink-0">💾</div>
            <div>
              <h3 className="text-white font-semibold mb-1">Space Complexity: O(1)</h3>
              <p className="text-gray-400 text-sm">Only two pointers needed, constant space</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-br from-accent-primary/10 to-accent-secondary/10 rounded-2xl border border-accent-primary/20 p-6 md:p-8">
        <h2 className="text-2xl font-bold text-white mb-4">💡 Real-World Analogy</h2>
        <p className="text-gray-300 leading-relaxed">
          Imagine two runners on a circular track. If one runs twice as fast as the other, they will eventually meet 
          again at some point on the track. This is exactly how we detect cycles - if there's a cycle, the fast pointer 
          will eventually catch up to the slow pointer!
        </p>
      </div>
    </div>
  );
};

export default Overview;
