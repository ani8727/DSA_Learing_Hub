// ProblemCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import DifficultyBadge from '../ui/DifficultyBadge';

const ProblemCard = ({ problem }) => (
  <div className="problem-card">
    <h4>{problem.title}</h4>
    <DifficultyBadge difficulty={problem.difficulty} />
    <p>Time: {problem.complexity.time} | Space: {problem.complexity.space}</p>
    <Link to={`/problem/${problem.id}`}>Solve</Link>
  </div>
);

export default ProblemCard;