// Decision Trees for Pattern Selection
// Helps users identify which pattern to use based on problem characteristics

export const decisionTrees = {
  // Main Decision Tree - Top Level
  main: {
    question: "What type of data structure is primarily involved?",
    options: [
      {
        answer: "Array or String",
        next: "arrayPatterns"
      },
      {
        answer: "Linked List",
        next: "linkedListPatterns"
      },
      {
        answer: "Tree",
        next: "treePatterns"
      },
      {
        answer: "Graph",
        next: "graphPatterns"
      },
      {
        answer: "Intervals/Ranges",
        next: "intervalPatterns"
      },
      {
        answer: "Matrix/Grid",
        next: "matrixPatterns"
      }
    ]
  },

  // Array & String Patterns Decision Tree
  arrayPatterns: {
    question: "What are you trying to find or optimize?",
    options: [
      {
        answer: "Subarray/Substring with specific property",
        keywords: ["contiguous", "window", "substring", "subarray"],
        pattern: "sliding-window",
        confidence: "high",
        explanation: "Sliding Window is perfect for contiguous sequences"
      },
      {
        answer: "Two elements that satisfy a condition",
        keywords: ["pair", "two sum", "sorted array"],
        pattern: "two-pointers",
        confidence: "high",
        explanation: "Two Pointers works great for pair-based problems"
      },
      {
        answer: "Missing or duplicate numbers in range [1,n]",
        keywords: ["missing", "duplicate", "1 to n", "cyclic"],
        pattern: "cyclic-sort",
        confidence: "high",
        explanation: "Cyclic Sort is optimal for array index-value relationships"
      },
      {
        answer: "Multiple elements satisfying sum condition",
        keywords: ["three sum", "four sum", "k sum"],
        next: "multiElementPattern"
      },
      {
        answer: "Optimize brute force nested loops",
        next: "optimizeNestedLoops"
      }
    ]
  },

  // Linked List Patterns Decision Tree
  linkedListPatterns: {
    question: "What operation do you need to perform?",
    options: [
      {
        answer: "Detect cycle or find middle",
        keywords: ["cycle", "middle", "detect loop"],
        pattern: "fast-slow",
        confidence: "high",
        explanation: "Fast & Slow pointers (Floyd's algorithm) is the standard approach"
      },
      {
        answer: "Reverse or reorder list",
        keywords: ["reverse", "reorder", "palindrome"],
        pattern: "in-place-reversal",
        confidence: "high"
      },
      {
        answer: "Merge or compare multiple lists",
        keywords: ["merge", "k lists"],
        pattern: "merge-k-sorted",
        confidence: "medium"
      }
    ]
  },

  // Tree Patterns Decision Tree
  treePatterns: {
    question: "What type of tree operation?",
    options: [
      {
        answer: "Level-by-level processing",
        keywords: ["level order", "level by level", "zigzag", "vertical"],
        pattern: "bfs",
        confidence: "high",
        explanation: "BFS (Level Order) is designed for level-wise traversal"
      },
      {
        answer: "Path-based problems (root to leaf)",
        keywords: ["path", "root to leaf", "sum", "diameter"],
        pattern: "dfs",
        confidence: "high",
        explanation: "DFS is perfect for path exploration"
      },
      {
        answer: "Connect or modify tree structure",
        keywords: ["connect", "next pointer", "serialize"],
        next: "treeModification"
      }
    ]
  },

  // Graph Patterns Decision Tree
  graphPatterns: {
    question: "What graph problem are you solving?",
    options: [
      {
        answer: "Shortest path",
        next: "shortestPathDecision"
      },
      {
        answer: "Connected components or islands",
        keywords: ["connected", "islands", "components", "provinces"],
        pattern: "dfs",
        alternativePattern: "bfs",
        confidence: "high",
        explanation: "DFS or BFS for exploring connected regions"
      },
      {
        answer: "Cycle detection",
        keywords: ["cycle", "circular", "deadlock"],
        next: "cycleDetection"
      },
      {
        answer: "Topological ordering",
        keywords: ["dependencies", "course schedule", "ordering"],
        pattern: "topological-sort",
        confidence: "high"
      },
      {
        answer: "Minimum spanning tree",
        keywords: ["minimum cost", "connect all", "spanning tree"],
        pattern: "union-find",
        alternativePattern: "kruskal-prim",
        confidence: "high"
      }
    ]
  },

  // Shortest Path Decision Sub-tree
  shortestPathDecision: {
    question: "What type of graph and weights?",
    options: [
      {
        answer: "Unweighted graph",
        pattern: "bfs",
        confidence: "high",
        explanation: "BFS finds shortest path in unweighted graphs"
      },
      {
        answer: "Weighted with non-negative weights",
        pattern: "dijkstra",
        confidence: "high",
        explanation: "Dijkstra's algorithm for positive weights"
      },
      {
        answer: "Weighted with negative weights",
        pattern: "bellman-ford",
        confidence: "high",
        explanation: "Bellman-Ford handles negative weights"
      },
      {
        answer: "All pairs shortest path",
        pattern: "floyd-warshall",
        confidence: "high",
        explanation: "Floyd-Warshall for all-pairs distances"
      },
      {
        answer: "DAG (Directed Acyclic Graph)",
        pattern: "topological-dp",
        confidence: "high",
        explanation: "Topological sort + DP for DAG"
      }
    ]
  },

  // Cycle Detection Decision Sub-tree
  cycleDetection: {
    question: "What type of graph?",
    options: [
      {
        answer: "Undirected graph",
        pattern: "dfs-parent-tracking",
        alternativePattern: "union-find",
        confidence: "high",
        explanation: "DFS with parent tracking or Union-Find"
      },
      {
        answer: "Directed graph",
        pattern: "dfs-recursion-stack",
        alternativePattern: "topological-sort",
        confidence: "high",
        explanation: "DFS with recursion stack or check topological sort validity"
      }
    ]
  },

  // Interval Patterns Decision Tree
  intervalPatterns: {
    question: "What interval operation?",
    options: [
      {
        answer: "Merge overlapping intervals",
        keywords: ["merge", "overlap", "combine"],
        pattern: "merge-intervals",
        confidence: "high",
        explanation: "Sort by start time then merge"
      },
      {
        answer: "Find intersections",
        keywords: ["intersection", "common"],
        pattern: "interval-intersection",
        confidence: "high"
      },
      {
        answer: "Insert new interval",
        keywords: ["insert", "add interval"],
        pattern: "insert-interval",
        confidence: "high"
      }
    ]
  },

  // Nested Loops Optimization
  optimizeNestedLoops: {
    question: "What does the nested loop do?",
    options: [
      {
        answer: "Checks contiguous elements (i to i+k)",
        pattern: "sliding-window",
        confidence: "high",
        explanation: "Sliding Window optimizes contiguous range operations"
      },
      {
        answer: "Compares pairs from opposite ends",
        pattern: "two-pointers",
        confidence: "high",
        explanation: "Two Pointers from both ends"
      },
      {
        answer: "Builds upon previous results",
        pattern: "dynamic-programming",
        confidence: "medium",
        explanation: "DP when subproblems overlap"
      }
    ]
  }
};

