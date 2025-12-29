import React from 'react';

const GraphTraversal = () => (
  <div className="topic-page">
    <h1>Graph Traversal Patterns</h1>
    <h2>DFS (Depth-First Search)</h2>
    <p>Explore as far as possible along each branch before backtracking. Uses stack (recursion or explicit).</p>
    <pre>{`// Recursive DFS Template (C++)
void dfs(int node, vector<vector<int>>& adj, vector<bool>& visited) {
    visited[node] = true;
    for (int neighbor : adj[node]) {
        if (!visited[neighbor]) dfs(neighbor, adj, visited);
    }
}`}</pre>
    <h2>BFS (Breadth-First Search)</h2>
    <p>Explore graph level by level. Uses queue. Guarantees shortest path in unweighted graphs.</p>
    <pre>{`// BFS Template (C++)
void bfs(int start, vector<vector<int>>& adj, int n) {
    vector<bool> visited(n, false);
    queue<int> q;
    q.push(start);
    visited[start] = true;
    while (!q.empty()) {
        int node = q.front(); q.pop();
        for (int neighbor : adj[node]) {
            if (!visited[neighbor]) {
                visited[neighbor] = true;
                q.push(neighbor);
            }
        }
    }
}`}</pre>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 40 }}>
            <a href="/patterns/graph/overview" style={{ background: '#e3e7ef', color: '#253858', padding: '10px 22px', borderRadius: 8, fontWeight: 500, textDecoration: 'none', border: '1px solid #d1d5db', transition: 'background 0.2s' }}>&larr; Overview</a>
            <a href="/patterns/graph/problems" style={{ background: '#3b5bdb', color: '#fff', padding: '10px 22px', borderRadius: 8, fontWeight: 500, textDecoration: 'none', border: 'none', boxShadow: '0 1px 4px #e3e7ef', transition: 'background 0.2s' }}>Next: Problems &rarr;</a>
        </div>
    </div>
);

export default GraphTraversal;
