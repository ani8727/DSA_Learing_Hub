# Pattern Guide

## What is a Pattern?

A pattern is a reusable algorithmic approach that solves a class of problems. Instead of memorizing individual solutions, learn the underlying thinking pattern.

## How to Think in Patterns

1. **Identify the Problem Type**: What type of data? What operation?
2. **Match to Pattern**: Which pattern fits this scenario?
3. **Apply the Template**: Use the pattern's general solution
4. **Customize**: Adapt to specific constraints

## Adding a New Pattern

### Step 1: Create Folder Structure
```
src/data/patterns/{category}/{pattern-slug}/
├── index.json
├── problems.json
└── template.cpp
```

### Step 2: Define Pattern Theory (index.json)
```json
{
  "id": "pattern-slug",
  "title": "Pattern Title",
  "category": "Category Name",
  "difficulty": "Beginner|Intermediate|Advanced",
  "coreIdea": "One sentence explanation",
  "mentalModel": "How to think about it",
  "whenToUse": ["Scenario 1", "Scenario 2"],
  "variations": ["Variation 1", "Variation 2"]
}
```

### Step 3: Add Problems (problems.json)
```json
[
  {
    "id": "problem-slug",
    "title": "Problem Title",
    "difficulty": "Easy|Medium|Hard",
    "leetcode": "https://leetcode.com/...",
    "whyPattern": "Why this pattern fits",
    "approach": ["Step 1", "Step 2", "Step 3"],
    "complexity": {
      "time": "O(n)",
      "space": "O(1)"
    }
  }
]
```

### Step 4: Create Template (template.cpp)
Write the generic solution skeleton that can be adapted to specific problems.

## Pattern Categories

- **Array**: Sliding Window, Two Pointer, Prefix Sum, Kadane
- **Linked List**: Fast & Slow, Cycle Detection
- **Stack & Queue**: Monotonic Stack, Next Greater Element
- **Tree**: DFS, BFS, BST Operations
- **Graph**: Traversal, Shortest Path, MST
- **Dynamic Programming**: 0/1 Knapsack, LIS, Matrix Chain

## Best Practices

- Keep patterns focused on one core idea
- Include 2-3 example problems per pattern
- Write clear, concise explanations
- Test templates with multiple problems