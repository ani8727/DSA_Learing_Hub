import { 
  Home, Link as LinkIcon, Grid3x3, Move, 
  Layers, ArrowUpDown, Type, TreePine, 
  Sparkles, Hash, GitBranch, Boxes
} from 'lucide-react';

// Topic Configuration - Easy to add new topics!
export const TOPICS = [
  {
    id: 'home',
    path: '/',
    icon: Home,
    label: 'Home',
    title: 'Home',
    description: 'Welcome to DSA & Patterns Hub',
    color: 'blue',
    problemCount: 0,
    enabled: true,
  },
  {
    id: 'linkedlist',
    path: '/linkedlist',
    icon: LinkIcon,
    label: 'LinkedList',
    title: 'LinkedList Mastery',
    description: 'Master linked list patterns and problems',
    color: 'indigo',
    problemCount: 25,
    enabled: true,
    topics: [
      'Reversal',
      'Two Pointer',
      'Cycle Detection',
      'Merge & Sort',
      'In-place Manipulation'
    ]
  },
  {
    id: 'arrays',
    path: '/arrays',
    icon: Grid3x3,
    label: 'Arrays',
    title: 'Arrays & Hashing',
    description: 'Array manipulation techniques',
    color: 'purple',
    problemCount: 30,
    enabled: true,
    topics: [
      'Two Sum',
      'Prefix Sum',
      'Kadane\'s Algorithm',
      'Dutch Flag',
      'Subarray Problems'
    ]
  },
  {
    id: 'two-pointer',
    path: '/two-pointer',
    icon: Move,
    label: 'Two Pointer',
    title: 'Two Pointer Pattern',
    description: 'Solve problems with two pointers',
    color: 'pink',
    problemCount: 20,
    enabled: true,
    topics: [
      'Opposite Ends',
      'Same Direction',
      'Fixed Distance',
      'Fast & Slow'
    ]
  },
  {
    id: 'sliding-window',
    path: '/sliding-window',
    icon: Layers,
    label: 'Sliding Window',
    title: 'Sliding Window Technique',
    description: 'Optimize subarray problems',
    color: 'rose',
    problemCount: 18,
    enabled: true,
    topics: [
      'Fixed Size Window',
      'Variable Size Window',
      'Substring Problems'
    ]
  },
  {
    id: 'sorting',
    path: '/sorting',
    icon: ArrowUpDown,
    label: 'Sorting',
    title: 'Sorting Algorithms',
    description: 'All sorting techniques',
    color: 'orange',
    problemCount: 15,
    enabled: true,
    topics: [
      'Quick Sort',
      'Merge Sort',
      'Heap Sort',
      'Counting Sort'
    ]
  },
  {
    id: 'strings',
    path: '/strings',
    icon: Type,
    label: 'Strings',
    title: 'String Patterns',
    description: 'String manipulation techniques',
    color: 'amber',
    problemCount: 22,
    enabled: true,
    topics: [
      'Palindromes',
      'Anagrams',
      'Substring Search',
      'Pattern Matching'
    ]
  },
  {
    id: 'trees',
    path: '/trees',
    icon: TreePine,
    label: 'Trees',
    title: 'Trees & Binary Trees',
    description: 'Tree traversals and patterns',
    color: 'green',
    problemCount: 28,
    enabled: true,
    topics: [
      'DFS Traversals',
      'BFS Level Order',
      'BST Operations',
      'Path Problems'
    ]
  },
  {
    id: 'dynamic-programming',
    path: '/dynamic-programming',
    icon: Sparkles,
    label: 'Dynamic Programming',
    title: 'Dynamic Programming',
    description: 'Optimization with DP',
    color: 'teal',
    problemCount: 35,
    enabled: true,
    topics: [
      '1D DP',
      '2D DP',
      'Knapsack',
      'LCS/LIS'
    ]
  },
  // ============================================
  // EASY TO ADD NEW TOPICS - Just uncomment and customize!
  // ============================================
  // {
  //   id: 'graphs',
  //   path: '/graphs',
  //   icon: GitBranch,
  //   label: 'Graphs',
  //   title: 'Graph Algorithms',
  //   description: 'Graph traversal and algorithms',
  //   color: 'cyan',
  //   problemCount: 25,
  //   enabled: true,
  //   topics: [
  //     'DFS & BFS',
  //     'Shortest Path',
  //     'Topological Sort',
  //     'Union Find'
  //   ]
  // },
  // {
  //   id: 'heaps',
  //   path: '/heaps',
  //   icon: Boxes,
  //   label: 'Heaps',
  //   title: 'Heap & Priority Queue',
  //   description: 'Heap data structure',
  //   color: 'violet',
  //   problemCount: 15,
  //   enabled: true,
  //   topics: [
  //     'Min/Max Heap',
  //     'K-th Element',
  //     'Top K Problems'
  //   ]
  // },
  // {
  //   id: 'backtracking',
  //   path: '/backtracking',
  //   icon: Hash,
  //   label: 'Backtracking',
  //   title: 'Backtracking Problems',
  //   description: 'Recursive backtracking',
  //   color: 'fuchsia',
  //   problemCount: 20,
  //   enabled: true,
  //   topics: [
  //     'Permutations',
  //     'Combinations',
  //     'Subsets',
  //     'N-Queens'
  //   ]
  // },
];

// Get only enabled topics
export const getEnabledTopics = () => TOPICS.filter(topic => topic.enabled);

// Get topic by ID
export const getTopicById = (id) => TOPICS.find(topic => topic.id === id);

// Get topic by path
export const getTopicByPath = (path) => TOPICS.find(topic => topic.path === path);

// Get sidebar topics (exclude home)
export const getSidebarTopics = () => TOPICS.filter(topic => topic.id !== 'home' && topic.enabled);

export default TOPICS;