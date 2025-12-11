# 🚀 DSA & Patterns Hub

A comprehensive, pattern-based learning platform for Data Structures and Algorithms built with React, Vite, and Tailwind CSS.

![React](https://img.shields.io/badge/React-18.2.0-blue)
![Vite](https://img.shields.io/badge/Vite-5.0-purple)
![Tailwind](https://img.shields.io/badge/Tailwind-3.4-cyan)

## ✨ Features

- 🎯 **8+ Core Topics** - LinkedList, Arrays, Trees, DP, and more
- 📚 **20+ Algorithmic Patterns** - Master the patterns, solve any problem
- 💻 **100+ Problems** - Curated from LeetCode with full solutions
- 🎨 **Beautiful UI** - Modern, responsive design with Tailwind CSS
- ⚡ **Fast Performance** - Built with Vite for lightning-fast development
- 📱 **Mobile Friendly** - Works seamlessly on all devices
- 🔍 **Complete C++ Code** - Full implementations with explanations
- 💡 **Interview Tips** - Real strategies from FAANG engineers

## 🛠️ Tech Stack

- **Frontend:** React 18.2
- **Build Tool:** Vite 5.0
- **Styling:** Tailwind CSS 3.4
- **Routing:** React Router DOM 6.20
- **Icons:** Lucide React

## 🚀 Getting Started

### Prerequisites

- Node.js 16+ and npm

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/dsa-patterns-hub.git
cd dsa-patterns-hub

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## 📁 Project Structure

```
dsa-patterns-hub/
├── public/              # Static assets
├── src/
│   ├── components/      # Reusable UI components
│   │   ├── Layout.jsx
│   │   ├── Navbar.jsx
│   │   ├── Sidebar.jsx
│   │   ├── Section.jsx
│   │   └── CodeBlock.jsx
│   ├── pages/           # Page components
│   │   ├── Home.jsx
│   │   ├── LinkedList.jsx
│   │   ├── Arrays.jsx
│   │   └── ... (all topics)
│   ├── App.jsx          # Main app component
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles
├── index.html
├── package.json
├── vite.config.js
└── tailwind.config.js
```

## 📚 Topics Covered

1. **LinkedList** - Reversal, Two Pointer, Cycle Detection
2. **Arrays** - Two Sum, Prefix Sum, Kadane's Algorithm
3. **Two Pointer** - Opposite Ends, Fast & Slow, Fixed Distance
4. **Sliding Window** - Fixed & Variable Size Windows
5. **Sorting** - Quick Sort, Merge Sort, Heap Sort
6. **Strings** - Palindromes, Anagrams, Pattern Matching
7. **Trees** - DFS, BFS, Traversals, Path Problems
8. **Dynamic Programming** - 1D/2D DP, Knapsack, LCS

## 🎯 How to Add New Topics

Adding new topics is super easy! Just follow these steps:

### 1. Create New Page Component

Create `src/pages/YourTopic.jsx`:

```jsx
import React from 'react';
import Section from '../components/Section';
import CodeBlock from '../components/CodeBlock';

const YourTopic = () => {
  return (
    <div className="space-y-6">
      <div className="glass-effect rounded-xl p-8">
        <h1 className="text-4xl font-bold gradient-text mb-3">
          Your Topic 🚀
        </h1>
        <p className="text-gray-600 text-lg">Description here</p>
      </div>

      <Section title="Section Title" defaultOpen>
        <p>Your content here</p>
        <CodeBlock code={`// Your code here`} />
      </Section>
    </div>
  );
};

export default YourTopic;
```

### 2. Add Route in App.jsx

```jsx
import YourTopic from './pages/YourTopic';

// Add in Routes:
<Route path="/your-topic" element={<YourTopic />} />
```

### 3. Add to Sidebar

In `src/components/Sidebar.jsx`, add to topics array:

```jsx
{ path: '/your-topic', icon: YourIcon, label: 'Your Topic' }
```

That's it! 🎉

## 🏗️ Build for Production

```bash
# Create production build
npm run build

# Preview production build
npm run preview
```

## 🚀 Deployment

### Deploy to Vercel

```bash
npm i -g vercel
vercel
```

### Deploy to Netlify

1. Build: `npm run build`
2. Deploy `dist` folder to Netlify

## 🤝 Contributing

Contributions are welcome! Feel free to:

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License.

## 👨‍💻 Author

**Your Name**

- GitHub: [@yourusername](https://github.com/yourusername)
- LinkedIn: [Your Profile](https://linkedin.com/in/yourusername)

## 🙏 Acknowledgments

- LeetCode for problem references
- React community for amazing tools
- All contributors who helped improve this project

## 📧 Contact

Have questions? Feel free to reach out!

---

⭐ Star this repo if you found it helpful!

**Happy Coding!** 🚀