// Pattern Recognition Helper Functions
export const patternRecognition = {
  
  // Analyze problem statement for pattern keywords
  analyzeKeywords(problemStatement) {
    const keywords = problemStatement.toLowerCase();
    const patterns = [];

    // Sliding Window keywords
    if (/(subarray|substring|contiguous|window)/i.test(keywords)) {
      patterns.push({
        pattern: 'sliding-window',
        confidence: 'high',
        reason: 'Contains contiguous sequence keywords'
      });
    }

    // Two Pointers keywords
    if (/(two sum|pair|sorted|opposite)/i.test(keywords)) {
      patterns.push({
        pattern: 'two-pointers',
        confidence: 'high',
        reason: 'Contains pair-matching keywords'
      });
    }

    // Fast & Slow keywords
    if (/(cycle|middle|linked list|detect)/i.test(keywords)) {
      patterns.push({
        pattern: 'fast-slow',
        confidence: 'high',
        reason: 'Contains cycle detection keywords'
      });
    }

    // BFS keywords
    if (/(level|shortest path|minimum|layer)/i.test(keywords)) {
      patterns.push({
        pattern: 'bfs',
        confidence: 'medium',
        reason: 'Contains level-order or shortest-path keywords'
      });
    }

    // DFS keywords
    if (/(path|traverse|connected|island|component)/i.test(keywords)) {
      patterns.push({
        pattern: 'dfs',
        confidence: 'medium',
        reason: 'Contains traversal or connectivity keywords'
      });
    }

    return patterns;
  },

  // Get pattern based on constraints
  getPatternByConstraints(constraints) {
    const { 
      dataStructure, 
      operation, 
      optimization,
      timeLimit,
      spaceLimit 
    } = constraints;

    if (dataStructure === 'array' && optimization === 'nested-loops') {
      if (operation === 'contiguous') return 'sliding-window';
      if (operation === 'pair-sum') return 'two-pointers';
    }

    if (dataStructure === 'linked-list' && operation === 'cycle') {
      return 'fast-slow';
    }

    if (dataStructure === 'tree' && operation === 'level-order') {
      return 'bfs';
    }

    if (dataStructure === 'graph' && operation === 'shortest-path') {
      if (timeLimit === 'strict') return 'bfs'; // unweighted
      return 'dijkstra'; // weighted
    }

    return null;
  },

  // Master decision function
  decidePatt(problemDescription, constraints = {}) {
    // Step 1: Keyword analysis
    const keywordPatterns = this.analyzeKeywords(problemDescription);

    // Step 2: Constraint analysis
    const constraintPattern = this.getPatternByConstraints(constraints);

    // Step 3: Combine results
    if (constraintPattern) {
      return {
        recommendedPattern: constraintPattern,
        alternativePatterns: keywordPatterns,
        confidence: 'high'
      };
    }

    if (keywordPatterns.length > 0) {
      return {
        recommendedPattern: keywordPatterns[0].pattern,
        alternativePatterns: keywordPatterns.slice(1),
        confidence: keywordPatterns[0].confidence
      };
    }

    return {
      recommendedPattern: null,
      message: 'Need more information to determine pattern',
      suggestions: 'Try using the interactive decision tree'
    };
  }
};

