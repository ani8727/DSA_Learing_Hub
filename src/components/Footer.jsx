import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin } from 'lucide-react';
import CustomLogo from './CustomLogo';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="glass-primary border-t border-light mt-12">
      <div className="surface-high">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Left Section - Logo, Copyright and Text */}
            <div className="flex items-center gap-4">
              <Link to="/" className="flex items-center gap-3 group">
                <div className="transform transition-transform group-hover:scale-110 group-hover:rotate-3">
                  <CustomLogo className="w-8 h-8" />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-display text-primary group-hover:text-accent transition-colors">
                    DSA Learning Hub
                  </span>
                  <span className="text-xs text-muted font-caption">
                    © {currentYear} by Aniket Gupta
                  </span>
                </div>
              </Link>
              <div className="hidden md:block h-8 w-px bg-border-light mx-2"></div>
              <div className="hidden md:block text-sm text-secondary font-body">
                Master Algorithms & Data Structures
              </div>
            </div>

            {/* Right Section - LinkedIn and GitHub */}
            <div className="flex items-center gap-3">
              <a
                href="https://www.linkedin.com/in/aniket-gupta-ani8727/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-2 surface-mid rounded-xl hover:surface-high transition-all duration-300 text-sm font-caption transform hover:scale-105 border border-subtle hover:border-medium"
              >
                <Linkedin className="w-4 h-4 text-accent" />
                <span className="hidden sm:inline text-secondary">LinkedIn</span>
              </a>
              <a
                href="https://github.com/ani8727/DSA_Learing_Hub"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-2 surface-mid rounded-xl hover:surface-high transition-all duration-300 text-sm font-caption transform hover:scale-105 border border-subtle hover:border-medium"
              >
                <Github className="w-4 h-4 text-secondary" />
                <span className="hidden sm:inline text-secondary">Source</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;