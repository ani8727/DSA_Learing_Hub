import { useState } from 'react';

const Code = () => {
  const [activeTab, setActiveTab] = useState('javascript');

  const codeExamples = {
    javascript: {
      label: 'JavaScript',
      code: `// Maximum Sum Subarray of Size K - Fixed Window
function maxSumSubarray(arr, k) {
  if (arr.length < k) return 0;
  
  let maxSum = 0;
  let windowSum = 0;
  let windowStart = 0;
  
  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    // Add the next element to the window
    windowSum += arr[windowEnd];
    
    // Slide the window when we hit size k
    if (windowEnd >= k - 1) {
      maxSum = Math.max(maxSum, windowSum);
      // Subtract the element going out
      windowSum -= arr[windowStart];
      // Slide the window ahead
      windowStart++;
    }
  }
  
  return maxSum;
}

// Smallest Subarray with Sum >= S - Dynamic Window
function smallestSubarrayWithSum(arr, S) {
  let minLength = Infinity;
  let windowSum = 0;
  let windowStart = 0;
  
  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    windowSum += arr[windowEnd];
    
    // Shrink window as small as possible
    while (windowSum >= S) {
      minLength = Math.min(minLength, windowEnd - windowStart + 1);
      windowSum -= arr[windowStart];
      windowStart++;
    }
  }
  
  return minLength === Infinity ? 0 : minLength;
}

// Longest Substring with K Distinct Characters
function longestSubstringKDistinct(str, k) {
  if (str.length === 0 || k === 0) return 0;
  
  let maxLength = 0;
  let windowStart = 0;
  const charFrequency = {};
  
  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    const rightChar = str[windowEnd];
    charFrequency[rightChar] = (charFrequency[rightChar] || 0) + 1;
    
    // Shrink window until we have k distinct characters
    while (Object.keys(charFrequency).length > k) {
      const leftChar = str[windowStart];
      charFrequency[leftChar]--;
      if (charFrequency[leftChar] === 0) {
        delete charFrequency[leftChar];
      }
      windowStart++;
    }
    
    maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
  }
  
  return maxLength;
}`
    },
    java: {
      label: 'Java',
      code: `import java.util.HashMap;
import java.util.Map;

public class SlidingWindow {
    
    // Maximum Sum Subarray of Size K - Fixed Window
    public static int maxSumSubarray(int[] arr, int k) {
        if (arr.length < k) return 0;
        
        int maxSum = 0;
        int windowSum = 0;
        int windowStart = 0;
        
        for (int windowEnd = 0; windowEnd < arr.length; windowEnd++) {
            windowSum += arr[windowEnd];
            
            if (windowEnd >= k - 1) {
                maxSum = Math.max(maxSum, windowSum);
                windowSum -= arr[windowStart];
                windowStart++;
            }
        }
        
        return maxSum;
    }
    
    // Smallest Subarray with Sum >= S - Dynamic Window
    public static int smallestSubarrayWithSum(int[] arr, int S) {
        int minLength = Integer.MAX_VALUE;
        int windowSum = 0;
        int windowStart = 0;
        
        for (int windowEnd = 0; windowEnd < arr.length; windowEnd++) {
            windowSum += arr[windowEnd];
            
            while (windowSum >= S) {
                minLength = Math.min(minLength, windowEnd - windowStart + 1);
                windowSum -= arr[windowStart];
                windowStart++;
            }
        }
        
        return minLength == Integer.MAX_VALUE ? 0 : minLength;
    }
    
    // Longest Substring with K Distinct Characters
    public static int longestSubstringKDistinct(String str, int k) {
        if (str == null || str.length() == 0 || k == 0) return 0;
        
        int maxLength = 0;
        int windowStart = 0;
        Map<Character, Integer> charFrequency = new HashMap<>();
        
        for (int windowEnd = 0; windowEnd < str.length(); windowEnd++) {
            char rightChar = str.charAt(windowEnd);
            charFrequency.put(rightChar, 
                charFrequency.getOrDefault(rightChar, 0) + 1);
            
            while (charFrequency.size() > k) {
                char leftChar = str.charAt(windowStart);
                charFrequency.put(leftChar, charFrequency.get(leftChar) - 1);
                if (charFrequency.get(leftChar) == 0) {
                    charFrequency.remove(leftChar);
                }
                windowStart++;
            }
            
            maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
        }
        
        return maxLength;
    }
}`
    },
    cpp: {
      label: 'C++',
      code: `#include <vector>
#include <unordered_map>
#include <algorithm>
#include <string>
using namespace std;

class SlidingWindow {
public:
    // Maximum Sum Subarray of Size K - Fixed Window
    static int maxSumSubarray(vector<int>& arr, int k) {
        if (arr.size() < k) return 0;
        
        int maxSum = 0;
        int windowSum = 0;
        int windowStart = 0;
        
        for (int windowEnd = 0; windowEnd < arr.size(); windowEnd++) {
            windowSum += arr[windowEnd];
            
            if (windowEnd >= k - 1) {
                maxSum = max(maxSum, windowSum);
                windowSum -= arr[windowStart];
                windowStart++;
            }
        }
        
        return maxSum;
    }
    
    // Smallest Subarray with Sum >= S - Dynamic Window
    static int smallestSubarrayWithSum(vector<int>& arr, int S) {
        int minLength = INT_MAX;
        int windowSum = 0;
        int windowStart = 0;
        
        for (int windowEnd = 0; windowEnd < arr.size(); windowEnd++) {
            windowSum += arr[windowEnd];
            
            while (windowSum >= S) {
                minLength = min(minLength, windowEnd - windowStart + 1);
                windowSum -= arr[windowStart];
                windowStart++;
            }
        }
        
        return minLength == INT_MAX ? 0 : minLength;
    }
    
    // Longest Substring with K Distinct Characters
    static int longestSubstringKDistinct(string str, int k) {
        if (str.empty() || k == 0) return 0;
        
        int maxLength = 0;
        int windowStart = 0;
        unordered_map<char, int> charFrequency;
        
        for (int windowEnd = 0; windowEnd < str.length(); windowEnd++) {
            char rightChar = str[windowEnd];
            charFrequency[rightChar]++;
            
            while (charFrequency.size() > k) {
                char leftChar = str[windowStart];
                charFrequency[leftChar]--;
                if (charFrequency[leftChar] == 0) {
                    charFrequency.erase(leftChar);
                }
                windowStart++;
            }
            
            maxLength = max(maxLength, windowEnd - windowStart + 1);
        }
        
        return maxLength;
    }
};`
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-dark-700 rounded-2xl border border-dark-500 p-6 md:p-8">
        <h2 className="text-2xl font-bold text-white mb-4">Code Examples</h2>
        <p className="text-gray-300">
          Here are complete implementations of the Sliding Window pattern in multiple languages. 
          Each example includes detailed comments explaining the logic.
        </p>
      </div>

      {/* Code Tabs */}
      <div className="bg-dark-700 rounded-2xl border border-dark-500 overflow-hidden">
        {/* Language Tabs */}
        <div className="flex border-b border-dark-500">
          {Object.entries(codeExamples).map(([key, { label }]) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`px-6 py-4 font-medium transition-colors ${
                activeTab === key
                  ? 'bg-dark-600 text-white border-b-2 border-accent-primary'
                  : 'text-gray-400 hover:text-white hover:bg-dark-600'
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Code Block */}
        <div className="p-6 overflow-x-auto">
          <pre className="bg-dark-800 rounded-xl p-6 overflow-x-auto">
            <code className="text-gray-300 text-sm font-mono whitespace-pre">
              {codeExamples[activeTab].code}
            </code>
          </pre>
        </div>
      </div>

      {/* Template Section */}
      <div className="bg-dark-700 rounded-2xl border border-dark-500 p-6 md:p-8">
        <h2 className="text-2xl font-bold text-white mb-4">General Template</h2>
        <p className="text-gray-300 mb-4">
          Here's a general template you can use as a starting point for sliding window problems:
        </p>
        <pre className="bg-dark-800 rounded-xl p-6 overflow-x-auto">
          <code className="text-gray-300 text-sm font-mono whitespace-pre">{`function slidingWindow(input, condition) {
  let windowStart = 0;
  let result = initialValue;
  let windowState = {};  // or other data structure
  
  for (let windowEnd = 0; windowEnd < input.length; windowEnd++) {
    // 1. Expand: Add input[windowEnd] to window state
    updateWindowState(windowState, input[windowEnd]);
    
    // 2. Contract: Shrink window while condition violated
    while (conditionViolated(windowState)) {
      removeFromWindowState(windowState, input[windowStart]);
      windowStart++;
    }
    
    // 3. Update result based on current window
    result = updateResult(result, windowStart, windowEnd);
  }
  
  return result;
}`}</code>
        </pre>
      </div>

      {/* Key Points */}
      <div className="bg-gradient-to-br from-accent-primary/10 to-accent-secondary/10 rounded-2xl border border-accent-primary/20 p-6 md:p-8">
        <h2 className="text-2xl font-bold text-white mb-4">📝 Implementation Notes</h2>
        <ul className="space-y-3">
          <li className="flex items-start space-x-3">
            <span className="w-2 h-2 rounded-full bg-accent-primary mt-2 flex-shrink-0"></span>
            <span className="text-gray-300">Always initialize windowStart to 0, not 1</span>
          </li>
          <li className="flex items-start space-x-3">
            <span className="w-2 h-2 rounded-full bg-accent-primary mt-2 flex-shrink-0"></span>
            <span className="text-gray-300">For fixed windows, check windowEnd {'>'}= k - 1 before processing</span>
          </li>
          <li className="flex items-start space-x-3">
            <span className="w-2 h-2 rounded-full bg-accent-primary mt-2 flex-shrink-0"></span>
            <span className="text-gray-300">Window size = windowEnd - windowStart + 1</span>
          </li>
          <li className="flex items-start space-x-3">
            <span className="w-2 h-2 rounded-full bg-accent-primary mt-2 flex-shrink-0"></span>
            <span className="text-gray-300">Use HashMap for character/element frequency tracking</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Code;
