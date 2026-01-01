// Comprehensive DSA Patterns Data
export const patternsData = [
  {
    id: 'sliding-window',
    name: 'Sliding Window',
    shortDescription: 'Efficiently process subarrays/substrings by maintaining a window that slides through the data.',
    description: 'The Sliding Window pattern is used to perform operations on a specific window size of an array or linked list, such as finding the longest subarray or substring with certain conditions.',
    difficulty: 'Medium',
    category: 'Arrays & Strings',
    icon: '🪟',
    problemCount: 12,
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
    name: 'Depth-First Search (DFS)',
    shortDescription: 'Explore as deep as possible before backtracking, ideal for path finding and tree problems.',
    description: 'DFS explores as far as possible along each branch before backtracking. It uses recursion or a stack and is ideal for exploring all paths.',
    difficulty: 'Medium',
    category: 'Trees & Graphs',
    icon: '🌲',
    problemCount: 16,
    timeComplexity: 'O(V + E)',
    spaceComplexity: 'O(h) or O(V)',
    prerequisites: ['Recursion', 'Stacks', 'Trees'],
    useCases: [
      'Tree path sum problems',
      'All paths for a sum',
      'Graph cycle detection',
      'Topological sort'
    ],
    keyInsights: [
      'Uses recursion or explicit stack',
      'Great for exhaustive search problems',
      'Backtracking is a form of DFS'
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
    problemCount: 8,
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
    id: 'graph',
    name: 'Graph Patterns',
    shortDescription: 'Master various graph algorithms including traversal, shortest paths, and topology.',
    description: 'Graph patterns encompass various algorithms for traversing, searching, and finding optimal paths in graph data structures.',
    difficulty: 'Hard',
    category: 'Graphs',
    icon: '🕸️',
    problemCount: 20,
    timeComplexity: 'Varies by algorithm',
    spaceComplexity: 'O(V + E)',
    prerequisites: ['BFS', 'DFS', 'Priority Queues'],
    useCases: [
      'Shortest path (Dijkstra, Bellman-Ford)',
      'Minimum spanning tree',
      'Topological sorting',
      'Strongly connected components'
    ],
    keyInsights: [
      'Choose algorithm based on graph properties',
      'Consider weighted vs unweighted edges',
      'Directed vs undirected affects approach'
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
  'Trees & Graphs',
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

export default patternsData;
