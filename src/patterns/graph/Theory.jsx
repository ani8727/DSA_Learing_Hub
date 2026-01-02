import React from 'react';
import { Section, Card, Badge, CodeBlock } from '../../components/ui';
import { FiBook, FiZap, FiTrendingUp, FiAlertCircle } from 'react-icons/fi';

const Theory = () => {
  const dijkstraCode = `// Dijkstra's Algorithm - Shortest Path
vector<int> dijkstra(vector<vector<pair<int,int>>>& graph, int src) {
    int n = graph.size();
    vector<int> dist(n, INT_MAX);
    priority_queue<pair<int,int>, vector<pair<int,int>>, greater<>> pq;
    
    dist[src] = 0;
    pq.push({0, src});
    
    while (!pq.empty()) {
        auto [d, u] = pq.top();
        pq.pop();
        
        if (d > dist[u]) continue;
        
        for (auto [v, w] : graph[u]) {
            if (dist[u] + w < dist[v]) {
                dist[v] = dist[u] + w;
                pq.push({dist[v], v});
            }
        }
    }
    return dist;
}

// Time: O((V+E) log V), Space: O(V)`;

  const topologicalSortCode = `// Topological Sort - Kahn's Algorithm (BFS)
vector<int> topologicalSort(int V, vector<vector<int>>& adj) {
    vector<int> indegree(V, 0);
    
    // Calculate in-degrees
    for (int u = 0; u < V; u++) {
        for (int v : adj[u]) {
            indegree[v]++;
        }
    }
    
    // Add vertices with 0 in-degree to queue
    queue<int> q;
    for (int i = 0; i < V; i++) {
        if (indegree[i] == 0) {
            q.push(i);
        }
    }
    
    vector<int> result;
    while (!q.empty()) {
        int u = q.front();
        q.pop();
        result.push_back(u);
        
        // Reduce in-degree of neighbors
        for (int v : adj[u]) {
            indegree[v]--;
            if (indegree[v] == 0) {
                q.push(v);
            }
        }
    }
    
    // Check for cycle
    if (result.size() != V) {
        return {}; // Cycle detected
    }
    
    return result;
}

// Time: O(V + E), Space: O(V)`;

  const unionFindCode = `// Union-Find with Path Compression & Union by Rank
class UnionFind {
    vector<int> parent, rank;
public:
    UnionFind(int n) : parent(n), rank(n, 0) {
        iota(parent.begin(), parent.end(), 0);
    }
    
    int find(int x) {
        if (parent[x] != x) {
            parent[x] = find(parent[x]); // Path compression
        }
        return parent[x];
    }
    
    bool unite(int x, int y) {
        int px = find(x), py = find(y);
        if (px == py) return false;
        
        // Union by rank
        if (rank[px] < rank[py]) swap(px, py);
        parent[py] = px;
        if (rank[px] == rank[py]) rank[px]++;
        
        return true;
    }
    
    bool connected(int x, int y) {
        return find(x) == find(y);
    }
};

// Time: O(α(n)) per operation (nearly constant)`;

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Mathematical Foundation */}
      <Section 
        title="Mathematical Foundation" 
        icon={<FiBook />}
        subtitle="Core graph theory concepts and properties"
      >
        <div className="space-y-6">
          {/* Handshaking Lemma */}
          <Card>
            <div className="flex items-start gap-4 mb-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-accent-primary/10 flex items-center justify-center">
                <span className="text-xl">🤝</span>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-white mb-2">Handshaking Lemma</h3>
                <p className="text-gray-400 mb-4">
                  The sum of degrees of all vertices equals twice the number of edges.
                </p>
                <div className="bg-dark-800 rounded-lg p-4 border border-dark-600">
                  <code className="text-accent-tertiary text-lg">Σ deg(v) = 2|E|</code>
                </div>
              </div>
            </div>
            <div className="mt-4 p-4 bg-accent-primary/5 rounded-lg border border-accent-primary/10">
              <p className="text-sm text-gray-300">
                <strong className="text-accent-primary">Proof:</strong> Each edge contributes 1 to the degree of both its endpoints, 
                so it contributes 2 to the total sum of degrees.
              </p>
            </div>
          </Card>

          {/* Tree Property */}
          <Card>
            <div className="flex items-start gap-4 mb-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-accent-secondary/10 flex items-center justify-center">
                <span className="text-xl">🌳</span>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-white mb-2">Tree Fundamental Theorem</h3>
                <p className="text-gray-400 mb-4">
                  A connected graph with V vertices is a tree if and only if it has exactly V-1 edges.
                </p>
                <div className="bg-dark-800 rounded-lg p-4 border border-dark-600">
                  <code className="text-accent-tertiary text-lg">|E| = |V| - 1  (for trees)</code>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div className="p-4 bg-accent-success/5 rounded-lg border border-accent-success/10">
                <p className="text-sm text-gray-300">
                  <strong className="text-accent-success">Connected & Acyclic</strong><br/>
                  Any two properties imply the third
                </p>
              </div>
              <div className="p-4 bg-accent-warning/5 rounded-lg border border-accent-warning/10">
                <p className="text-sm text-gray-300">
                  <strong className="text-accent-warning">Unique Path</strong><br/>
                  Exactly one path between any two nodes
                </p>
              </div>
            </div>
          </Card>

          {/* Complete Graph */}
          <Card>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-accent-tertiary/10 flex items-center justify-center">
                <span className="text-xl">🔗</span>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-white mb-2">Complete Graph Formula</h3>
                <p className="text-gray-400 mb-4">
                  A complete graph K<sub>n</sub> has every pair of vertices connected.
                </p>
                <div className="bg-dark-800 rounded-lg p-4 border border-dark-600">
                  <code className="text-accent-tertiary text-lg">|E| = n(n-1)/2  for undirected graph</code>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </Section>

      {/* Core Algorithms */}
      <Section 
        title="Core Algorithms" 
        icon={<FiZap />}
        subtitle="Essential graph algorithms with implementations"
      >
        <div className="space-y-8">
          {/* Dijkstra */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Dijkstra's Algorithm</h3>
                <p className="text-gray-400">Shortest path in weighted graphs (non-negative weights)</p>
              </div>
              <Badge variant="primary">Greedy</Badge>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-6">
              <Card className="bg-dark-800">
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent-primary mb-1">O((V+E) log V)</div>
                  <div className="text-sm text-gray-400">Time Complexity</div>
                </div>
              </Card>
              <Card className="bg-dark-800">
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent-secondary mb-1">O(V)</div>
                  <div className="text-sm text-gray-400">Space Complexity</div>
                </div>
              </Card>
              <Card className="bg-dark-800">
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent-tertiary mb-1">Priority Queue</div>
                  <div className="text-sm text-gray-400">Key Data Structure</div>
                </div>
              </Card>
            </div>

            <CodeBlock code={dijkstraCode} language="cpp" title="Implementation" />

            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-accent-success/5 rounded-lg border border-accent-success/10">
                <div className="flex items-center gap-2 mb-2">
                  <FiZap className="text-accent-success" />
                  <strong className="text-accent-success">When to Use</strong>
                </div>
                <ul className="text-sm text-gray-300 space-y-1">
                  <li>• Weighted graph with non-negative weights</li>
                  <li>• Single-source shortest path</li>
                  <li>• Need exact distances</li>
                </ul>
              </div>
              <div className="p-4 bg-accent-danger/5 rounded-lg border border-accent-danger/10">
                <div className="flex items-center gap-2 mb-2">
                  <FiAlertCircle className="text-accent-danger" />
                  <strong className="text-accent-danger">Watch Out</strong>
                </div>
                <ul className="text-sm text-gray-300 space-y-1">
                  <li>• Doesn't work with negative weights</li>
                  <li>• Use Bellman-Ford for negative weights</li>
                  <li>• Check if graph is dense vs sparse</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Topological Sort */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Topological Sort (Kahn's Algorithm)</h3>
                <p className="text-gray-400">Linear ordering of directed acyclic graph (DAG) vertices</p>
              </div>
              <Badge variant="secondary">BFS-based</Badge>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-6">
              <Card className="bg-dark-800">
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent-primary mb-1">O(V + E)</div>
                  <div className="text-sm text-gray-400">Time Complexity</div>
                </div>
              </Card>
              <Card className="bg-dark-800">
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent-secondary mb-1">O(V)</div>
                  <div className="text-sm text-gray-400">Space Complexity</div>
                </div>
              </Card>
              <Card className="bg-dark-800">
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent-tertiary mb-1">Queue</div>
                  <div className="text-sm text-gray-400">Key Data Structure</div>
                </div>
              </Card>
            </div>

            <CodeBlock code={topologicalSortCode} language="cpp" title="Kahn's Algorithm" />

            <div className="mt-4 p-4 bg-accent-warning/5 rounded-lg border border-accent-warning/10">
              <div className="flex items-center gap-2 mb-3">
                <FiTrendingUp className="text-accent-warning" />
                <strong className="text-accent-warning text-lg">Algorithm Steps</strong>
              </div>
              <ol className="text-sm text-gray-300 space-y-2 list-decimal list-inside">
                <li>Calculate in-degree for all vertices</li>
                <li>Add all vertices with in-degree 0 to queue</li>
                <li>While queue is not empty:
                  <ul className="ml-6 mt-1 space-y-1">
                    <li>→ Remove vertex from queue, add to result</li>
                    <li>→ Decrease in-degree of all neighbors</li>
                    <li>→ If neighbor's in-degree becomes 0, add to queue</li>
                  </ul>
                </li>
                <li>If result.length ≠ V, graph has a cycle</li>
              </ol>
            </div>
          </div>

          {/* Union-Find */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Union-Find (Disjoint Set Union)</h3>
                <p className="text-gray-400">Dynamic connectivity with path compression and union by rank</p>
              </div>
              <Badge variant="primary">Optimized</Badge>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-6">
              <Card className="bg-dark-800">
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent-primary mb-1">O(α(n))</div>
                  <div className="text-sm text-gray-400">Amortized Per Op</div>
                </div>
              </Card>
              <Card className="bg-dark-800">
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent-secondary mb-1">O(n)</div>
                  <div className="text-sm text-gray-400">Space Complexity</div>
                </div>
              </Card>
              <Card className="bg-dark-800">
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent-tertiary mb-1">≈ Constant</div>
                  <div className="text-sm text-gray-400">Practically</div>
                </div>
              </Card>
            </div>

            <CodeBlock code={unionFindCode} language="cpp" title="Optimized Implementation" />

            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-accent-primary/5 rounded-lg border border-accent-primary/10">
                <strong className="text-accent-primary block mb-2">Path Compression</strong>
                <p className="text-sm text-gray-300">
                  Makes found nodes point directly to root, flattening the tree structure for faster future queries.
                </p>
              </div>
              <div className="p-4 bg-accent-secondary/5 rounded-lg border border-accent-secondary/10">
                <strong className="text-accent-secondary block mb-2">Union by Rank</strong>
                <p className="text-sm text-gray-300">
                  Always attach smaller tree under root of larger tree to keep tree height minimal.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Key Insights */}
      <Section 
        title="Key Insights & Best Practices" 
        icon={<FiAlertCircle />}
        className="bg-gradient-to-br from-accent-primary/5 to-accent-secondary/5"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Algorithm Selection</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-2 h-2 rounded-full bg-accent-primary mt-2"></div>
                <p className="text-gray-300 text-sm">BFS for unweighted shortest path, Dijkstra for weighted</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-2 h-2 rounded-full bg-accent-primary mt-2"></div>
                <p className="text-gray-300 text-sm">Topological sort only works on DAGs (Directed Acyclic Graphs)</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-2 h-2 rounded-full bg-accent-primary mt-2"></div>
                <p className="text-gray-300 text-sm">Union-Find excels at dynamic connectivity queries</p>
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Implementation Tips</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-2 h-2 rounded-full bg-accent-secondary mt-2"></div>
                <p className="text-gray-300 text-sm">Always use priority queue (min-heap) for Dijkstra</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-2 h-2 rounded-full bg-accent-secondary mt-2"></div>
                <p className="text-gray-300 text-sm">Check for negative weights before choosing algorithm</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-2 h-2 rounded-full bg-accent-secondary mt-2"></div>
                <p className="text-gray-300 text-sm">Visited set prevents infinite loops in cyclic graphs</p>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Theory;
