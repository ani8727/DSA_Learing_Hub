import { Link, useLocation } from 'react-router-dom';
import SearchBar from './SearchBar';
import { FiSun, FiMoon, FiGithub } from 'react-icons/fi';
import { useTheme } from '../context/ThemeContext';

const Navbar = ({ onMenuToggle, isSidebarOpen }) => {
  const location = useLocation();
  const { isDark, toggleTheme } = useTheme();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-dark-800/95 backdrop-blur-md border-b border-dark-600 shadow-lg">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left: Logo & Site Name */}
          <div className="flex items-center space-x-3">
            <button
              onClick={onMenuToggle}
              className="lg:hidden p-2 rounded-lg text-gray-400 hover:text-white hover:bg-dark-600 transition-all duration-200"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isSidebarOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 flex items-center justify-center shadow-lg group-hover:shadow-indigo-500/50 transition-all duration-300 group-hover:scale-105">
                <span className="text-white font-bold text-base">DSA</span>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-xl font-bold bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent group-hover:from-indigo-300 group-hover:via-purple-300 group-hover:to-pink-300 transition-all duration-300">
                  DSA Pattern Hub
                </h1>
                <p className="text-xs text-gray-400 -mt-1">Master Algorithms</p>
              </div>
            </Link>
          </div>

          {/* Center: Search Bar */}
          <div className="hidden md:flex flex-1 max-w-xl mx-8">
            <SearchBar />
          </div>

          {/* Right: Actions */}
          <div className="flex items-center space-x-2">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-dark-600/50 hover:bg-dark-600 border border-dark-500 hover:border-accent-primary/50 transition-all duration-200 group"
              aria-label="Toggle theme"
              title="Toggle Dark/Light Mode"
            >
              {isDark ? (
                <FiMoon className="w-5 h-5 text-indigo-400 group-hover:text-indigo-300 transition-colors" />
              ) : (
                <FiSun className="w-5 h-5 text-amber-400 group-hover:text-amber-300 transition-colors" />
              )}
            </button>

            {/* GitHub Repository */}
            <a
              href="https://github.com/ani8727/DSA-Pattern_Wise"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-dark-600 hover:border-purple-500/50 border border-dark-500 transition-all duration-200 group"
              aria-label="GitHub Repository"
              title="DSA Pattern Repository"
            >
              <FiGithub className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </a>

            {/* LinkedIn Profile */}
            <a
              href="https://www.linkedin.com/in/aniket8727"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-gray-400 hover:text-blue-400 hover:bg-dark-600 hover:border-blue-500/50 border border-dark-500 transition-all duration-200 group"
              aria-label="LinkedIn Profile"
              title="LinkedIn Profile"
            >
              <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Mobile Search Bar */}
        <div className="md:hidden pb-3">
          <SearchBar />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
