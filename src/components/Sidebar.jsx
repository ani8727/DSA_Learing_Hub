import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Link as LinkIcon, Grid3x3, Move, Layers, ArrowUpDown, Type, TreePine, Sparkles, X, GitBranch } from 'lucide-react';

const Sidebar = ({ isOpen, onClose }) => {
  const location = useLocation();

  const topics = [
    { path: '/', icon: Home, label: 'Home' },
    { path: '/test', icon: Sparkles, label: 'Test' },
    { path: '/linkedlist', icon: LinkIcon, label: 'LinkedList' },
    { path: '/arrays', icon: Grid3x3, label: 'Arrays' },
    { path: '/two-pointer', icon: Move, label: 'Two Pointer' },
    { path: '/sliding-window', icon: Layers, label: 'Sliding Window' },
    { path: '/sorting', icon: ArrowUpDown, label: 'Sorting' },
    { path: '/strings', icon: Type, label: 'Strings' },
    { path: '/trees', icon: TreePine, label: 'Trees' },
    { path: '/dynamic-programming', icon: Sparkles, label: 'Dynamic Programming' },
    { path: '/graphs', icon: GitBranch, label: 'Graphs' },
  ];

  const isActivePath = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname === path || location.pathname.startsWith(path + '/');
  };

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div aria-hidden="true" className="fixed inset-0 bg-black/60 z-40 lg:hidden animate-fade-in" onClick={onClose} />
      )}

      {/* Sidebar container - Glass effect primary */}
      <aside className={`fixed top-16 left-0 bottom-0 w-64 lg:w-72 bg-white/60 dark:bg-slate-900/60 shadow-sm transform transition-all duration-300 z-40 overflow-y-auto animate-slide-in ${
        isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
      }`} aria-label="Main navigation">
        
        {/* Navigation container - Secondary background for hierarchy */}
        <div className="h-full bg-transparent backdrop-blur-sm">
          <div className="p-6">
            {/* Close button container */}
            <div className="flex justify-end lg:hidden mb-4">
              <button 
                onClick={onClose} 
                className="p-2 bg-slate-100 dark:bg-slate-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:bg-slate-50 dark:hover:bg-slate-700 transition-all duration-300 transform hover:scale-110"
              >
                <X className="w-5 h-5 text-gray-500 dark:text-gray-300 transition-colors" />
              </button>
            </div>

            {/* Topics header - Accent background */}
              <div className="rounded-xl p-3 mb-5">
              <h2 className="text-sm font-display text-slate-900 dark:text-white uppercase tracking-wider text-center">
                Topics
              </h2>
            </div>

            {/* Navigation links */}
            <nav className="space-y-3">
              {topics.map((topic) => {
                const Icon = topic.icon;
                const active = isActivePath(topic.path);

                return (
                  <Link
                    key={topic.path}
                    to={topic.path}
                    onClick={onClose}
                    aria-current={active ? 'page' : undefined}
                    className={`group flex items-center gap-3 px-4 py-3 rounded-lg transition-colors duration-200 transform hover:scale-102 font-heading focus:outline-none focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-700 ${
                        active 
                          ? 'bg-blue-600 text-white font-semibold shadow-sm' 
                          : 'bg-transparent text-gray-700 dark:text-gray-300 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-gray-900'
                      }`}
                  >
                    <Icon className={`w-5 h-5 transition-colors duration-200 ${
                      active 
                        ? 'text-white' 
                        : 'text-gray-500 group-hover:text-blue-600'
                    }`} />
                    <span className={`transition-all duration-200 ${
                      active 
                        ? 'text-base text-white' 
                        : 'text-sm group-hover:text-base'
                    }`}>
                      {topic.label}
                    </span>
                    {active && (
                          <div className="ml-auto w-2 h-2 bg-white rounded-full shadow-sm" />
                        )}
                  </Link>
                );
              })}
            </nav>

            {/* Pro tip section - Tertiary background with card */}
            <div className="mt-8">
              <div className="bg-slate-100 dark:bg-slate-800 rounded-2xl p-5 border border-gray-300 dark:border-gray-700">
                <div className="bg-white dark:bg-slate-900 rounded-lg p-4 border border-gray-100 dark:border-gray-700">
                  <h3 className="font-heading text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                    <span className="text-lg">🎯</span>
                    <span>Pro Tip</span>
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 font-body leading-relaxed">
                    Master patterns first, then solve problems! Each pattern is a building block for complex algorithms.
                  </p>
                </div>
              </div>
            </div>

            {/* Interactive badge - Accent container */}
            <div className="mt-4">
              <div className="bg-white dark:bg-slate-800 p-3 rounded-lg border border-gray-100 dark:border-gray-700">
                <p className="text-xs text-blue-600 dark:text-blue-400 font-caption text-center font-semibold">
                  ⚡ Interactive Learning Experience
                </p>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;