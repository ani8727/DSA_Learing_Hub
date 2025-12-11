import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Link as LinkIcon, Grid3x3, Move, Layers, ArrowUpDown, Type, TreePine, Sparkles, X } from 'lucide-react';

const Sidebar = ({ isOpen, onClose }) => {
  const location = useLocation();

  const topics = [
    { path: '/', icon: Home, label: 'Home' },
    { path: '/linkedlist', icon: LinkIcon, label: 'LinkedList' },
    { path: '/arrays', icon: Grid3x3, label: 'Arrays' },
    { path: '/two-pointer', icon: Move, label: 'Two Pointer' },
    { path: '/sliding-window', icon: Layers, label: 'Sliding Window' },
    { path: '/sorting', icon: ArrowUpDown, label: 'Sorting' },
    { path: '/strings', icon: Type, label: 'Strings' },
    { path: '/trees', icon: TreePine, label: 'Trees' },
    { path: '/dynamic-programming', icon: Sparkles, label: 'Dynamic Programming' },
  ];

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 z-40 lg:hidden animate-fade-in" onClick={onClose} />
      )}

      <aside className={`fixed top-16 left-0 bottom-0 w-64 glass-effect transform transition-all duration-300 z-40 overflow-y-auto animate-slide-in ${
        isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
      }`}>
        <div className="p-4">
          <button 
            onClick={onClose} 
            className="lg:hidden absolute top-4 right-4 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 transform hover:scale-110"
          >
            <X className="w-5 h-5 text-gray-600 dark:text-gray-400" />
          </button>

          <h2 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-6">Topics</h2>

          <nav className="space-y-3">
            {topics.map((topic) => {
              const Icon = topic.icon;
              const active = location.pathname === topic.path;
              
              return (
                <Link
                  key={topic.path}
                  to={topic.path}
                  onClick={onClose}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 transform hover:scale-[1.02] ${
                    active 
                      ? 'bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/50 dark:to-purple-900/50 text-blue-700 dark:text-blue-300 font-semibold shadow-lg border-l-4 border-blue-500' 
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700/50 hover:text-gray-900 dark:hover:text-white'
                  }`}
                >
                  <Icon className={`w-5 h-5 ${active ? 'text-blue-600 dark:text-blue-400' : ''}`} />
                  <span className="font-medium">{topic.label}</span>
                  {active && (
                    <div className="ml-auto w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="mt-8 p-4 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl border border-blue-200 dark:border-blue-800/50 card-modern">
            <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2 flex items-center gap-2">
              🎯 <span>Pro Tip</span>
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              Master patterns first, then solve problems! Each pattern is a building block for complex algorithms.
            </p>
          </div>

          <div className="mt-4 p-3 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl border border-purple-200 dark:border-purple-800/50">
            <p className="text-xs text-purple-700 dark:text-purple-300 font-medium text-center">
              ⚡ Interactive Learning Experience
            </p>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;