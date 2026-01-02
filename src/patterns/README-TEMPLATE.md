# Sliding Window Pattern - Complete Guide

## 📋 Table of Contents
- [Category Overview](#category-overview)
- [Core Pattern](#core-pattern)
- [First Decision Rule](#first-decision-rule-most-important)
- [Pattern Variations](#pattern-variations)
- [Approach 1: Fixed Window](#approach-1-fixed-window-size)
- [Approach 2: Dynamic Window](#approach-2-dynamic-window-size)
- [Complexity Analysis](#complexity-analysis)
- [When to Use](#when-to-use-this-pattern)
- [Pattern Recognition Keywords](#pattern-recognition-keywords)
- [Common Mistakes](#common-mistakes--interview-traps)
- [Practice Problems](#practice-problems-by-difficulty)
- [Master Rule](#one-line-master-rule)
- [Related Patterns](#related-patterns)

---

## Category Overview

The **Sliding Window** pattern is used to perform operations on a specific window size of an array or string. Instead of recalculating from scratch for each position, we maintain a "window" and slide it through the data, updating the window state efficiently.

This pattern appears frequently in:
- Subarray/substring problems
- Contiguous sequence optimization
- String pattern matching
- Maximum/minimum sum problems
- Character frequency tracking

---

## Core Pattern

> **Maintain a window that slides through contiguous elements**

The window can be:
- **Fixed size** (K elements) - Window size remains constant
- **Dynamic size** - Window grows and shrinks based on conditions

---

## First Decision Rule (MOST IMPORTANT)

> **If the problem asks about a contiguous subarray/substring → Think Sliding Window**

### Pattern Recognition Criteria

| Indicator | Example Keywords |
|-----------|------------------|
| Contiguous sequence | "subarray", "substring", "consecutive" |
| Window constraint | "of size K", "at most K distinct" |
| Optimization needed | "maximum sum", "minimum length", "longest" |
| O(n²) → O(n) | Nested loops checking all subarrays |

---

## Pattern Variations

### 1. Fixed Window Size
- Window size `K` is constant
- Slide one element at a time
- Add new element, remove old element
- **Example**: Maximum sum of subarray of size K

### 2. Dynamic Window Size
- Window grows by adding elements (right pointer)
- Shrinks by removing elements (left pointer)
- Size changes based on condition
- **Example**: Longest substring with K distinct characters

---

## Approach 1: Fixed Window Size

### Core Idea
1. Calculate result for first window of size K
2. Slide window: remove leftmost, add rightmost
3. Update result if better

### Algorithm Steps
```
1. Initialize window sum/state for first K elements
2. Set result = window sum
3. For each remaining element:
   a. Remove element going out (left)
   b. Add element coming in (right)
   c. Update result if needed
4. Return result
```

### Code Template (JavaScript)
```javascript
function fixedWindow(arr, k) {
  let windowSum = 0;
  let maxSum = 0;
  
  // Step 1: First window
  for (let i = 0; i < k; i++) {
    windowSum += arr[i];
  }
  maxSum = windowSum;
  
  // Step 2: Slide window
  for (let i = k; i < arr.length; i++) {
    windowSum = windowSum - arr[i - k] + arr[i];
    maxSum = Math.max(maxSum, windowSum);
  }
  
  return maxSum;
}
```

### Time & Space Complexity
- **Time**: O(n) - Single pass through array
- **Space**: O(1) - Only tracking window state

### When to Use
- Window size is given (K elements)
- Need to check all windows of size K
- Examples: Maximum/minimum/average of K-size subarrays

### LeetCode Problems
- [643. Maximum Average Subarray I](https://leetcode.com/problems/maximum-average-subarray-i/) (Easy)
- [1456. Maximum Number of Vowels](https://leetcode.com/problems/maximum-number-of-vowels-in-a-substring-of-given-length/) (Medium)
- [219. Contains Duplicate II](https://leetcode.com/problems/contains-duplicate-ii/) (Easy)

---

## Approach 2: Dynamic Window Size

### Core Idea
1. Use two pointers: `left` and `right`
2. Expand window by moving `right`
3. Shrink window by moving `left` when condition violated
4. Track best result seen

### Algorithm Steps
```
1. Initialize left = 0, right = 0
2. Initialize window state (sum, frequency map, etc.)
3. While right < array length:
   a. Add arr[right] to window
   b. While window violates condition:
      - Remove arr[left] from window
      - Move left++
   c. Update result with current window
   d. Move right++
4. Return result
```

### Code Template (JavaScript)
```javascript
function dynamicWindow(arr, target) {
  let left = 0;
  let windowSum = 0;
  let minLength = Infinity;
  
  for (let right = 0; right < arr.length; right++) {
    // Expand window
    windowSum += arr[right];
    
    // Shrink window while condition met
    while (windowSum >= target) {
      minLength = Math.min(minLength, right - left + 1);
      windowSum -= arr[left];
      left++;
    }
  }
  
  return minLength === Infinity ? 0 : minLength;
}
```

### With HashMap (Character Frequency)
```javascript
function longestSubstringKDistinct(s, k) {
  const charCount = new Map();
  let left = 0;
  let maxLength = 0;
  
  for (let right = 0; right < s.length; right++) {
    // Add character to window
    charCount.set(s[right], (charCount.get(s[right]) || 0) + 1);
    
    // Shrink if too many distinct characters
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
}
```

### Time & Space Complexity
- **Time**: O(n) - Each element visited at most twice (by left and right)
- **Space**: O(k) - HashMap stores at most K distinct elements

### When to Use
- Window size is unknown
- Need to find optimal window based on condition
- "Longest/shortest/minimum" with constraints
- Examples: Longest substring with K distinct chars, Minimum window substring

### LeetCode Problems
- [3. Longest Substring Without Repeating Characters](https://leetcode.com/problems/longest-substring-without-repeating-characters/) (Medium) ⭐
- [340. Longest Substring with At Most K Distinct Characters](https://leetcode.com/problems/longest-substring-with-at-most-k-distinct-characters/) (Medium)
- [209. Minimum Size Subarray Sum](https://leetcode.com/problems/minimum-size-subarray-sum/) (Medium)
- [424. Longest Repeating Character Replacement](https://leetcode.com/problems/longest-repeating-character-replacement/) (Medium)
- [76. Minimum Window Substring](https://leetcode.com/problems/minimum-window-substring/) (Hard) ⭐⭐⭐

---

## Complexity Analysis

| Operation | Time | Space | Notes |
|-----------|------|-------|-------|
| Fixed Window | O(n) | O(1) | Single pass, constant space |
| Dynamic Window | O(n) | O(k) | Two pointers, HashMap for frequencies |
| Brute Force | O(n²) or O(n³) | O(1) | Checking all subarrays |

**Key Insight**: Sliding Window optimizes from O(n²) to O(n) by reusing calculations!

---

## When to Use This Pattern

### ✅ Use Sliding Window When:
- Problem mentions **contiguous** subarrays/substrings
- Need to optimize **nested loop** checking all subarrays
- Finding **maximum/minimum/longest/shortest** with constraints
- **Window size** is fixed or grows/shrinks based on condition
- Want O(n) instead of O(n²)

### ❌ Don't Use When:
- Elements don't need to be contiguous
- Need to check all subsequences (use backtracking/DP)
- No clear window boundary conditions
- Random access pattern needed

---

## Pattern Recognition Keywords

If problem contains these keywords, consider Sliding Window:

| Keyword Category | Examples |
|------------------|----------|
| **Structure** | subarray, substring, contiguous, consecutive |
| **Size** | of size K, window, at most K, up to K |
| **Optimization** | maximum sum, minimum length, longest, shortest |
| **Constraint** | distinct characters, at most K, no repeating |
| **Operations** | average, sum, product, count |

---

## Common Mistakes & Interview Traps

### Mistake 1: Not handling window state correctly
❌ **Wrong**: Forgetting to remove old elements when window slides
```javascript
windowSum += arr[i]; // Only adding, not removing!
```

✅ **Correct**: Update window state properly
```javascript
windowSum = windowSum - arr[i - k] + arr[i];
```

### Mistake 2: Off-by-one errors
❌ **Wrong**: Incorrect window boundaries
```javascript
windowSize = right - left; // Missing +1
```

✅ **Correct**: Include both endpoints
```javascript
windowSize = right - left + 1;
```

### Mistake 3: Not checking edge cases
- Empty array
- K > array length
- All elements same
- Single element array

### Mistake 4: Using wrong pointer movement
❌ **Wrong**: Moving both pointers simultaneously
✅ **Correct**: Expand with right, shrink with left independently

---

## Practice Problems (By Difficulty)

### 🟢 Beginner (Easy)
1. [643. Maximum Average Subarray I](https://leetcode.com/problems/maximum-average-subarray-i/)
   - Pattern: Fixed window
   - Hint: Calculate sum of first K, then slide
   
2. [219. Contains Duplicate II](https://leetcode.com/problems/contains-duplicate-ii/)
   - Pattern: Fixed window with Set
   - Hint: Maintain window of size K
   
3. [1343. Number of Sub-arrays of Size K and Average >= Threshold](https://leetcode.com/problems/number-of-sub-arrays-of-size-k-and-average-greater-than-or-equal-to-threshold/)

### 🟡 Intermediate (Medium)
4. [3. Longest Substring Without Repeating Characters](https://leetcode.com/problems/longest-substring-without-repeating-characters/) ⭐
   - Pattern: Dynamic window with Set/Map
   - Hint: Track last seen position of each character
   - Companies: Amazon, Microsoft, Facebook, Apple
   
5. [340. Longest Substring with At Most K Distinct Characters](https://leetcode.com/problems/longest-substring-with-at-most-k-distinct-characters/)
   - Pattern: Dynamic window with HashMap
   - Hint: Shrink when distinct > K
   
6. [424. Longest Repeating Character Replacement](https://leetcode.com/problems/longest-repeating-character-replacement/)
   - Pattern: Dynamic window
   - Hint: Window size - max frequency = replacements needed
   
7. [567. Permutation in String](https://leetcode.com/problems/permutation-in-string/)
   - Pattern: Fixed window pattern matching
   
8. [438. Find All Anagrams in a String](https://leetcode.com/problems/find-all-anagrams-in-a-string/)

9. [209. Minimum Size Subarray Sum](https://leetcode.com/problems/minimum-size-subarray-sum/)
   - Pattern: Dynamic window
   - Hint: Shrink when sum >= target

10. [904. Fruit Into Baskets](https://leetcode.com/problems/fruit-into-baskets/)
    - Pattern: Same as longest substring with 2 distinct chars

### 🔴 Advanced (Hard)
11. [76. Minimum Window Substring](https://leetcode.com/problems/minimum-window-substring/) ⭐⭐⭐
    - Pattern: Dynamic window with character counting
    - Hint: Track required vs matched characters
    - Companies: Amazon, Microsoft, Google, Facebook, Uber
    - Frequency: Very High
    
12. [239. Sliding Window Maximum](https://leetcode.com/problems/sliding-window-maximum/)
    - Pattern: Fixed window with Monotonic Deque
    - Hint: Maintain decreasing order in deque
    
13. [30. Substring with Concatenation of All Words](https://leetcode.com/problems/substring-with-concatenation-of-all-words/)
    - Pattern: Fixed window with multiple patterns

---

## One-Line Master Rule

> **Sliding Window = Optimize O(n²) contiguous sequence operations to O(n) by maintaining window state and reusing calculations**

---

## Comparison with Alternatives

| Approach | Time | Space | When to Use |
|----------|------|-------|-------------|
| **Sliding Window** | O(n) | O(1) - O(k) | Contiguous sequences ✓ |
| **Brute Force** | O(n²) - O(n³) | O(1) | Small input, simple logic |
| **Two Pointers** | O(n) | O(1) | Sorted arrays, pair problems |
| **Prefix Sum** | O(n) | O(n) | Non-overlapping range queries |
| **Dynamic Programming** | O(n²) | O(n) - O(n²) | Overlapping subproblems |

**Choose Sliding Window when**: 
- ✓ Contiguous elements
- ✓ Linear time needed
- ✓ Window state can be maintained efficiently

---

## Related Patterns

### 1. Two Pointers
**Relationship**: Sliding window is a specialized two-pointer technique
- Sliding Window: Contiguous sequences, window state
- Two Pointers: Any pair matching, often sorted arrays

**When to choose**: Use sliding window for contiguous, two pointers for any pair

### 2. Prefix Sum
**Relationship**: Both optimize subarray operations
- Sliding Window: Dynamic queries, single pass
- Prefix Sum: Pre-computed for multiple queries

**When to choose**: Sliding window for single pass with changing queries

### 3. Dynamic Programming
**Relationship**: Both avoid recalculation
- Sliding Window: Online algorithm, O(n) space
- DP: Offline, stores all subproblems

---

## Learning Outcomes

After mastering this pattern, you will:
- ✅ Recognize sliding window problems instantly
- ✅ Choose between fixed and dynamic window
- ✅ Optimize O(n²) brute force to O(n)
- ✅ Handle window state efficiently
- ✅ Solve 90% of substring/subarray problems

---

## Next Steps

1. **Master fixed window**: Solve 5 easy problems
2. **Learn dynamic window**: Solve longest substring problems
3. **Advanced techniques**: Pattern matching with window
4. **Related patterns**: Two Pointers, Prefix Sum

---

## Interview Tips

- 🎯 **Always ask**: Is the window size fixed or dynamic?
- 🎯 **Clarify**: What should happen at boundaries?
- 🎯 **Optimize**: Can we reuse calculations from previous window?
- 🎯 **Edge cases**: Empty array, K > length, single element
- 🎯 **Complexity**: Explain why O(n) not O(n²)

---

## Additional Resources

### Videos
- [Sliding Window Technique Explained](https://youtube.com) - 15 min
- [Fixed vs Dynamic Window](https://youtube.com) - 10 min

### Articles
- [Master the Sliding Window Pattern](https://medium.com) - 10 min read
- [Sliding Window Interview Guide](https://blog.com) - 15 min read

### Practice
- [LeetCode Sliding Window Tag](https://leetcode.com/tag/sliding-window/) - 50+ problems
- [NeetCode Sliding Window](https://neetcode.io) - Curated list

---

*Last Updated: January 2, 2026*
*Pattern Difficulty: Medium*
*Estimated Time to Master: 1-2 weeks*
*Total Problems: 25+*
