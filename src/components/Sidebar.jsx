import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Link as LinkIcon, Grid3x3, Move, Layers, ArrowUpDown, Type, TreePine, Sparkles, X } from 'lucide-react';

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
  ];

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/60 z-40 lg:hidden animate-fade-in" onClick={onClose} />
      )}

      {/* Sidebar container - Glass effect primary */}
      <aside className={`fixed top-16 left-0 bottom-0 w-64 glass-primary shadow-xl transform transition-all duration-300 z-40 overflow-y-auto animate-slide-in ${
        isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
      }`}>
        
        {/* Navigation container - Secondary background for hierarchy */}
        <div className="h-full bg-secondary/50 backdrop-blur-sm">
          <div className="p-6">
            {/* Close button container */}
            <div className="flex justify-end lg:hidden mb-4">
              <button 
                onClick={onClose} 
                className="p-2 surface-high rounded-xl border border-light hover:surface-highest transition-all duration-300 transform hover:scale-110"
              >
                <X className="w-5 h-5 text-tertiary hover:text-primary transition-colors" />
              </button>
            </div>

            {/* Topics header - Accent background */}
            <div className="bg-accent rounded-xl p-4 mb-6 border border-medium">
              <h2 className="text-sm font-display text-primary uppercase tracking-wider text-center">
                Topics
              </h2>
            </div>

            {/* Navigation links */}
            <nav className="space-y-3">
              {topics.map((topic) => {
                const Icon = topic.icon;
                const active = location.pathname === topic.path;
                
                return (
                  <Link
                    key={topic.path}
                    to={topic.path}
                    onClick={onClose}
                    className={`group flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 transform hover:scale-[1.02] font-heading ${
                      active 
                        ? 'surface-highest text-accent font-semibold shadow-lg border border-strong gradient-accent text-white' 
                        : 'surface-high text-secondary hover:surface-highest hover:text-primary hover:shadow-md border border-subtle hover:border-medium'
                    }`}
                  >
                    <Icon className={`w-5 h-5 transition-all duration-300 ${
                      active 
                        ? 'text-white' 
                        : 'text-muted group-hover:text-accent'
                    }`} />
                    <span className={`transition-all duration-300 ${
                      active 
                        ? 'text-base text-white' 
                        : 'text-sm group-hover:text-base'
                    }`}>
                      {topic.label}
                    </span>
                    {active && (
                      <div className="ml-auto w-2 h-2 bg-white rounded-full animate-pulse shadow-sm" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Pro tip section - Tertiary background with card */}
            <div className="mt-8">
              <div className="bg-tertiary rounded-2xl p-5 border border-medium">
                <div className="card-primary p-4">
                  <h3 className="font-heading text-primary mb-3 flex items-center gap-2">
                    <span className="text-lg">🎯</span>
                    <span>Pro Tip</span>
                  </h3>
                  <p className="text-sm text-secondary font-body leading-relaxed">
                    Master patterns first, then solve problems! Each pattern is a building block for complex algorithms.
                  </p>
                </div>
              </div>
            </div>

            {/* Interactive badge - Accent container */}
            <div className="mt-4">
              <div className="card-secondary p-3 border border-light">
                <p className="text-xs text-accent font-caption text-center font-semibold">
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