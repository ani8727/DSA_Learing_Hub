// PatternDetail.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Breadcrumb from '../components/navigation/Breadcrumb';
import ProblemCard from '../components/cards/ProblemCard';
import CodeBlock from '../components/ui/CodeBlock';
import Loader from '../components/common/Loader';
import EmptyState from '../components/common/EmptyState';

const PatternDetail = () => {
  const { category, patternId } = useParams();
  const [pattern, setPattern] = useState(null);
  const [problems, setProblems] = useState([]);
  const [template, setTemplate] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPatternData = async () => {
      try {
        // In a real app, this would use the loadPattern utility
        // For now, hardcode the sliding-window example
        if (category === 'array' && patternId === 'sliding-window') {
          setPattern({
            id: 'sliding-window',
            title: 'Sliding Window',
            category: 'Array',
            difficulty: 'Beginner',
            coreIdea: 'Efficiently process contiguous subarrays using a dynamic window.',
            mentalModel: 'Expand → Process → Shrink',
            whenToUse: [
              'Subarrays or substrings',
              'Contiguous elements',
              'Max / Min / Count problems'
            ],
            variations: [
              'Fixed Window',
              'Variable Window'
            ]
          });
          setProblems([
            {
              id: 'max-sum-subarray-k',
              title: 'Maximum Sum Subarray of Size K',
              difficulty: 'Easy',
              leetcode: 'https://leetcode.com/problems/maximum-sum-subarray-of-size-k/',
              whyPattern: 'We need maximum sum of contiguous elements of fixed size.',
              approach: [
                'Initialize window sum with first K elements',
                'Slide window by removing left element and adding right element',
                'Track maximum sum at each step'
              ],
              complexity: {
                time: 'O(n)',
                space: 'O(1)'
              }
            }
          ]);
          setTemplate(`// Sliding Window Template
int left = 0;
int maxSum = INT_MIN;
int currentSum = 0;

for (int right = 0; right < n; right++) {
    // Include right element in window
    currentSum += arr[right];

    // Shrink window if needed (for variable window)
    while (condition) {
        currentSum -= arr[left];
        left++;
    }

    // Update answer
    maxSum = max(maxSum, currentSum);
}`);
        }
      } catch (error) {
        console.error('Error loading pattern:', error);
      } finally {
        setLoading(false);
      }
    };

    loadPatternData();
  }, [category, patternId]);

  if (loading) return <Loader />;
  if (!pattern) return <EmptyState message="Pattern not found." />;

  const breadcrumbItems = [
    { label: 'Patterns', link: '/patterns' },
    { label: pattern.category, link: `/patterns?category=${pattern.category.toLowerCase()}` },
    { label: pattern.title }
  ];

  return (
    <div className="pattern-detail">
      <Breadcrumb items={breadcrumbItems} />

      <div className="pattern-header">
        <h1>{pattern.title}</h1>
        <span className="category-badge">{pattern.category}</span>
        <span className="difficulty-badge">{pattern.difficulty}</span>
      </div>

      <div className="pattern-content">
        <section className="core-idea">
          <h2>Core Idea</h2>
          <p>{pattern.coreIdea}</p>
        </section>

        <section className="mental-model">
          <h2>Mental Model</h2>
          <p>{pattern.mentalModel}</p>
        </section>

        <section className="when-to-use">
          <h2>When to Use</h2>
          <ul>
            {pattern.whenToUse.map((use, index) => (
              <li key={index}>{use}</li>
            ))}
          </ul>
        </section>

        {pattern.variations && (
          <section className="variations">
            <h2>Variations</h2>
            <ul>
              {pattern.variations.map((variation, index) => (
                <li key={index}>{variation}</li>
              ))}
            </ul>
          </section>
        )}

        <section className="template">
          <h2>C++ Template</h2>
          <CodeBlock code={template} language="cpp" />
        </section>

        <section className="problems">
          <h2>Problems</h2>
          <div className="problems-grid">
            {problems.map(problem => (
              <ProblemCard key={problem.id} problem={problem} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default PatternDetail;
