import { Link } from 'react-router-dom';

const Problems = () => {
  const problems = [
    { id: 1, title: 'Missing Number', difficulty: 'Easy', description: 'Find the missing number in range [0,n].', tags: ['Find Missing'] },
    { id: 2, title: 'Find All Numbers Disappeared in Array', difficulty: 'Easy', description: 'Find all missing numbers from [1,n].', tags: ['Find All Missing'] },
    { id: 3, title: 'Find the Duplicate Number', difficulty: 'Medium', description: 'Find the one duplicate in array of [1,n].', tags: ['Find Duplicate'] },
    { id: 4, title: 'First Missing Positive', difficulty: 'Hard', description: 'Find smallest missing positive integer.', tags: ['First Missing Positive'] },
  ];

  return (
    <div className="space-y-8">
      <div className="bg-dark-700 rounded-2xl border border-dark-500 p-6 md:p-8">
        <h2 className="text-2xl font-bold text-white mb-4">Practice Problems</h2>
        <p className="text-gray-300">Master the Cyclic Sort pattern with these problems.</p>
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
            <div className="flex items-center justify-between">
              <div className="flex flex-wrap gap-2">
                {problem.tags.map((tag, idx) => (<span key={idx} className="px-3 py-1 bg-dark-600 rounded-lg text-xs text-gray-300">{tag}</span>))}
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
