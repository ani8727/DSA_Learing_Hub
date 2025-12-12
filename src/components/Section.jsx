import React, { useState } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';

const Section = ({ title, icon: Icon, children, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="mb-4 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/30 dark:to-indigo-900/30 flex items-center justify-between hover:from-blue-100 hover:to-indigo-100 dark:hover:from-blue-800/40 dark:hover:to-indigo-800/40 transition-colors"
      >
        <div className="flex items-center gap-3">
          {Icon && <Icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />}
          <span className="font-semibold text-gray-900 dark:text-gray-100 text-lg">{title}</span>
        </div>
        {isOpen ? <ChevronDown className="w-5 h-5 text-gray-600 dark:text-gray-400" /> : <ChevronRight className="w-5 h-5 text-gray-600 dark:text-gray-400" />}
      </button>
      {isOpen && <div className="p-6 bg-white dark:bg-gray-800 animate-fade-in">{children}</div>}
    </div>
  );
};

export default Section;