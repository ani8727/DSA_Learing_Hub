// PatternList.jsx
import React, { useEffect, useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import PatternCard from '../components/cards/PatternCard';
import Loader from '../components/common/Loader';
import EmptyState from '../components/common/EmptyState';
import { CATEGORIES } from '../utils/constants';

const PatternList = () => {
  const [searchParams] = useSearchParams();
  const categoryFilter = searchParams.get('category');
  const [patterns, setPatterns] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // In a real app, this would scan the data folder
    // For now, we'll simulate loading patterns
    const loadPatterns = async () => {
      try {
        // Simulate API call delay
        await new Promise(resolve => setTimeout(resolve, 500));

        // Mock data - in real app, this would come from file system
        const mockPatterns = [
          {
            id: 'sliding-window',
            title: 'Sliding Window',
            category: 'Array',
            coreIdea: 'Efficiently process contiguous subarrays using a dynamic window.',
            difficulty: 'Beginner'
          }
          // Add more patterns here
        ];

        setPatterns(mockPatterns.filter(p =>
          !categoryFilter || p.category.toLowerCase() === categoryFilter
        ));
      } catch (error) {
        console.error('Error loading patterns:', error);
      } finally {
        setLoading(false);
      }
    };

    loadPatterns();
  }, [categoryFilter]);

  if (loading) return <Loader />;

  return (
    <div className="pattern-list">
      <h1>All Patterns</h1>

      {/* Category Filter */}
      <div className="category-filter">
        <Link to="/patterns" className={!categoryFilter ? 'active' : ''}>
          All
        </Link>
        {CATEGORIES.map(cat => (
          <Link
            key={cat.slug}
            to={`/patterns?category=${cat.slug}`}
            className={categoryFilter === cat.slug ? 'active' : ''}
          >
            {cat.name}
          </Link>
        ))}
      </div>

      {/* Patterns Grid */}
      {patterns.length > 0 ? (
        <div className="patterns-grid">
          {patterns.map(pattern => (
            <PatternCard key={pattern.id} pattern={pattern} />
          ))}
        </div>
      ) : (
        <EmptyState message="No patterns found for this category." />
      )}
    </div>
  );
};

export default PatternList;
