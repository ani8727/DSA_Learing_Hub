import React from 'react';

const SortingOverview = () => (
  <div className="topic-page">
    <h1>Sorting Patterns - Overview</h1>
    <p><b>Definition:</b> Sorting is the process of arranging data in a particular order (ascending/descending).</p>
    <ul>
      <li>Helps in searching, duplicate detection, and data analysis.</li>
      <li>Foundation for many DSA problems and optimizations.</li>
    </ul>
    <h3>Core Principle</h3>
    <blockquote>Sorting transforms unsorted data into a structured format, enabling efficient access and further processing.</blockquote>
    <h3>Sorting Types</h3>
    <ul>
      <li>Comparison-based: Bubble, Selection, Insertion, Merge, Quick, Heap</li>
      <li>Non-comparison: Counting, Radix, Bucket</li>
    </ul>
    <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 40 }}>
      <a href="/patterns/sorting" style={{ background: '#e3e7ef', color: '#253858', padding: '10px 22px', borderRadius: 8, fontWeight: 500, textDecoration: 'none', border: '1px solid #d1d5db', transition: 'background 0.2s' }}>&larr; Main Sorting</a>
      <a href="/patterns/sorting/tricks" style={{ background: '#3b5bdb', color: '#fff', padding: '10px 22px', borderRadius: 8, fontWeight: 500, textDecoration: 'none', border: 'none', boxShadow: '0 1px 4px #e3e7ef', transition: 'background 0.2s' }}>Next: Tricks &rarr;</a>
    </div>
  </div>
);

export default SortingOverview;
