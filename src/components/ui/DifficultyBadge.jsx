// DifficultyBadge.jsx
import React from 'react';

const DifficultyBadge = ({ difficulty }) => {
  const colors = {
    Easy: 'green',
    Medium: 'yellow',
    Hard: 'red'
  };

  return (
    <span className={`difficulty-badge ${colors[difficulty]}`}>
      {difficulty}
    </span>
  );
};

export default DifficultyBadge;