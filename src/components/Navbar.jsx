import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Github, Sun, Moon, Linkedin } from 'lucide-react';
import CustomLogo from './CustomLogo';

const Navbar = ({ onMenuClick }) => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check for saved theme preference only; default to light mode
    const savedTheme = localStorage.getItem('theme');
    const isDarkMode = savedTheme === 'dark';

    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    // Initialize state
    setIsDark(isDarkMode);
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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/70 dark:bg-slate-900/70 shadow-sm animate-slide-in backdrop-blur-sm">
      <div className="container mx-auto px-4">
        {/* Navigation content container - Secondary background for hierarchy */}
          <div className="bg-transparent">
          <div className="flex items-center justify-between h-16 px-4">
            <div className="flex items-center gap-4">
              {/* Mobile menu button - Tertiary background */}
                <button
                onClick={onMenuClick}
                className="lg:hidden p-2 bg-slate-100 dark:bg-slate-800 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-700 transition-all duration-300 transform hover:scale-110 border border-gray-200 dark:border-gray-700"
              >
                <Menu className="w-6 h-6 text-gray-600 dark:text-gray-300 hover:text-slate-900 dark:hover:text-white transition-colors" />
              </button>

              <Link to="/" className="flex items-center gap-3 group">
                <div className="transform transition-transform group-hover:scale-110 group-hover:rotate-3 p-1">
                  <CustomLogo className="w-10 h-10" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xl font-display text-slate-900 dark:text-white group-hover:text-blue-600 transition-colors">DSA Learning Hub</span>
                  <span className="text-xs text-gray-500 dark:text-gray-400 font-caption">Pattern-Based Learning</span>
                </div>
              </Link>
            </div>
            
            {/* Actions container */}
            <div className="flex items-center gap-3">
              {/* Theme toggle button - Surface background with accent on hover */}
              <button
                onClick={toggleTheme}
                className="p-2 bg-slate-100 dark:bg-slate-800 rounded-xl hover:bg-blue-50 dark:hover:bg-blue-900 transition-all duration-300 transform hover:scale-110 border border-gray-200 dark:border-gray-700"
                title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
              >
                {isDark ? (
                  <Sun className="w-5 h-5 text-blue-600 dark:text-blue-400 hover:text-slate-900 transition-colors" />
                ) : (
                  <Moon className="w-5 h-5 text-gray-600 dark:text-gray-300 hover:text-slate-900 transition-colors" />
                )}
              </button>
              
              {/* Name and LinkedIn Profile */}
              <div className="flex items-center gap-3">
                <span className="font-heading text-slate-900 dark:text-white hidden sm:block">Aniket Gupta</span>
                <a
                  href="https://www.linkedin.com/in/aniket-gupta-ani8727/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-2 rounded-lg bg-linear-to-r from-blue-600 to-blue-700 text-white hover:shadow transition-colors duration-200 text-sm font-heading transform hover:scale-105"
                  title="LinkedIn Profile"
                >
                  <Linkedin className="w-3 h-3" />
                </a>
                {/* Debug: Fix UI button */}
                <button
                  onClick={() => { localStorage.removeItem('theme'); document.documentElement.classList.remove('dark'); setIsDark(false); }}
                  className="ml-2 px-3 py-2 text-sm rounded bg-emerald-500 text-white hover:bg-emerald-600 transition"
                  title="Reset theme to light"
                >
                  Fix UI
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;