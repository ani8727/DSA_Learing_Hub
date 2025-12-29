# DSA Pattern Hub

A pattern-based Data Structures & Algorithms learning platform focused on building problem-solving intuition.

## 🏗️ Architecture Overview

This project follows a **pattern-first, data-driven architecture** designed for scalability and interview-readiness.

### Core Philosophy

The DSA Pattern Hub is designed to provide a structured approach to mastering Data Structures and Algorithms through patterns.

### Technology Stack

- **Frontend**: React + Vite
- **Styling**: Tailwind CSS
- **Data**: JSON-based knowledge base

### Features

- Comprehensive pattern library
- Dynamic loading of data
- Scalable and maintainable architecture

### Getting Started

```bash
npm install
npm run dev
```

### Contribution Guidelines

- Follow the pattern structure in `data/patterns.json`.
- Ensure all new patterns are documented.

**Happy Learning! 🎯**

## 📁 Project Structure

```
DSA-Learning-Hub/
├── public/                 # Static assets
├── src/
│   ├── app/
│   │   └── routes.jsx      # Centralized routing
│   ├── pages/              # Route-level components
│   │   ├── Home.jsx
│   │   ├── PatternList.jsx
│   │   ├── PatternDetail.jsx
│   │   ├── ProblemDetail.jsx
│   │   ├── Roadmap.jsx
│   │   └── About.jsx
│   ├── layouts/            # Page structure
│   │   ├── MainLayout.jsx
│   │   └── ReadingLayout.jsx
│   ├── components/         # Reusable UI blocks
│   │   ├── navigation/     # Navbar, Sidebar, Breadcrumb
│   │   ├── cards/          # PatternCard, ProblemCard
│   │   ├── ui/             # CodeBlock, DifficultyBadge, Tag
│   │   └── common/         # Button, Loader, EmptyState
│   ├── data/               # Knowledge base (JSON)
│   │   ├── patterns/       # Pattern folders
│   │   │   ├── array/sliding-window/
│   │   │   │   ├── index.json
│   │   │   │   ├── problems.json
│   │   │   │   └── template.cpp
│   │   │   └── ...
│   │   └── roadmaps/       # Learning paths
│   ├── styles/             # Styling system
│   │   ├── tailwind.css
│   │   ├── theme.css
│   │   └── global.css
│   └── utils/              # Helper functions
│       ├── slugify.js
│       ├── loadPattern.js
│       ├── difficultyColor.js
│       └── constants.js
├── docs/                   # Documentation
│   ├── SYSTEM_DESIGN.md
│   ├── PATTERN_GUIDE.md
│   ├── CONTENT_STANDARD.md
│   └── ROADMAP_DESIGN.md
└── README.md
```

## 🚀 Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/ani8727/DSA_Learing_Hub.git
   cd DSA_Learing_Hub
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

## 📚 Learning Flow

1. **Start Here**: Visit `/patterns` to browse all patterns
2. **Choose Category**: Filter by Array, Tree, Graph, etc.
3. **Learn Pattern**: Click pattern → read theory + template
4. **Practice**: Solve related problems
5. **Follow Roadmap**: Use `/roadmap/beginner` for structured learning

## 🛠️ Adding New Content

### Adding a Pattern

1. **Create folder structure**:
   ```
   src/data/patterns/{category}/{pattern-slug}/
   ├── index.json
   ├── problems.json
   └── template.cpp
   ```

2. **Write pattern theory** (`index.json`):
   ```json
   {
     "id": "pattern-slug",
     "title": "Pattern Title",
     "category": "Category Name",
     "difficulty": "Beginner",
     "coreIdea": "One sentence explanation",
     "mentalModel": "How to think about it",
     "whenToUse": ["Scenario 1", "Scenario 2"],
     "variations": ["Variation 1", "Variation 2"]
   }
   ```

3. **Add problems** (`problems.json`):
   ```json
   [
     {
       "id": "problem-slug",
       "title": "Problem Title",
       "difficulty": "Easy",
       "leetcode": "https://leetcode.com/...",
       "whyPattern": "Why this pattern fits",
       "approach": ["Step 1", "Step 2"],
       "complexity": { "time": "O(n)", "space": "O(1)" }
     }
   ]
   ```

4. **Create template** (`template.cpp`):
   ```cpp
   // Generic solution skeleton
   // Adaptable to specific problems
   ```

### Content Standards

- Follow naming conventions in `docs/CONTENT_STANDARD.md`
- Test templates with example problems
- Keep explanations clear and concise
- Include LeetCode links when available

## 🎯 Available Patterns

### Array Patterns
- **Sliding Window**: Efficient contiguous subarray processing
- **Two Pointer**: Opposite-end traversal techniques
- **Prefix Sum**: Range query optimization
- **Kadane's Algorithm**: Maximum subarray problems

### Data Structure Patterns
- **Linked List**: Fast & Slow pointers, Cycle detection
- **Stack & Queue**: Monotonic stack, Next greater element
- **Tree**: DFS/BFS traversal, BST operations
- **Graph**: Traversal, Shortest path, MST

### Algorithm Patterns
- **Dynamic Programming**: 0/1 Knapsack, LIS, Matrix chain
- **Greedy**: Activity selection, Huffman coding
- **Backtracking**: N-Queens, Subset generation

## 🗺️ Learning Roadmaps

- **Beginner**: Fundamentals (Arrays, Linked Lists, Trees)
- **Interview**: High-frequency patterns for coding interviews
- **Advanced**: Complex algorithms and system design

## 📖 Documentation

- **[System Design](docs/SYSTEM_DESIGN.md)**: Architecture and data flow
- **[Pattern Guide](docs/PATTERN_GUIDE.md)**: How to think in patterns
- **[Content Standard](docs/CONTENT_STANDARD.md)**: Writing guidelines
- **[Roadmap Design](docs/ROADMAP_DESIGN.md)**: Learning path creation

## 🤝 Contributing

1. Read the [Content Standard](docs/CONTENT_STANDARD.md)
2. Follow the [Pattern Guide](docs/PATTERN_GUIDE.md)
3. Create a new branch for your changes
4. Test your additions thoroughly
5. Submit a pull request

## 📈 Roadmap

- [ ] Add more patterns (50+ total)
- [ ] Interactive code playground
- [ ] Progress tracking
- [ ] Video explanations
- [ ] Mobile app version

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Inspired by interview preparation platforms
- Built with modern React patterns
- Focused on practical learning over theory

---

**Happy Learning! 🎯**

Remember: It's not about memorizing solutions, it's about recognizing patterns.
