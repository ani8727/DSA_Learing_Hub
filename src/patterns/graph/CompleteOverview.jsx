import React from 'react';
import { FaProjectDiagram, FaRoute, FaNetworkWired, FaTree } from 'react-icons/fa';

const CompleteOverview = () => {
  return (
    <div className="max-w-6xl mx-auto p-6 space-y-8">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl p-8 text-white">
        <h1 className="text-4xl font-bold mb-4 flex items-center gap-3">
          <FaProjectDiagram className="text-5xl" />
          Complete Graph Mastery Guide
        </h1>
        <p className="text-xl text-gray-100">
          Master graph algorithms through pattern recognition and systematic problem-solving
        </p>
      </div>

      {/* What is a Graph? */}
      <section className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-bold mb-4 text-gray-800 dark:text-gray-100">
          What is a Graph?
        </h2>
        <div className="prose dark:prose-invert max-w-none">
          <p className="text-lg mb-4">
            A <strong>Graph G = (V, E)</strong> is a mathematical structure consisting of:
          </p>
          <ul className="space-y-2 text-lg">
            <li><strong>V</strong>: Set of vertices (nodes)</li>
            <li><strong>E</strong>: Set of edges (connections between vertices)</li>
          </ul>
          
          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-6 my-6">
            <h3 className="text-xl font-bold mb-2">Core Principle</h3>
            <p className="text-lg">
              Graphs model <strong>relationships</strong> and <strong>connections</strong>. 
              Any problem involving entities and their relationships can be represented as a graph.
            </p>
          </div>
        </div>
      </section>

      {/* Graph Types */}
      <section className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-100">
          Graph Types Taxonomy
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {/* By Direction */}
          <div className="border-2 border-purple-200 dark:border-purple-700 rounded-lg p-6">
            <h3 className="text-xl font-bold mb-4 text-purple-600 dark:text-purple-400">
              By Direction
            </h3>
            <div className="space-y-3">
              <div>
                <h4 className="font-semibold">Undirected Graph</h4>
                <p className="text-gray-600 dark:text-gray-300">Edge (u,v) = (v,u)</p>
                <p className="text-sm italic">Example: Social networks (friendship is mutual)</p>
              </div>
              <div>
                <h4 className="font-semibold">Directed Graph (Digraph)</h4>
                <p className="text-gray-600 dark:text-gray-300">Edge (u,v) ≠ (v,u)</p>
                <p className="text-sm italic">Example: Twitter (follow is one-way)</p>
              </div>
            </div>
          </div>

          {/* By Weight */}
          <div className="border-2 border-blue-200 dark:border-blue-700 rounded-lg p-6">
            <h3 className="text-xl font-bold mb-4 text-blue-600 dark:text-blue-400">
              By Weight
            </h3>
            <div className="space-y-3">
              <div>
                <h4 className="font-semibold">Unweighted Graph</h4>
                <p className="text-gray-600 dark:text-gray-300">All edges have equal weight</p>
                <p className="text-sm italic">Example: City connections (connected or not)</p>
              </div>
              <div>
                <h4 className="font-semibold">Weighted Graph</h4>
                <p className="text-gray-600 dark:text-gray-300">Edges have costs/distances</p>
                <p className="text-sm italic">Example: Road networks with distances</p>
              </div>
            </div>
          </div>

          {/* By Connectivity */}
          <div className="border-2 border-green-200 dark:border-green-700 rounded-lg p-6">
            <h3 className="text-xl font-bold mb-4 text-green-600 dark:text-green-400">
              By Connectivity
            </h3>
            <div className="space-y-3">
              <div>
                <h4 className="font-semibold">Connected</h4>
                <p className="text-gray-600 dark:text-gray-300">Path exists between any two vertices</p>
              </div>
              <div>
                <h4 className="font-semibold">Disconnected</h4>
                <p className="text-gray-600 dark:text-gray-300">Multiple separate components</p>
              </div>
              <div>
                <h4 className="font-semibold">Strongly Connected</h4>
                <p className="text-gray-600 dark:text-gray-300">Path exists both ways (directed)</p>
              </div>
            </div>
          </div>

          {/* Special Types */}
          <div className="border-2 border-orange-200 dark:border-orange-700 rounded-lg p-6">
            <h3 className="text-xl font-bold mb-4 text-orange-600 dark:text-orange-400">
              Special Types
            </h3>
            <div className="space-y-2">
              <div>
                <h4 className="font-semibold">Tree</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">Connected acyclic (V-1 edges)</p>
              </div>
              <div>
                <h4 className="font-semibold">DAG</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">Directed Acyclic Graph</p>
              </div>
              <div>
                <h4 className="font-semibold">Bipartite</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">Two sets, edges only between sets</p>
              </div>
              <div>
                <h4 className="font-semibold">Complete</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">Every vertex connected to every other</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Graph Patterns */}
      <section className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-100 flex items-center gap-3">
          <FaNetworkWired />
          Core Graph Patterns
        </h2>
        
        <div className="space-y-6">
          {/* DFS Pattern */}
          <div className="border-l-4 border-green-500 pl-6 py-4 bg-green-50 dark:bg-green-900/20">
            <h3 className="text-2xl font-bold mb-3 text-green-700 dark:text-green-400">
              1. Depth-First Search (DFS) 🌲
            </h3>
            <p className="text-lg mb-3">
              <strong>Principle:</strong> Explore as far as possible along each branch before backtracking
            </p>
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">When to Use:</h4>
              <ul className="list-disc list-inside space-y-1">
                <li>Connected components counting</li>
                <li>Cycle detection (directed/undirected)</li>
                <li>Path finding (all paths)</li>
                <li>Topological sorting</li>
                <li>Strongly connected components</li>
              </ul>
              <div className="mt-3 p-3 bg-gray-100 dark:bg-gray-700 rounded">
                <code className="text-sm">Time: O(V + E) | Space: O(V)</code>
              </div>
            </div>
          </div>

          {/* BFS Pattern */}
          <div className="border-l-4 border-blue-500 pl-6 py-4 bg-blue-50 dark:bg-blue-900/20">
            <h3 className="text-2xl font-bold mb-3 text-blue-700 dark:text-blue-400">
              2. Breadth-First Search (BFS) 🌊
            </h3>
            <p className="text-lg mb-3">
              <strong>Principle:</strong> Explore graph level by level (shortest path in unweighted graphs)
            </p>
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">When to Use:</h4>
              <ul className="list-disc list-inside space-y-1">
                <li>Shortest path (unweighted graph)</li>
                <li>Level-order processing</li>
                <li>Minimum steps/distance</li>
                <li>Finding nearest element</li>
              </ul>
              <div className="mt-3 p-3 bg-gray-100 dark:bg-gray-700 rounded">
                <code className="text-sm">Time: O(V + E) | Space: O(V)</code>
              </div>
            </div>
          </div>

          {/* Shortest Path Pattern */}
          <div className="border-l-4 border-purple-500 pl-6 py-4 bg-purple-50 dark:bg-purple-900/20">
            <h3 className="text-2xl font-bold mb-3 text-purple-700 dark:text-purple-400 flex items-center gap-2">
              3. Shortest Path Algorithms <FaRoute />
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Dijkstra's Algorithm</h4>
                <p className="text-sm mb-2">For non-negative weighted graphs</p>
                <code className="text-xs bg-gray-100 dark:bg-gray-700 p-2 rounded block">
                  O((V + E) log V) with priority queue
                </code>
              </div>
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Bellman-Ford</h4>
                <p className="text-sm mb-2">Handles negative weights, detects negative cycles</p>
                <code className="text-xs bg-gray-100 dark:bg-gray-700 p-2 rounded block">
                  O(V × E)
                </code>
              </div>
            </div>
          </div>

          {/* Topological Sort */}
          <div className="border-l-4 border-orange-500 pl-6 py-4 bg-orange-50 dark:bg-orange-900/20">
            <h3 className="text-2xl font-bold mb-3 text-orange-700 dark:text-orange-400">
              4. Topological Sort 📊
            </h3>
            <p className="text-lg mb-3">
              <strong>Principle:</strong> Linear ordering of vertices in a DAG
            </p>
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">When to Use:</h4>
              <ul className="list-disc list-inside space-y-1">
                <li>Course prerequisites / build order</li>
                <li>Task scheduling with dependencies</li>
                <li>Compilation order</li>
              </ul>
              <div className="mt-3 p-3 bg-gray-100 dark:bg-gray-700 rounded">
                <code className="text-sm">Kahn's Algorithm (BFS) | DFS-based</code>
              </div>
            </div>
          </div>

          {/* Union-Find */}
          <div className="border-l-4 border-red-500 pl-6 py-4 bg-red-50 dark:bg-red-900/20">
            <h3 className="text-2xl font-bold mb-3 text-red-700 dark:text-red-400">
              5. Union-Find (Disjoint Set) 🔗
            </h3>
            <p className="text-lg mb-3">
              <strong>Principle:</strong> Track connected components dynamically
            </p>
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">When to Use:</h4>
              <ul className="list-disc list-inside space-y-1">
                <li>Dynamic connectivity queries</li>
                <li>Cycle detection while building graph</li>
                <li>Kruskal's MST algorithm</li>
                <li>Network connectivity</li>
              </ul>
              <div className="mt-3 p-3 bg-gray-100 dark:bg-gray-700 rounded">
                <code className="text-sm">Time: O(α(n)) ≈ O(1) with path compression</code>
              </div>
            </div>
          </div>

          {/* MST */}
          <div className="border-l-4 border-teal-500 pl-6 py-4 bg-teal-50 dark:bg-teal-900/20">
            <h3 className="text-2xl font-bold mb-3 text-teal-700 dark:text-teal-400 flex items-center gap-2">
              6. Minimum Spanning Tree <FaTree />
            </h3>
            <p className="text-lg mb-3">
              <strong>Principle:</strong> Connect all vertices with minimum total edge weight
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Kruskal's Algorithm</h4>
                <p className="text-sm mb-2">Edge-centric, uses Union-Find</p>
                <code className="text-xs bg-gray-100 dark:bg-gray-700 p-2 rounded block">
                  O(E log E)
                </code>
              </div>
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Prim's Algorithm</h4>
                <p className="text-sm mb-2">Vertex-centric, uses Priority Queue</p>
                <code className="text-xs bg-gray-100 dark:bg-gray-700 p-2 rounded block">
                  O((V + E) log V)
                </code>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Decision Framework */}
      <section className="bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-indigo-900/30 dark:to-purple-900/30 rounded-lg p-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-100">
          Quick Pattern Decision Framework
        </h2>
        
        <div className="space-y-4">
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
            <h3 className="font-bold text-lg mb-2">❓ Is it about finding shortest path?</h3>
            <p className="text-gray-700 dark:text-gray-300 ml-4">
              → <strong>Unweighted?</strong> Use BFS<br/>
              → <strong>Non-negative weights?</strong> Use Dijkstra<br/>
              → <strong>Negative weights?</strong> Use Bellman-Ford
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
            <h3 className="font-bold text-lg mb-2">❓ Is it about dependencies/ordering?</h3>
            <p className="text-gray-700 dark:text-gray-300 ml-4">
              → Use <strong>Topological Sort</strong> (Kahn's or DFS-based)
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
            <h3 className="font-bold text-lg mb-2">❓ Is it about connectivity or cycles?</h3>
            <p className="text-gray-700 dark:text-gray-300 ml-4">
              → <strong>Count components?</strong> Use DFS/BFS<br/>
              → <strong>Dynamic connectivity?</strong> Use Union-Find<br/>
              → <strong>Detect cycles?</strong> Use DFS (three-color for directed)
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
            <h3 className="font-bold text-lg mb-2">❓ Is it about minimum cost to connect all?</h3>
            <p className="text-gray-700 dark:text-gray-300 ml-4">
              → Use <strong>MST</strong> (Kruskal's or Prim's)
            </p>
          </div>
        </div>
      </section>

      {/* Graph Representations */}
      <section className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-100">
          Graph Representations
        </h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          <div className="border-2 border-blue-300 rounded-lg p-6">
            <h3 className="text-xl font-bold mb-3 text-blue-600">Adjacency List</h3>
            <p className="mb-3">Array of lists containing neighbors</p>
            <div className="text-sm space-y-1 bg-gray-50 dark:bg-gray-700 p-3 rounded">
              <div>✅ Space: O(V + E)</div>
              <div>✅ Best for sparse graphs</div>
              <div>✅ Easy neighbor iteration</div>
              <div>❌ Slow edge existence check</div>
            </div>
          </div>

          <div className="border-2 border-green-300 rounded-lg p-6">
            <h3 className="text-xl font-bold mb-3 text-green-600">Adjacency Matrix</h3>
            <p className="mb-3">2D array where matrix[i][j] = edge weight</p>
            <div className="text-sm space-y-1 bg-gray-50 dark:bg-gray-700 p-3 rounded">
              <div>✅ O(1) edge existence check</div>
              <div>✅ Good for dense graphs</div>
              <div>❌ Space: O(V²)</div>
              <div>❌ Slow neighbor iteration</div>
            </div>
          </div>

          <div className="border-2 border-purple-300 rounded-lg p-6">
            <h3 className="text-xl font-bold mb-3 text-purple-600">Edge List</h3>
            <p className="mb-3">List of (u, v, weight) tuples</p>
            <div className="text-sm space-y-1 bg-gray-50 dark:bg-gray-700 p-3 rounded">
              <div>✅ Space: O(E)</div>
              <div>✅ Perfect for Kruskal's MST</div>
              <div>✅ Easy to sort by weight</div>
              <div>❌ Slow neighbor lookup</div>
            </div>
          </div>
        </div>
      </section>

      {/* Mathematical Properties */}
      <section className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-100">
          Key Mathematical Properties
        </h2>
        
        <div className="space-y-4">
          <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
            <h3 className="font-bold text-lg mb-2">Handshaking Lemma</h3>
            <p className="font-mono text-lg">Σ deg(v) = 2|E|</p>
            <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
              Sum of all degrees equals twice the number of edges (each edge contributes to 2 vertices)
            </p>
          </div>

          <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
            <h3 className="font-bold text-lg mb-2">Tree Property</h3>
            <p className="font-mono text-lg">|E| = |V| - 1</p>
            <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
              A tree with n vertices has exactly n-1 edges
            </p>
          </div>

          <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
            <h3 className="font-bold text-lg mb-2">Complete Graph</h3>
            <p className="font-mono text-lg">|E| = V(V-1)/2</p>
            <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
              Maximum edges in undirected graph without self-loops
            </p>
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <section className="bg-gradient-to-r from-green-500 to-teal-500 rounded-lg p-8 text-white">
        <h2 className="text-3xl font-bold mb-4">Ready to Master Graphs?</h2>
        <p className="text-lg mb-6">
          Explore each pattern in depth with theory, implementations, and curated problems!
        </p>
        <div className="grid md:grid-cols-3 gap-4">
          <button className="bg-white text-green-600 font-bold py-3 px-6 rounded-lg hover:bg-green-50 transition">
            → Theory Deep Dive
          </button>
          <button className="bg-white text-teal-600 font-bold py-3 px-6 rounded-lg hover:bg-teal-50 transition">
            → Code Templates
          </button>
          <button className="bg-white text-blue-600 font-bold py-3 px-6 rounded-lg hover:bg-blue-50 transition">
            → Practice Problems
          </button>
        </div>
      </section>
    </div>
  );
};

export default CompleteOverview;
