// Comprehensive DSA Patterns Data - Complete Pattern Coverage
export const patternsData = [
  // ============================================
  // ARRAYS & STRINGS PATTERNS
  // ============================================
  {
    id: 'sliding-window',
    name: 'Sliding Window',
    shortDescription: 'Efficiently process subarrays/substrings by maintaining a window that slides through the data.',
    description: 'The Sliding Window pattern is used to perform operations on a specific window size of an array or linked list, such as finding the longest subarray or substring with certain conditions.',
    difficulty: 'Medium',
    category: 'Arrays & Strings',
    icon: '🪟',
    problemCount: 25,
    timeComplexity: 'O(n)',
    spaceComplexity: 'O(1) - O(k)',
    prerequisites: ['Arrays', 'Two Pointers basics'],
    useCases: [
      'Maximum sum subarray of size K',
      'Longest substring with K distinct characters',
      'Fruits into baskets problem',
      'Minimum window substring'
    ],
    keyInsights: [
      'Converts O(n²) brute force to O(n) solution',
      'Window can be fixed or dynamic size',
      'Track window state with variables or hash maps'
    ]
  },
  {
    id: 'two-pointers',
    name: 'Two Pointers',
    shortDescription: 'Use two pointers to iterate through data structures, often from opposite ends or at different speeds.',
    description: 'The Two Pointers technique uses two pointers to iterate through data, either from both ends moving toward each other, or from the same end at different speeds.',
    difficulty: 'Easy',
    category: 'Arrays & Strings',
    icon: '👆👆',
    problemCount: 15,
    timeComplexity: 'O(n)',
    spaceComplexity: 'O(1)',
    prerequisites: ['Arrays', 'Basic sorting'],
    useCases: [
      'Pair sum in sorted array',
      'Remove duplicates',
      'Container with most water',
      'Three sum problem'
    ],
    keyInsights: [
      'Works best on sorted arrays',
      'Can be used for in-place modifications',
      'Reduces space complexity to O(1)'
    ]
  },
  {
    id: 'fast-slow',
    name: 'Fast & Slow Pointers',
    shortDescription: 'Detect cycles and find middle elements using pointers moving at different speeds.',
    description: 'Also known as the Tortoise and Hare algorithm, this pattern uses two pointers moving at different speeds to detect cycles or find middle elements in linked lists.',
    difficulty: 'Medium',
    category: 'Linked Lists',
    icon: '🐢🐇',
    problemCount: 8,
    timeComplexity: 'O(n)',
    spaceComplexity: 'O(1)',
    prerequisites: ['Linked Lists', 'Pointer manipulation'],
    useCases: [
      'Cycle detection in linked list',
      'Find middle of linked list',
      'Happy number problem',
      'Palindrome linked list'
    ],
    keyInsights: [
      'Fast pointer moves twice as fast as slow',
      'If there is a cycle, pointers will meet',
      'Can find cycle start point with additional pass'
    ]
  },
  {
    id: 'merge-intervals',
    name: 'Merge Intervals',
    shortDescription: 'Handle overlapping intervals by sorting and merging based on start/end times.',
    description: 'This pattern deals with overlapping intervals. In many problems involving intervals, you need to find overlapping intervals or merge them.',
    difficulty: 'Medium',
    category: 'Intervals',
    icon: '📊',
    problemCount: 7,
    timeComplexity: 'O(n log n)',
    spaceComplexity: 'O(n)',
    prerequisites: ['Sorting', 'Arrays'],
    useCases: [
      'Merge overlapping intervals',
      'Insert interval',
      'Interval intersection',
      'Meeting rooms problem'
    ],
    keyInsights: [
      'Always sort intervals by start time first',
      'Compare current interval end with next start',
      'Consider edge cases: touching vs overlapping'
    ]
  },
  {
    id: 'cyclic-sort',
    name: 'Cyclic Sort',
    shortDescription: 'Place elements at their correct indices when dealing with ranges 1 to n.',
    description: 'Cyclic Sort is useful when dealing with arrays containing numbers in a given range. The idea is to place each number at its correct index.',
    difficulty: 'Easy',
    category: 'Arrays',
    icon: '🔄',
    problemCount: 6,
    timeComplexity: 'O(n)',
    spaceComplexity: 'O(1)',
    prerequisites: ['Arrays', 'In-place algorithms'],
    useCases: [
      'Find missing number',
      'Find all missing numbers',
      'Find duplicate number',
      'Find all duplicates'
    ],
    keyInsights: [
      'Works when numbers are in range 1 to n',
      'Swap elements to their correct positions',
      'After sorting, misplaced elements indicate answers'
    ]
  },
  {
    id: 'bfs',
    name: 'Breadth-First Search (BFS)',
    shortDescription: 'Explore nodes level by level using a queue for shortest path and level-order problems.',
    description: 'BFS explores nodes level by level, using a queue data structure. It is ideal for finding shortest paths and level-order traversals.',
    difficulty: 'Medium',
    category: 'Trees & Graphs',
    icon: '🌊',
    problemCount: 14,
    timeComplexity: 'O(V + E)',
    spaceComplexity: 'O(V)',
    prerequisites: ['Queues', 'Trees', 'Graphs basics'],
    useCases: [
      'Level order traversal',
      'Shortest path in unweighted graph',
      'Binary tree level averages',
      'Connect level order siblings'
    ],
    keyInsights: [
      'Uses queue (FIFO) data structure',
      'Guarantees shortest path in unweighted graphs',
      'Process all nodes at current level before next'
    ]
  },
  {
    id: 'dfs',
    name: 'Tree DFS Traversals',
    shortDescription: 'Explore trees using preorder, inorder, and postorder traversals for various problem types.',
    description: 'Tree DFS patterns include preorder, inorder, and postorder traversals. Master recursive and iterative approaches for tree exploration and problem-solving.',
    difficulty: 'Easy',
    category: 'Trees',
    icon: '🌲',
    problemCount: 30,
    timeComplexity: 'O(n)',
    spaceComplexity: 'O(h)',
    prerequisites: ['Recursion', 'Stacks', 'Trees'],
    useCases: [
      'Tree path sum problems',
      'Calculate height and diameter',
      'Serialize and deserialize trees',
      'Validate BST'
    ],
    keyInsights: [
      'Preorder: Root → Left → Right',
      'Inorder: Left → Root → Right (sorted in BST)',
      'Postorder: Left → Right → Root (bottom-up)'
    ]
  },
  {
    id: 'tree-bfs',
    name: 'Tree BFS (Level Order)',
    shortDescription: 'Process trees level by level using queue-based breadth-first search.',
    description: 'Level order traversal processes nodes level by level, ideal for finding minimum depth, right/left views, and zigzag patterns.',
    difficulty: 'Easy',
    category: 'Trees',
    icon: '🌊',
    problemCount: 20,
    timeComplexity: 'O(n)',
    spaceComplexity: 'O(w)',
    prerequisites: ['Queues', 'Trees'],
    useCases: [
      'Level order traversal',
      'Right/left side view',
      'Zigzag traversal',
      'Minimum depth'
    ],
    keyInsights: [
      'Use queue for level-by-level processing',
      'Track level size for level-specific logic',
      'Space = O(width) not O(height)'
    ]
  },
  {
    id: 'bst',
    name: 'Binary Search Tree',
    shortDescription: 'Leverage BST property (left < root < right) for efficient search and operations.',
    description: 'BST patterns exploit the ordering property for O(log n) operations in balanced trees. Master search, insert, delete, and validation.',
    difficulty: 'Medium',
    category: 'Trees',
    icon: '🔍',
    problemCount: 25,
    timeComplexity: 'O(log n) avg, O(n) worst',
    spaceComplexity: 'O(h)',
    prerequisites: ['Trees', 'Binary Search'],
    useCases: [
      'Search, insert, delete in BST',
      'Kth smallest/largest element',
      'Validate BST',
      'Inorder successor/predecessor'
    ],
    keyInsights: [
      'Inorder traversal gives sorted order',
      'Balance is critical for performance',
      'Compare with root to decide left/right'
    ]
  },
  {
    id: 'tree-construction',
    name: 'Tree Construction',
    shortDescription: 'Build trees from traversals, arrays, or serialize/deserialize representations.',
    description: 'Master constructing trees from various inputs: traversal sequences, sorted arrays, or serialized formats.',
    difficulty: 'Hard',
    category: 'Trees',
    icon: '🏗️',
    problemCount: 15,
    timeComplexity: 'O(n)',
    spaceComplexity: 'O(n)',
    prerequisites: ['Trees', 'Hashmaps', 'Recursion'],
    useCases: [
      'Construct from preorder + inorder',
      'Construct from postorder + inorder',
      'Sorted array to balanced BST',
      'Serialize/deserialize'
    ],
    keyInsights: [
      'Use hashmap for O(1) index lookup',
      'Preorder/postorder gives root',
      'Inorder splits left and right subtrees'
    ]
  },
  {
    id: 'tree-dp',
    name: 'Tree Dynamic Programming',
    shortDescription: 'Optimize tree problems by combining subtree solutions using dynamic programming.',
    description: 'Tree DP solves optimization problems by making choices at each node and combining subtree results.',
    difficulty: 'Hard',
    category: 'Trees',
    icon: '🧮',
    problemCount: 18,
    timeComplexity: 'O(n)',
    spaceComplexity: 'O(h)',
    prerequisites: ['Trees', 'Dynamic Programming', 'DFS'],
    useCases: [
      'House Robber III',
      'Maximum path sum',
      'Binary tree cameras',
      'Count good nodes'
    ],
    keyInsights: [
      'Choose or skip current node',
      'Combine subtree DP states',
      'Post-order traversal typical'
    ]
  },
  {
    id: 'graph-dfs',
    name: 'Graph DFS',
    shortDescription: 'Explore graphs depth-first for connected components, cycles, and path finding.',
    description: 'Graph DFS explores as far as possible before backtracking. Master cycle detection, component counting, and topological sorting.',
    difficulty: 'Medium',
    category: 'Graphs',
    icon: '🌲',
    problemCount: 35,
    timeComplexity: 'O(V + E)',
    spaceComplexity: 'O(V)',
    prerequisites: ['Recursion', 'Stacks', 'Graphs'],
    useCases: [
      'Connected components',
      'Cycle detection',
      'All paths finding',
      'Topological sort'
    ],
    keyInsights: [
      'Recursive or stack-based',
      'Three-color for directed cycle detection',
      'Backtracking for all paths'
    ]
  },
  {
    id: 'graph-bfs',
    name: 'Graph BFS',
    shortDescription: 'Find shortest paths in unweighted graphs using breadth-first search.',
    description: 'Graph BFS guarantees shortest path in unweighted graphs. Master level-order processing and multi-source BFS.',
    difficulty: 'Medium',
    category: 'Graphs',
    icon: '🌊',
    problemCount: 30,
    timeComplexity: 'O(V + E)',
    spaceComplexity: 'O(V)',
    prerequisites: ['Queues', 'Graphs'],
    useCases: [
      'Shortest path (unweighted)',
      'Level-order problems',
      'Multi-source BFS',
      '0-1 BFS'
    ],
    keyInsights: [
      'Mark visited when pushing to queue',
      'Queue size = nodes at current level',
      'Guarantees shortest path'
    ]
  },
  {
    id: 'dijkstra',
    name: 'Dijkstra\'s Algorithm',
    shortDescription: 'Find shortest paths in weighted graphs with non-negative weights.',
    description: 'Dijkstra\'s algorithm uses priority queue to find shortest paths from a source to all vertices in weighted graphs.',
    difficulty: 'Hard',
    category: 'Graphs',
    icon: '🛣️',
    problemCount: 20,
    timeComplexity: 'O((V + E) log V)',
    spaceComplexity: 'O(V)',
    prerequisites: ['Graphs', 'Priority Queues', 'Heaps'],
    useCases: [
      'Network delay time',
      'Cheapest flights within K stops',
      'Path with minimum effort',
      'Shortest path problems'
    ],
    keyInsights: [
      'Only works with non-negative weights',
      'Greedy approach with min-heap',
      'Relaxation of edges'
    ]
  },
  {
    id: 'topological-sort',
    name: 'Topological Sort',
    shortDescription: 'Order tasks with dependencies using topological sorting of directed acyclic graphs.',
    description: 'Topological sort provides linear ordering of vertices in DAG. Master Kahn\'s algorithm and DFS-based approaches.',
    difficulty: 'Medium',
    category: 'Graphs',
    icon: '📊',
    problemCount: 15,
    timeComplexity: 'O(V + E)',
    spaceComplexity: 'O(V)',
    prerequisites: ['Graphs', 'DFS', 'BFS'],
    useCases: [
      'Course schedule',
      'Task scheduling',
      'Build order',
      'Alien dictionary'
    ],
    keyInsights: [
      'Only works on DAGs',
      'Kahn\'s uses in-degree counts',
      'DFS-based uses reverse post-order'
    ]
  },
  {
    id: 'union-find',
    name: 'Union-Find (Disjoint Set)',
    shortDescription: 'Efficiently track connected components and detect cycles in undirected graphs.',
    description: 'Union-Find is a data structure that keeps track of elements partitioned into disjoint sets. It supports union and find operations efficiently.',
    difficulty: 'Hard',
    category: 'Graphs',
    icon: '🔗',
    problemCount: 25,
    timeComplexity: 'O(α(n)) ≈ O(1)',
    spaceComplexity: 'O(n)',
    prerequisites: ['Graphs', 'Arrays', 'Recursion'],
    useCases: [
      'Number of connected components',
      'Cycle detection in undirected graph',
      'Kruskal\'s MST algorithm',
      'Redundant connection'
    ],
    keyInsights: [
      'Path compression optimizes find operation',
      'Union by rank/size optimizes union',
      'Nearly constant time with optimizations'
    ]
  },
  {
    id: 'mst',
    name: 'Minimum Spanning Tree',
    shortDescription: 'Connect all vertices with minimum total edge weight using Kruskal or Prim algorithms.',
    description: 'MST algorithms find minimum cost to connect all vertices. Master Kruskal\'s (edge-centric) and Prim\'s (vertex-centric).',
    difficulty: 'Hard',
    category: 'Graphs',
    icon: '🌳',
    problemCount: 12,
    timeComplexity: 'O(E log E) or O((V+E) log V)',
    spaceComplexity: 'O(V + E)',
    prerequisites: ['Graphs', 'Union-Find', 'Priority Queues'],
    useCases: [
      'Min cost to connect all points',
      'Connecting cities',
      'Network design',
      'Optimize water distribution'
    ],
    keyInsights: [
      'Kruskal: sort edges, use union-find',
      'Prim: grow tree from vertex, use min-heap',
      'Both give same MST weight'
    ]
  },
  {
    id: 'graph',
    name: 'Advanced Graph Patterns',
    shortDescription: 'Master advanced graph algorithms including strongly connected components and bridges.',
    description: 'Advanced graph patterns include Tarjan\'s algorithm, Kosaraju\'s algorithm, and finding bridges/articulation points.',
    difficulty: 'Hard',
    category: 'Graphs',
    icon: '🕸️',
    problemCount: 15,
    timeComplexity: 'Varies by algorithm',
    spaceComplexity: 'O(V + E)',
    prerequisites: ['BFS', 'DFS', 'Priority Queues'],
    useCases: [
      'Strongly connected components',
      'Bridges in network',
      'Articulation points',
      'Bipartite graph checking'
    ],
    keyInsights: [
      'Use discovery and low-link times',
      'Track visiting vs visited states',
      'Critical for network reliability'
    ]
  }
];

