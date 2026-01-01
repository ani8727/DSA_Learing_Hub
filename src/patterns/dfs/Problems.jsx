import { Link } from 'react-router-dom';

const Problems = () => {
  const problems = [
    { id: 1, title: 'Binary Tree Inorder Traversal', difficulty: 'Easy', description: 'Return inorder traversal of tree.', tags: ['Tree Traversal'] },
    { id: 2, title: 'Path Sum', difficulty: 'Easy', description: 'Check if path with target sum exists.', tags: ['Path Finding'] },
    { id: 3, title: 'Number of Islands', difficulty: 'Medium', description: 'Count islands in 2D grid.', tags: ['Graph Exploration'] },
    { id: 4, title: 'Permutations', difficulty: 'Medium', description: 'Generate all permutations.', tags: ['Backtracking'] },
  ];

  return (
    <div className="space-y-8">
      <div className="bg-dark-700 rounded-2xl border border-dark-500 p-6 md:p-8">
        <h2 className="text-2xl font-bold text-white mb-4">Practice Problems</h2>
        <p className="text-gray-300">Master DFS with these problems.</p>
      </div>

      <div className="space-y-4">
        {problems.map((problem) => (
          <div key={problem.id} className="bg-dark-700 rounded-2xl border border-dark-500 p-6 hover:border-accent-primary/50 transition-all">
            <div className="flex items-center space-x-3 mb-2">
              <span className="text-gray-500">#{problem.id}</span>
              <h3 className="text-xl font-bold text-white">{problem.title}</h3>
              <span className={`px-3 py-1 rounded-full text-xs font-medium ${problem.difficulty === 'Easy' ? 'badge-easy' : 'badge-medium'}`}>{problem.difficulty}</span>
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
