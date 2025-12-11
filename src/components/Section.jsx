import React, { useState } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';

const Section = ({ title, icon: Icon, children, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="mb-4 rounded-xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 bg-gradient-to-r from-blue-50 to-indigo-50 flex items-center justify-between hover:from-blue-100 hover:to-indigo-100 transition-colors"
      >
        <div className="flex items-center gap-3">
          {Icon && <Icon className="w-6 h-6 text-blue-600" />}
          <span className="font-semibold text-gray-800 text-lg">{title}</span>
        </div>
        {isOpen ? <ChevronDown className="w-5 h-5" /> : <ChevronRight className="w-5 h-5" />}
      </button>
      {isOpen && <div className="p-6 bg-white animate-fade-in">{children}</div>}
    </div>
  );
};

export default Section;