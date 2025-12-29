// Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="w-full bg-white/80 backdrop-blur-sm border-b border-slate-200">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between h-16">
        <Link to="/" className="text-lg font-semibold text-brand">
          DSA Learning Hub
        </Link>
        <div className="hidden sm:flex gap-6 text-sm text-muted">
          <Link to="/patterns" className="hover:text-brand">Patterns</Link>
          <Link to="/roadmap/beginner" className="hover:text-brand">Roadmap</Link>
          <Link to="/about" className="hover:text-brand">About</Link>
        </div>
      </div>
    </div>
  </nav>
);

export default Navbar;