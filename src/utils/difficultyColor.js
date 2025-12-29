// difficultyColor.js
export const getDifficultyColor = (difficulty) => {
  const colors = {
    Easy: 'green',
    Medium: 'yellow',
    Hard: 'red'
  };
  return colors[difficulty] || 'gray';
};