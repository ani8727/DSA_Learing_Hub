import React from 'react';

const Badge = ({ 
  children, 
  variant = 'primary',
  size = 'md',
  className = '',
  ...props 
}) => {
  const variants = {
    primary: 'badge-primary',
    secondary: 'badge-secondary',
    easy: 'badge-easy',
    medium: 'badge-medium',
    hard: 'badge-hard',
  };

  const sizes = {
    sm: 'text-[10px] px-2 py-0.5',
    md: 'text-xs px-2.5 py-0.5',
    lg: 'text-sm px-3 py-1',
  };

  return (
    <span 
      className={`badge ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </span>
  );
};

export default Badge;
