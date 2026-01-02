// Comprehensive Graph Patterns Data - Based on Deep Mastery Guide
// This file contains all graph patterns with complete problem sets, theory, and decision frameworks

export const graphPatterns = {
  // ============================================
  // 1. GRAPH TRAVERSAL PATTERNS
  // ============================================
  
  "graph-dfs": {
    id: "graph-dfs",
    name: "Graph DFS (Depth-First Search)",
    category: "Graph Traversal",
    difficulty: "Medium",
    icon: "🌲",
    
    firstDecisionRule: {
      title: "When to Use Graph DFS",
      keywords: [
        "connected components",
        "cycle detection",
        "path exists",
        "all paths",
        "backtracking",
        "topological sort",
        "strongly connected components"
      ],
      criteria: [
        "Need to explore all possibilities",
        "Finding paths or cycles",
        "Component-based problems",
        "Dependency ordering"
      ]
    },
    
    complexity: {
      time: {
        best: "O(V + E)",
        average: "O(V + E)",
        worst: "O(V + E)",
        explanation: "Visit each vertex once, examine each edge once"
      },
      space: {
        best: "O(V)",
        average: "O(V)",
        worst: "O(V)",
        explanation: "Visited array + recursion stack"
      }
    },
    
    subPatterns: [
      {
        name: "Recursive DFS",
        useCase: "Most common, clean code",
        template: "recursive"
      },
      {
        name: "Iterative DFS (Stack)",
        useCase: "Avoid stack overflow, explicit control",
        template: "iterative"
      },
      {
        name: "Connected Components",
        useCase: "Count islands, provinces, friend circles",
        template: "components"
      },
      {
        name: "Cycle Detection (Undirected)",
        useCase: "Detect cycles using parent tracking",
        template: "cycle-undirected"
      },
      {
        name: "Cycle Detection (Directed)",
        useCase: "Three-color DFS, course schedule",
        template: "cycle-directed"
      },
      {
        name: "All Paths DFS",
        useCase: "Backtracking to find all solutions",
        template: "all-paths"
      }
    ],
    
    problems: {
      beginner: [
        {
          id: 1,
          title: "Number of Provinces",
          leetcode: 547,
          difficulty: "Medium",
          companies: ["Amazon", "Microsoft", "Bloomberg"],
          hint: "Count connected components using DFS",
          solution: "Run DFS from each unvisited city, count DFS calls",
          timeComplexity: "O(n²)",
          spaceComplexity: "O(n)"
        },
        {
          id: 2,
          title: "Number of Islands",
          leetcode: 200,
          difficulty: "Medium",
          companies: ["Amazon", "Facebook", "Google", "Microsoft"],
          hint: "DFS on grid to mark connected land cells",
          solution: "For each '1', run DFS to mark entire island, count DFS calls",
          timeComplexity: "O(m×n)",
          spaceComplexity: "O(m×n)"
        },
        {
          id: 3,
          title: "Clone Graph",
          leetcode: 133,
          difficulty: "Medium",
          companies: ["Facebook", "Amazon", "Microsoft"],
          hint: "DFS with hashmap to track cloned nodes",
          solution: "Use map to store original->clone mapping during DFS",
          timeComplexity: "O(V + E)",
          spaceComplexity: "O(V)"
        }
      ],
      
      intermediate: [
        {
          id: 4,
          title: "Course Schedule",
          leetcode: 207,
          difficulty: "Medium",
          companies: ["Amazon", "Google", "Facebook", "Microsoft"],
          hint: "Detect cycle in directed graph using DFS",
          solution: "Three-color DFS: white (unvisited), gray (processing), black (done)",
          timeComplexity: "O(V + E)",
          spaceComplexity: "O(V)"
        },
        {
          id: 5,
          title: "All Paths From Source to Target",
          leetcode: 797,
          difficulty: "Medium",
          companies: ["Amazon", "Facebook", "Bloomberg"],
          hint: "Backtracking DFS to explore all paths",
          solution: "DFS with path tracking, add to result when target reached",
          timeComplexity: "O(2^V × V)",
          spaceComplexity: "O(V)"
        },
        {
          id: 6,
          title: "Pacific Atlantic Water Flow",
          leetcode: 417,
          difficulty: "Medium",
          companies: ["Google", "Amazon", "Facebook"],
          hint: "DFS from both oceans, find intersection",
          solution: "Run DFS from Pacific edges and Atlantic edges separately",
          timeComplexity: "O(m×n)",
          spaceComplexity: "O(m×n)"
        }
      ],
      
      advanced: [
        {
          id: 7,
          title: "Critical Connections in a Network",
          leetcode: 1192,
          difficulty: "Hard",
          companies: ["Amazon", "Google", "Facebook"],
          hint: "Find bridges using Tarjan's algorithm",
          solution: "DFS with discovery time and low-link values",
          timeComplexity: "O(V + E)",
          spaceComplexity: "O(V)"
        },
        {
          id: 8,
          title: "Longest Increasing Path in Matrix",
          leetcode: 329,
          difficulty: "Hard",
          companies: ["Google", "Amazon", "Facebook"],
          hint: "DFS with memoization (DP)",
          solution: "DFS from each cell, cache results to avoid recomputation",
          timeComplexity: "O(m×n)",
          spaceComplexity: "O(m×n)"
        }
      ]
    }
  },
  
  "graph-bfs": {
    id: "graph-bfs",
    name: "Graph BFS (Breadth-First Search)",
    category: "Graph Traversal",
    difficulty: "Medium",
    icon: "🌊",
    
    firstDecisionRule: {
      title: "When to Use Graph BFS",
      keywords: [
        "shortest path",
        "unweighted graph",
        "level by level",
        "minimum steps",
        "nearest",
        "minimum distance"
      ],
      criteria: [
        "Need shortest path in unweighted graph",
        "Level-order processing required",
        "Minimum steps/distance problems",
        "Finding nearest element"
      ]
    },
    
    complexity: {
      time: {
        best: "O(V + E)",
        average: "O(V + E)",
        worst: "O(V + E)",
        explanation: "Visit each vertex once, examine each edge once"
      },
      space: {
        best: "O(V)",
        average: "O(V)",
        worst: "O(V)",
        explanation: "Queue can hold up to V vertices"
      }
    },
    
    subPatterns: [
      {
        name: "Standard BFS",
        useCase: "Shortest path in unweighted graph",
        template: "standard"
      },
      {
        name: "Multi-Source BFS",
        useCase: "Start from multiple sources simultaneously",
        template: "multi-source"
      },
      {
        name: "Bidirectional BFS",
        useCase: "Meet in the middle optimization",
        template: "bidirectional"
      },
      {
        name: "0-1 BFS",
        useCase: "Shortest path with 0 and 1 weights",
        template: "zero-one"
      }
    ],
    
    problems: {
      beginner: [
        {
          id: 1,
          title: "Binary Tree Level Order Traversal",
          leetcode: 102,
          difficulty: "Medium",
          companies: ["Amazon", "Microsoft", "Facebook"],
          hint: "BFS with level tracking",
          solution: "Use queue, process level by level",
          timeComplexity: "O(n)",
          spaceComplexity: "O(n)"
        },
        {
          id: 2,
          title: "Rotting Oranges",
          leetcode: 994,
          difficulty: "Medium",
          companies: ["Amazon", "Bloomberg", "Microsoft"],
          hint: "Multi-source BFS from all rotten oranges",
          solution: "Start BFS from all rotten oranges simultaneously, count minutes",
          timeComplexity: "O(m×n)",
          spaceComplexity: "O(m×n)"
        },
        {
          id: 3,
          title: "Shortest Path in Binary Matrix",
          leetcode: 1091,
          difficulty: "Medium",
          companies: ["Amazon", "Facebook", "Google"],
          hint: "BFS on grid with 8 directions",
          solution: "BFS from (0,0) to (n-1,n-1), track distance",
          timeComplexity: "O(n²)",
          spaceComplexity: "O(n²)"
        }
      ],
      
      intermediate: [
        {
          id: 4,
          title: "Word Ladder",
          leetcode: 127,
          difficulty: "Hard",
          companies: ["Amazon", "Facebook", "Google", "Microsoft"],
          hint: "BFS on word graph",
          solution: "Build graph, BFS to find shortest transformation sequence",
          timeComplexity: "O(M² × N)",
          spaceComplexity: "O(M² × N)"
        },
        {
          id: 5,
          title: "01 Matrix",
          leetcode: 542,
          difficulty: "Medium",
          companies: ["Amazon", "Google", "Facebook"],
          hint: "Multi-source BFS from all zeros",
          solution: "Start BFS from all 0s, update distances to 1s",
          timeComplexity: "O(m×n)",
          spaceComplexity: "O(m×n)"
        },
        {
          id: 6,
          title: "Minimum Knight Moves",
          leetcode: 1197,
          difficulty: "Medium",
          companies: ["Amazon", "Google"],
          hint: "BFS with knight's move pattern",
          solution: "BFS with 8 possible knight moves, find shortest path",
          timeComplexity: "O(|x| × |y|)",
          spaceComplexity: "O(|x| × |y|)"
        }
      ],
      
      advanced: [
        {
          id: 7,
          title: "Shortest Path Visiting All Nodes",
          leetcode: 847,
          difficulty: "Hard",
          companies: ["Google", "Amazon"],
          hint: "BFS with bitmask state",
          solution: "State = (node, visited_set), BFS to visit all nodes",
          timeComplexity: "O(2^n × n²)",
          spaceComplexity: "O(2^n × n)"
        },
        {
          id: 8,
          title: "Minimum Cost to Make Valid Path",
          leetcode: 1368,
          difficulty: "Hard",
          companies: ["Google"],
          hint: "0-1 BFS with deque",
          solution: "Use deque: add to front for 0 cost, back for 1 cost",
          timeComplexity: "O(m×n)",
          spaceComplexity: "O(m×n)"
        }
      ]
    }
  },
  
  // ============================================
  // 2. SHORTEST PATH PATTERNS
  // ============================================
  
  "dijkstra": {
    id: "dijkstra",
    name: "Dijkstra's Algorithm",
    category: "Shortest Path",
    difficulty: "Hard",
    icon: "🛣️",
    
    firstDecisionRule: {
      title: "When to Use Dijkstra",
      keywords: [
        "shortest path",
        "weighted graph",
        "non-negative weights",
        "single source",
        "minimum cost",
        "priority queue"
      ],
      criteria: [
        "Weighted graph with non-negative weights",
        "Single-source shortest path",
        "Need actual shortest distances",
        "Can't have negative edge weights"
      ]
    },
    
    complexity: {
      time: {
        best: "O((V + E) log V)",
        average: "O((V + E) log V)",
        worst: "O((V + E) log V)",
        explanation: "With min-heap/priority queue"
      },
      space: {
        best: "O(V)",
        average: "O(V)",
        worst: "O(V)",
        explanation: "Distance array + priority queue"
      }
    },
    
    problems: {
      beginner: [
        {
          id: 1,
          title: "Network Delay Time",
          leetcode: 743,
          difficulty: "Medium",
          companies: ["Amazon", "Google", "Facebook"],
          hint: "Single-source shortest path with Dijkstra",
          solution: "Run Dijkstra from source, return max distance",
          timeComplexity: "O((V + E) log V)",
          spaceComplexity: "O(V + E)"
        },
        {
          id: 2,
          title: "Path With Minimum Effort",
          leetcode: 1631,
          difficulty: "Medium",
          companies: ["Google", "Facebook"],
          hint: "Modified Dijkstra with effort as weight",
          solution: "Dijkstra where edge weight = abs height difference",
          timeComplexity: "O(m×n × log(m×n))",
          spaceComplexity: "O(m×n)"
        }
      ],
      
      intermediate: [
        {
          id: 3,
          title: "Cheapest Flights Within K Stops",
          leetcode: 787,
          difficulty: "Medium",
          companies: ["Amazon", "Google", "Facebook"],
          hint: "Modified Dijkstra with stop constraint",
          solution: "Dijkstra with (cost, node, stops) state",
          timeComplexity: "O(E × K × log(V × K))",
          spaceComplexity: "O(V × K)"
        },
        {
          id: 4,
          title: "Swim in Rising Water",
          leetcode: 778,
          difficulty: "Hard",
          companies: ["Google", "Amazon"],
          hint: "Dijkstra with elevation as weight",
          solution: "Binary search + BFS or Dijkstra with max elevation",
          timeComplexity: "O(n² log n)",
          spaceComplexity: "O(n²)"
        }
      ],
      
      advanced: [
        {
          id: 5,
          title: "Find the City With Smallest Number of Neighbors",
          leetcode: 1334,
          difficulty: "Medium",
          companies: ["Amazon", "Google"],
          hint: "Run Dijkstra from each city",
          solution: "Dijkstra from each city, count reachable cities within threshold",
          timeComplexity: "O(V × (V + E) log V)",
          spaceComplexity: "O(V + E)"
        }
      ]
    }
  },
  
  // ============================================
  // 3. TOPOLOGICAL SORT PATTERNS
  // ============================================
  
  "topological-sort": {
    id: "topological-sort",
    name: "Topological Sort",
    category: "Graph Ordering",
    difficulty: "Medium",
    icon: "📊",
    
    firstDecisionRule: {
      title: "When to Use Topological Sort",
      keywords: [
        "prerequisites",
        "dependencies",
        "course schedule",
        "build order",
        "directed acyclic graph",
        "ordering",
        "sequence"
      ],
      criteria: [
        "Need to order tasks with dependencies",
        "Directed Acyclic Graph (DAG)",
        "Prerequisite relationships",
        "Build order problems"
      ]
    },
    
    complexity: {
      time: {
        best: "O(V + E)",
        average: "O(V + E)",
        worst: "O(V + E)",
        explanation: "Visit each vertex and edge once"
      },
      space: {
        best: "O(V)",
        average: "O(V)",
        worst: "O(V)",
        explanation: "In-degree array + queue"
      }
    },
    
    subPatterns: [
      {
        name: "Kahn's Algorithm (BFS)",
        useCase: "Most intuitive, detects cycles easily",
        template: "kahn"
      },
      {
        name: "DFS-based Topological Sort",
        useCase: "Reverse post-order gives topological order",
        template: "dfs"
      }
    ],
    
    problems: {
      beginner: [
        {
          id: 1,
          title: "Course Schedule",
          leetcode: 207,
          difficulty: "Medium",
          companies: ["Amazon", "Google", "Facebook", "Microsoft"],
          hint: "Detect cycle in directed graph",
          solution: "Kahn's algorithm or DFS cycle detection",
          timeComplexity: "O(V + E)",
          spaceComplexity: "O(V + E)"
        },
        {
          id: 2,
          title: "Course Schedule II",
          leetcode: 210,
          difficulty: "Medium",
          companies: ["Amazon", "Facebook", "Google"],
          hint: "Return actual topological order",
          solution: "Kahn's algorithm, return order if no cycle",
          timeComplexity: "O(V + E)",
          spaceComplexity: "O(V + E)"
        }
      ],
      
      intermediate: [
        {
          id: 3,
          title: "Alien Dictionary",
          leetcode: 269,
          difficulty: "Hard",
          companies: ["Google", "Facebook", "Amazon"],
          hint: "Build graph from word order, toposort",
          solution: "Create edges from word comparisons, topological sort",
          timeComplexity: "O(C)",
          spaceComplexity: "O(1)"
        },
        {
          id: 4,
          title: "Sequence Reconstruction",
          leetcode: 444,
          difficulty: "Medium",
          companies: ["Google", "Amazon"],
          hint: "Check if sequences uniquely determine order",
          solution: "Build graph, verify unique topological order",
          timeComplexity: "O(V + E)",
          spaceComplexity: "O(V + E)"
        }
      ],
      
      advanced: [
        {
          id: 5,
          title: "Parallel Courses III",
          leetcode: 2050,
          difficulty: "Hard",
          companies: ["Google"],
          hint: "Topological sort with time accumulation",
          solution: "Toposort with DP to track completion times",
          timeComplexity: "O(V + E)",
          spaceComplexity: "O(V + E)"
        }
      ]
    }
  },
  
  // ============================================
  // 4. UNION-FIND PATTERNS
  // ============================================
  
  "union-find": {
    id: "union-find",
    name: "Union-Find (Disjoint Set)",
    category: "Graph Connectivity",
    difficulty: "Medium",
    icon: "🔗",
    
    firstDecisionRule: {
      title: "When to Use Union-Find",
      keywords: [
        "dynamic connectivity",
        "connected components",
        "cycle detection",
        "minimum spanning tree",
        "disjoint sets",
        "union",
        "find"
      ],
      criteria: [
        "Need to track connected components dynamically",
        "Detect cycles while building graph",
        "Merge disjoint sets efficiently",
        "Kruskal's MST algorithm"
      ]
    },
    
    complexity: {
      time: {
        best: "O(α(n))",
        average: "O(α(n))",
        worst: "O(α(n))",
        explanation: "α(n) is inverse Ackermann, nearly constant"
      },
      space: {
        best: "O(n)",
        average: "O(n)",
        worst: "O(n)",
        explanation: "Parent and rank arrays"
      }
    },
    
    problems: {
      beginner: [
        {
          id: 1,
          title: "Number of Provinces",
          leetcode: 547,
          difficulty: "Medium",
          companies: ["Amazon", "Microsoft"],
          hint: "Union cities, count components",
          solution: "Union connected cities, count distinct roots",
          timeComplexity: "O(n² × α(n))",
          spaceComplexity: "O(n)"
        },
        {
          id: 2,
          title: "Redundant Connection",
          leetcode: 684,
          difficulty: "Medium",
          companies: ["Amazon", "Google", "Microsoft"],
          hint: "Detect cycle using union-find",
          solution: "For each edge, if already connected, return edge",
          timeComplexity: "O(n × α(n))",
          spaceComplexity: "O(n)"
        }
      ],
      
      intermediate: [
        {
          id: 3,
          title: "Accounts Merge",
          leetcode: 721,
          difficulty: "Medium",
          companies: ["Amazon", "Facebook", "Google"],
          hint: "Union emails, group by connected component",
          solution: "Union emails belonging to same person",
          timeComplexity: "O(n × α(n))",
          spaceComplexity: "O(n)"
        },
        {
          id: 4,
          title: "Satisfiability of Equality Equations",
          leetcode: 990,
          difficulty: "Medium",
          companies: ["Google", "Amazon"],
          hint: "Union equal variables, check inequalities",
          solution: "First union all '==', then check all '!='",
          timeComplexity: "O(n × α(n))",
          spaceComplexity: "O(1)"
        }
      ],
      
      advanced: [
        {
          id: 5,
          title: "Smallest String With Swaps",
          leetcode: 1202,
          difficulty: "Medium",
          companies: ["Google", "Amazon"],
          hint: "Union swappable indices, sort each component",
          solution: "Union indices, sort characters in each component",
          timeComplexity: "O(n log n + m × α(n))",
          spaceComplexity: "O(n)"
        },
        {
          id: 6,
          title: "Number of Islands II",
          leetcode: 305,
          difficulty: "Hard",
          companies: ["Google", "Amazon", "Facebook"],
          hint: "Dynamic union-find as lands added",
          solution: "For each new land, union with adjacent lands",
          timeComplexity: "O(m × n + k × α(m × n))",
          spaceComplexity: "O(m × n)"
        }
      ]
    }
  },
  
  // ============================================
  // 5. MINIMUM SPANNING TREE PATTERNS
  // ============================================
  
  "mst": {
    id: "mst",
    name: "Minimum Spanning Tree",
    category: "Graph Optimization",
    difficulty: "Hard",
    icon: "🌳",
    
    firstDecisionRule: {
      title: "When to Use MST",
      keywords: [
        "minimum cost",
        "connect all",
        "spanning tree",
        "minimum total weight",
        "connect cities",
        "network design"
      ],
      criteria: [
        "Need to connect all vertices with minimum cost",
        "Undirected weighted graph",
        "No cycles required",
        "Optimize total edge weight"
      ]
    },
    
    subPatterns: [
      {
        name: "Kruskal's Algorithm",
        useCase: "Edge-centric, use union-find",
        template: "kruskal"
      },
      {
        name: "Prim's Algorithm",
        useCase: "Vertex-centric, use priority queue",
        template: "prim"
      }
    ],
    
    problems: {
      beginner: [
        {
          id: 1,
          title: "Min Cost to Connect All Points",
          leetcode: 1584,
          difficulty: "Medium",
          companies: ["Amazon", "Google"],
          hint: "Complete graph, use Kruskal or Prim",
          solution: "Generate all edges, run Kruskal's algorithm",
          timeComplexity: "O(n² log n)",
          spaceComplexity: "O(n²)"
        }
      ],
      
      intermediate: [
        {
          id: 2,
          title: "Connecting Cities With Minimum Cost",
          leetcode: 1135,
          difficulty: "Medium",
          companies: ["Amazon"],
          hint: "Classic MST problem",
          solution: "Kruskal's algorithm with union-find",
          timeComplexity: "O(E log E)",
          spaceComplexity: "O(V)"
        }
      ],
      
      advanced: [
        {
          id: 3,
          title: "Optimize Water Distribution",
          leetcode: 1168,
          difficulty: "Hard",
          companies: ["Google"],
          hint: "Add virtual node for wells",
          solution: "Create super source for wells, run MST",
          timeComplexity: "O(E log E)",
          spaceComplexity: "O(V + E)"
        }
      ]
    }
  }
};

// Export pattern list for navigation
export const graphPatternsList = Object.keys(graphPatterns).map(key => ({
  id: key,
  name: graphPatterns[key].name,
  category: graphPatterns[key].category,
  difficulty: graphPatterns[key].difficulty,
  icon: graphPatterns[key].icon,
  description: graphPatterns[key].firstDecisionRule.title
}));

export default graphPatterns;
