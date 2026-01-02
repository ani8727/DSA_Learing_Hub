// Learning Roadmaps & Progress Tracking
// Structured paths from beginner to expert

export const learningRoadmaps = {
  
  // ==================== COMPLETE DSA ROADMAP ====================
  complete: {
    title: 'Complete DSA Mastery Path',
    duration: '12-16 weeks',
    description: 'Comprehensive path covering all major patterns',
    
    phases: [
      {
        phase: 1,
        title: 'Foundation (Weeks 1-3)',
        duration: '3 weeks',
        description: 'Master array and string patterns',
        patterns: [
          {
            name: 'Two Pointers',
            priority: 'High',
            estimatedTime: '1 week',
            problems: 15,
            milestones: [
              'Understand opposite vs same direction',
              'Solve 5 easy problems',
              'Master 3Sum pattern',
              'Complete 10 problems total'
            ]
          },
          {
            name: 'Sliding Window',
            priority: 'High',
            estimatedTime: '1.5 weeks',
            problems: 20,
            milestones: [
              'Understand fixed vs dynamic window',
              'Master maximum sum subarray',
              'Solve longest substring problems',
              'Complete minimum window substring'
            ]
          },
          {
            name: 'Cyclic Sort',
            priority: 'Medium',
            estimatedTime: '0.5 week',
            problems: 8,
            milestones: [
              'Understand index-value relationship',
              'Find missing numbers',
              'Find duplicates'
            ]
          }
        ],
        skills: [
          'Array manipulation',
          'String processing',
          'Hash table usage',
          'In-place modifications'
        ],
        assessment: {
          type: 'Pattern Recognition Quiz',
          problems: ['Two Sum II', '3Sum', 'Longest Substring K Distinct']
        }
      },
      
      {
        phase: 2,
        title: 'Linked Lists (Week 4)',
        duration: '1 week',
        patterns: [
          {
            name: 'Fast & Slow Pointers',
            priority: 'High',
            estimatedTime: '1 week',
            problems: 10,
            milestones: [
              'Detect cycles',
              'Find middle node',
              'Reorder linked list',
              'Palindrome linked list'
            ]
          },
          {
            name: 'In-place Reversal',
            priority: 'High',
            estimatedTime: '0.5 week',
            problems: 8
          }
        ],
        skills: [
          'Pointer manipulation',
          'Cycle detection',
          'List reversal'
        ]
      },
      
      {
        phase: 3,
        title: 'Trees (Weeks 5-7)',
        duration: '3 weeks',
        patterns: [
          {
            name: 'DFS (Tree)',
            priority: 'High',
            estimatedTime: '1.5 weeks',
            problems: 20,
            milestones: [
              'Master inorder, preorder, postorder',
              'Solve path sum problems',
              'Calculate diameter and height',
              'Understand recursion vs iteration'
            ]
          },
          {
            name: 'BFS (Level Order)',
            priority: 'High',
            estimatedTime: '1 week',
            problems: 15,
            milestones: [
              'Level-by-level traversal',
              'Zigzag traversal',
              'Vertical order traversal',
              'Binary tree right side view'
            ]
          },
          {
            name: 'Binary Search Tree',
            priority: 'Medium',
            estimatedTime: '0.5 week',
            problems: 10
          }
        ],
        skills: [
          'Tree traversals',
          'Recursion mastery',
          'BST properties',
          'Path problems'
        ]
      },
      
      {
        phase: 4,
        title: 'Graphs (Weeks 8-10)',
        duration: '3 weeks',
        patterns: [
          {
            name: 'BFS (Graph)',
            priority: 'High',
            estimatedTime: '1 week',
            problems: 15,
            milestones: [
              'Shortest path in unweighted graph',
              'Level-wise exploration',
              'Multi-source BFS',
              'Islands and connected components'
            ]
          },
          {
            name: 'DFS (Graph)',
            priority: 'High',
            estimatedTime: '1 week',
            problems: 20,
            milestones: [
              'Connected components',
              'Cycle detection',
              'Path finding',
              'Topological sort'
            ]
          },
          {
            name: 'Union-Find',
            priority: 'High',
            estimatedTime: '0.5 week',
            problems: 10,
            milestones: [
              'Understand disjoint sets',
              'Path compression',
              'Union by rank',
              'Dynamic connectivity'
            ]
          },
          {
            name: 'Advanced Graph',
            priority: 'Medium',
            estimatedTime: '0.5 week',
            problems: 8,
            topics: ['Dijkstra', 'Bellman-Ford', 'MST']
          }
        ],
        skills: [
          'Graph traversals',
          'Shortest paths',
          'Connectivity',
          'Topological ordering'
        ]
      },
      
      {
        phase: 5,
        title: 'Intervals & Miscellaneous (Weeks 11-12)',
        duration: '2 weeks',
        patterns: [
          {
            name: 'Merge Intervals',
            priority: 'High',
            estimatedTime: '1 week',
            problems: 12
          },
          {
            name: 'Top K Elements',
            priority: 'Medium',
            estimatedTime: '0.5 week',
            problems: 10
          },
          {
            name: 'Modified Binary Search',
            priority: 'Medium',
            estimatedTime: '0.5 week',
            problems: 10
          }
        ]
      },
      
      {
        phase: 6,
        title: 'Advanced Patterns (Weeks 13-16)',
        duration: '4 weeks',
        patterns: [
          {
            name: 'Dynamic Programming',
            priority: 'High',
            estimatedTime: '2 weeks',
            problems: 30,
            subPatterns: ['1D DP', '2D DP', 'Knapsack', 'LCS', 'LIS']
          },
          {
            name: 'Backtracking',
            priority: 'Medium',
            estimatedTime: '1 week',
            problems: 15
          },
          {
            name: 'Greedy',
            priority: 'Medium',
            estimatedTime: '1 week',
            problems: 12
          }
        ]
      }
    ],
    
    totalProblems: 250,
    completionCriteria: {
      easy: 80,
      medium: 120,
      hard: 50
    }
  },

  // ==================== INTERVIEW PREPARATION (8 WEEKS) ====================
  interview: {
    title: 'Interview Preparation Fast Track',
    duration: '8 weeks',
    description: 'Focused preparation for FAANG interviews',
    
    weeks: [
      {
        week: 1,
        focus: 'Arrays & Strings',
        patterns: ['Two Pointers', 'Sliding Window'],
        problems: 20,
        companies: ['Amazon', 'Microsoft'],
        mustSolve: [
          'Two Sum II',
          '3Sum',
          'Container With Most Water',
          'Longest Substring Without Repeating Characters',
          'Minimum Window Substring'
        ]
      },
      {
        week: 2,
        focus: 'Linked Lists',
        patterns: ['Fast & Slow', 'Reversal'],
        problems: 15,
        mustSolve: [
          'Linked List Cycle',
          'Reorder List',
          'Reverse Nodes in K-Group'
        ]
      },
      {
        week: 3,
        focus: 'Trees - DFS',
        patterns: ['DFS', 'Path Problems'],
        problems: 20,
        mustSolve: [
          'Binary Tree Maximum Path Sum',
          'Lowest Common Ancestor',
          'Serialize and Deserialize'
        ]
      },
      {
        week: 4,
        focus: 'Trees - BFS & BST',
        patterns: ['BFS', 'BST'],
        problems: 15,
        mustSolve: [
          'Binary Tree Level Order',
          'Binary Tree Zigzag',
          'Validate BST'
        ]
      },
      {
        week: 5,
        focus: 'Graphs',
        patterns: ['BFS', 'DFS', 'Union-Find'],
        problems: 25,
        mustSolve: [
          'Number of Islands',
          'Course Schedule',
          'Word Ladder',
          'Clone Graph'
        ]
      },
      {
        week: 6,
        focus: 'Dynamic Programming',
        patterns: ['1D DP', '2D DP'],
        problems: 20,
        mustSolve: [
          'House Robber',
          'Coin Change',
          'Longest Increasing Subsequence',
          'Edit Distance'
        ]
      },
      {
        week: 7,
        focus: 'Advanced Patterns',
        patterns: ['Intervals', 'Backtracking', 'Greedy'],
        problems: 20,
        mustSolve: [
          'Merge Intervals',
          'Meeting Rooms II',
          'Permutations',
          'Jump Game II'
        ]
      },
      {
        week: 8,
        focus: 'Mock Interviews & Review',
        patterns: ['All patterns'],
        problems: 15,
        activities: [
          'Daily mock interview',
          'Review weak areas',
          'Speed practice',
          'System design basics'
        ]
      }
    ],
    
    totalProblems: 150,
    mockInterviews: 8,
    dailyGoal: '2-3 problems',
    weeklyGoal: '15-20 problems'
  },

  // ==================== BEGINNER FRIENDLY (6 WEEKS) ====================
  beginner: {
    title: 'Beginner Friendly Path',
    duration: '6 weeks',
    description: 'Gentle introduction to DSA patterns',
    
    weeks: [
      {
        week: 1,
        title: 'Array Basics',
        topics: ['Two Pointers - Easy problems only'],
        problems: [
          'Two Sum II',
          'Remove Duplicates',
          'Valid Palindrome',
          'Move Zeroes'
        ],
        concepts: ['Array indexing', 'Two pointer technique', 'In-place modification']
      },
      {
        week: 2,
        title: 'Sliding Window Introduction',
        topics: ['Fixed size window only'],
        problems: [
          'Maximum Sum Subarray',
          'Average of Subarray',
          'Contains Duplicate II'
        ],
        concepts: ['Window sliding', 'State tracking', 'Optimization']
      },
      {
        week: 3,
        title: 'Linked Lists',
        topics: ['Fast & Slow Pointers - Easy'],
        problems: [
          'Linked List Cycle',
          'Middle of Linked List',
          'Palindrome Linked List'
        ],
        concepts: ['Pointer manipulation', 'Cycle detection']
      },
      {
        week: 4,
        title: 'Trees - Basics',
        topics: ['Simple DFS traversals'],
        problems: [
          'Inorder Traversal',
          'Preorder Traversal',
          'Maximum Depth',
          'Same Tree'
        ],
        concepts: ['Tree structure', 'Recursion', 'Traversals']
      },
      {
        week: 5,
        title: 'BFS Introduction',
        topics: ['Level order traversal'],
        problems: [
          'Binary Tree Level Order',
          'Average of Levels',
          'Min Depth'
        ],
        concepts: ['Queue', 'Level-wise processing']
      },
      {
        week: 6,
        title: 'Simple Graphs',
        topics: ['Connected components'],
        problems: [
          'Number of Islands',
          'Number of Provinces',
          'Find if Path Exists'
        ],
        concepts: ['Graph representation', 'DFS on graphs']
      }
    ],
    
    totalProblems: 50,
    difficulty: 'Only Easy problems',
    recommendedPace: '1-2 problems per day'
  },

  // ==================== COMPANY-SPECIFIC ROADMAPS ====================
  companySpecific: {
    Amazon: {
      title: 'Amazon Interview Prep',
      duration: '6 weeks',
      topPatterns: [
        'Sliding Window',
        'Two Pointers',
        'BFS/DFS',
        'Dynamic Programming'
      ],
      mustSolveProblems: [
        'Minimum Window Substring',
        'Trapping Rain Water',
        'Number of Islands',
        'Word Ladder',
        'LRU Cache',
        'Merge Intervals',
        'Course Schedule',
        'Median of Two Sorted Arrays'
      ],
      behavioralPrep: [
        'Leadership Principles',
        'Customer Obsession examples',
        'Bias for Action scenarios'
      ]
    },
    
    Google: {
      title: 'Google Interview Prep',
      duration: '8 weeks',
      topPatterns: [
        'Graph Algorithms',
        'Dynamic Programming',
        'System Design',
        'Math & Logic'
      ],
      focus: 'Algorithm optimization and scalability'
    },
    
    Microsoft: {
      title: 'Microsoft Interview Prep',
      duration: '6 weeks',
      topPatterns: [
        'Trees',
        'Graphs',
        'Dynamic Programming',
        'String Manipulation'
      ]
    }
  },

  // ==================== COMPETITIVE PROGRAMMING ====================
  competitive: {
    title: 'Competitive Programming Path',
    duration: '16 weeks',
    description: 'For contests like CodeForces, LeetCode competitions',
    
    levels: [
      {
        level: 'Div 3 / Beginner',
        rating: '0-1400',
        duration: '4 weeks',
        topics: [
          'Implementation',
          'Greedy (basic)',
          'Brute Force',
          'Binary Search',
          'Two Pointers'
        ]
      },
      {
        level: 'Div 2 / Intermediate',
        rating: '1400-1900',
        duration: '6 weeks',
        topics: [
          'Graph algorithms',
          'DP (1D, 2D)',
          'Segment Trees',
          'Advanced Data Structures',
          'Number Theory'
        ]
      },
      {
        level: 'Div 1 / Advanced',
        rating: '1900+',
        duration: '6 weeks',
        topics: [
          'Advanced DP',
          'Game Theory',
          'Computational Geometry',
          'String Algorithms',
          'FFT'
        ]
      }
    ]
  }
};

