import { NavLink, useLocation } from 'react-router-dom';
import { patternsData } from '../data/patternsData';

const Sidebar = ({ isOpen, onClose }) => {
  const location = useLocation();

  const mainNavItems = [
    { path: '/', label: 'Home', icon: '🏠' },
    { path: '/patterns', label: 'All Patterns', icon: '📚' },
    { path: '/learning-path', label: 'Learning Path', icon: '🎯' },
    { path: '/about', label: 'About', icon: 'ℹ️' },
  ];

  const categories = [...new Set(patternsData.map(p => p.category))];

  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-16 left-0 bottom-0 w-72 bg-dark-800 border-r border-dark-600 z-40 transform transition-transform duration-300 ease-in-out overflow-y-auto ${
          isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        <div className="p-4 space-y-6">
          {/* Main Navigation */}
          <nav className="space-y-1">
            {mainNavItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={onClose}
                className={({ isActive }) =>
                  `flex items-center space-x-3 px-4 py-3 rounded-xl transition-all ${
                    isActive
                      ? 'bg-gradient-to-r from-accent-primary/20 to-accent-secondary/20 text-white nav-active'
                      : 'text-gray-400 hover:text-white hover:bg-dark-600'
                  }`
                }
              >
                <span className="text-xl">{item.icon}</span>
                <span className="font-medium">{item.label}</span>
              </NavLink>
            ))}
          </nav>

          {/* Divider */}
          <div className="border-t border-dark-600" />

          {/* Categories Section */}
          <div>
            <h3 className="px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
              Categories
            </h3>
            <div className="space-y-1">
              {categories.map((category) => (
                <NavLink
                  key={category}
                  to={`/patterns?category=${encodeURIComponent(category)}`}
                  onClick={onClose}
                  className="flex items-center space-x-3 px-4 py-2 rounded-lg text-gray-400 hover:text-white hover:bg-dark-600 transition-all"
                >
                  <span className="w-2 h-2 rounded-full bg-accent-primary" />
                  <span className="text-sm">{category}</span>
                </NavLink>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-dark-600" />

          {/* Patterns Quick Access */}
          <div>
            <h3 className="px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
              Patterns
            </h3>
            <div className="space-y-1">
              {patternsData.map((pattern) => (
                <NavLink
                  key={pattern.id}
                  to={`/patterns/${pattern.id}/overview`}
                  onClick={onClose}
                  className={({ isActive }) =>
                    `flex items-center space-x-3 px-4 py-2 rounded-lg transition-all ${
                      isActive || location.pathname.includes(`/patterns/${pattern.id}`)
                        ? 'bg-dark-600 text-white'
                        : 'text-gray-400 hover:text-white hover:bg-dark-600/50'
                    }`
                  }
                >
                  <span className="text-lg">{pattern.icon}</span>
                  <span className="text-sm truncate">{pattern.name}</span>
                </NavLink>
              ))}
            </div>
          </div>

          {/* Progress Card */}
          <div className="bg-gradient-to-br from-dark-600 to-dark-700 rounded-xl p-4 border border-dark-500">
            <div className="flex items-center space-x-3 mb-3">
              <div className="w-10 h-10 rounded-lg bg-accent-primary/20 flex items-center justify-center">
                <span className="text-xl">🚀</span>
              </div>
              <div>
                <p className="text-white font-medium">Start Learning</p>
                <p className="text-gray-400 text-xs">9 patterns available</p>
              </div>
            </div>
            <div className="w-full bg-dark-800 rounded-full h-2 mb-2">
              <div className="bg-gradient-to-r from-accent-primary to-accent-secondary h-2 rounded-full" style={{ width: '0%' }} />
            </div>
            <p className="text-xs text-gray-400">Complete patterns to track progress</p>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
