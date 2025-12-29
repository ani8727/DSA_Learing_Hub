import React from 'react';

const problems = [
  { id: 'number-of-provinces', title: 'Number of Provinces', difficulty: 'Medium' },
  { id: 'number-of-islands', title: 'Number of Islands', difficulty: 'Medium' },
  { id: 'course-schedule', title: 'Course Schedule', difficulty: 'Medium' },
  { id: 'redundant-connection', title: 'Redundant Connection', difficulty: 'Medium' },
  { id: 'network-delay-time', title: 'Network Delay Time', difficulty: 'Medium' },
];

const GraphProblems = () => (
  <div className="topic-page">
    <h1>Graph Practice Problems</h1>
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16 }}>
      {problems.map((p) => (
        <div key={p.id} style={{ background: '#fff', border: '1px solid #e0e7ef', borderRadius: 8, padding: 16, minWidth: 180, flex: '1 0 180px' }}>
          <div style={{ fontWeight: 600, color: '#0f172a' }}>{p.title}</div>
          <div style={{ fontSize: 13, color: '#64748b', margin: '4px 0' }}>{p.difficulty}</div>
          {/* In a real app, link to problem detail page */}
          <a href="#" style={{ color: '#2563eb', fontSize: 13 }}>View Problem</a>
        </div>
      ))}
    </div>
    <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 40 }}>
      <a href="/patterns/graph/traversal" style={{ background: '#e3e7ef', color: '#253858', padding: '10px 22px', borderRadius: 8, fontWeight: 500, textDecoration: 'none', border: '1px solid #d1d5db', transition: 'background 0.2s' }}>&larr; Traversal</a>
      <a href="/patterns/graph" style={{ background: '#3b5bdb', color: '#fff', padding: '10px 22px', borderRadius: 8, fontWeight: 500, textDecoration: 'none', border: 'none', boxShadow: '0 1px 4px #e3e7ef', transition: 'background 0.2s' }}>Main Graph &rarr;</a>
    </div>
  </div>
);

export default GraphProblems;