// Progress Tracking Schema
export const progressTracking = {
  user: {
    id: 'user123',
    currentRoadmap: 'complete',
    currentPhase: 1,
    currentPattern: 'sliding-window',
    
    stats: {
      totalProblems: 45,
      problemsBySolve: {
        easy: 20,
        medium: 20,
        hard: 5
      },
      problemsByPattern: {
        'sliding-window': 12,
        'two-pointers': 15,
        'fast-slow': 8
      },
      timeSpent: '40 hours',
      streak: 15
    },
    
    milestones: [
      {
        name: 'First Pattern Mastered',
        pattern: 'two-pointers',
        date: '2026-01-01',
        problems: 15
      }
    ],
    
    weakAreas: ['Dynamic Programming', 'Advanced Graphs'],
    strengths: ['Arrays', 'Two Pointers', 'BFS']
  }
};

// Recommended Next Steps Algorithm
export function getNextRecommendation(userProgress) {
  const { completedPatterns, weakAreas, currentPhase } = userProgress;
  
  // Logic to recommend next pattern based on:
  // 1. Current roadmap phase
  // 2. Completed patterns
  // 3. Weak areas needing reinforcement
  // 4. Prerequisites met
  
  return {
    nextPattern: 'sliding-window',
    reason: 'Natural progression from two-pointers',
    estimatedTime: '1.5 weeks',
    prerequisites: 'All met ✓',
    problems: [
      'Maximum Sum Subarray (Easy)',
      'Longest Substring K Distinct (Medium)'
    ]
  };
}

export default learningRoadmaps;
