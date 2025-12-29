import React from 'react';

const SortingTricks = () => (
  <div className="topic-page">
    <h1>Sorting Tricks & Patterns</h1>
    <ul>
      <li>Custom Comparator Functions</li>
      <li>Two Pointer with Sorting</li>
      <li>Counting Sort for small ranges</li>
      <li>Bucket/Index Mapping</li>
      <li>Stable vs Unstable Sort</li>
    </ul>
    <h3>Example: Custom Comparator (C++)</h3>
    <pre>{`// Sort by second element descending
vector<pair<int,int>> arr;
sort(arr.begin(), arr.end(), [](auto &a, auto &b) {
    return a.second > b.second;
});`}</pre>
    <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 40 }}>
      <a href="/patterns/sorting/overview" style={{ background: '#e3e7ef', color: '#253858', padding: '10px 22px', borderRadius: 8, fontWeight: 500, textDecoration: 'none', border: '1px solid #d1d5db', transition: 'background 0.2s' }}>&larr; Overview</a>
      <a href="/patterns/sorting/problems" style={{ background: '#3b5bdb', color: '#fff', padding: '10px 22px', borderRadius: 8, fontWeight: 500, textDecoration: 'none', border: 'none', boxShadow: '0 1px 4px #e3e7ef', transition: 'background 0.2s' }}>Next: Problems &rarr;</a>
    </div>
  </div>
);

export default SortingTricks;
