# Tree Patterns - Complete Guide

## 📚 Overview

Tree algorithms form the backbone of many advanced data structures and are essential for technical interviews. This section covers comprehensive tree patterns from basic traversals to advanced dynamic programming.

## 🎯 Pattern Philosophy

**Pattern-First Learning**: Master tree patterns, not individual problems. Learn to recognize which pattern applies to any tree problem.

## 📖 Study Order

We recommend studying tree patterns in this order:

1. **Tree DFS Traversals** - Foundation (Preorder, Inorder, Postorder)
2. **Tree BFS (Level Order)** - Queue-based processing
3. **Binary Search Tree (BST)** - Sorted tree operations
4. **Tree Construction** - Building trees from various inputs
5. **Tree Dynamic Programming** - Optimization on trees

## 🗂️ Pattern Structure

Each pattern folder contains:

```
tree-dfs/
├── README.md          # Pattern overview & when to use
├── Overview.jsx       # Pattern definition & theory
├── Theory.jsx         # Mathematical foundation & proofs
├── Types.jsx          # Problem classifications
├── Code.jsx           # C++ templates & implementations
├── Problems.jsx       # Curated problem set
├── Interactive.jsx    # Visual demonstrations
```

## 📊 Pattern Coverage

### 1. Tree DFS Traversals
- **Use When**: Path problems, recursion, tree properties
- **Key Algorithms**: Preorder, Inorder, Postorder, Morris
- **Complexity**: O(N) time, O(H) space
- **Problems**: 30+ curated problems

### 2. Tree BFS (Level Order)
- **Use When**: Level-by-level processing, minimum depth
- **Key Algorithms**: Standard BFS, Zigzag, Right/Left view
- **Complexity**: O(N) time, O(W) space (W = max width)
- **Problems**: 20+ curated problems

### 3. Binary Search Tree (BST)
- **Use When**: Sorted data, search operations, range queries
- **Key Algorithms**: Search, Insert, Delete, Validation
- **Complexity**: O(H) average, O(N) worst
- **Problems**: 25+ curated problems

### 4. Tree Construction
- **Use When**: Building trees from arrays, traversals, strings
- **Key Algorithms**: From traversals, from parent array, serialize
- **Complexity**: O(N) time and space
- **Problems**: 15+ curated problems

### 5. Tree Dynamic Programming
- **Use When**: Optimization problems, path sums, subtree problems
- **Key Algorithms**: Top-down, Bottom-up, Rerooting
- **Complexity**: O(N) time, O(H) space
- **Problems**: 18+ curated problems

## 🎓 Tree Fundamentals

### Tree Definition
A tree is a connected acyclic graph with exactly **N - 1 edges** for N nodes.

### Binary Tree Types

**Complete Binary Tree**
- All levels filled except possibly the last
- Last level filled from left to right

**Full Binary Tree**
- Every node has 0 or 2 children
- No node has exactly 1 child

**Perfect Binary Tree**
- All internal nodes have 2 children
- All leaves at same level
- Total nodes = 2^h - 1

**Balanced Binary Tree**
- Height difference of subtrees ≤ 1
- Ensures O(log N) operations

## 🔍 Quick Pattern Selection

**Need to visit all nodes?** → DFS or BFS
**Processing by level?** → BFS (Level Order)
**Need sorted order?** → BST Inorder traversal
**Building tree from data?** → Tree Construction
**Optimization/max/min problem?** → Tree DP
**Finding path?** → DFS (usually recursive)
**Shortest path from root?** → BFS

## 💡 Pro Tips

1. **Recursive Pattern**: Most tree problems have elegant recursive solutions
2. **Base Case**: Always handle null nodes first
3. **Return Values**: Think about what each recursive call should return
4. **Post-order for Bottom-up**: Use postorder when you need child info first
5. **Level Order for Width**: BFS gives you level information naturally

## 📈 Complexity Cheat Sheet

| Pattern | Time | Space | When to Use |
|---------|------|-------|-------------|
| DFS Traversal | O(N) | O(H) | Paths, properties, recursion |
| BFS Level Order | O(N) | O(W) | Level-wise, minimum depth |
| BST Operations | O(H) | O(H) | Search, sorted data |
| Tree Construction | O(N) | O(N) | Building trees |
| Tree DP | O(N) | O(H) | Optimization problems |

**N** = Number of nodes
**H** = Height of tree
**W** = Maximum width of tree

## 🎯 Traversal Patterns

### DFS Traversals

**Preorder (Root → Left → Right)**
```
Use for: Copying tree, prefix expression, tree serialization
```

**Inorder (Left → Root → Right)**
```
Use for: BST sorted order, expression evaluation
```

**Postorder (Left → Right → Root)**
```
Use for: Deletion, postfix expression, subtree operations
```

### BFS Traversal

**Level Order (Level by level)**
```
Use for: Level-wise processing, minimum depth, zigzag
```

## 🏆 Mastery Checklist

- [ ] Can implement all three DFS traversals (recursive & iterative)
- [ ] Understand BST properties and invariants
- [ ] Can construct trees from various inputs
- [ ] Solve path sum and tree DP problems
- [ ] Handle edge cases (null, single node, skewed trees)
- [ ] Recognize pattern from problem statement
- [ ] Optimize space with Morris traversal
- [ ] Communicate approach clearly in interviews

## 📊 Tree Mathematics

### Height Formulas

**Minimum Height**: `log₂(N + 1) - 1` (Perfect tree)
**Maximum Height**: `N - 1` (Skewed tree)
**Average Height**: `O(√N)` (Random BST)

### Node Count

**Perfect Binary Tree**: `2^h - 1` nodes at height h
**Leaves in Full Tree**: `⌈N/2⌉` leaves for N nodes
**Internal Nodes**: `⌊N/2⌋` internal nodes

## 🚀 Next Steps

1. Start with **Tree DFS Traversals** - essential foundation
2. Practice 10-15 problems per pattern
3. Implement both recursive and iterative approaches
4. Master BST properties
5. Learn tree DP techniques
6. Practice pattern recognition

## 📞 Common Interview Questions

**"Traverse a tree without recursion"**
→ Iterative DFS with stack OR Morris traversal

**"Find lowest common ancestor"**
→ DFS with parent tracking OR path comparison

**"Maximum path sum in tree"**
→ Tree DP (postorder traversal)

**"Check if tree is balanced"**
→ DFS with height calculation

**"Serialize and deserialize tree"**
→ Tree Construction (Preorder + markers)

---

**Total Problems**: 108+
**Estimated Study Time**: 3-5 weeks for mastery
**Difficulty Range**: Beginner to Advanced

Start your journey with [Tree DFS](./tree-dfs/README.md) →
