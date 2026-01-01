import { Link } from 'react-router-dom';

const Problems = () => {
  const problems = [
    { id: 1, title: 'Two Sum II - Sorted Array', difficulty: 'Easy', description: 'Find two numbers in sorted array that add up to target.', input: 'numbers = [2,7,11,15], target = 9', output: '[1, 2]', explanation: 'numbers[0] + numbers[1] = 2 + 7 = 9', tags: ['Converging Pointers'] },
    { id: 2, title: 'Remove Duplicates from Sorted Array', difficulty: 'Easy', description: 'Remove duplicates in-place and return new length.', input: 'nums = [1,1,2]', output: '2, nums = [1,2,_]', explanation: 'Return 2, with first two elements being 1 and 2.', tags: ['Same Direction'] },
    { id: 3, title: 'Three Sum', difficulty: 'Medium', description: 'Find all unique triplets that sum to zero.', input: 'nums = [-1,0,1,2,-1,-4]', output: '[[-1,-1,2],[-1,0,1]]', explanation: 'Two unique triplets sum to 0.', tags: ['Converging Pointers'] },
    { id: 4, title: 'Container With Most Water', difficulty: 'Medium', description: 'Find two lines that form container with most water.', input: 'height = [1,8,6,2,5,4,8,3,7]', output: '49', explanation: 'Lines at index 1 and 8 form container with area 49.', tags: ['Converging Pointers'] },
  ];

  return (
    <div className="space-y-8">
      <div className="bg-dark-700 rounded-2xl border border-dark-500 p-6 md:p-8">
        <h2 className="text-2xl font-bold text-white mb-4">Practice Problems</h2>
        <p className="text-gray-300">Master the Two Pointers pattern with these problems.</p>
      </div>

      <div className="space-y-4">
        {problems.map((problem) => (
          <div key={problem.id} className="bg-dark-700 rounded-2xl border border-dark-500 p-6 hover:border-accent-primary/50 transition-all">
            <div className="flex items-center space-x-3 mb-2">
              <span className="text-gray-500">#{problem.id}</span>
              <h3 className="text-xl font-bold text-white">{problem.title}</h3>
              <span className={`px-3 py-1 rounded-full text-xs font-medium ${problem.difficulty === 'Easy' ? 'badge-easy' : problem.difficulty === 'Medium' ? 'badge-medium' : 'badge-hard'}`}>{problem.difficulty}</span>
            </div>
            <p className="text-gray-400 mb-4">{problem.description}</p>
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div className="bg-dark-600 rounded-xl p-4">
                <p className="text-gray-500 text-sm mb-2">Input:</p>
                <code className="text-accent-primary text-sm">{problem.input}</code>
              </div>
              <div className="bg-dark-600 rounded-xl p-4">
                <p className="text-gray-500 text-sm mb-2">Output:</p>
                <code className="text-green-400 text-sm">{problem.output}</code>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex flex-wrap gap-2">
                {problem.tags.map((tag, idx) => (
                  <span key={idx} className="px-3 py-1 bg-dark-600 rounded-lg text-xs text-gray-300">{tag}</span>
                ))}
              </div>
              <Link to="../code" className="text-accent-primary hover:text-accent-secondary transition-colors">View Solution →</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Problems;
