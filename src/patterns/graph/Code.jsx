import { useState } from 'react';

const Code = () => {
  const [activeTab, setActiveTab] = useState('javascript');

  const codeExamples = {
    javascript: { label: 'JavaScript', code: `// Dijkstra's Algorithm - Shortest Path
function networkDelayTime(times, n, k) {
  const graph = new Map();
  for (const [u, v, w] of times) {
    if (!graph.has(u)) graph.set(u, []);
    graph.get(u).push([v, w]);
  }
  
  const dist = new Array(n + 1).fill(Infinity);
  dist[k] = 0;
  
  // Min-heap: [distance, node]
  const heap = [[0, k]];
  
  while (heap.length > 0) {
    heap.sort((a, b) => a[0] - b[0]); // Simple priority queue
    const [d, u] = heap.shift();
    
    if (d > dist[u]) continue;
    
    for (const [v, w] of (graph.get(u) || [])) {
      if (dist[u] + w < dist[v]) {
        dist[v] = dist[u] + w;
        heap.push([dist[v], v]);
      }
    }
  }
  
  const maxDist = Math.max(...dist.slice(1));
  return maxDist === Infinity ? -1 : maxDist;
}

// Topological Sort - Course Schedule
function canFinish(numCourses, prerequisites) {
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
  
  let completed = 0;
  while (queue.length > 0) {
    const course = queue.shift();
    completed++;
    
    for (const next of (graph.get(course) || [])) {
      inDegree[next]--;
      if (inDegree[next] === 0) queue.push(next);
    }
  }
  
  return completed === numCourses;
}` },
    java: { label: 'Java', code: `public int networkDelayTime(int[][] times, int n, int k) {
    Map<Integer, List<int[]>> graph = new HashMap<>();
    for (int[] t : times) {
        graph.computeIfAbsent(t[0], x -> new ArrayList<>()).add(new int[]{t[1], t[2]});
    }
    
    int[] dist = new int[n + 1];
    Arrays.fill(dist, Integer.MAX_VALUE);
    dist[k] = 0;
    
    PriorityQueue<int[]> pq = new PriorityQueue<>((a, b) -> a[0] - b[0]);
    pq.offer(new int[]{0, k});
    
    while (!pq.isEmpty()) {
        int[] curr = pq.poll();
        int d = curr[0], u = curr[1];
        if (d > dist[u]) continue;
        
        if (graph.containsKey(u)) {
            for (int[] edge : graph.get(u)) {
                int v = edge[0], w = edge[1];
                if (dist[u] + w < dist[v]) {
                    dist[v] = dist[u] + w;
                    pq.offer(new int[]{dist[v], v});
                }
            }
        }
    }
    
    int maxDist = 0;
    for (int i = 1; i <= n; i++) {
        maxDist = Math.max(maxDist, dist[i]);
    }
    return maxDist == Integer.MAX_VALUE ? -1 : maxDist;
}` },
    python: { label: 'Python', code: `import heapq
from collections import defaultdict

def network_delay_time(times, n, k):
    graph = defaultdict(list)
    for u, v, w in times:
        graph[u].append((v, w))
    
    dist = {i: float('inf') for i in range(1, n + 1)}
    dist[k] = 0
    
    heap = [(0, k)]
    
    while heap:
        d, u = heapq.heappop(heap)
        if d > dist[u]:
            continue
        
        for v, w in graph[u]:
            if dist[u] + w < dist[v]:
                dist[v] = dist[u] + w
                heapq.heappush(heap, (dist[v], v))
    
    max_dist = max(dist.values())
    return -1 if max_dist == float('inf') else max_dist` }
  };

  return (
    <div className="space-y-8">
      <div className="bg-dark-700 rounded-2xl border border-dark-500 p-6 md:p-8">
        <h2 className="text-2xl font-bold text-white mb-4">Code Examples</h2>
        <p className="text-gray-300">Complete implementations of Graph algorithms.</p>
      </div>

      <div className="bg-dark-700 rounded-2xl border border-dark-500 overflow-hidden">
        <div className="flex border-b border-dark-500">
          {Object.entries(codeExamples).map(([key, { label }]) => (
            <button key={key} onClick={() => setActiveTab(key)} className={`px-6 py-4 font-medium transition-colors ${activeTab === key ? 'bg-dark-600 text-white border-b-2 border-accent-primary' : 'text-gray-400 hover:text-white'}`}>{label}</button>
          ))}
        </div>
        <div className="p-6">
          <pre className="bg-dark-800 rounded-xl p-6 overflow-x-auto"><code className="text-gray-300 text-sm font-mono whitespace-pre">{codeExamples[activeTab].code}</code></pre>
        </div>
      </div>
    </div>
  );
};

export default Code;
