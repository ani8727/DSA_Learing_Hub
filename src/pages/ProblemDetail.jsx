// ProblemDetail.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProblemDetail = () => {
  const { problemId } = useParams();
  const [problem, setProblem] = useState(null);

  useEffect(() => {
    // Load problem data
    if (problemId === 'max-sum-subarray-k') {
      setProblem({
        id: 'max-sum-subarray-k',
        title: 'Maximum Sum Subarray of Size K',
        difficulty: 'Easy',
        approach: ['Calculate initial window sum', 'Slide window by removing left and adding right', 'Track maximum'],
        complexity: { time: 'O(n)', space: 'O(1)' }
      });
    }
  }, [problemId]);

  if (!problem) return <div>Loading...</div>;

  return (
    <div>
      <h1>{problem.title}</h1>
      <p><strong>Difficulty:</strong> {problem.difficulty}</p>
      <h2>Approach</h2>
      <ol>
        {problem.approach.map((step, idx) => <li key={idx}>{step}</li>)}
      </ol>
      <h2>Complexity</h2>
      <p>Time: {problem.complexity.time}, Space: {problem.complexity.space}</p>
      {/* Add code block here */}
    </div>
  );
};

export default ProblemDetail;
