import React from 'react';

const Card = ({ 
  children, 
  className = '', 
  variant = 'default',
  interactive = false,
  onClick,
  ...props 
}) => {
  const variants = {
    default: 'card',
    interactive: 'card-interactive',
    section: 'section',
  };

  const baseClass = interactive ? 'card-interactive' : variants[variant];

  return (
    <div 
      className={`${baseClass} ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
