import { useState } from 'react';
import { Outlet, NavLink, useParams, useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import { getPatternById } from '../data/patternsData';

const PatternLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { patternId } = useParams();
  const location = useLocation();
  const pattern = getPatternById(patternId);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const patternTabs = [
    { path: 'overview', label: 'Overview', icon: '📋' },
    { path: 'theory', label: 'Theory', icon: '📖' },
    { path: 'types', label: 'Types', icon: '🔀' },
    { path: 'problems', label: 'Problems', icon: '🧩' },
    { path: 'code', label: 'Code', icon: '💻' },
    { path: 'interactive', label: 'Interactive', icon: '🎮' },
  ];

  if (!pattern) {
    return (
      <div className="min-h-screen bg-dark-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Pattern Not Found</h1>
          <p className="text-gray-400">The pattern you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-dark-900 flex flex-col">
      {/* Navbar */}
      <Navbar onMenuToggle={toggleSidebar} isSidebarOpen={isSidebarOpen} />

      {/* Main Content Area */}
      <div className="flex flex-1 pt-16">
        {/* Sidebar */}
        <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />

        {/* Content */}
        <main className="flex-1 lg:ml-72 min-h-[calc(100vh-4rem)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {/* Pattern Header */}
            <div className="mb-8 animate-fadeIn">
              <div className="flex items-center space-x-2 text-sm text-gray-400 mb-4">
                <NavLink to="/" className="hover:text-white transition-colors">Home</NavLink>
                <span>/</span>
                <NavLink to="/patterns" className="hover:text-white transition-colors">Patterns</NavLink>
                <span>/</span>
                <span className="text-accent-primary">{pattern.name}</span>
              </div>

              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent-primary/20 to-accent-secondary/20 flex items-center justify-center text-4xl">
                    {pattern.icon}
                  </div>
                  <div>
                    <h1 className="text-3xl font-bold text-white">{pattern.name}</h1>
                    <p className="text-gray-400">{pattern.category}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <span className={`px-4 py-2 rounded-xl text-sm font-medium ${
                    pattern.difficulty === 'Easy' ? 'badge-easy' :
                    pattern.difficulty === 'Medium' ? 'badge-medium' : 'badge-hard'
                  }`}>
                    {pattern.difficulty}
                  </span>
                  <span className="px-4 py-2 bg-dark-600 rounded-xl text-sm text-gray-300">
                    {pattern.problemCount} Problems
                  </span>
                </div>
              </div>
            </div>

            {/* Pattern Navigation Tabs */}
            <div className="mb-8 overflow-x-auto">
              <div className="flex space-x-1 bg-dark-800 rounded-xl p-1 min-w-max">
                {patternTabs.map((tab) => (
                  <NavLink
                    key={tab.path}
                    to={`/patterns/${patternId}/${tab.path}`}
                    className={({ isActive }) =>
                      `flex items-center space-x-2 px-4 py-3 rounded-lg font-medium transition-all whitespace-nowrap ${
                        isActive
                          ? 'bg-gradient-to-r from-accent-primary to-accent-secondary text-white shadow-lg'
                          : 'text-gray-400 hover:text-white hover:bg-dark-600'
                      }`
                    }
                  >
                    <span>{tab.icon}</span>
                    <span>{tab.label}</span>
                  </NavLink>
                ))}
              </div>
            </div>

            {/* Pattern Content */}
            <div className="animate-fadeIn">
              <Outlet context={{ pattern }} />
            </div>
          </div>
        </main>
      </div>

      {/* Footer */}
      <div className="lg:ml-72">
        <Footer />
      </div>
    </div>
  );
};

export default PatternLayout;
