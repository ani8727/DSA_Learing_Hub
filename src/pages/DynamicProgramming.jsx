import React from 'react';
import { Sparkles, Target, Code } from 'lucide-react';
import Section from '../components/Section';
import CodeBlock from '../components/CodeBlock';

const DynamicProgramming = () => {
  return (
    <div className="space-y-6">
      <div className="card-modern rounded-xl p-8">
        <h1 className="text-4xl font-bold gradient-text mb-3">Dynamic Programming ✨</h1>
        <p className="text-gray-700 dark:text-gray-300 text-lg">Master the art of optimization</p>
      </div>

      <Section title="DP Fundamentals" icon={Sparkles} defaultOpen>
        <div className="space-y-4">
          <p className="text-gray-700 text-lg">
            Dynamic Programming solves complex problems by breaking them into simpler overlapping subproblems.
          </p>

          <div className="bg-teal-50 p-6 rounded-lg border-l-4 border-teal-600">
            <h4 className="font-semibold text-teal-900 mb-3">🎯 When to Use DP:</h4>
            <ul className="text-gray-700 space-y-2">
              <li>✅ Overlapping subproblems</li>
              <li>✅ Optimal substructure</li>
              <li>✅ Counting problems</li>
              <li>✅ Optimization problems (min/max)</li>
            </ul>
          </div>

          <CodeBlock code={`// Fibonacci - Memoization (Top-Down)
int fib(int n, vector<int>& memo) {
    if (n <= 1) return n;
    if (memo[n] != -1) return memo[n];
    return memo[n] = fib(n-1, memo) + fib(n-2, memo);
}

// Fibonacci - Tabulation (Bottom-Up)
int fib(int n) {
    if (n <= 1) return n;
    vector<int> dp(n + 1);
    dp[0] = 0;
    dp[1] = 1;
    for (int i = 2; i <= n; i++) {
        dp[i] = dp[i-1] + dp[i-2];
    }
    return dp[n];
}

// Climbing Stairs
int climbStairs(int n) {
    if (n <= 2) return n;
    int prev2 = 1, prev1 = 2;
    for (int i = 3; i <= n; i++) {
        int curr = prev1 + prev2;
        prev2 = prev1;
        prev1 = curr;
    }
    return prev1;
}

// House Robber
int rob(vector<int>& nums) {
    int n = nums.size();
    if (n == 0) return 0;
    if (n == 1) return nums[0];
    
    int prev2 = nums[0];
    int prev1 = max(nums[0], nums[1]);
    
    for (int i = 2; i < n; i++) {
        int curr = max(prev1, prev2 + nums[i]);
        prev2 = prev1;
        prev1 = curr;
    }
    return prev1;
}`} />
        </div>
      </Section>

      <Section title="DP Patterns" icon={Target}>
        <div className="space-y-4">
          <div className="border-l-4 border-blue-500 pl-6">
            <h3 className="text-xl font-semibold mb-2">1. Linear DP (1D)</h3>
            <p className="text-sm text-gray-700">Climbing Stairs, House Robber, Decode Ways</p>
          </div>

          <div className="border-l-4 border-green-500 pl-6">
            <h3 className="text-xl font-semibold mb-2">2. Grid DP (2D)</h3>
            <p className="text-sm text-gray-600">Unique Paths, Min Path Sum, LCS</p>
          </div>

          <div className="border-l-4 border-purple-500 pl-6">
            <h3 className="text-xl font-semibold mb-2">3. Knapsack Pattern</h3>
            <p className="text-sm text-gray-600">0/1 Knapsack, Subset Sum, Partition</p>
          </div>

          <div className="border-l-4 border-pink-500 pl-6">
            <h3 className="text-xl font-semibold mb-2">4. String DP</h3>
            <p className="text-sm text-gray-600">Edit Distance, Longest Palindromic Subsequence</p>
          </div>
        </div>
      </Section>

      <Section title="Must-Solve DP Problems" icon={Code}>
        <div className="space-y-4">
          <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
            <h4 className="font-semibold text-yellow-900 mb-3">📝 Essential Problems:</h4>
            <ul className="text-gray-700 space-y-2">
              <li>• Climbing Stairs (LC 70)</li>
              <li>• House Robber (LC 198)</li>
              <li>• Coin Change (LC 322)</li>
              <li>• Longest Increasing Subsequence (LC 300)</li>
              <li>• 0/1 Knapsack</li>
              <li>• Edit Distance (LC 72)</li>
              <li>• Longest Common Subsequence (LC 1143)</li>
            </ul>
          </div>
        </div>
      </Section>

      <div className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white p-8 rounded-xl text-center">
        <h3 className="text-2xl font-bold mb-3">✨ DP Mantra</h3>
        <p className="text-teal-100">
          Think recursively, solve with memoization, optimize with tabulation!
        </p>
      </div>
    </div>
  );
};

export default DynamicProgramming;