// Quick Reference Guide
export const patternQuickReference = {
  'sliding-window': {
    when: 'Contiguous subarray/substring problems',
    keywords: ['subarray', 'substring', 'window', 'consecutive'],
    time: 'O(n)',
    space: 'O(1) to O(k)'
  },
  'two-pointers': {
    when: 'Pair-based problems in sorted arrays',
    keywords: ['pair', 'two sum', 'sorted', 'opposite ends'],
    time: 'O(n)',
    space: 'O(1)'
  },
  'fast-slow': {
    when: 'Cycle detection or middle finding in linked lists',
    keywords: ['cycle', 'middle', 'linked list', 'loop'],
    time: 'O(n)',
    space: 'O(1)'
  },
  'bfs': {
    when: 'Level-order traversal or shortest path in unweighted graph',
    keywords: ['level', 'shortest path', 'layer', 'breadth'],
    time: 'O(V + E)',
    space: 'O(V)'
  },
  'dfs': {
    when: 'Path finding, connectivity, or exhaustive search',
    keywords: ['path', 'connected', 'island', 'traverse', 'depth'],
    time: 'O(V + E)',
    space: 'O(h) recursion depth'
  },
  'merge-intervals': {
    when: 'Overlapping intervals need merging',
    keywords: ['intervals', 'merge', 'overlap', 'meetings'],
    time: 'O(n log n)',
    space: 'O(n)'
  },
  'topological-sort': {
    when: 'Dependency ordering in DAG',
    keywords: ['dependencies', 'prerequisites', 'ordering', 'schedule'],
    time: 'O(V + E)',
    space: 'O(V)'
  },
  'union-find': {
    when: 'Dynamic connectivity or cycle detection',
    keywords: ['connected', 'components', 'disjoint sets', 'union'],
    time: 'O(α(n)) amortized',
    space: 'O(n)'
  }
};

export default decisionTrees;
