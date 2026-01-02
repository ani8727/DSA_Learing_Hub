import React, { useState } from 'react';
import { CodeBlock, Tabs, Section, Card, Badge } from '../../components/ui';
import { FiCode, FiCpu, FiZap, FiTrendingUp } from 'react-icons/fi';

const Code = () => {
  const dijkstraJavaScript = `// Dijkstra's Algorithm - Single Source Shortest Path
class PriorityQueue {
  constructor() {
    this.heap = [];
  }
  
  push(item) {
    this.heap.push(item);
    this.heap.sort((a, b) => a[0] - b[0]);
  }
  
  pop() {
    return this.heap.shift();
  }
  
  isEmpty() {
    return this.heap.length === 0;
  }
}

function dijkstra(graph, source, n) {
  const dist = new Array(n).fill(Infinity);
  dist[source] = 0;
  
  const pq = new PriorityQueue();
  pq.push([0, source]);
  
  while (!pq.isEmpty()) {
    const [d, u] = pq.pop();
    
    // Skip if we've found a better path
    if (d > dist[u]) continue;
    
    // Check all neighbors
    for (const [v, weight] of (graph[u] || [])) {
      if (dist[u] + weight < dist[v]) {
        dist[v] = dist[u] + weight;
        pq.push([dist[v], v]);
      }
    }
  }
  
  return dist;
}

// Example usage
const graph = [
  [[1, 4], [2, 1]],        // Node 0 -> [(1, weight:4), (2, weight:1)]
  [[3, 1]],                // Node 1 -> [(3, weight:1)]
  [[1, 2], [3, 5]],        // Node 2 -> [(1, weight:2), (3, weight:5)]
  []                       // Node 3 -> []
];
console.log(dijkstra(graph, 0, 4));  // [0, 3, 1, 4]`;

  const dijkstraCpp = `// Dijkstra's Algorithm - C++ Implementation
#include <vector>
#include <queue>
#include <climits>
using namespace std;

vector<int> dijkstra(vector<vector<pair<int,int>>>& graph, int source) {
    int n = graph.size();
    vector<int> dist(n, INT_MAX);
    dist[source] = 0;
    
    // Min-heap: {distance, node}
    priority_queue<pair<int,int>, vector<pair<int,int>>, greater<>> pq;
    pq.push({0, source});
    
    while (!pq.empty()) {
        auto [d, u] = pq.top();
        pq.pop();
        
        // Skip if we've found a better path already
        if (d > dist[u]) continue;
        
        // Relaxation step
        for (auto [v, w] : graph[u]) {
            if (dist[u] + w < dist[v]) {
                dist[v] = dist[u] + w;
                pq.push({dist[v], v});
            }
        }
    }
    
    return dist;
}

// Time:  O((V + E) log V)
// Space: O(V)`;

  const topologicalSortJS = `// Topological Sort - Kahn's Algorithm (BFS-based)
function topologicalSort(n, edges) {
  // Build adjacency list and calculate in-degrees
  const graph = Array.from({ length: n }, () => []);
  const inDegree = new Array(n).fill(0);
  
  for (const [u, v] of edges) {
    graph[u].push(v);
    inDegree[v]++;
  }
  
  // Add all nodes with in-degree 0 to queue
  const queue = [];
  for (let i = 0; i < n; i++) {
    if (inDegree[i] === 0) {
      queue.push(i);
    }
  }
  
  const result = [];
  while (queue.length > 0) {
    const node = queue.shift();
    result.push(node);
    
    // Reduce in-degree of neighbors
    for (const neighbor of graph[node]) {
      inDegree[neighbor]--;
      if (inDegree[neighbor] === 0) {
        queue.push(neighbor);
      }
    }
  }
  
  // Check for cycle
  return result.length === n ? result : [];
}

// Course Schedule Problem
function canFinishCourses(numCourses, prerequisites) {
  const result = topologicalSort(numCourses, prerequisites);
  return result.length === numCourses;
}`;

  const topologicalSortCpp = `// Topological Sort - DFS-based Implementation
#include <vector>
#include <stack>
using namespace std;

class Solution {
    void dfs(int node, vector<vector<int>>& graph, 
             vector<bool>& visited, stack<int>& st) {
        visited[node] = true;
        
        for (int neighbor : graph[node]) {
            if (!visited[neighbor]) {
                dfs(neighbor, graph, visited, st);
            }
        }
        
        // Push to stack after visiting all descendants
        st.push(node);
    }
    
public:
    vector<int> topologicalSort(int n, vector<vector<int>>& graph) {
        vector<bool> visited(n, false);
        stack<int> st;
        
        // Visit all unvisited nodes
        for (int i = 0; i < n; i++) {
            if (!visited[i]) {
                dfs(i, graph, visited, st);
            }
        }
        
        // Build result from stack
        vector<int> result;
        while (!st.empty()) {
            result.push_back(st.top());
            st.pop();
        }
        
        return result;
    }
};

// Time:  O(V + E)
// Space: O(V)`;

  const unionFindJS = `// Union-Find with Path Compression & Union by Rank
class UnionFind {
  constructor(n) {
    this.parent = Array.from({ length: n }, (_, i) => i);
    this.rank = new Array(n).fill(0);
    this.components = n;
  }
  
  // Find with path compression
  find(x) {
    if (this.parent[x] !== x) {
      this.parent[x] = this.find(this.parent[x]);
    }
    return this.parent[x];
  }
  
  // Union by rank
  union(x, y) {
    let rootX = this.find(x);
    let rootY = this.find(y);
    
    if (rootX === rootY) return false;
    
    // Attach smaller rank tree under root of higher rank tree
    if (this.rank[rootX] < this.rank[rootY]) {
      this.parent[rootX] = rootY;
    } else if (this.rank[rootX] > this.rank[rootY]) {
      this.parent[rootY] = rootX;
    } else {
      this.parent[rootY] = rootX;
      this.rank[rootX]++;
    }
    
    this.components--;
    return true;
  }
  
  connected(x, y) {
    return this.find(x) === this.find(y);
  }
  
  getComponents() {
    return this.components;
  }
}

// Number of Connected Components
function countComponents(n, edges) {
  const uf = new UnionFind(n);
  for (const [u, v] of edges) {
    uf.union(u, v);
  }
  return uf.getComponents();
}`;

  const unionFindCpp = `// Union-Find with Path Compression & Union by Rank
class UnionFind {
    vector<int> parent, rank;
    int components;
    
public:
    UnionFind(int n) : parent(n), rank(n, 0), components(n) {
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
        
        components--;
        return true;
    }
    
    bool connected(int x, int y) {
        return find(x) == find(y);
    }
    
    int getComponents() {
        return components;
    }
};

// Kruskal's MST using Union-Find
int kruskalMST(int n, vector<vector<int>>& edges) {
    // Sort edges by weight
    sort(edges.begin(), edges.end(), 
         [](auto& a, auto& b) { return a[2] < b[2]; });
    
    UnionFind uf(n);
    int mstCost = 0;
    
    for (auto& e : edges) {
        if (uf.unite(e[0], e[1])) {
            mstCost += e[2];
        }
    }
    
    return mstCost;
}

// Time:  O(E log E) for sorting, O(α(n)) per union/find
// Space: O(V)`;

  const bfsTemplateJS = `// BFS Template - Shortest Path in Unweighted Graph
function bfs(graph, start, end, n) {
  const queue = [[start, 0]];  // [node, distance]
  const visited = new Set([start]);
  
  while (queue.length > 0) {
    const [node, dist] = queue.shift();
    
    // Found target
    if (node === end) return dist;
    
    // Explore neighbors
    for (const neighbor of (graph[node] || [])) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push([neighbor, dist + 1]);
      }
    }
  }
  
  return -1;  // Not reachable
}

// Multi-source BFS (e.g., Rotting Oranges)
function multiSourceBFS(grid) {
  const rows = grid.length, cols = grid[0].length;
  const queue = [];
  let fresh = 0;
  
  // Add all rotten oranges to queue
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (grid[r][c] === 2) queue.push([r, c, 0]);
      else if (grid[r][c] === 1) fresh++;
    }
  }
  
  const dirs = [[0,1], [1,0], [0,-1], [-1,0]];
  let minutes = 0;
  
  while (queue.length > 0) {
    const [r, c, time] = queue.shift();
    minutes = Math.max(minutes, time);
    
    for (const [dr, dc] of dirs) {
      const nr = r + dr, nc = c + dc;
      if (nr >= 0 && nr < rows && nc >= 0 && nc < cols && 
          grid[nr][nc] === 1) {
        grid[nr][nc] = 2;
        fresh--;
        queue.push([nr, nc, time + 1]);
      }
    }
  }
  
  return fresh === 0 ? minutes : -1;
}`;

  const bfsTemplateCpp = `// BFS Template - Level Order Traversal
#include <vector>
#include <queue>
#include <unordered_set>
using namespace std;

int bfs(vector<vector<int>>& graph, int start, int end) {
    int n = graph.size();
    vector<bool> visited(n, false);
    queue<pair<int,int>> q;  // {node, distance}
    
    q.push({start, 0});
    visited[start] = true;
    
    while (!q.empty()) {
        auto [node, dist] = q.front();
        q.pop();
        
        if (node == end) return dist;
        
        for (int neighbor : graph[node]) {
            if (!visited[neighbor]) {
                visited[neighbor] = true;
                q.push({neighbor, dist + 1});
            }
        }
    }
    
    return -1;  // Not reachable
}

// 0-1 BFS - When edges have weight 0 or 1
int bfs01(vector<vector<pair<int,int>>>& graph, int start, int end) {
    int n = graph.size();
    vector<int> dist(n, INT_MAX);
    deque<int> dq;
    
    dist[start] = 0;
    dq.push_front(start);
    
    while (!dq.empty()) {
        int u = dq.front();
        dq.pop_front();
        
        if (u == end) return dist[u];
        
        for (auto [v, w] : graph[u]) {
            if (dist[u] + w < dist[v]) {
                dist[v] = dist[u] + w;
                if (w == 0) dq.push_front(v);
                else dq.push_back(v);
            }
        }
    }
    
    return dist[end];
}

// Time:  O(V + E)
// Space: O(V)`;

  const tabs = [
    {
      label: 'Dijkstra',
      icon: '🎯',
      content: (
        <div className="space-y-6">
          <Card>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-white">Dijkstra's Algorithm</h3>
              <Badge variant="primary">Shortest Path</Badge>
            </div>
            <p className="text-gray-400 mb-6">
              Finds shortest path from source to all vertices in weighted graph with non-negative edge weights.
            </p>
            <div className="space-y-6">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-medium text-gray-400">JavaScript Implementation</span>
                  <Badge size="sm">O((V+E) log V)</Badge>
                </div>
                <CodeBlock code={dijkstraJavaScript} language="javascript" />
              </div>
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-medium text-gray-400">C++ Implementation</span>
                  <Badge size="sm">Optimized</Badge>
                </div>
                <CodeBlock code={dijkstraCpp} language="cpp" />
              </div>
            </div>
          </Card>
        </div>
      )
    },
    {
      label: 'Topological Sort',
      icon: '📊',
      content: (
        <div className="space-y-6">
          <Card>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-white">Topological Sort</h3>
              <Badge variant="secondary">DAG Ordering</Badge>
            </div>
            <p className="text-gray-400 mb-6">
              Linear ordering of directed acyclic graph vertices. Essential for dependency resolution.
            </p>
            <div className="space-y-6">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-medium text-gray-400">JavaScript - Kahn's Algorithm (BFS)</span>
                  <Badge size="sm">O(V + E)</Badge>
                </div>
                <CodeBlock code={topologicalSortJS} language="javascript" />
              </div>
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-medium text-gray-400">C++ - DFS-based</span>
                  <Badge size="sm">O(V + E)</Badge>
                </div>
                <CodeBlock code={topologicalSortCpp} language="cpp" />
              </div>
            </div>
          </Card>
        </div>
      )
    },
    {
      label: 'Union-Find',
      icon: '🔗',
      content: (
        <div className="space-y-6">
          <Card>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-white">Union-Find (Disjoint Set Union)</h3>
              <Badge variant="primary">Dynamic Connectivity</Badge>
            </div>
            <p className="text-gray-400 mb-6">
              Efficiently manages disjoint sets with near-constant time operations using path compression and union by rank.
            </p>
            <div className="space-y-6">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-medium text-gray-400">JavaScript Implementation</span>
                  <Badge size="sm">O(α(n)) per op</Badge>
                </div>
                <CodeBlock code={unionFindJS} language="javascript" />
              </div>
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-medium text-gray-400">C++ with Kruskal's MST</span>
                  <Badge size="sm">Optimized</Badge>
                </div>
                <CodeBlock code={unionFindCpp} language="cpp" />
              </div>
            </div>
          </Card>
        </div>
      )
    },
    {
      label: 'BFS Templates',
      icon: '🌊',
      content: (
        <div className="space-y-6">
          <Card>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-white">BFS Templates</h3>
              <Badge variant="secondary">Breadth-First</Badge>
            </div>
            <p className="text-gray-400 mb-6">
              Various BFS patterns for shortest path, level-order traversal, and multi-source problems.
            </p>
            <div className="space-y-6">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-medium text-gray-400">JavaScript - Standard & Multi-source BFS</span>
                  <Badge size="sm">O(V + E)</Badge>
                </div>
                <CodeBlock code={bfsTemplateJS} language="javascript" />
              </div>
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-medium text-gray-400">C++ - Standard & 0-1 BFS</span>
                  <Badge size="sm">Optimized</Badge>
                </div>
                <CodeBlock code={bfsTemplateCpp} language="cpp" />
              </div>
            </div>
          </Card>
        </div>
      )
    }
  ];

  return (
    <div className="space-y-8 animate-fadeIn">
      <Section 
        title="Implementation Templates" 
        icon={<FiCode />}
        subtitle="Production-ready code templates for common graph algorithms"
      >
        <div className="mb-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="bg-gradient-to-br from-accent-primary/10 to-accent-primary/5">
            <div className="flex items-center gap-3">
              <FiCpu className="text-2xl text-accent-primary" />
              <div>
                <div className="text-2xl font-bold text-white">4</div>
                <div className="text-sm text-gray-400">Core Algorithms</div>
              </div>
            </div>
          </Card>
          <Card className="bg-gradient-to-br from-accent-secondary/10 to-accent-secondary/5">
            <div className="flex items-center gap-3">
              <FiCode className="text-2xl text-accent-secondary" />
              <div>
                <div className="text-2xl font-bold text-white">2</div>
                <div className="text-sm text-gray-400">Languages</div>
              </div>
            </div>
          </Card>
          <Card className="bg-gradient-to-br from-accent-tertiary/10 to-accent-tertiary/5">
            <div className="flex items-center gap-3">
              <FiZap className="text-2xl text-accent-tertiary" />
              <div>
                <div className="text-2xl font-bold text-white">Optimized</div>
                <div className="text-sm text-gray-400">Best Practices</div>
              </div>
            </div>
          </Card>
        </div>

        <Tabs tabs={tabs} defaultTab={0} />
      </Section>

      {/* Complexity Summary */}
      <Section 
        title="Complexity Analysis" 
        icon={<FiTrendingUp />}
        subtitle="Time and space complexity for all algorithms"
      >
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-dark-600">
                <th className="text-left py-3 px-4 text-gray-400 font-semibold">Algorithm</th>
                <th className="text-left py-3 px-4 text-gray-400 font-semibold">Time Complexity</th>
                <th className="text-left py-3 px-4 text-gray-400 font-semibold">Space Complexity</th>
                <th className="text-left py-3 px-4 text-gray-400 font-semibold">Use Case</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-dark-600/50">
                <td className="py-3 px-4 text-white font-medium">Dijkstra</td>
                <td className="py-3 px-4"><Badge size="sm">O((V+E) log V)</Badge></td>
                <td className="py-3 px-4"><Badge size="sm" variant="secondary">O(V)</Badge></td>
                <td className="py-3 px-4 text-gray-400 text-sm">Weighted shortest path</td>
              </tr>
              <tr className="border-b border-dark-600/50">
                <td className="py-3 px-4 text-white font-medium">Topological Sort</td>
                <td className="py-3 px-4"><Badge size="sm">O(V + E)</Badge></td>
                <td className="py-3 px-4"><Badge size="sm" variant="secondary">O(V)</Badge></td>
                <td className="py-3 px-4 text-gray-400 text-sm">Dependency ordering</td>
              </tr>
              <tr className="border-b border-dark-600/50">
                <td className="py-3 px-4 text-white font-medium">Union-Find</td>
                <td className="py-3 px-4"><Badge size="sm">O(α(n))</Badge></td>
                <td className="py-3 px-4"><Badge size="sm" variant="secondary">O(n)</Badge></td>
                <td className="py-3 px-4 text-gray-400 text-sm">Dynamic connectivity</td>
              </tr>
              <tr>
                <td className="py-3 px-4 text-white font-medium">BFS</td>
                <td className="py-3 px-4"><Badge size="sm">O(V + E)</Badge></td>
                <td className="py-3 px-4"><Badge size="sm" variant="secondary">O(V)</Badge></td>
                <td className="py-3 px-4 text-gray-400 text-sm">Shortest path (unweighted)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Section>
    </div>
  );
};

export default Code;
