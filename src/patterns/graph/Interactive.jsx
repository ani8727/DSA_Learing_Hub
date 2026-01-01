import { useState } from 'react';

const Interactive = () => {
  const [showHint, setShowHint] = useState(false);
  const [showSolution, setShowSolution] = useState(false);

  return (
    <div className="space-y-8">
      <div className="bg-dark-700 rounded-2xl border border-dark-500 p-6 md:p-8">
        <span className="px-3 py-1 bg-yellow-500/20 text-yellow-400 rounded-full text-sm font-medium">Interactive Challenge</span>
        <h2 className="text-2xl font-bold text-white mt-4 mb-4">Course Schedule II</h2>
        <p className="text-gray-300">Given numCourses and prerequisites array, return the ordering of courses to finish all courses. If impossible, return an empty array.</p>
      </div>

      <div className="bg-dark-700 rounded-2xl border border-dark-500 p-6">
        <div className="bg-dark-600 rounded-xl p-4">
          <p><span className="text-gray-500">Input: </span><code className="text-accent-primary">numCourses = 4, prerequisites = [[1,0],[2,0],[3,1],[3,2]]</code></p>
          <p><span className="text-gray-500">Output: </span><code className="text-green-400">[0,1,2,3] or [0,2,1,3]</code></p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <button onClick={() => setShowHint(!showHint)} className="py-4 px-6 bg-dark-600 border border-dark-500 rounded-xl text-white font-medium hover:bg-dark-500">💡 {showHint ? 'Hide' : 'Show'} Hint</button>
        <button onClick={() => setShowSolution(!showSolution)} className="py-4 px-6 bg-gradient-to-r from-accent-primary to-accent-secondary rounded-xl text-white font-medium">✨ {showSolution ? 'Hide' : 'Reveal'} Solution</button>
      </div>

      {showHint && <div className="bg-yellow-500/10 rounded-2xl border border-yellow-500/20 p-6 animate-fadeIn"><p className="text-gray-300">Use Kahn's algorithm (BFS topological sort). Collect the order as you process nodes. If the result length doesn't equal numCourses, there's a cycle!</p></div>}
      {showSolution && <div className="bg-green-500/10 rounded-2xl border border-green-500/20 p-6 animate-fadeIn"><pre className="bg-dark-800 rounded-xl p-6 overflow-x-auto"><code className="text-gray-300 text-sm font-mono">{`function findOrder(numCourses, prerequisites) {
  const graph = new Map();
  const inDegree = new Array(numCourses).fill(0);
  
  for (const [course, prereq] of prerequisites) {
    if (!graph.has(prereq)) graph.set(prereq, []);
    graph.get(prereq).push(course);
    inDegree[course]++;
  }
  
  const queue = [];
  for (let i = 0; i < numCourses; i++) {
    if (inDegree[i] === 0) queue.push(i);
  }
  
  const order = [];
  while (queue.length > 0) {
    const course = queue.shift();
    order.push(course);
    
    for (const next of (graph.get(course) || [])) {
      inDegree[next]--;
      if (inDegree[next] === 0) queue.push(next);
    }
  }
  
  return order.length === numCourses ? order : [];
}`}</code></pre></div>}
    </div>
  );
};

export default Interactive;
