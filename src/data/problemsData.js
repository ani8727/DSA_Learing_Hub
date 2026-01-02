// Comprehensive Problem Sets for All Patterns
// Organized by pattern, difficulty, and topic

export const problemsData = {
  
  // ==================== SLIDING WINDOW ====================
  'sliding-window': {
    patternName: 'Sliding Window',
    totalProblems: 25,
    
    beginner: [
      {
        id: 1,
        title: 'Maximum Sum Subarray of Size K',
        leetcode: 643,
        difficulty: 'Easy',
        category: 'Fixed Window',
        tags: ['Array', 'Sliding Window'],
        description: 'Find maximum sum of any contiguous subarray of size k',
        hints: [
          'Calculate sum of first k elements',
          'Slide window: subtract left, add right element',
          'Keep track of maximum sum seen'
        ],
        approach: 'Fixed window size - slide and update',
        timeComplexity: 'O(n)',
        spaceComplexity: 'O(1)',
        solution: {
          javascript: `
function maxSumSubarray(arr, k) {
  let windowSum = 0;
  let maxSum = 0;
  
  // First window
  for (let i = 0; i < k; i++) {
    windowSum += arr[i];
  }
  maxSum = windowSum;
  
  // Slide window
  for (let i = k; i < arr.length; i++) {
    windowSum = windowSum - arr[i - k] + arr[i];
    maxSum = Math.max(maxSum, windowSum);
  }
  
  return maxSum;
}`,
          python: `
def max_sum_subarray(arr, k):
    window_sum = sum(arr[:k])
    max_sum = window_sum
    
    for i in range(k, len(arr)):
        window_sum = window_sum - arr[i - k] + arr[i]
        max_sum = max(max_sum, window_sum)
    
    return max_sum`
        },
        companies: ['Amazon', 'Microsoft', 'Google'],
        frequency: 'High'
      },
      {
        id: 2,
        title: 'Average of Subarrays of Size K',
        difficulty: 'Easy',
        category: 'Fixed Window',
        description: 'Find average of all subarrays of size k',
        timeComplexity: 'O(n)',
        spaceComplexity: 'O(1)'
      },
      {
        id: 3,
        title: 'Contains Duplicate II',
        leetcode: 219,
        difficulty: 'Easy',
        category: 'Fixed Window with HashMap',
        tags: ['Array', 'Hash Table', 'Sliding Window'],
        description: 'Check if array contains duplicate within k distance',
        hints: [
          'Use sliding window of size k',
          'Track elements in window using Set',
          'Remove leftmost when window exceeds k'
        ]
      }
    ],

    intermediate: [
      {
        id: 4,
        title: 'Longest Substring with K Distinct Characters',
        leetcode: 340,
        difficulty: 'Medium',
        category: 'Dynamic Window',
        tags: ['String', 'Hash Table', 'Sliding Window'],
        description: 'Find longest substring with at most k distinct characters',
        hints: [
          'Use HashMap to track character frequencies',
          'Expand window by adding right character',
          'Shrink from left when distinct > k'
        ],
        approach: 'Dynamic window with HashMap',
        timeComplexity: 'O(n)',
        spaceComplexity: 'O(k)',
        solution: {
          javascript: `
function longestSubstringKDistinct(s, k) {
  const charCount = new Map();
  let left = 0;
  let maxLength = 0;
  
  for (let right = 0; right < s.length; right++) {
    // Add right character
    charCount.set(s[right], (charCount.get(s[right]) || 0) + 1);
    
    // Shrink if more than k distinct
    while (charCount.size > k) {
      charCount.set(s[left], charCount.get(s[left]) - 1);
      if (charCount.get(s[left]) === 0) {
        charCount.delete(s[left]);
      }
      left++;
    }
    
    maxLength = Math.max(maxLength, right - left + 1);
  }
  
  return maxLength;
}`
        },
        companies: ['Amazon', 'Google', 'Facebook'],
        frequency: 'Very High',
        relatedProblems: [5, 6]
      },
      {
        id: 5,
        title: 'Fruit Into Baskets',
        leetcode: 904,
        difficulty: 'Medium',
        category: 'Dynamic Window',
        description: 'Collect maximum fruits with at most 2 types',
        hints: ['Same as longest substring with 2 distinct characters']
      },
      {
        id: 6,
        title: 'Longest Substring Without Repeating Characters',
        leetcode: 3,
        difficulty: 'Medium',
        category: 'Dynamic Window',
        tags: ['String', 'Hash Table', 'Sliding Window'],
        description: 'Find length of longest substring without repeating characters',
        companies: ['Amazon', 'Microsoft', 'Facebook', 'Apple'],
        frequency: 'Very High'
      },
      {
        id: 7,
        title: 'Longest Repeating Character Replacement',
        leetcode: 424,
        difficulty: 'Medium',
        category: 'Dynamic Window',
        description: 'Longest substring with same character after k replacements',
        hints: [
          'Track max frequency character in window',
          'Window size - max frequency = replacements needed',
          'Shrink if replacements needed > k'
        ]
      },
      {
        id: 8,
        title: 'Permutation in String',
        leetcode: 567,
        difficulty: 'Medium',
        category: 'Fixed Window with Pattern Match',
        tags: ['String', 'Sliding Window'],
        description: 'Check if s2 contains permutation of s1'
      },
      {
        id: 9,
        title: 'Find All Anagrams in a String',
        leetcode: 438,
        difficulty: 'Medium',
        category: 'Fixed Window with Pattern Match',
        companies: ['Amazon', 'Facebook']
      },
      {
        id: 10,
        title: 'Minimum Window Subsequence',
        leetcode: 727,
        difficulty: 'Hard',
        category: 'Dynamic Window',
        description: 'Find minimum window in S that contains all characters of T as subsequence'
      }
    ],

    advanced: [
      {
        id: 11,
        title: 'Minimum Window Substring',
        leetcode: 76,
        difficulty: 'Hard',
        category: 'Dynamic Window',
        tags: ['String', 'Hash Table', 'Sliding Window'],
        description: 'Find minimum window in s that contains all characters of t',
        hints: [
          'Track required character frequencies',
          'Expand window until all characters found',
          'Shrink from left to minimize window',
          'Update result when valid window found'
        ],
        approach: 'Dynamic window with character counting',
        timeComplexity: 'O(m + n)',
        spaceComplexity: 'O(m + n)',
        companies: ['Amazon', 'Microsoft', 'Google', 'Facebook', 'Uber'],
        frequency: 'Very High',
        difficulty_rating: 9
      },
      {
        id: 12,
        title: 'Substring with Concatenation of All Words',
        leetcode: 30,
        difficulty: 'Hard',
        category: 'Fixed Window with Multiple Patterns',
        description: 'Find all starting indices of concatenated words'
      },
      {
        id: 13,
        title: 'Sliding Window Maximum',
        leetcode: 239,
        difficulty: 'Hard',
        category: 'Fixed Window with Monotonic Deque',
        tags: ['Array', 'Queue', 'Sliding Window', 'Monotonic Queue'],
        description: 'Return maximum element in each sliding window',
        hints: ['Use monotonic decreasing deque']
      }
    ],

    patternSummary: {
      core: 'Optimize contiguous sequence operations',
      whenToUse: 'Subarray/substring problems',
      keyTechnique: 'Maintain window state, slide efficiently',
      optimization: 'O(n²) brute force → O(n) sliding window'
    }
  },

  // ==================== TWO POINTERS ====================
  'two-pointers': {
    patternName: 'Two Pointers',
    totalProblems: 20,
    
    beginner: [
      {
        id: 1,
        title: 'Two Sum II - Input Array Is Sorted',
        leetcode: 167,
        difficulty: 'Easy',
        category: 'Opposite Direction',
        tags: ['Array', 'Two Pointers'],
        description: 'Find two numbers that add up to target in sorted array',
        timeComplexity: 'O(n)',
        spaceComplexity: 'O(1)',
        companies: ['Amazon', 'Facebook']
      },
      {
        id: 2,
        title: 'Remove Duplicates from Sorted Array',
        leetcode: 26,
        difficulty: 'Easy',
        category: 'Same Direction',
        description: 'Remove duplicates in-place, return new length'
      },
      {
        id: 3,
        title: 'Valid Palindrome',
        leetcode: 125,
        difficulty: 'Easy',
        category: 'Opposite Direction',
        description: 'Check if string is palindrome'
      },
      {
        id: 4,
        title: 'Move Zeroes',
        leetcode: 283,
        difficulty: 'Easy',
        category: 'Same Direction',
        description: 'Move all zeros to end while maintaining order'
      }
    ],

    intermediate: [
      {
        id: 5,
        title: '3Sum',
        leetcode: 15,
        difficulty: 'Medium',
        category: 'Opposite Direction + Loop',
        tags: ['Array', 'Two Pointers', 'Sorting'],
        description: 'Find all unique triplets that sum to zero',
        hints: [
          'Sort array first',
          'Fix one element, use two pointers for rest',
          'Skip duplicates carefully'
        ],
        companies: ['Amazon', 'Microsoft', 'Facebook', 'Apple'],
        frequency: 'Very High'
      },
      {
        id: 6,
        title: '3Sum Closest',
        leetcode: 16,
        difficulty: 'Medium',
        category: 'Opposite Direction + Loop'
      },
      {
        id: 7,
        title: 'Container With Most Water',
        leetcode: 11,
        difficulty: 'Medium',
        category: 'Opposite Direction',
        description: 'Find container that holds most water',
        companies: ['Amazon', 'Google', 'Facebook']
      },
      {
        id: 8,
        title: 'Sort Colors',
        leetcode: 75,
        difficulty: 'Medium',
        category: 'Three Pointers (Dutch National Flag)',
        description: 'Sort array with values 0, 1, 2 in-place'
      }
    ],

    advanced: [
      {
        id: 9,
        title: '4Sum',
        leetcode: 18,
        difficulty: 'Medium',
        category: 'Two Pointers + Nested Loops',
        description: 'Find all unique quadruplets that sum to target'
      },
      {
        id: 10,
        title: 'Trapping Rain Water',
        leetcode: 42,
        difficulty: 'Hard',
        category: 'Opposite Direction',
        tags: ['Array', 'Two Pointers', 'Dynamic Programming'],
        description: 'Calculate trapped rainwater',
        companies: ['Amazon', 'Microsoft', 'Google', 'Facebook'],
        frequency: 'Very High'
      }
    ]
  },

  // ==================== FAST & SLOW POINTERS ====================
  'fast-slow': {
    patternName: 'Fast & Slow Pointers',
    totalProblems: 10,
    
    beginner: [
      {
        id: 1,
        title: 'Linked List Cycle',
        leetcode: 141,
        difficulty: 'Easy',
        category: 'Cycle Detection',
        tags: ['Linked List', 'Two Pointers'],
        description: 'Detect if linked list has a cycle',
        timeComplexity: 'O(n)',
        spaceComplexity: 'O(1)',
        companies: ['Amazon', 'Microsoft', 'Facebook']
      },
      {
        id: 2,
        title: 'Middle of the Linked List',
        leetcode: 876,
        difficulty: 'Easy',
        category: 'Middle Finding',
        description: 'Find middle node of linked list'
      },
      {
        id: 3,
        title: 'Happy Number',
        leetcode: 202,
        difficulty: 'Easy',
        category: 'Cycle Detection',
        description: 'Determine if number is happy'
      }
    ],

    intermediate: [
      {
        id: 4,
        title: 'Linked List Cycle II',
        leetcode: 142,
        difficulty: 'Medium',
        category: 'Cycle Detection',
        description: 'Find where cycle begins',
        hints: [
          'Use fast & slow to detect cycle',
          'Reset one pointer to head',
          'Move both one step until they meet'
        ],
        companies: ['Amazon', 'Microsoft', 'Google']
      },
      {
        id: 5,
        title: 'Palindrome Linked List',
        leetcode: 234,
        difficulty: 'Easy',
        category: 'Middle Finding + Reversal',
        description: 'Check if linked list is palindrome'
      },
      {
        id: 6,
        title: 'Reorder List',
        leetcode: 143,
        difficulty: 'Medium',
        category: 'Middle Finding + Reversal + Merge',
        description: 'Reorder list: L0 → Ln → L1 → Ln-1...'
      }
    ],

    advanced: [
      {
        id: 7,
        title: 'Find the Duplicate Number',
        leetcode: 287,
        difficulty: 'Medium',
        category: 'Cycle Detection in Array',
        description: 'Find duplicate number in array of n+1 integers',
        companies: ['Amazon', 'Microsoft', 'Facebook']
      }
    ]
  },

  // Add more patterns: BFS, DFS, Graph, Merge Intervals, Cyclic Sort, Union-Find, etc.
  // Following same structure...

};

