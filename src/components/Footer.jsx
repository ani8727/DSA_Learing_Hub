import { FiGithub, FiExternalLink } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-dark-800 to-dark-900 border-t border-dark-600 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Left: Copyright */}
          <div className="text-sm flex items-center gap-2">
            <span className="font-bold bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Aniket Gupta
            </span>
            <span className="text-purple-500">•</span>
            <span className="text-gray-400">© 2023</span>
          </div>

          {/* Middle: Tagline */}
          <div className="text-sm font-medium bg-gradient-to-r from-gray-200 to-gray-300 bg-clip-text text-transparent">
            Master DSA patterns <span className="text-pink-400">•</span> Ace coding interviews
          </div>

          {/* Right: Links */}
          <div className="flex items-center gap-3">
            <a
              href="https://ani8727.github.io/PortFolio/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gradient-to-r from-indigo-600/20 to-purple-600/20 hover:from-indigo-600/30 hover:to-purple-600/30 border border-indigo-500/30 hover:border-indigo-400/50 text-indigo-300 hover:text-indigo-200 transition-all duration-200 text-sm group"
            >
              <span className="font-medium">Portfolio</span>
              <FiExternalLink className="w-3.5 h-3.5 opacity-70 group-hover:opacity-100 transition-opacity" />
            </a>
            <a
              href="https://github.com/ani8727"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-dark-700 hover:bg-dark-600 border border-dark-600 hover:border-purple-500/50 text-gray-400 hover:text-white transition-all duration-200 group"
              aria-label="GitHub Profile"
            >
              <FiGithub className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
