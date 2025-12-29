// Breadcrumb.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Breadcrumb = ({ items }) => (
  <nav className="breadcrumb">
    {items.map((item, index) => (
      <span key={index}>
        {index > 0 && ' > '}
        {item.link ? <Link to={item.link}>{item.label}</Link> : item.label}
      </span>
    ))}
  </nav>
);

export default Breadcrumb;