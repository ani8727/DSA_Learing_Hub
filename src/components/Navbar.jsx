import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Code2, Github } from 'lucide-react';

const Navbar = ({ onMenuClick }) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-effect">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-4">
            <button
              onClick={onMenuClick}
              className="lg:hidden p-2 rounded-lg hover:bg-blue-50 transition-colors"
            >
              <Menu className="w-6 h-6 text-gray-700" />
            </button>
            <Link to="/" className="flex items-center gap-2">
              <Code2 className="w-8 h-8 text-blue-600" />
              <span className="text-xl font-bold gradient-text">DSA & Patterns Hub</span>
            </Link>
          </div>
          
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-900 text-white hover:bg-gray-800 transition-all text-sm font-medium"
          >
            <Github className="w-5 h-5" />
            <span className="hidden sm:inline">GitHub</span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;