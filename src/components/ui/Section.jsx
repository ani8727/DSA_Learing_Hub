import React from 'react';

const Section = ({ 
  title, 
  subtitle, 
  icon,
  children, 
  className = '',
  headerAction,
  ...props 
}) => {
  return (
    <div className={`section ${className}`} {...props}>
      {/* Header */}
      {(title || subtitle) && (
        <div className="mb-6 pb-6 border-b border-dark-600">
          <div className="flex items-start justify-between">
            <div className="flex items-start gap-4">
              {icon && (
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-accent-primary to-accent-secondary flex items-center justify-center text-white text-xl">
                  {icon}
                </div>
              )}
              <div>
                {title && (
                  <h2 className="text-2xl font-bold text-white mb-2">
                    {title}
                  </h2>
                )}
                {subtitle && (
                  <p className="text-gray-400">
                    {subtitle}
                  </p>
                )}
              </div>
            </div>
            {headerAction && (
              <div>
                {headerAction}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Content */}
      <div>
        {children}
      </div>
    </div>
  );
};

export default Section;
