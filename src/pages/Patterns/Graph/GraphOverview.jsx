import React from 'react';

const GraphOverview = () => (
  <div className="topic-page">
    <h1>Graph DSA - Overview</h1>
    <p><b>Definition:</b> A Graph G = (V, E) is a structure of nodes (vertices) and connections (edges).</p>
    <ul>
      <li><b>V</b>: Set of vertices (nodes)</li>
      <li><b>E</b>: Set of edges (connections between vertices)</li>
    </ul>
    <h3>Core Principle</h3>
    <blockquote>Graphs model <b>relationships</b> and <b>connections</b>. Any problem involving entities and their relationships can be represented as a graph.</blockquote>
    <h3>Graph Types Taxonomy</h3>
    <pre>{`
GRAPHS
├── By Direction
│   ├── Undirected: (u,v) = (v,u)
│   └── Directed: (u,v) ≠ (v,u)
│
├── By Weight
│   ├── Unweighted
│   └── Weighted
│
├── By Connectivity
│   ├── Connected
│   ├── Disconnected
│   └── Strongly Connected
│
├── Special Types
│   ├── Tree
│   ├── DAG
│   ├── Bipartite
│   ├── Complete
│   └── Cyclic
`}</pre>
    <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 40 }}>
      <a href="/patterns/graph" style={{ background: '#e3e7ef', color: '#253858', padding: '10px 22px', borderRadius: 8, fontWeight: 500, textDecoration: 'none', border: '1px solid #d1d5db', transition: 'background 0.2s' }}>&larr; Main Graph</a>
      <a href="/patterns/graph/traversal" style={{ background: '#3b5bdb', color: '#fff', padding: '10px 22px', borderRadius: 8, fontWeight: 500, textDecoration: 'none', border: 'none', boxShadow: '0 1px 4px #e3e7ef', transition: 'background 0.2s' }}>Next: Traversal &rarr;</a>
    </div>
  </div>
);

export default GraphOverview;
