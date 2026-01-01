import { Link } from 'react-router-dom';

const Problems = () => {
  const problems = [
    {
      id: 1,
      title: 'Maximum Sum Subarray of Size K',
      difficulty: 'Easy',
      description: 'Given an array of positive integers and a positive number k, find the maximum sum of any contiguous subarray of size k.',
      input: 'Array: [2, 1, 5, 1, 3, 2], k = 3',
      output: '9',
      explanation: 'Subarray with maximum sum is [5, 1, 3].',
      tags: ['Fixed Window', 'Array']
    },
    {
      id: 2,
      title: 'Smallest Subarray with Given Sum',
      difficulty: 'Medium',
      description: 'Given an array of positive integers and a positive number S, find the length of the smallest contiguous subarray whose sum is greater than or equal to S.',
      input: 'Array: [2, 1, 5, 2, 3, 2], S = 7',
      output: '2',
      explanation: 'Smallest subarray with sum >= 7 is [5, 2].',
      tags: ['Dynamic Window', 'Array']
    },
    {
      id: 3,
      title: 'Longest Substring with K Distinct Characters',
      difficulty: 'Medium',
      description: 'Given a string, find the length of the longest substring in it with no more than K distinct characters.',
      input: 'String: "araaci", K = 2',
      output: '4',
      explanation: 'The longest substring with at most 2 distinct characters is "araa".',
      tags: ['Dynamic Window', 'Hash Map', 'String']
    },
    {
      id: 4,
      title: 'Fruits into Baskets',
      difficulty: 'Medium',
      description: 'Given an array of characters where each character represents a fruit tree, you have two baskets that can each hold only one type of fruit. Find the maximum number of fruits you can pick.',
      input: 'Fruits: ["A", "B", "C", "A", "C"]',
      output: '3',
      explanation: 'We can put 2 "C" and 1 "A" in the two baskets.',
      tags: ['Dynamic Window', 'Hash Map']
    },
    {
      id: 5,
      title: 'Longest Substring Without Repeating Characters',
      difficulty: 'Medium',
      description: 'Given a string, find the length of the longest substring without any repeating characters.',
      input: 'String: "aabccbb"',
      output: '3',
      explanation: 'The longest substring without repeating characters is "abc".',
      tags: ['Dynamic Window', 'Hash Map', 'String']
    },
    {
      id: 6,
      title: 'Permutation in String',
      difficulty: 'Hard',
      description: 'Given a string and a pattern, find out if the string contains any permutation of the pattern.',
      input: 'String: "oidbcaf", Pattern: "abc"',
      output: 'true',
      explanation: 'The string contains "bca" which is a permutation of "abc".',
      tags: ['Fixed Window', 'Hash Map', 'String']
    }
  ];

  const getDifficultyClass = (difficulty) => {
    switch (difficulty) {
      case 'Easy': return 'badge-easy';
      case 'Medium': return 'badge-medium';
      case 'Hard': return 'badge-hard';
      default: return 'badge-medium';
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-dark-700 rounded-2xl border border-dark-500 p-6 md:p-8">
        <h2 className="text-2xl font-bold text-white mb-4">Practice Problems</h2>
        <p className="text-gray-300">
          Master the Sliding Window pattern by solving these carefully curated problems. 
          Start with easy problems and gradually move to more challenging ones.
        </p>
      </div>

      {/* Problems List */}
      <div className="space-y-4">
        {problems.map((problem) => (
          <div key={problem.id} className="bg-dark-700 rounded-2xl border border-dark-500 p-6 hover:border-accent-primary/50 transition-all">
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-4">
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-2">
                  <span className="text-gray-500">#{problem.id}</span>
                  <h3 className="text-xl font-bold text-white">{problem.title}</h3>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getDifficultyClass(problem.difficulty)}`}>
                    {problem.difficulty}
                  </span>
                </div>
                <p className="text-gray-400">{problem.description}</p>
              </div>
            </div>

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

            <div className="bg-dark-800 rounded-xl p-4 mb-4">
              <p className="text-gray-500 text-sm mb-1">Explanation:</p>
              <p className="text-gray-300 text-sm">{problem.explanation}</p>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap gap-2">
                {problem.tags.map((tag, idx) => (
                  <span key={idx} className="px-3 py-1 bg-dark-600 rounded-lg text-xs text-gray-300">
                    {tag}
                  </span>
                ))}
              </div>
              <Link
                to="../code"
                className="inline-flex items-center space-x-2 text-accent-primary hover:text-accent-secondary transition-colors"
              >
                <span>View Solution</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Tips Section */}
      <div className="bg-gradient-to-br from-accent-primary/10 to-accent-secondary/10 rounded-2xl border border-accent-primary/20 p-6 md:p-8">
        <h2 className="text-2xl font-bold text-white mb-4">💡 Problem-Solving Tips</h2>
        <ul className="space-y-3">
          <li className="flex items-start space-x-3">
            <span className="w-2 h-2 rounded-full bg-accent-primary mt-2 flex-shrink-0"></span>
            <span className="text-gray-300">Identify if the problem involves contiguous elements (subarray/substring)</span>
          </li>
          <li className="flex items-start space-x-3">
            <span className="w-2 h-2 rounded-full bg-accent-primary mt-2 flex-shrink-0"></span>
            <span className="text-gray-300">Determine if window size is fixed or needs to be dynamic</span>
          </li>
          <li className="flex items-start space-x-3">
            <span className="w-2 h-2 rounded-full bg-accent-primary mt-2 flex-shrink-0"></span>
            <span className="text-gray-300">Think about what state you need to track within the window</span>
          </li>
          <li className="flex items-start space-x-3">
            <span className="w-2 h-2 rounded-full bg-accent-primary mt-2 flex-shrink-0"></span>
            <span className="text-gray-300">Always handle edge cases: empty input, window larger than array, etc.</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Problems;
