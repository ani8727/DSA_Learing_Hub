import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin } from 'lucide-react';
import CustomLogo from './CustomLogo';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white/70 dark:bg-slate-900/70 mt-12">
      <div className="bg-transparent">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 py-4">
            {/* Left Section - Logo, Copyright and Text */}
            <div className="flex items-center gap-4">
              <Link to="/" className="flex items-center gap-3 group">
                <div className="transform transition-transform group-hover:scale-110 group-hover:rotate-3">
                  <CustomLogo className="w-8 h-8" />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-display text-slate-900 dark:text-white group-hover:text-blue-600 transition-colors">
                    DSA Learning Hub
                  </span>
                  <span className="text-xs text-gray-500 dark:text-gray-400 font-caption">
                    © {currentYear} by Aniket Gupta
                  </span>
                </div>
              </Link>
              <div className="hidden md:block h-8 w-px bg-gray-100/50 mx-2"></div>
              <div className="hidden md:block text-sm text-gray-600 dark:text-gray-300 font-body">
                Master Algorithms & Data Structures
              </div>
            </div>

            {/* Right Section - LinkedIn and GitHub */}
            <div className="flex items-center gap-3">
              <a
                href="https://www.linkedin.com/in/aniket-gupta-ani8727/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-2 bg-slate-100 dark:bg-slate-800 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-700 transition-all duration-300 text-sm font-caption transform hover:scale-105 border border-gray-200 dark:border-gray-700"
              >
                <Linkedin className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span className="hidden sm:inline text-gray-600 dark:text-gray-300">LinkedIn</span>
              </a>
              <a
                href="https://github.com/ani8727/DSA_Learing_Hub"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-2 bg-slate-100 dark:bg-slate-800 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-700 transition-all duration-300 text-sm font-caption transform hover:scale-105 border border-gray-200 dark:border-gray-700"
              >
                <Github className="w-4 h-4 text-gray-600 dark:text-gray-300" />
                <span className="hidden sm:inline text-gray-600 dark:text-gray-300">Source</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;