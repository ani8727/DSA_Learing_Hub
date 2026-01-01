import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { searchPatterns } from '../data/patternsData';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleSearch = (e) => {
    const value = e.target.value;
    setQuery(value);

    if (value.trim().length > 0) {
      const searchResults = searchPatterns(value);
      setResults(searchResults);
      setIsOpen(true);
    } else {
      setResults([]);
      setIsOpen(false);
    }
  };

  const handleSelect = (patternId) => {
    setQuery('');
    setResults([]);
    setIsOpen(false);
    navigate(`/patterns/${patternId}/overview`);
  };

  const handleBlur = () => {
    // Delay to allow click on results
    setTimeout(() => setIsOpen(false), 200);
  };

  return (
    <div className="relative w-full">
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        <input
          type="text"
          value={query}
          onChange={handleSearch}
          onFocus={() => query && setIsOpen(true)}
          onBlur={handleBlur}
          placeholder="Search patterns, problems..."
          className="w-full pl-10 pr-4 py-2.5 bg-dark-700 border border-dark-500 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent-primary focus:border-transparent transition-all"
        />
        {query && (
          <button
            onClick={() => {
              setQuery('');
              setResults([]);
              setIsOpen(false);
            }}
            className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-white"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}
      </div>

      {/* Search Results Dropdown */}
      {isOpen && results.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-dark-700 border border-dark-500 rounded-xl shadow-2xl overflow-hidden z-50 animate-fadeIn">
          <div className="max-h-80 overflow-y-auto">
            {results.map((pattern) => (
              <button
                key={pattern.id}
                onClick={() => handleSelect(pattern.id)}
                className="w-full px-4 py-3 flex items-center space-x-3 hover:bg-dark-600 transition-colors text-left"
              >
                <span className="text-2xl">{pattern.icon}</span>
                <div className="flex-1 min-w-0">
                  <p className="text-white font-medium truncate">{pattern.name}</p>
                  <p className="text-gray-400 text-sm truncate">{pattern.category}</p>
                </div>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  pattern.difficulty === 'Easy' ? 'badge-easy' :
                  pattern.difficulty === 'Medium' ? 'badge-medium' : 'badge-hard'
                }`}>
                  {pattern.difficulty}
                </span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* No Results */}
      {isOpen && query && results.length === 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-dark-700 border border-dark-500 rounded-xl shadow-2xl p-4 z-50 animate-fadeIn">
          <p className="text-gray-400 text-center">No patterns found for "{query}"</p>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
