import React from 'react';
import { Type, Target, Code } from 'lucide-react';
import Section from '../components/Section';
import CodeBlock from '../components/CodeBlock';

const Strings = () => {
  return (
    <div className="space-y-6">
      <div className="card-modern rounded-xl p-8">
        <h1 className="text-4xl font-bold gradient-text mb-3">String Manipulation 📝</h1>
        <p className="text-gray-700 dark:text-gray-300 text-lg">Master string manipulation techniques</p>
      </div>

      <Section title="String Basics" icon={Type} defaultOpen>
        <div className="space-y-4">
          <p className="text-gray-700 text-lg">
            Master pattern matching, manipulation, and optimization techniques for strings.
          </p>

          <div className="bg-amber-50 p-6 rounded-lg border-l-4 border-amber-600">
            <h4 className="font-semibold text-amber-900 mb-3">🎯 Common Patterns:</h4>
            <ul className="text-gray-700 space-y-2">
              <li>• Two Pointer for palindromes</li>
              <li>• Sliding Window for substrings</li>
              <li>• HashMap for anagrams</li>
              <li>• KMP for pattern matching</li>
              <li>• Trie for prefix matching</li>
            </ul>
          </div>

          <CodeBlock code={`// Check if Palindrome
bool isPalindrome(string s) {
    int left = 0, right = s.length() - 1;
    while (left < right) {
        if (s[left] != s[right]) return false;
        left++;
        right--;
    }
    return true;
}

// Longest Substring Without Repeating
int lengthOfLongestSubstring(string s) {
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
}

// Valid Anagram
bool isAnagram(string s, string t) {
    if (s.length() != t.length()) return false;
    unordered_map<char, int> count;
    for (char c : s) count[c]++;
    for (char c : t) {
        if (--count[c] < 0) return false;
    }
    return true;
}`} />
        </div>
      </Section>

      <Section title="Common String Techniques" icon={Target}>
        <div className="space-y-4">
          <div className="border-l-4 border-blue-500 pl-6">
            <h3 className="text-xl font-semibold mb-2">1. Palindrome Techniques</h3>
            <p className="text-sm text-gray-600 mb-2">Two pointer, expand around center, DP</p>
          </div>
          <div className="border-l-4 border-green-500 pl-6">
            <h3 className="text-xl font-semibold mb-2">2. Substring Problems</h3>
            <p className="text-sm text-gray-600 mb-2">Sliding window with hashmap</p>
          </div>
          <div className="border-l-4 border-purple-500 pl-6">
            <h3 className="text-xl font-semibold mb-2">3. Anagram Problems</h3>
            <p className="text-sm text-gray-600 mb-2">Frequency counting with hashmap</p>
          </div>
        </div>
      </Section>

      <Section title="Must-Solve Problems" icon={Code}>
        <div className="space-y-4">
          <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
            <h4 className="font-semibold text-yellow-900 mb-3">📝 Practice List:</h4>
            <ul className="text-gray-700 space-y-2">
              <li>• Valid Palindrome (LC 125)</li>
              <li>• Longest Common Prefix (LC 14)</li>
              <li>• Group Anagrams (LC 49)</li>
              <li>• Longest Palindromic Substring (LC 5)</li>
              <li>• Minimum Window Substring (LC 76)</li>
              <li>• Valid Parentheses (LC 20)</li>
            </ul>
          </div>
        </div>
      </Section>

      <div className="bg-gradient-to-r from-amber-600 to-orange-600 text-white p-8 rounded-xl text-center">
        <h3 className="text-2xl font-bold mb-3">💡 Pro Tip</h3>
        <p className="text-amber-100">
          String problems often combine multiple patterns. Master Two Pointer + HashMap first!
        </p>
      </div>
    </div>
  );
};

export default Strings;