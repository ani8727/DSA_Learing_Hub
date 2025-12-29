import React, { useState } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Footer from './Footer';

const Layout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 font-body">
      <Navbar onMenuClick={() => setIsSidebarOpen(!isSidebarOpen)} />

      <div className="flex">
        <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

        <main className="flex-1 lg:ml-64 pt-16 transition-all duration-300">
          <div className="min-h-screen">
            <div className="p-6 lg:p-8 max-w-7xl mx-auto">
              <div className="glass-primary dark:glass-primary/80 rounded-2xl p-6 lg:p-8 animate-fade-in">
                <div className="bg-transparent rounded-xl p-2">
                  {children}
                </div>
              </div>
            </div>

            <Footer />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Layout;