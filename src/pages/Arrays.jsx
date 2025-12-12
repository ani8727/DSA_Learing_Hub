import React from 'react';
import { Grid3x3, Target, Code } from 'lucide-react';
import Section from '../components/Section';
import CodeBlock from '../components/CodeBlock';

const Arrays = () => {
  return (
    <div className="space-y-6">
      <div className="card-modern rounded-xl p-8">
        <h1 className="text-4xl font-bold gradient-text mb-3">Arrays Mastery Guide 📊</h1>
        <p className="text-gray-700 dark:text-gray-300 text-lg">Master array manipulation, patterns, and techniques</p>
      </div>

      <Section title="Array Fundamentals" icon={Grid3x3} defaultOpen>
        <div className="space-y-4">
          <p className="text-gray-700 text-lg">
            Arrays store elements in contiguous memory locations with O(1) random access.
          </p>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border border-blue-200 dark:border-blue-800">
              <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-3">⏱️ Time Complexities:</h4>
              <ul className="text-gray-700 dark:text-gray-300 space-y-2 font-mono text-sm">
                <li>• Access: <strong>O(1)</strong></li>
                <li>• Search: <strong>O(n)</strong></li>
                <li>• Insert (end): <strong>O(1)</strong></li>
                <li>• Insert (middle): <strong>O(n)</strong></li>
                <li>• Delete: <strong>O(n)</strong></li>
              </ul>
            </div>
            <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg border border-green-200 dark:border-green-800">
              <h4 className="font-semibold text-green-900 dark:text-green-100 mb-3">🔧 Common Operations:</h4>
              <ul className="text-gray-700 dark:text-gray-300 space-y-2">
                <li>• Traversal & Iteration</li>
                <li>• Searching (Linear, Binary)</li>
                <li>• Sorting</li>
                <li>• Rotation & Reversal</li>
                <li>• Subarray problems</li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      <Section title="Core Array Patterns" icon={Target}>
        <div className="space-y-6">
          <div className="border-l-4 border-blue-500 pl-6">
            <h3 className="text-xl font-semibold mb-2">1. Prefix Sum Pattern</h3>
            <p className="text-gray-700 mb-3">For range sum queries in O(1)</p>
            <CodeBlock code={`// Build prefix sum array
vector<int> prefixSum(vector<int>& arr) {
    int n = arr.size();
    vector<int> prefix(n);
    prefix[0] = arr[0];
    for (int i = 1; i < n; i++) {
        prefix[i] = prefix[i-1] + arr[i];
    }
    return prefix;
}

// Range sum query [l, r]
int rangeSum(vector<int>& prefix, int l, int r) {
    if (l == 0) return prefix[r];
    return prefix[r] - prefix[l-1];
}`} />
          </div>

          <div className="border-l-4 border-green-500 pl-6">
            <h3 className="text-xl font-semibold mb-2">2. Kadane's Algorithm</h3>
            <p className="text-gray-600 mb-3">Find maximum sum contiguous subarray</p>
            <CodeBlock code={`int maxSubArray(vector<int>& nums) {
    int maxSum = nums[0];
    int currSum = nums[0];
    
    for (int i = 1; i < nums.size(); i++) {
        currSum = max(nums[i], currSum + nums[i]);
        maxSum = max(maxSum, currSum);
    }
    return maxSum;
}
// Time: O(n), Space: O(1)`} />
          </div>

          <div className="border-l-4 border-purple-500 pl-6">
            <h3 className="text-xl font-semibold mb-2">3. Two Sum Pattern</h3>
            <CodeBlock code={`vector<int> twoSum(vector<int>& nums, int target) {
    unordered_map<int, int> mp;
    for (int i = 0; i < nums.size(); i++) {
        int complement = target - nums[i];
        if (mp.find(complement) != mp.end()) {
            return {mp[complement], i};
        }
        mp[nums[i]] = i;
    }
    return {};
}
// Time: O(n), Space: O(n)`} />
          </div>

          <div className="border-l-4 border-orange-500 pl-6">
            <h3 className="text-xl font-semibold mb-2">4. Dutch National Flag</h3>
            <p className="text-gray-600 mb-3">Sort array with 0s, 1s, 2s</p>
            <CodeBlock code={`void sortColors(vector<int>& nums) {
    int low = 0, mid = 0, high = nums.size() - 1;
    
    while (mid <= high) {
        if (nums[mid] == 0) {
            swap(nums[low], nums[mid]);
            low++;
            mid++;
        } else if (nums[mid] == 1) {
            mid++;
        } else {
            swap(nums[mid], nums[high]);
            high--;
        }
    }
}
// Time: O(n), Space: O(1)`} />
          </div>
        </div>
      </Section>

      <Section title="Must-Solve Problems" icon={Code}>
        <div className="space-y-4">
          <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
            <h4 className="font-semibold text-yellow-900 mb-3">📝 Easy Problems:</h4>
            <ul className="text-gray-700 space-y-2">
              <li>• Two Sum (LC 1)</li>
              <li>• Best Time to Buy/Sell Stock (LC 121)</li>
              <li>• Contains Duplicate (LC 217)</li>
              <li>• Maximum Subarray (LC 53)</li>
              <li>• Merge Sorted Array (LC 88)</li>
            </ul>
          </div>
          
          <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
            <h4 className="font-semibold text-orange-900 mb-3">📝 Medium Problems:</h4>
            <ul className="text-gray-700 space-y-2">
              <li>• 3Sum (LC 15)</li>
              <li>• Product of Array Except Self (LC 238)</li>
              <li>• Container With Most Water (LC 11)</li>
              <li>• Rotate Array (LC 189)</li>
              <li>• Subarray Sum Equals K (LC 560)</li>
            </ul>
          </div>

          <div className="bg-red-50 p-4 rounded-lg border border-red-200">
            <h4 className="font-semibold text-red-900 mb-3">📝 Hard Problems:</h4>
            <ul className="text-gray-700 space-y-2">
              <li>• Median of Two Sorted Arrays (LC 4)</li>
              <li>• Trapping Rain Water (LC 42)</li>
              <li>• First Missing Positive (LC 41)</li>
            </ul>
          </div>
        </div>
      </Section>

      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-8 rounded-xl text-center">
        <h3 className="text-2xl font-bold mb-3">💡 Pro Tip</h3>
        <p className="text-purple-100">
          Master Two Sum, Prefix Sum, and Kadane's Algorithm - they form the foundation for 50%+ array problems!
        </p>
      </div>
    </div>
  );
};

export default Arrays;