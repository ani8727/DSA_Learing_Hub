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
        <div className="fixed inset-0 bg-black/50 z-40 lg:hidden" onClick={onClose} />
      )}

      <aside className={`fixed top-16 left-0 bottom-0 w-64 glass-effect transform transition-transform duration-300 z-40 overflow-y-auto ${
        isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
      }`}>
        <div className="p-4">
          <button onClick={onClose} className="lg:hidden absolute top-4 right-4 p-2 rounded-lg hover:bg-gray-100">
            <X className="w-5 h-5" />
          </button>

          <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">Topics</h2>

          <nav className="space-y-2">
            {topics.map((topic) => {
              const Icon = topic.icon;
              const active = location.pathname === topic.path;
              
              return (
                <Link
                  key={topic.path}
                  to={topic.path}
                  onClick={onClose}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                    active ? 'bg-blue-100 text-blue-700 font-semibold' : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span>{topic.label}</span>
                </Link>
              );
            })}
          </nav>

          <div className="mt-8 p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border border-blue-200">
            <h3 className="font-semibold text-gray-800 mb-2">🎯 Pro Tip</h3>
            <p className="text-sm text-gray-600">Master patterns first, then solve problems!</p>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;