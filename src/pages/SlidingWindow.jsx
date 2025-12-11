
import React from 'react';
import { Layers, Target, Code } from 'lucide-react';
import Section from '../components/Section';
import CodeBlock from '../components/CodeBlock';

const SlidingWindow = () => {
  return (
    <div className="space-y-6">
      <div className="glass-effect rounded-xl p-8">
        <h1 className="text-4xl font-bold gradient-text mb-3">Sliding Window Pattern 🪟</h1>
        <p className="text-gray-600 text-lg">Optimize subarray/substring problems</p>
      </div>

      <Section title="What is Sliding Window?" icon={Layers} defaultOpen>
        <div className="space-y-4">
          <p className="text-gray-700 text-lg">
            Sliding window technique uses a window that slides over data to solve contiguous sequence problems efficiently.
          </p>

          <div className="bg-rose-50 p-6 rounded-lg border-l-4 border-rose-600">
            <h4 className="font-semibold text-rose-900 mb-3">🎯 Use Cases:</h4>
            <ul className="text-gray-700 space-y-2">
              <li>• Max/min sum of subarray of size k</li>
              <li>• Longest substring with k distinct characters</li>
              <li>• Find all anagrams in string</li>
              <li>• Minimum window substring</li>
            </ul>
          </div>

          <CodeBlock code={`// Fixed Size Window - Max Sum
int maxSumSubarray(vector<int>& arr, int k) {
    int windowSum = 0, maxSum = 0;
    
    // First window
    for (int i = 0; i < k; i++) {
        windowSum += arr[i];
    }
    maxSum = windowSum;
    
    // Slide window
    for (int i = k; i < arr.size(); i++) {
        windowSum += arr[i] - arr[i - k];
        maxSum = max(maxSum, windowSum);
    }
    return maxSum;
}

// Variable Size Window
int longestSubstring(string s) {
    unordered_map<char, int> mp;
    int left = 0, maxLen = 0;
    
    for (int right = 0; right < s.length(); right++) {
        if (mp.find(s[right]) != mp.end()) {
            left = max(left, mp[s[right]] + 1);
        }
        mp[s[right]] = right;
        maxLen = max(maxLen, right - left + 1);
    }
    return maxLen;
}`} />
        </div>
      </Section>

      <Section title="Pattern Templates" icon={Target}>
        <div className="space-y-4">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">Template 1: Fixed Size</h4>
            <p className="text-sm text-gray-600 mb-2">Window size is constant</p>
          </div>
          <div className="bg-green-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">Template 2: Variable Size</h4>
            <p className="text-sm text-gray-600 mb-2">Window expands/contracts based on condition</p>
          </div>
        </div>
      </Section>

      <div className="bg-gradient-to-r from-rose-600 to-pink-600 text-white p-8 rounded-xl text-center">
        <h3 className="text-2xl font-bold mb-3">💡 Remember</h3>
        <p className="text-rose-100">
          Sliding Window = Two Pointers + Window concept. Perfect for contiguous subarray problems!
        </p>
      </div>
    </div>
  );
};

export default SlidingWindow;
