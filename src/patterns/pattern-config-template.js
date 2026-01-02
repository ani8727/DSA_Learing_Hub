// Pattern Configuration Template
// This file defines the complete structure and metadata for each pattern

export const patternConfig = {
  // Basic Information
  id: 'pattern-id',
  name: 'Pattern Name',
  category: 'Array & String', // or 'Linked List', 'Tree', 'Graph', 'DP', etc.
  icon: '🪟',
  
  // Difficulty & Learning
  difficulty: 'Medium', // Easy, Medium, Hard
  estimatedTime: '4-6 hours', // Time to master
  prerequisites: [
    'Arrays basics',
    'Two Pointers'
  ],
  
  // Pattern Description
  shortDescription: 'Brief one-line description',
  description: 'Detailed explanation of what this pattern does and when to use it',
  
  // Core Concepts
  coreConcept: 'The fundamental idea behind this pattern',
  
  // First Decision Rule - MOST IMPORTANT
  firstDecisionRule: {
    title: 'When to use this pattern?',
    keywords: [
      'subarray',
      'substring',
      'contiguous elements'
    ],
    criteria: [
      'Problem asks for contiguous sequence',
      'Need to optimize O(n²) brute force',
      'Window of elements needs tracking'
    ]
  },
  
  // Complexity Analysis
  complexity: {
    time: {
      best: 'O(n)',
      average: 'O(n)',
      worst: 'O(n)',
      explanation: 'Single pass through the array'
    },
    space: {
      best: 'O(1)',
      average: 'O(k)',
      worst: 'O(k)',
      explanation: 'Only tracking window elements'
    }
  },
  
  // Pattern Variations
  variations: [
    {
      name: 'Fixed Window Size',
      description: 'Window size is constant (K)',
      useCases: ['Maximum sum of subarray of size K'],
      complexity: 'O(n)'
    },
    {
      name: 'Dynamic Window Size',
      description: 'Window grows and shrinks based on conditions',
      useCases: ['Longest substring with K distinct characters'],
      complexity: 'O(n)'
    }
  ],
  
  // Common Use Cases
  useCases: [
    {
      name: 'Maximum sum subarray',
      difficulty: 'Easy',
      leetcode: 643
    },
    {
      name: 'Longest substring with K distinct chars',
      difficulty: 'Medium',
      leetcode: 340
    }
  ],
  
  // Key Insights
  keyInsights: [
    'Converts O(n²) to O(n) by reusing calculations',
    'Window state must be maintained efficiently',
    'Two pointers mark window boundaries'
  ],
  
  // Common Pitfalls
  commonPitfalls: [
    {
      mistake: 'Not resetting window state properly',
      solution: 'Always update state when window slides'
    },
    {
      mistake: 'Off-by-one errors in window boundaries',
      solution: 'Carefully define inclusive/exclusive bounds'
    }
  ],
  
  // Comparison with Alternatives
  alternatives: [
    {
      approach: 'Brute Force',
      pros: ['Simple to understand'],
      cons: ['O(n²) or O(n³) time'],
      whenToUse: 'Small input sizes only'
    },
    {
      approach: 'Two Pointers',
      pros: ['O(n) time', 'O(1) space'],
      cons: ['Requires sorted data or specific structure'],
      whenToUse: 'When data has ordering property'
    }
  ],
  
  // Problem Sets by Difficulty
  problems: {
    beginner: [
      {
        id: 1,
        name: 'Maximum Sum Subarray of Size K',
        leetcode: 643,
        difficulty: 'Easy',
        tags: ['Fixed Window'],
        hint: 'Keep track of window sum, slide one element at a time',
        patterns: ['Sliding Window']
      }
    ],
    intermediate: [
      {
        id: 2,
        name: 'Longest Substring with K Distinct Characters',
        leetcode: 340,
        difficulty: 'Medium',
        tags: ['Dynamic Window', 'HashMap'],
        hint: 'Use HashMap to track character frequencies',
        patterns: ['Sliding Window', 'HashMap']
      }
    ],
    advanced: [
      {
        id: 3,
        name: 'Minimum Window Substring',
        leetcode: 76,
        difficulty: 'Hard',
        tags: ['Dynamic Window', 'HashMap'],
        hint: 'Track matched characters count',
        patterns: ['Sliding Window', 'HashMap']
      }
    ]
  },
  
  // Code Templates
  codeTemplates: {
    javascript: {
      fixedWindow: `
function fixedWindowPattern(arr, k) {
  let windowSum = 0;
  let maxSum = 0;
  
  // Calculate sum of first window
  for (let i = 0; i < k; i++) {
    windowSum += arr[i];
  }
  maxSum = windowSum;
  
  // Slide the window
  for (let i = k; i < arr.length; i++) {
    windowSum = windowSum - arr[i - k] + arr[i];
    maxSum = Math.max(maxSum, windowSum);
  }
  
  return maxSum;
}
`,
      dynamicWindow: `
function dynamicWindowPattern(arr, target) {
  let left = 0;
  let windowSum = 0;
  let minLength = Infinity;
  
  for (let right = 0; right < arr.length; right++) {
    windowSum += arr[right];
    
    // Shrink window while condition is met
    while (windowSum >= target) {
      minLength = Math.min(minLength, right - left + 1);
      windowSum -= arr[left];
      left++;
    }
  }
  
  return minLength === Infinity ? 0 : minLength;
}
`
    }
  },
  
  // Visual Representations
  visualizations: [
    {
      type: 'diagram',
      title: 'Fixed Window Sliding',
      description: 'How window moves through array',
      url: '/assets/diagrams/fixed-window.svg'
    },
    {
      type: 'animation',
      title: 'Dynamic Window Growth/Shrink',
      description: 'Window size changes based on conditions',
      url: '/assets/animations/dynamic-window.gif'
    }
  ],
  
  // Related Patterns
  relatedPatterns: [
    {
      id: 'two-pointers',
      relationship: 'Sliding window is a specialized two-pointer technique',
      whenToChoose: 'Use sliding window for contiguous sequences'
    },
    {
      id: 'prefix-sum',
      relationship: 'Both optimize subarray operations',
      whenToChoose: 'Use prefix sum for non-sliding queries'
    }
  ],
  
  // Learning Resources
  resources: {
    videos: [
      {
        title: 'Sliding Window Pattern Explained',
        url: 'https://youtube.com/...',
        duration: '15 min'
      }
    ],
    articles: [
      {
        title: 'Master Sliding Window Technique',
        url: 'https://...',
        readTime: '10 min'
      }
    ],
    practice: [
      {
        platform: 'LeetCode',
        url: 'https://leetcode.com/tag/sliding-window/',
        problemCount: 50
      }
    ]
  },
  
  // Interview Tips
  interviewTips: [
    'Always ask about array size and element range',
    'Clarify if window size is fixed or dynamic',
    'Discuss space-time tradeoffs',
    'Mention edge cases: empty array, k > array length'
  ],
  
  // Master Rule
  masterRule: 'Sliding Window = Optimize contiguous sequence operations from O(n²) to O(n) by reusing calculations',
  
  // Progress Tracking
  learningPath: {
    step1: 'Understand core concept',
    step2: 'Master fixed window problems',
    step3: 'Learn dynamic window technique',
    step4: 'Solve 10+ problems',
    step5: 'Optimize solutions'
  }
};

export default patternConfig;
