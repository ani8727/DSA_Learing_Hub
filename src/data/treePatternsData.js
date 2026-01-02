// Comprehensive Tree Patterns Data - Based on Deep Mastery Guide
// Complete tree pattern coverage with theory, problems, and decision frameworks

export const treePatterns = {
  // ============================================
  // 1. TREE TRAVERSAL PATTERNS
  // ============================================
  
  "tree-dfs": {
    id: "tree-dfs",
    name: "Tree DFS Traversals",
    category: "Tree Traversal",
    difficulty: "Easy",
    icon: "🌲",
    
    firstDecisionRule: {
      title: "When to Use Tree DFS",
      keywords: [
        "inorder",
        "preorder",
        "postorder",
        "path sum",
        "depth",
        "height",
        "recursive",
        "bottom-up",
        "top-down"
      ],
      criteria: [
        "Need to visit all nodes",
        "Process parent before/after children",
        "Calculate tree properties (height, depth)",
        "Path-based problems"
      ]
    },
    
    complexity: {
      time: {
        best: "O(n)",
        average: "O(n)",
        worst: "O(n)",
        explanation: "Visit each node exactly once"
      },
      space: {
        best: "O(log n)",
        average: "O(h)",
        worst: "O(n)",
        explanation: "Recursion stack depth = tree height"
      }
    },
    
    subPatterns: [
      {
        name: "Preorder (Root → Left → Right)",
        useCase: "Copy tree, create prefix expression",
        template: "preorder"
      },
      {
        name: "Inorder (Left → Root → Right)",
        useCase: "Get sorted order in BST",
        template: "inorder"
      },
      {
        name: "Postorder (Left → Right → Root)",
        useCase: "Delete tree, evaluate expression",
        template: "postorder"
      },
      {
        name: "Path Sum DFS",
        useCase: "Find paths with target sum",
        template: "path-sum"
      },
      {
        name: "Recursive Pattern - Top Down",
        useCase: "Pass info from parent to children",
        template: "top-down"
      },
      {
        name: "Recursive Pattern - Bottom Up",
        useCase: "Aggregate info from children to parent",
        template: "bottom-up"
      }
    ],
    
    problems: {
      beginner: [
        {
          id: 1,
          title: "Binary Tree Preorder Traversal",
          leetcode: 144,
          difficulty: "Easy",
          companies: ["Amazon", "Microsoft"],
          hint: "Visit root, then left, then right",
          solution: "Recursive or iterative with stack",
          timeComplexity: "O(n)",
          spaceComplexity: "O(h)"
        },
        {
          id: 2,
          title: "Binary Tree Inorder Traversal",
          leetcode: 94,
          difficulty: "Easy",
          companies: ["Amazon", "Google", "Microsoft"],
          hint: "Visit left, then root, then right",
          solution: "Recursive or iterative with stack",
          timeComplexity: "O(n)",
          spaceComplexity: "O(h)"
        },
        {
          id: 3,
          title: "Binary Tree Postorder Traversal",
          leetcode: 145,
          difficulty: "Easy",
          companies: ["Amazon", "Microsoft"],
          hint: "Visit left, then right, then root",
          solution: "Recursive or iterative with stack",
          timeComplexity: "O(n)",
          spaceComplexity: "O(h)"
        },
        {
          id: 4,
          title: "Maximum Depth of Binary Tree",
          leetcode: 104,
          difficulty: "Easy",
          companies: ["Amazon", "Facebook", "Google"],
          hint: "Height = 1 + max(left_height, right_height)",
          solution: "Recursive DFS, return 1 + max of subtree heights",
          timeComplexity: "O(n)",
          spaceComplexity: "O(h)"
        },
        {
          id: 5,
          title: "Path Sum",
          leetcode: 112,
          difficulty: "Easy",
          companies: ["Amazon", "Microsoft", "Facebook"],
          hint: "DFS tracking running sum",
          solution: "Recursive DFS, check if leaf and sum matches",
          timeComplexity: "O(n)",
          spaceComplexity: "O(h)"
        }
      ],
      
      intermediate: [
        {
          id: 6,
          title: "Path Sum II",
          leetcode: 113,
          difficulty: "Medium",
          companies: ["Amazon", "Facebook", "Google"],
          hint: "Backtracking to collect all paths",
          solution: "DFS with path tracking, add to result at leaves",
          timeComplexity: "O(n²)",
          spaceComplexity: "O(h)"
        },
        {
          id: 7,
          title: "Binary Tree Maximum Path Sum",
          leetcode: 124,
          difficulty: "Hard",
          companies: ["Amazon", "Facebook", "Google", "Microsoft"],
          hint: "Consider path through current node",
          solution: "Post-order DFS, track global max",
          timeComplexity: "O(n)",
          spaceComplexity: "O(h)"
        },
        {
          id: 8,
          title: "Diameter of Binary Tree",
          leetcode: 543,
          difficulty: "Easy",
          companies: ["Amazon", "Google", "Facebook"],
          hint: "Max path through any node",
          solution: "At each node, diameter = left_height + right_height",
          timeComplexity: "O(n)",
          spaceComplexity: "O(h)"
        },
        {
          id: 9,
          title: "Lowest Common Ancestor",
          leetcode: 236,
          difficulty: "Medium",
          companies: ["Amazon", "Facebook", "Google", "Microsoft"],
          hint: "First node where p and q diverge",
          solution: "Post-order DFS, return node if both children return non-null",
          timeComplexity: "O(n)",
          spaceComplexity: "O(h)"
        }
      ],
      
      advanced: [
        {
          id: 10,
          title: "Binary Tree Cameras",
          leetcode: 968,
          difficulty: "Hard",
          companies: ["Google", "Amazon"],
          hint: "Greedy post-order traversal",
          solution: "Three states: has camera, monitored, needs monitoring",
          timeComplexity: "O(n)",
          spaceComplexity: "O(h)"
        },
        {
          id: 11,
          title: "Serialize and Deserialize Binary Tree",
          leetcode: 297,
          difficulty: "Hard",
          companies: ["Amazon", "Facebook", "Google", "Microsoft"],
          hint: "Preorder with null markers",
          solution: "Preorder traversal to string, rebuild using queue",
          timeComplexity: "O(n)",
          spaceComplexity: "O(n)"
        }
      ]
    }
  },
  
  "tree-bfs": {
    id: "tree-bfs",
    name: "Tree BFS (Level Order)",
    category: "Tree Traversal",
    difficulty: "Easy",
    icon: "🌊",
    
    firstDecisionRule: {
      title: "When to Use Tree BFS",
      keywords: [
        "level order",
        "level by level",
        "breadth first",
        "minimum depth",
        "rightmost",
        "leftmost",
        "zigzag"
      ],
      criteria: [
        "Need level-by-level processing",
        "Find minimum depth/height",
        "Level-wise aggregation",
        "Right/left view of tree"
      ]
    },
    
    complexity: {
      time: {
        best: "O(n)",
        average: "O(n)",
        worst: "O(n)",
        explanation: "Visit each node exactly once"
      },
      space: {
        best: "O(w)",
        average: "O(w)",
        worst: "O(n)",
        explanation: "Queue size = max tree width"
      }
    },
    
    subPatterns: [
      {
        name: "Standard Level Order",
        useCase: "Process nodes level by level",
        template: "level-order"
      },
      {
        name: "Zigzag Level Order",
        useCase: "Alternate left-right direction per level",
        template: "zigzag"
      },
      {
        name: "Right/Left Side View",
        useCase: "Get rightmost/leftmost node per level",
        template: "side-view"
      },
      {
        name: "Vertical Order Traversal",
        useCase: "Group nodes by vertical column",
        template: "vertical"
      }
    ],
    
    problems: {
      beginner: [
        {
          id: 1,
          title: "Binary Tree Level Order Traversal",
          leetcode: 102,
          difficulty: "Medium",
          companies: ["Amazon", "Facebook", "Microsoft"],
          hint: "Use queue to process level by level",
          solution: "BFS with queue, track level size",
          timeComplexity: "O(n)",
          spaceComplexity: "O(w)"
        },
        {
          id: 2,
          title: "Binary Tree Zigzag Level Order",
          leetcode: 103,
          difficulty: "Medium",
          companies: ["Amazon", "Microsoft", "Facebook"],
          hint: "Alternate reverse direction per level",
          solution: "BFS, use flag to reverse alternate levels",
          timeComplexity: "O(n)",
          spaceComplexity: "O(w)"
        },
        {
          id: 3,
          title: "Minimum Depth of Binary Tree",
          leetcode: 111,
          difficulty: "Easy",
          companies: ["Amazon", "Facebook"],
          hint: "BFS, return depth when first leaf found",
          solution: "Level-order BFS, first leaf = minimum depth",
          timeComplexity: "O(n)",
          spaceComplexity: "O(w)"
        }
      ],
      
      intermediate: [
        {
          id: 4,
          title: "Binary Tree Right Side View",
          leetcode: 199,
          difficulty: "Medium",
          companies: ["Amazon", "Facebook", "Google"],
          hint: "Last node at each level",
          solution: "BFS, collect last node from each level",
          timeComplexity: "O(n)",
          spaceComplexity: "O(w)"
        },
        {
          id: 5,
          title: "Average of Levels",
          leetcode: 637,
          difficulty: "Easy",
          companies: ["Amazon", "Facebook"],
          hint: "Sum nodes at each level, divide by count",
          solution: "BFS, calculate average for each level",
          timeComplexity: "O(n)",
          spaceComplexity: "O(w)"
        },
        {
          id: 6,
          title: "Vertical Order Traversal",
          leetcode: 987,
          difficulty: "Hard",
          companies: ["Amazon", "Facebook", "Google"],
          hint: "BFS with (node, col, row) tracking",
          solution: "BFS with column index, sort by col → row → val",
          timeComplexity: "O(n log n)",
          spaceComplexity: "O(n)"
        }
      ],
      
      advanced: [
        {
          id: 7,
          title: "Maximum Width of Binary Tree",
          leetcode: 662,
          difficulty: "Medium",
          companies: ["Amazon", "Google"],
          hint: "Track position index for each node",
          solution: "BFS with position tracking, width = right_pos - left_pos + 1",
          timeComplexity: "O(n)",
          spaceComplexity: "O(w)"
        }
      ]
    }
  },
  
  // ============================================
  // 2. BINARY SEARCH TREE PATTERNS
  // ============================================
  
  "bst": {
    id: "bst",
    name: "Binary Search Tree",
    category: "Tree - BST",
    difficulty: "Medium",
    icon: "🔍",
    
    firstDecisionRule: {
      title: "When to Use BST Properties",
      keywords: [
        "binary search tree",
        "sorted",
        "inorder sorted",
        "validate BST",
        "search in BST",
        "kth smallest",
        "left < root < right"
      ],
      criteria: [
        "Tree has BST property (left < root < right)",
        "Need sorted order via inorder traversal",
        "Search/insert/delete in O(log n)",
        "Find kth smallest/largest element"
      ]
    },
    
    complexity: {
      time: {
        best: "O(log n)",
        average: "O(log n)",
        worst: "O(n)",
        explanation: "Balanced BST is O(log n), skewed is O(n)"
      },
      space: {
        best: "O(log n)",
        average: "O(log n)",
        worst: "O(n)",
        explanation: "Recursion stack depth"
      }
    },
    
    subPatterns: [
      {
        name: "BST Search",
        useCase: "Find element in O(log n) average case",
        template: "search"
      },
      {
        name: "BST Validation",
        useCase: "Check if tree satisfies BST property",
        template: "validate"
      },
      {
        name: "BST Insertion",
        useCase: "Maintain BST property while inserting",
        template: "insert"
      },
      {
        name: "BST Deletion",
        useCase: "Remove node maintaining BST property",
        template: "delete"
      },
      {
        name: "Inorder Successor/Predecessor",
        useCase: "Find next/previous node in sorted order",
        template: "successor"
      },
      {
        name: "Kth Smallest/Largest",
        useCase: "Find kth element in sorted order",
        template: "kth"
      }
    ],
    
    problems: {
      beginner: [
        {
          id: 1,
          title: "Search in BST",
          leetcode: 700,
          difficulty: "Easy",
          companies: ["Amazon", "Microsoft"],
          hint: "Compare with root, go left or right",
          solution: "If val < root.val go left, else go right",
          timeComplexity: "O(h)",
          spaceComplexity: "O(1)"
        },
        {
          id: 2,
          title: "Validate Binary Search Tree",
          leetcode: 98,
          difficulty: "Medium",
          companies: ["Amazon", "Facebook", "Google", "Microsoft"],
          hint: "Each node must be within valid range",
          solution: "Pass min/max bounds, check recursively",
          timeComplexity: "O(n)",
          spaceComplexity: "O(h)"
        },
        {
          id: 3,
          title: "Insert into BST",
          leetcode: 701,
          difficulty: "Medium",
          companies: ["Amazon", "Microsoft"],
          hint: "Find leaf position, insert there",
          solution: "Recursive search, insert at null position",
          timeComplexity: "O(h)",
          spaceComplexity: "O(h)"
        }
      ],
      
      intermediate: [
        {
          id: 4,
          title: "Kth Smallest Element in BST",
          leetcode: 230,
          difficulty: "Medium",
          companies: ["Amazon", "Facebook", "Google", "Microsoft"],
          hint: "Inorder traversal gives sorted order",
          solution: "Inorder DFS, return kth visited node",
          timeComplexity: "O(h + k)",
          spaceComplexity: "O(h)"
        },
        {
          id: 5,
          title: "Lowest Common Ancestor of BST",
          leetcode: 235,
          difficulty: "Easy",
          companies: ["Amazon", "Facebook", "Google"],
          hint: "Use BST property to navigate",
          solution: "If both < root go left, both > root go right, else current is LCA",
          timeComplexity: "O(h)",
          spaceComplexity: "O(1)"
        },
        {
          id: 6,
          title: "Inorder Successor in BST",
          leetcode: 285,
          difficulty: "Medium",
          companies: ["Amazon", "Google", "Facebook"],
          hint: "If right subtree exists, find leftmost in right",
          solution: "Case 1: right subtree → leftmost. Case 2: track last right turn",
          timeComplexity: "O(h)",
          spaceComplexity: "O(1)"
        },
        {
          id: 7,
          title: "Delete Node in BST",
          leetcode: 450,
          difficulty: "Medium",
          companies: ["Amazon", "Microsoft", "Facebook"],
          hint: "Three cases: leaf, one child, two children",
          solution: "Find node, replace with inorder successor/predecessor",
          timeComplexity: "O(h)",
          spaceComplexity: "O(h)"
        }
      ],
      
      advanced: [
        {
          id: 8,
          title: "Recover Binary Search Tree",
          leetcode: 99,
          difficulty: "Medium",
          companies: ["Google", "Amazon"],
          hint: "Two nodes swapped, find via inorder",
          solution: "Inorder traversal, find violations, swap back",
          timeComplexity: "O(n)",
          spaceComplexity: "O(1)"
        },
        {
          id: 9,
          title: "Closest Binary Search Tree Value",
          leetcode: 270,
          difficulty: "Easy",
          companies: ["Google", "Facebook"],
          hint: "Binary search towards target",
          solution: "Navigate BST, track minimum difference",
          timeComplexity: "O(h)",
          spaceComplexity: "O(1)"
        }
      ]
    }
  },
  
  // ============================================
  // 3. TREE CONSTRUCTION PATTERNS
  // ============================================
  
  "tree-construction": {
    id: "tree-construction",
    name: "Tree Construction",
    category: "Tree Building",
    difficulty: "Hard",
    icon: "🏗️",
    
    firstDecisionRule: {
      title: "When to Use Tree Construction",
      keywords: [
        "construct tree",
        "build tree",
        "from traversals",
        "preorder and inorder",
        "postorder and inorder",
        "sorted array to BST"
      ],
      criteria: [
        "Given traversal sequences, build tree",
        "Convert array/list to tree",
        "Reconstruct tree from serialization",
        "Build balanced BST from sorted array"
      ]
    },
    
    complexity: {
      time: {
        best: "O(n)",
        average: "O(n)",
        worst: "O(n²)",
        explanation: "Linear with hashmap, quadratic without"
      },
      space: {
        best: "O(n)",
        average: "O(n)",
        worst: "O(n)",
        explanation: "Hashmap + recursion stack"
      }
    },
    
    subPatterns: [
      {
        name: "From Preorder + Inorder",
        useCase: "Preorder gives root, inorder splits tree",
        template: "pre-in"
      },
      {
        name: "From Postorder + Inorder",
        useCase: "Postorder gives root at end, inorder splits",
        template: "post-in"
      },
      {
        name: "From Sorted Array (BST)",
        useCase: "Middle element = root for balanced BST",
        template: "sorted-to-bst"
      },
      {
        name: "From Parent Array",
        useCase: "Build tree from parent pointers",
        template: "parent-array"
      }
    ],
    
    problems: {
      beginner: [
        {
          id: 1,
          title: "Convert Sorted Array to BST",
          leetcode: 108,
          difficulty: "Easy",
          companies: ["Amazon", "Google", "Microsoft"],
          hint: "Middle element = root, recurse on halves",
          solution: "Binary search approach: mid = root, left half → left subtree",
          timeComplexity: "O(n)",
          spaceComplexity: "O(log n)"
        },
        {
          id: 2,
          title: "Construct Binary Tree from Preorder and Inorder",
          leetcode: 105,
          difficulty: "Medium",
          companies: ["Amazon", "Facebook", "Google", "Microsoft"],
          hint: "Preorder[0] = root, find in inorder to split",
          solution: "Use hashmap for inorder indices, recurse",
          timeComplexity: "O(n)",
          spaceComplexity: "O(n)"
        },
        {
          id: 3,
          title: "Construct Binary Tree from Postorder and Inorder",
          leetcode: 106,
          difficulty: "Medium",
          companies: ["Amazon", "Microsoft"],
          hint: "Postorder[end] = root, find in inorder to split",
          solution: "Similar to preorder, but process from right",
          timeComplexity: "O(n)",
          spaceComplexity: "O(n)"
        }
      ],
      
      intermediate: [
        {
          id: 4,
          title: "Construct BST from Preorder",
          leetcode: 1008,
          difficulty: "Medium",
          companies: ["Amazon", "Google"],
          hint: "Use BST property: left < root < right",
          solution: "Track valid range for each subtree",
          timeComplexity: "O(n)",
          spaceComplexity: "O(h)"
        },
        {
          id: 5,
          title: "Maximum Binary Tree",
          leetcode: 654,
          difficulty: "Medium",
          companies: ["Amazon"],
          hint: "Max element = root, split array recursively",
          solution: "Find max, make root, recurse on left/right subarrays",
          timeComplexity: "O(n²)",
          spaceComplexity: "O(n)"
        }
      ],
      
      advanced: [
        {
          id: 6,
          title: "Serialize and Deserialize BST",
          leetcode: 449,
          difficulty: "Medium",
          companies: ["Amazon", "Google", "Facebook"],
          hint: "Preorder + BST property sufficient",
          solution: "Serialize: preorder. Deserialize: rebuild using BST bounds",
          timeComplexity: "O(n)",
          spaceComplexity: "O(n)"
        }
      ]
    }
  },
  
  // ============================================
  // 4. TREE DYNAMIC PROGRAMMING
  // ============================================
  
  "tree-dp": {
    id: "tree-dp",
    name: "Tree Dynamic Programming",
    category: "Tree - Advanced",
    difficulty: "Hard",
    icon: "🧮",
    
    firstDecisionRule: {
      title: "When to Use Tree DP",
      keywords: [
        "maximum",
        "minimum",
        "count",
        "optimization",
        "choose or skip",
        "house robber",
        "independent set"
      ],
      criteria: [
        "Optimization problem on tree",
        "Subproblem depends on subtree solutions",
        "Choose/skip nodes (like subset DP)",
        "Path sum optimization problems"
      ]
    },
    
    complexity: {
      time: {
        best: "O(n)",
        average: "O(n)",
        worst: "O(n)",
        explanation: "Visit each node once with memoization"
      },
      space: {
        best: "O(h)",
        average: "O(h)",
        worst: "O(n)",
        explanation: "Recursion stack + memoization"
      }
    },
    
    subPatterns: [
      {
        name: "Tree DP - Choose or Skip",
        useCase: "Maximum independent set problems",
        template: "choose-skip"
      },
      {
        name: "Tree DP - Path Sum Optimization",
        useCase: "Maximize/minimize path sum",
        template: "path-optimize"
      },
      {
        name: "Tree DP - Subtree Properties",
        useCase: "Aggregate info from subtrees",
        template: "subtree-aggregate"
      }
    ],
    
    problems: {
      beginner: [
        {
          id: 1,
          title: "House Robber III",
          leetcode: 337,
          difficulty: "Medium",
          companies: ["Amazon", "Facebook", "Google"],
          hint: "DP: rob node or skip node",
          solution: "Return {rob_include, rob_exclude} for each subtree",
          timeComplexity: "O(n)",
          spaceComplexity: "O(h)"
        }
      ],
      
      intermediate: [
        {
          id: 2,
          title: "Binary Tree Maximum Path Sum",
          leetcode: 124,
          difficulty: "Hard",
          companies: ["Amazon", "Facebook", "Google", "Microsoft"],
          hint: "Max path through current node",
          solution: "Post-order, track max path using current as highest point",
          timeComplexity: "O(n)",
          spaceComplexity: "O(h)"
        },
        {
          id: 3,
          title: "Longest Univalue Path",
          leetcode: 687,
          difficulty: "Medium",
          companies: ["Google", "Amazon"],
          hint: "Path with same value, can turn at node",
          solution: "DFS returning longest univalue path starting from node",
          timeComplexity: "O(n)",
          spaceComplexity: "O(h)"
        }
      ],
      
      advanced: [
        {
          id: 4,
          title: "Binary Tree Cameras",
          leetcode: 968,
          difficulty: "Hard",
          companies: ["Google", "Amazon"],
          hint: "Greedy DP: three states per node",
          solution: "States: has_camera, monitored, needs_monitor",
          timeComplexity: "O(n)",
          spaceComplexity: "O(h)"
        },
        {
          id: 5,
          title: "Count Good Nodes in Binary Tree",
          leetcode: 1448,
          difficulty: "Medium",
          companies: ["Amazon", "Microsoft"],
          hint: "Track max value on path from root",
          solution: "DFS passing max_so_far, count if current >= max",
          timeComplexity: "O(n)",
          spaceComplexity: "O(h)"
        }
      ]
    }
  },
  
  // ============================================
  // 5. SPECIAL TREE PATTERNS
  // ============================================
  
  "tree-special": {
    id: "tree-special",
    name: "Special Tree Patterns",
    category: "Tree - Advanced",
    difficulty: "Hard",
    icon: "⭐",
    
    firstDecisionRule: {
      title: "When to Use Special Tree Patterns",
      keywords: [
        "morris traversal",
        "threaded tree",
        "O(1) space",
        "trie",
        "prefix tree",
        "segment tree",
        "fenwick tree"
      ],
      criteria: [
        "Need O(1) space traversal",
        "String prefix matching (Trie)",
        "Range query optimization (Segment Tree)",
        "Advanced tree structures"
      ]
    },
    
    subPatterns: [
      {
        name: "Morris Traversal",
        useCase: "Inorder in O(1) space using threading",
        template: "morris"
      },
      {
        name: "Trie (Prefix Tree)",
        useCase: "String prefix matching, autocomplete",
        template: "trie"
      },
      {
        name: "Segment Tree",
        useCase: "Range sum/min/max queries with updates",
        template: "segment"
      },
      {
        name: "Binary Indexed Tree (Fenwick)",
        useCase: "Efficient prefix sum queries and updates",
        template: "fenwick"
      }
    ],
    
    problems: {
      intermediate: [
        {
          id: 1,
          title: "Implement Trie",
          leetcode: 208,
          difficulty: "Medium",
          companies: ["Amazon", "Google", "Facebook", "Microsoft"],
          hint: "Tree where each node represents a character",
          solution: "26-way branching for lowercase letters",
          timeComplexity: "O(m)",
          spaceComplexity: "O(alphabet_size × m × n)"
        },
        {
          id: 2,
          title: "Design Add and Search Words DS",
          leetcode: 211,
          difficulty: "Medium",
          companies: ["Amazon", "Facebook", "Google"],
          hint: "Trie with wildcard support",
          solution: "DFS in trie for '.' character",
          timeComplexity: "O(m) for add, O(26^m) for search worst case",
          spaceComplexity: "O(total characters)"
        },
        {
          id: 3,
          title: "Word Search II",
          leetcode: 212,
          difficulty: "Hard",
          companies: ["Amazon", "Google", "Facebook", "Microsoft"],
          hint: "Build trie, DFS on board",
          solution: "Trie of words, DFS with backtracking on grid",
          timeComplexity: "O(m × n × 4^L)",
          spaceComplexity: "O(total characters)"
        }
      ],
      
      advanced: [
        {
          id: 4,
          title: "Range Sum Query - Mutable",
          leetcode: 307,
          difficulty: "Medium",
          companies: ["Amazon", "Google"],
          hint: "Segment tree or Fenwick tree",
          solution: "Build segment tree for range sum",
          timeComplexity: "O(log n) per query/update",
          spaceComplexity: "O(n)"
        },
        {
          id: 5,
          title: "Count of Smaller Numbers After Self",
          leetcode: 315,
          difficulty: "Hard",
          companies: ["Google", "Amazon"],
          hint: "Binary indexed tree or merge sort",
          solution: "BIT with coordinate compression",
          timeComplexity: "O(n log n)",
          spaceComplexity: "O(n)"
        }
      ]
    }
  }
};

// Export pattern list for navigation
export const treePatternsList = Object.keys(treePatterns).map(key => ({
  id: key,
  name: treePatterns[key].name,
  category: treePatterns[key].category,
  difficulty: treePatterns[key].difficulty,
  icon: treePatterns[key].icon,
  description: treePatterns[key].firstDecisionRule.title
}));

export default treePatterns;
