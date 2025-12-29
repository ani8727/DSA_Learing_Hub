import React, { useState } from 'react';
import patternsData from '../../data/patterns.json';

const PatternList = () => {
  const [patterns] = useState(patternsData);

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-extrabold text-center text-blue-600 mb-8">All Patterns</h1>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {patterns.map((pattern) => (
          <li key={pattern.id} className="p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition-shadow">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">{pattern.name}</h2>
            <p className="text-gray-600 text-sm">{pattern.coreIdea}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PatternList;
