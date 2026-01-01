# Sliding Window Pattern

## What is it?
The Sliding Window pattern is used to perform operations on a specific window size of an array or linked list. This technique involves maintaining a subset of data in a window that slides through the larger dataset.

## What problems does it solve?
- Finding subarrays or substrings with certain properties
- Maximum/minimum sum of subarrays of size K
- Longest substring with K distinct characters
- Finding anagrams in a string
- Smallest subarray with a given sum

## Learning Outcomes
After mastering this pattern, you will be able to:
1. Recognize problems that can benefit from the sliding window approach
2. Implement both fixed and dynamic size windows
3. Use hash maps to track window contents efficiently
4. Convert O(n²) brute force solutions to O(n) optimal solutions

## Key Concepts
- **Fixed Window**: Window size remains constant throughout
- **Dynamic Window**: Window expands and contracts based on conditions
- **Two Pointers**: Start and end pointers define window boundaries

## Time & Space Complexity
- **Time**: O(n) - Each element is visited at most twice
- **Space**: O(1) or O(k) when using hash maps

## Prerequisites
- Understanding of arrays and strings
- Basic knowledge of two pointers technique
- Familiarity with hash maps/dictionaries
