import { useState } from 'react';

const Code = () => {
  const [activeTab, setActiveTab] = useState('javascript');

  const codeExamples = {
    javascript: {
      label: 'JavaScript',
      code: `// Two Sum II - Sorted Array (Converging Pointers)
function twoSum(numbers, target) {
  let left = 0, right = numbers.length - 1;
  
  while (left < right) {
    const sum = numbers[left] + numbers[right];
    if (sum === target) {
      return [left + 1, right + 1]; // 1-indexed
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }
  return [-1, -1];
}

// Remove Duplicates (Same Direction)
function removeDuplicates(nums) {
  if (nums.length === 0) return 0;
  
  let slow = 0;
  for (let fast = 1; fast < nums.length; fast++) {
    if (nums[fast] !== nums[slow]) {
      slow++;
      nums[slow] = nums[fast];
    }
  }
  return slow + 1;
}

// Three Sum
function threeSum(nums) {
  nums.sort((a, b) => a - b);
  const result = [];
  
  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    
    let left = i + 1, right = nums.length - 1;
    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];
      if (sum === 0) {
        result.push([nums[i], nums[left], nums[right]]);
        while (left < right && nums[left] === nums[left + 1]) left++;
        while (left < right && nums[right] === nums[right - 1]) right--;
        left++; right--;
      } else if (sum < 0) {
        left++;
      } else {
        right--;
      }
    }
  }
  return result;
}`
    },
    java: { label: 'Java', code: `// Two Sum II - Sorted Array
public int[] twoSum(int[] numbers, int target) {
    int left = 0, right = numbers.length - 1;
    while (left < right) {
        int sum = numbers[left] + numbers[right];
        if (sum == target) return new int[]{left + 1, right + 1};
        else if (sum < target) left++;
        else right--;
    }
    return new int[]{-1, -1};
}` },
    cpp: { label: 'C++', code: `// Two Sum II - Sorted Array
vector<int> twoSum(vector<int>& numbers, int target) {
    int left = 0, right = numbers.size() - 1;
    while (left < right) {
        int sum = numbers[left] + numbers[right];
        if (sum == target) return {left + 1, right + 1};
        else if (sum < target) left++;
        else right--;
    }
    return {-1, -1};
}` }
  };

  return (
    <div className="space-y-8">
      <div className="bg-dark-700 rounded-2xl border border-dark-500 p-6 md:p-8">
        <h2 className="text-2xl font-bold text-white mb-4">Code Examples</h2>
        <p className="text-gray-300">Complete implementations of the Two Pointers pattern.</p>
      </div>

      <div className="bg-dark-700 rounded-2xl border border-dark-500 overflow-hidden">
        <div className="flex border-b border-dark-500">
          {Object.entries(codeExamples).map(([key, { label }]) => (
            <button key={key} onClick={() => setActiveTab(key)} className={`px-6 py-4 font-medium transition-colors ${activeTab === key ? 'bg-dark-600 text-white border-b-2 border-accent-primary' : 'text-gray-400 hover:text-white'}`}>{label}</button>
          ))}
        </div>
        <div className="p-6">
          <pre className="bg-dark-800 rounded-xl p-6 overflow-x-auto">
            <code className="text-gray-300 text-sm font-mono whitespace-pre">{codeExamples[activeTab].code}</code>
          </pre>
        </div>
      </div>
    </div>
  );
};

export default Code;
