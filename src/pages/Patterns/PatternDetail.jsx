import React from 'react';
import { useParams } from 'react-router-dom';
import patternsData from '../../data/patterns.json';

const PatternDetail = () => {
  const { patternId } = useParams();
  const pattern = patternsData.find((p) => p.id === patternId);

  if (!pattern) {
    return <div className="p-6 bg-gray-50 min-h-screen text-center text-gray-500">Loading...</div>;
  }

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-extrabold text-blue-600 mb-6">{pattern.name}</h1>
      <p className="text-gray-700 text-lg mb-6">{pattern.coreIdea}</p>
      <h2 className="text-2xl font-bold text-gray-800 mb-4">When to Use</h2>
      <ul className="list-disc list-inside text-gray-600 mb-6">
        {pattern.whenToUse.map((useCase, index) => (
          <li key={index}>{useCase}</li>
        ))}
      </ul>
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Variations</h2>
      <ul className="list-disc list-inside text-gray-600">
        {pattern.variations.map((variation, index) => (
          <li key={index}>{variation}</li>
        ))}
      </ul>
    </div>
  );
};

export default PatternDetail;