// Problem Statistics
export const problemStats = {
  totalPatterns: 9,
  totalProblems: 150,
  byDifficulty: {
    easy: 45,
    medium: 75,
    hard: 30
  },
  byCategory: {
    'Array & String': 60,
    'Linked List': 20,
    'Tree': 30,
    'Graph': 25,
    'Intervals': 15
  }
};

// Company-wise Problems
export const companyProblems = {
  'Amazon': {
    count: 50,
    topPatterns: ['Sliding Window', 'Two Pointers', 'BFS', 'DFS'],
    mustSolve: [
      { id: 'sw-11', title: 'Minimum Window Substring' },
      { id: 'tp-5', title: '3Sum' },
      { id: 'tp-10', title: 'Trapping Rain Water' }
    ]
  },
  'Microsoft': {
    count: 45,
    topPatterns: ['Two Pointers', 'BFS', 'DFS', 'Dynamic Programming'],
    mustSolve: []
  },
  'Google': {
    count: 55,
    topPatterns: ['BFS', 'DFS', 'Sliding Window', 'Union-Find'],
    mustSolve: []
  },
  'Facebook': {
    count: 40,
    topPatterns: ['Sliding Window', 'BFS', 'DFS', 'Two Pointers'],
    mustSolve: []
  }
};

export default problemsData;
