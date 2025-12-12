import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Github, Sun, Moon, Linkedin } from 'lucide-react';
import CustomLogo from './CustomLogo';

const Navbar = ({ onMenuClick }) => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    const isDarkMode = savedTheme === 'dark' || (!savedTheme && prefersDark);

    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    }

    // Use a microtask to avoid synchronous state updates
    Promise.resolve().then(() => setIsDark(isDarkMode));
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
    <nav className="fixed top-0 left-0 right-0 z-50 glass-primary shadow-lg border-b border-light animate-slide-in">
      <div className="container mx-auto px-4">
        {/* Navigation content container - Secondary background for hierarchy */}
        <div className="surface-high rounded-b-lg">
          <div className="flex items-center justify-between h-16 px-4">
            <div className="flex items-center gap-4">
              {/* Mobile menu button - Tertiary background */}
              <button
                onClick={onMenuClick}
                className="lg:hidden p-2 surface-mid rounded-xl hover:surface-high transition-all duration-300 transform hover:scale-110 border border-subtle hover:border-light"
              >
                <Menu className="w-6 h-6 text-secondary hover:text-primary transition-colors" />
              </button>
              
              {/* Logo and title container */}
              <Link to="/" className="flex items-center gap-3 group">
                <div className="transform transition-transform group-hover:scale-110 group-hover:rotate-3 p-1">
                  <CustomLogo className="w-10 h-10" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xl font-display text-primary group-hover:text-accent transition-colors">DSA Learning Hub</span>
                  <span className="text-xs text-muted font-caption">Pattern-Based Learning</span>
                </div>
              </Link>
            </div>
            
            {/* Actions container */}
            <div className="flex items-center gap-3">
              {/* Theme toggle button - Surface background with accent on hover */}
              <button
                onClick={toggleTheme}
                className="p-2 surface-mid rounded-xl hover:bg-accent transition-all duration-300 transform hover:scale-110 border border-subtle hover:border-medium"
                title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
              >
                {isDark ? (
                  <Sun className="w-5 h-5 text-accent hover:text-primary transition-colors" />
                ) : (
                  <Moon className="w-5 h-5 text-secondary hover:text-primary transition-colors" />
                )}
              </button>
              
              {/* Name and LinkedIn Profile */}
              <div className="flex items-center gap-3">
                <span className="font-heading text-primary hidden sm:block">Aniket Gupta</span>
                <a
                  href="https://www.linkedin.com/in/aniket-gupta-ani8727/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-2 rounded-xl gradient-accent text-white hover:shadow-lg transition-all duration-300 text-sm font-heading transform hover:scale-105 border border-strong"
                  title="LinkedIn Profile"
                >
                  <Linkedin className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;