import React, { useState } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Footer from './Footer';

const Layout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen gradient-bg font-body">
      {/* Main container with primary background */}
      <Navbar onMenuClick={() => setIsSidebarOpen(!isSidebarOpen)} />
      
      <div className="flex">
        <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
        
        {/* Main content area with secondary background for hierarchy */}
        <main className="flex-1 lg:ml-64 pt-16 transition-all duration-300">
          <div className="min-h-screen bg-secondary">
            {/* Content container with tertiary background for deeper hierarchy */}
            <div className="p-6 lg:p-8 max-w-7xl mx-auto">
              <div className="bg-tertiary rounded-2xl border border-light p-6 lg:p-8 animate-fade-in shadow-lg">
                {/* Content wrapper with highest surface for maximum contrast */}
                <div className="surface-highest rounded-xl p-6 border border-subtle shadow-md">
                  {children}
                </div>
              </div>
            </div>
            
            {/* Footer */}
            <Footer />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Layout;