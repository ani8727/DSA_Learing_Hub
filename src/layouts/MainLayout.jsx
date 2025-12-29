// MainLayout.jsx
import React from 'react';
import Navbar from '../components/navigation/Navbar';
import Sidebar from '../components/navigation/Sidebar';

const MainLayout = ({ children }) => (
  <div className="min-h-screen bg-surface text-slate-900">
    <Navbar />
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex gap-6">
      <aside className="hidden md:block w-64">
        <Sidebar />
      </aside>
      <main className="flex-1 py-8">
        {children}
      </main>
    </div>
  </div>
);

export default MainLayout;