// Categories for filtering
export const categories = [
  'All',
  'Arrays & Strings',
  'Linked Lists',
  'Intervals',
  'Arrays',
  'Trees',
  'Graphs'
];

// Difficulty levels
export const difficulties = ['Easy', 'Medium', 'Hard'];

// Get pattern by ID
export const getPatternById = (id) => {
  return patternsData.find(pattern => pattern.id === id);
};

// Filter patterns by category
export const filterByCategory = (category) => {
  if (category === 'All') return patternsData;
  return patternsData.filter(pattern => pattern.category === category);
};

// Filter patterns by difficulty
export const filterByDifficulty = (difficulty) => {
  return patternsData.filter(pattern => pattern.difficulty === difficulty);
};

// Search patterns
export const searchPatterns = (query) => {
  const lowerQuery = query.toLowerCase();
  return patternsData.filter(pattern => 
    pattern.name.toLowerCase().includes(lowerQuery) ||
    pattern.shortDescription.toLowerCase().includes(lowerQuery) ||
    pattern.category.toLowerCase().includes(lowerQuery)
  );
};

// Get patterns by category with count
export const getPatternStats = () => {
  const stats = {};
  patternsData.forEach(pattern => {
    if (!stats[pattern.category]) {
      stats[pattern.category] = {
        count: 0,
        totalProblems: 0
      };
    }
    stats[pattern.category].count++;
    stats[pattern.category].totalProblems += pattern.problemCount || 0;
  });
  return stats;
};

export default patternsData;
