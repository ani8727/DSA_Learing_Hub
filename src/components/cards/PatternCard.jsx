// PatternCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const PatternCard = ({ pattern }) => (
  <div className="pattern-card">
    <h3>{pattern.title}</h3>
    <p>{pattern.category}</p>
    <p>{pattern.coreIdea}</p>
    <Link to={`/pattern/${pattern.category.toLowerCase()}/${pattern.id}`}>
      Learn More
    </Link>
  </div>
);

export default PatternCard;