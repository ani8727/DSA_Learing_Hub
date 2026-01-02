import React from 'react';
import { FaTree, FaSearchPlus, FaCodeBranch, FaLayerGroup } from 'react-icons/fa';

const TreeCompleteOverview = () => {
  return (
    <div className="max-w-6xl mx-auto p-6 space-y-8">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-600 to-teal-600 rounded-xl p-8 text-white">
        <h1 className="text-4xl font-bold mb-4 flex items-center gap-3">
          <FaTree className="text-5xl" />
          Complete Tree DSA Mastery Guide
        </h1>
        <p className="text-xl text-gray-100">
          Master tree data structures through deep theoretical understanding and pattern recognition
        </p>
      </div>

      {/* What is a Tree? */}
      <section className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-bold mb-4 text-gray-800 dark:text-gray-100">
          What is a Tree?
        </h2>
        <div className="prose dark:prose-invert max-w-none">
          <p className="text-lg mb-4">
            A <strong>Tree T = (V, E)</strong> is a connected, acyclic, undirected graph where:
          </p>
          <ul className="space-y-2 text-lg">
            <li><strong>V</strong>: Non-empty set of vertices (nodes)</li>
            <li><strong>E</strong>: Set of edges connecting vertices</li>
            <li>There exists <strong>exactly one path</strong> between any two vertices</li>
          </ul>
          
          <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-6 my-6">
            <h3 className="text-xl font-bold mb-2">Fundamental Tree Theorem</h3>
            <p className="text-lg font-mono mb-2">
              |E| = |V| - 1
            </p>
            <p className="text-base">
              A tree with <em>n</em> vertices has exactly <em>n-1</em> edges
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4 my-6">
            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
              <h4 className="font-bold mb-2">Hierarchy</h4>
              <p className="text-sm">Trees naturally model hierarchical relationships with parent-child structure</p>
            </div>
            <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
              <h4 className="font-bold mb-2">Acyclicity</h4>
              <p className="text-sm">No circular dependencies, enables recursive reasoning</p>
            </div>
            <div className="bg-teal-50 dark:bg-teal-900/20 p-4 rounded-lg">
              <h4 className="font-bold mb-2">Connectivity</h4>
              <p className="text-sm">Single unique path between any two nodes</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tree Types */}
      <section className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-100">
          Tree Classification
        </h2>
        
        <div className="space-y-6">
          {/* Binary Tree Types */}
          <div className="border-2 border-blue-200 dark:border-blue-700 rounded-lg p-6">
            <h3 className="text-2xl font-bold mb-4 text-blue-600 dark:text-blue-400">
              Binary Tree Types
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Full Binary Tree</h4>
                <p className="text-sm mb-2">Every node has 0 or 2 children (no nodes with 1 child)</p>
                <code className="text-xs">n = 2n₀ - 1 (n₀ = leaves)</code>
              </div>
              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Complete Binary Tree</h4>
                <p className="text-sm mb-2">All levels filled except last (filled left to right)</p>
                <code className="text-xs">Perfect for heap implementation</code>
              </div>
              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Perfect Binary Tree</h4>
                <p className="text-sm mb-2">All internal nodes have 2 children, leaves at same level</p>
                <code className="text-xs">n = 2^(h+1) - 1</code>
              </div>
              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Balanced Binary Tree</h4>
                <p className="text-sm mb-2">Height difference between subtrees ≤ 1</p>
                <code className="text-xs">Maintains O(log n) operations</code>
              </div>
            </div>
          </div>

          {/* Special Tree Structures */}
          <div className="border-2 border-purple-200 dark:border-purple-700 rounded-lg p-6">
            <h3 className="text-2xl font-bold mb-4 text-purple-600 dark:text-purple-400">
              Specialized Tree Structures
            </h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  <FaSearchPlus /> Binary Search Tree
                </h4>
                <p className="text-sm mb-2">Left {"<"} Root {"<"} Right property</p>
                <p className="text-xs italic">O(log n) search in balanced BST</p>
              </div>
              <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  <FaLayerGroup /> AVL Tree
                </h4>
                <p className="text-sm mb-2">Self-balancing BST</p>
                <p className="text-xs italic">Balance factor = {"|left_h - right_h| ≤ 1"}</p>
              </div>
              <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  <FaCodeBranch /> Red-Black Tree
                </h4>
                <p className="text-sm mb-2">Self-balancing with color properties</p>
                <p className="text-xs italic">Guaranteed O(log n) operations</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Tree Patterns */}
      <section className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-100">
          Core Tree Patterns & Techniques
        </h2>
        
        <div className="space-y-6">
          {/* DFS Traversals */}
          <div className="border-l-4 border-green-500 pl-6 py-4 bg-green-50 dark:bg-green-900/20">
            <h3 className="text-2xl font-bold mb-3 text-green-700 dark:text-green-400">
              1. Tree DFS Traversals 🌲
            </h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Preorder (Root → L → R)</h4>
                <p className="text-sm mb-2">Visit root before children</p>
                <p className="text-xs italic">Use: Copy tree, prefix expression</p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Inorder (L → Root → R)</h4>
                <p className="text-sm mb-2">Visit left, then root, then right</p>
                <p className="text-xs italic">Use: BST sorted order</p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Postorder (L → R → Root)</h4>
                <p className="text-sm mb-2">Visit children before root</p>
                <p className="text-xs italic">Use: Delete tree, evaluate expression</p>
              </div>
            </div>
            <div className="mt-4 p-3 bg-gray-100 dark:bg-gray-700 rounded">
              <code className="text-sm">Time: O(n) | Space: O(h) where h = height</code>
            </div>
          </div>

          {/* BFS Level Order */}
          <div className="border-l-4 border-blue-500 pl-6 py-4 bg-blue-50 dark:bg-blue-900/20">
            <h3 className="text-2xl font-bold mb-3 text-blue-700 dark:text-blue-400">
              2. Tree BFS (Level Order) 🌊
            </h3>
            <p className="text-lg mb-3">
              <strong>Principle:</strong> Process tree level by level using queue
            </p>
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">When to Use:</h4>
              <ul className="list-disc list-inside space-y-1">
                <li>Level-by-level processing</li>
                <li>Minimum depth finding</li>
                <li>Right/left side view</li>
                <li>Zigzag traversal</li>
              </ul>
              <div className="mt-3 p-3 bg-gray-100 dark:bg-gray-700 rounded">
                <code className="text-sm">Time: O(n) | Space: O(w) where w = max width</code>
              </div>
            </div>
          </div>

          {/* Recursive Patterns */}
          <div className="border-l-4 border-purple-500 pl-6 py-4 bg-purple-50 dark:bg-purple-900/20">
            <h3 className="text-2xl font-bold mb-3 text-purple-700 dark:text-purple-400">
              3. Recursive Tree Patterns 🔄
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Top-Down Approach</h4>
                <p className="text-sm mb-2">Pass information from parent to children</p>
                <p className="text-xs italic">Example: Check path sum, max depth with tracking</p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Bottom-Up Approach</h4>
                <p className="text-sm mb-2">Aggregate information from children to parent</p>
                <p className="text-xs italic">Example: Calculate height, diameter</p>
              </div>
            </div>
          </div>

          {/* BST Operations */}
          <div className="border-l-4 border-orange-500 pl-6 py-4 bg-orange-50 dark:bg-orange-900/20">
            <h3 className="text-2xl font-bold mb-3 text-orange-700 dark:text-orange-400">
              4. Binary Search Tree Operations 🔍
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Search, Insert, Delete</h4>
                <p className="text-sm mb-2">Use BST property to navigate</p>
                <code className="text-xs bg-gray-100 dark:bg-gray-700 p-2 rounded block">
                  O(h) where h = height (O(log n) if balanced)
                </code>
              </div>
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Inorder Successor/Predecessor</h4>
                <p className="text-sm mb-2">Find next/previous in sorted order</p>
                <code className="text-xs bg-gray-100 dark:bg-gray-700 p-2 rounded block">
                  O(h) traversal
                </code>
              </div>
            </div>
          </div>

          {/* Tree Construction */}
          <div className="border-l-4 border-teal-500 pl-6 py-4 bg-teal-50 dark:bg-teal-900/20">
            <h3 className="text-2xl font-bold mb-3 text-teal-700 dark:text-teal-400">
              5. Tree Construction 🏗️
            </h3>
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
              <h4 className="font-semibold mb-3">Common Construction Patterns:</h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="font-mono text-sm mr-3">→</span>
                  <div>
                    <strong>From Preorder + Inorder:</strong>
                    <span className="text-sm ml-2">Preorder[0] = root, split inorder</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="font-mono text-sm mr-3">→</span>
                  <div>
                    <strong>From Postorder + Inorder:</strong>
                    <span className="text-sm ml-2">Postorder[end] = root, split inorder</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="font-mono text-sm mr-3">→</span>
                  <div>
                    <strong>From Sorted Array to BST:</strong>
                    <span className="text-sm ml-2">Middle = root, recurse on halves</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Tree DP */}
          <div className="border-l-4 border-red-500 pl-6 py-4 bg-red-50 dark:bg-red-900/20">
            <h3 className="text-2xl font-bold mb-3 text-red-700 dark:text-red-400">
              6. Tree Dynamic Programming 🧮
            </h3>
            <p className="text-lg mb-3">
              <strong>Principle:</strong> Optimize choices by combining subtree solutions
            </p>
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Common DP Patterns:</h4>
              <ul className="list-disc list-inside space-y-1">
                <li>Choose or skip node (House Robber III)</li>
                <li>Maximum path sum problems</li>
                <li>Count valid subtrees</li>
                <li>Optimize node selection</li>
              </ul>
              <div className="mt-3 p-3 bg-gray-100 dark:bg-gray-700 rounded">
                <code className="text-sm">Time: O(n) | Space: O(h) with memoization</code>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mathematical Properties */}
      <section className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-100">
          Key Mathematical Properties
        </h2>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
            <h3 className="font-bold text-lg mb-2">Height vs Nodes</h3>
            <p className="font-mono text-base mb-2">h_min = ⌈log₂(n+1)⌉ - 1</p>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Minimum height for n nodes (complete binary tree)
            </p>
          </div>

          <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
            <h3 className="font-bold text-lg mb-2">Leaf Count in Binary Tree</h3>
            <p className="font-mono text-base mb-2">n₀ = n₂ + 1</p>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Leaves = nodes with 2 children + 1
            </p>
          </div>

          <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
            <h3 className="font-bold text-lg mb-2">Perfect Binary Tree</h3>
            <p className="font-mono text-base mb-2">n = 2^(h+1) - 1</p>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Total nodes in perfect tree of height h
            </p>
          </div>

          <div className="p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
            <h3 className="font-bold text-lg mb-2">Max Nodes at Level</h3>
            <p className="font-mono text-base mb-2">nodes_at_level_k = 2^k</p>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Maximum nodes at any level k (0-indexed)
            </p>
          </div>
        </div>
      </section>

      {/* Quick Decision Framework */}
      <section className="bg-gradient-to-r from-indigo-100 to-blue-100 dark:from-indigo-900/30 dark:to-blue-900/30 rounded-lg p-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-100">
          Quick Pattern Decision Framework
        </h2>
        
        <div className="space-y-4">
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
            <h3 className="font-bold text-lg mb-2">❓ Need to visit all nodes?</h3>
            <p className="text-gray-700 dark:text-gray-300 ml-4">
              → <strong>Specific order?</strong> Use DFS (preorder/inorder/postorder)<br/>
              → <strong>Level by level?</strong> Use BFS
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
            <h3 className="font-bold text-lg mb-2">❓ Is it a Binary Search Tree?</h3>
            <p className="text-gray-700 dark:text-gray-300 ml-4">
              → Use BST property: navigate left/right based on value<br/>
              → Inorder traversal gives sorted order
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
            <h3 className="font-bold text-lg mb-2">❓ Need to find paths or sums?</h3>
            <p className="text-gray-700 dark:text-gray-300 ml-4">
              → <strong>Root to leaf?</strong> DFS with path tracking<br/>
              → <strong>Any path?</strong> Consider all node-to-node paths (Tree DP)
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
            <h3 className="font-bold text-lg mb-2">❓ Optimization problem?</h3>
            <p className="text-gray-700 dark:text-gray-300 ml-4">
              → Use <strong>Tree DP</strong>: choose/skip nodes, maximize/minimize values
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
            <h3 className="font-bold text-lg mb-2">❓ Need to construct tree?</h3>
            <p className="text-gray-700 dark:text-gray-300 ml-4">
              → From traversals: Use hashmap for O(n) construction<br/>
              → From sorted array: Binary search approach
            </p>
          </div>
        </div>
      </section>

      {/* Complexity Cheat Sheet */}
      <section className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-100">
          Complexity Cheat Sheet
        </h2>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-gray-100 dark:bg-gray-700">
              <tr>
                <th className="p-3">Operation</th>
                <th className="p-3">Time Complexity</th>
                <th className="p-3">Space Complexity</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              <tr>
                <td className="p-3 font-semibold">DFS Traversal</td>
                <td className="p-3 font-mono">O(n)</td>
                <td className="p-3 font-mono">O(h)</td>
              </tr>
              <tr className="bg-gray-50 dark:bg-gray-700/50">
                <td className="p-3 font-semibold">BFS Traversal</td>
                <td className="p-3 font-mono">O(n)</td>
                <td className="p-3 font-mono">O(w)</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold">BST Search</td>
                <td className="p-3 font-mono">O(log n) avg, O(n) worst</td>
                <td className="p-3 font-mono">O(1)</td>
              </tr>
              <tr className="bg-gray-50 dark:bg-gray-700/50">
                <td className="p-3 font-semibold">BST Insert/Delete</td>
                <td className="p-3 font-mono">O(log n) avg, O(n) worst</td>
                <td className="p-3 font-mono">O(h)</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold">Tree Construction</td>
                <td className="p-3 font-mono">O(n)</td>
                <td className="p-3 font-mono">O(n)</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-sm text-gray-600 dark:text-gray-300">
          <strong>Note:</strong> h = height, w = max width, n = total nodes
        </p>
      </section>

      {/* Next Steps */}
      <section className="bg-gradient-to-r from-green-500 to-blue-500 rounded-lg p-8 text-white">
        <h2 className="text-3xl font-bold mb-4">Ready to Master Trees?</h2>
        <p className="text-lg mb-6">
          Dive deep into each pattern with comprehensive theory, code templates, and curated problems!
        </p>
        <div className="grid md:grid-cols-3 gap-4">
          <button className="bg-white text-green-600 font-bold py-3 px-6 rounded-lg hover:bg-green-50 transition">
            → Theory Deep Dive
          </button>
          <button className="bg-white text-blue-600 font-bold py-3 px-6 rounded-lg hover:bg-blue-50 transition">
            → Code Templates
          </button>
          <button className="bg-white text-teal-600 font-bold py-3 px-6 rounded-lg hover:bg-teal-50 transition">
            → Practice Problems
          </button>
        </div>
      </section>
    </div>
  );
};

export default TreeCompleteOverview;
