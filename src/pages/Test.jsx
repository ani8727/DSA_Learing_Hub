import React from 'react';

const Test = () => {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold gradient-text mb-4">Test Your Knowledge</h1>
        <p className="text-lg text-gray-700 dark:text-gray-400 max-w-2xl mx-auto">
          Challenge yourself with interactive tests and quizzes to reinforce your understanding of DSA patterns.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="card-modern p-6">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">Pattern Recognition</h3>
          <p className="text-gray-700 dark:text-gray-400 mb-4">
            Test your ability to identify common algorithmic patterns in code snippets.
          </p>
          <button className="btn-primary">Start Test</button>
        </div>

        <div className="card-modern p-6">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">Complexity Analysis</h3>
          <p className="text-gray-700 dark:text-gray-400 mb-4">
            Practice calculating time and space complexity for different algorithms.
          </p>
          <button className="btn-primary">Start Test</button>
        </div>

        <div className="card-modern p-6">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">Code Optimization</h3>
          <p className="text-gray-700 dark:text-gray-400 mb-4">
            Learn to optimize code for better performance and efficiency.
          </p>
          <button className="btn-primary">Start Test</button>
        </div>
      </div>

      <div className="card-modern p-8 text-center">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">Coming Soon</h2>
        <p className="text-gray-700 dark:text-gray-400">
          More interactive tests and challenges are being developed. Stay tuned!
        </p>
      </div>
    </div>
  );
};

export default Test;