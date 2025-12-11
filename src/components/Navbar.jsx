import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Github, Sun, Moon } from 'lucide-react';
import CustomLogo from './CustomLogo';

const Navbar = ({ onMenuClick }) => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    
    if (newTheme) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-effect animate-slide-in">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-4">
            <button
              onClick={onMenuClick}
              className="lg:hidden p-2 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-700 transition-all duration-300 transform hover:scale-110"
            >
              <Menu className="w-6 h-6 text-gray-700 dark:text-gray-300" />
            </button>
            <Link to="/" className="flex items-center gap-3 group">
              <div className="transform transition-transform group-hover:scale-110 group-hover:rotate-3">
                <CustomLogo className="w-10 h-10" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold gradient-text">DSA Learning Hub</span>
                <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">Master Algorithms & Patterns</span>
              </div>
            </Link>
          </div>
          
          <div className="flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-300 transform hover:scale-110"
              title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
            >
              {isDark ? (
                <Sun className="w-5 h-5 text-yellow-500" />
              ) : (
                <Moon className="w-5 h-5 text-gray-600" />
              )}
            </button>
            
            <a
              href="https://github.com/ani8727/DSA_Learing_Hub"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-900 dark:bg-gray-800 text-white hover:bg-gray-800 dark:hover:bg-gray-700 transition-all duration-300 text-sm font-medium transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <Github className="w-5 h-5" />
              <span className="hidden sm:inline">GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;