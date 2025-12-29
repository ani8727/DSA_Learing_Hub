

import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Shuffle, ListChecks } from 'lucide-react';

const sections = [
  {
    title: 'Graph Overview',
    desc: 'Core concepts, types, and mental models for graphs.',
    icon: <BookOpen size={26} color="#3b5bdb" />, 
    link: '/patterns/graph/overview',
    color: '#f4f6fb',
  },
  {
    title: 'Graph Traversal (DFS & BFS)',
    desc: 'Learn and compare DFS and BFS with code templates.',
    icon: <Shuffle size={26} color="#388e3c" />, 
    link: '/patterns/graph/traversal',
    color: '#f3f8f3',
  },
  {
    title: 'Practice Problems',
    desc: 'Curated graph problems to master patterns.',
    icon: <ListChecks size={26} color="#b26a00" />, 
    link: '/patterns/graph/problems',
    color: '#fdf7ed',
  },
];

const GraphIndex = () => (
  <div className="topic-page" style={{ maxWidth: 700, margin: '0 auto', padding: '32px 8px 32px 8px', background: '#f8fafc', borderRadius: 18 }}>
    <h1 style={{ fontSize: 32, fontWeight: 700, color: '#253858', marginBottom: 28, textAlign: 'center', letterSpacing: 0.5 }}>Graph Patterns</h1>
    <div style={{ borderLeft: '3px solid #b6c2d1', marginLeft: 12, paddingLeft: 28 }}>
      {sections.map((section, idx) => (
        <div key={section.title} style={{ display: 'flex', alignItems: 'center', marginBottom: 36, position: 'relative' }}>
          <div style={{ position: 'absolute', left: -38, top: 0 }}>{section.icon}</div>
          <div style={{ background: section.color, borderRadius: 10, padding: '20px 26px', flex: 1, boxShadow: '0 1px 4px #e3e7ef', border: '1px solid #e3e7ef' }}>
            <div style={{ fontWeight: 600, fontSize: 20, color: '#253858', marginBottom: 5, letterSpacing: 0.2 }}>{section.title}</div>
            <div style={{ color: '#4b5563', fontSize: 15, marginBottom: 8, lineHeight: 1.6 }}>{section.desc}</div>
            <Link to={section.link} style={{ color: '#3b5bdb', fontWeight: 500, fontSize: 15, textDecoration: 'none', borderBottom: '1.5px dotted #3b5bdb', paddingBottom: 1 }}>Explore &rarr;</Link>
          </div>
        </div>
      ))}
    </div>
    {/* Navigation Buttons */}
    <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 40 }}>
      <Link to="/" style={{ background: '#e3e7ef', color: '#253858', padding: '10px 22px', borderRadius: 8, fontWeight: 500, textDecoration: 'none', border: '1px solid #d1d5db', transition: 'background 0.2s' }}>
        &larr; Home
      </Link>
      <Link to="/patterns/graph/overview" style={{ background: '#3b5bdb', color: '#fff', padding: '10px 22px', borderRadius: 8, fontWeight: 500, textDecoration: 'none', border: 'none', boxShadow: '0 1px 4px #e3e7ef', transition: 'background 0.2s' }}>
        Start Learning &rarr;
      </Link>
    </div>
  </div>
);

export default GraphIndex;
