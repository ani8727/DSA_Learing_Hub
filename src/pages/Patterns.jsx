import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import PatternCard from '../components/PatternCard';
import { patternsData, categories, difficulties } from '../data/patternsData';

const Patterns = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || 'All');
  const [selectedDifficulty, setSelectedDifficulty] = useState('All');

  const filteredPatterns = useMemo(() => {
    return patternsData.filter((pattern) => {
      const matchesSearch = pattern.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           pattern.shortDescription.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || pattern.category === selectedCategory;
      const matchesDifficulty = selectedDifficulty === 'All' || pattern.difficulty === selectedDifficulty;
      
      return matchesSearch && matchesCategory && matchesDifficulty;
    });
  }, [searchQuery, selectedCategory, selectedDifficulty]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    if (category === 'All') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', category);
    }
    setSearchParams(searchParams);
  };

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedCategory('All');
    setSelectedDifficulty('All');
    setSearchParams({});
  };

  const hasActiveFilters = searchQuery || selectedCategory !== 'All' || selectedDifficulty !== 'All';

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div className="animate-fadeIn">
        <h1 className="text-4xl font-bold text-white mb-4">All Patterns</h1>
        <p className="text-gray-400 max-w-2xl">
          Explore all algorithmic patterns. Each pattern includes detailed theory, examples, practice problems, and interactive exercises.
        </p>
      </div>

      {/* Filters Section */}
      <div className="bg-dark-700 rounded-2xl border border-dark-500 p-6 animate-fadeIn">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Search Input */}
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-400 mb-2">Search Patterns</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by name or description..."
                className="w-full pl-10 pr-4 py-3 bg-dark-800 border border-dark-500 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent-primary focus:border-transparent transition-all"
              />
            </div>
          </div>

          {/* Category Filter */}
          <div className="w-full lg:w-48">
            <label className="block text-sm font-medium text-gray-400 mb-2">Category</label>
            <select
              value={selectedCategory}
              onChange={(e) => handleCategoryChange(e.target.value)}
              className="w-full px-4 py-3 bg-dark-800 border border-dark-500 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-accent-primary focus:border-transparent transition-all appearance-none cursor-pointer"
            >
              {categories.map((category) => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>

          {/* Difficulty Filter */}
          <div className="w-full lg:w-40">
            <label className="block text-sm font-medium text-gray-400 mb-2">Difficulty</label>
            <select
              value={selectedDifficulty}
              onChange={(e) => setSelectedDifficulty(e.target.value)}
              className="w-full px-4 py-3 bg-dark-800 border border-dark-500 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-accent-primary focus:border-transparent transition-all appearance-none cursor-pointer"
            >
              <option value="All">All</option>
              {difficulties.map((difficulty) => (
                <option key={difficulty} value={difficulty}>{difficulty}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Active Filters & Clear */}
        {hasActiveFilters && (
          <div className="mt-4 flex items-center justify-between">
            <div className="flex flex-wrap gap-2">
              {searchQuery && (
                <span className="inline-flex items-center px-3 py-1 bg-dark-600 rounded-full text-sm text-gray-300">
                  Search: "{searchQuery}"
                  <button
                    onClick={() => setSearchQuery('')}
                    className="ml-2 text-gray-400 hover:text-white"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </span>
              )}
              {selectedCategory !== 'All' && (
                <span className="inline-flex items-center px-3 py-1 bg-dark-600 rounded-full text-sm text-gray-300">
                  Category: {selectedCategory}
                  <button
                    onClick={() => handleCategoryChange('All')}
                    className="ml-2 text-gray-400 hover:text-white"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </span>
              )}
              {selectedDifficulty !== 'All' && (
                <span className="inline-flex items-center px-3 py-1 bg-dark-600 rounded-full text-sm text-gray-300">
                  Difficulty: {selectedDifficulty}
                  <button
                    onClick={() => setSelectedDifficulty('All')}
                    className="ml-2 text-gray-400 hover:text-white"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </span>
              )}
            </div>
            <button
              onClick={clearFilters}
              className="text-sm text-accent-primary hover:text-accent-secondary transition-colors"
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>

      {/* Results Count */}
      <div className="flex items-center justify-between">
        <p className="text-gray-400">
          Showing <span className="text-white font-medium">{filteredPatterns.length}</span> of{' '}
          <span className="text-white font-medium">{patternsData.length}</span> patterns
        </p>
      </div>

      {/* Patterns Grid */}
      {filteredPatterns.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPatterns.map((pattern, index) => (
            <PatternCard key={pattern.id} pattern={pattern} index={index} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 bg-dark-700 rounded-2xl border border-dark-500">
          <div className="text-5xl mb-4">🔍</div>
          <h3 className="text-xl font-semibold text-white mb-2">No patterns found</h3>
          <p className="text-gray-400 mb-6">Try adjusting your filters or search query</p>
          <button
            onClick={clearFilters}
            className="px-6 py-3 bg-gradient-to-r from-accent-primary to-accent-secondary text-white font-medium rounded-xl hover:shadow-lg transition-all"
          >
            Clear Filters
          </button>
        </div>
      )}
    </div>
  );
};

export default Patterns;
