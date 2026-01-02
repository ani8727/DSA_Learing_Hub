import React, { useState } from 'react';

const Tabs = ({ tabs, defaultTab = 0, className = '' }) => {
  const [activeTab, setActiveTab] = useState(defaultTab);

  return (
    <div className={`w-full ${className}`}>
      {/* Tab Headers */}
      <div className="flex flex-wrap gap-2 mb-6 border-b border-dark-600 pb-2">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`tab ${activeTab === index ? 'tab-active' : 'tab-inactive'}`}
          >
            {tab.icon && <span className="text-lg">{tab.icon}</span>}
            <span>{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="animate-fadeIn">
        {tabs[activeTab]?.content}
      </div>
    </div>
  );
};

export default Tabs;
