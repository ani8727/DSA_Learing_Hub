import { useState } from 'react';

const Code = () => {
  const [activeTab, setActiveTab] = useState('javascript');

  const codeExamples = {
    javascript: { label: 'JavaScript', code: `// Cyclic Sort - Sort array of [1,n]
function cyclicSort(nums) {
  let i = 0;
  while (i < nums.length) {
    const correctIndex = nums[i] - 1;
    if (nums[i] !== nums[correctIndex]) {
      [nums[i], nums[correctIndex]] = [nums[correctIndex], nums[i]];
    } else {
      i++;
    }
  }
  return nums;
}

// Find Missing Number [0,n]
function missingNumber(nums) {
  let i = 0;
  while (i < nums.length) {
    if (nums[i] < nums.length && nums[i] !== nums[nums[i]]) {
      [nums[i], nums[nums[i]]] = [nums[nums[i]], nums[i]];
    } else {
      i++;
    }
  }
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== i) return i;
  }
  return nums.length;
}

// First Missing Positive
function firstMissingPositive(nums) {
  let i = 0;
  while (i < nums.length) {
    const j = nums[i] - 1;
    if (nums[i] > 0 && nums[i] <= nums.length && nums[i] !== nums[j]) {
      [nums[i], nums[j]] = [nums[j], nums[i]];
    } else {
      i++;
    }
  }
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== i + 1) return i + 1;
  }
  return nums.length + 1;
}` },
    java: { label: 'Java', code: `public int missingNumber(int[] nums) {
    int i = 0;
    while (i < nums.length) {
        if (nums[i] < nums.length && nums[i] != nums[nums[i]]) {
            int temp = nums[nums[i]];
            nums[nums[i]] = nums[i];
            nums[i] = temp;
        } else {
            i++;
        }
    }
    for (i = 0; i < nums.length; i++) {
        if (nums[i] != i) return i;
    }
    return nums.length;
}` },
    python: { label: 'Python', code: `def missing_number(nums):
    i = 0
    while i < len(nums):
        j = nums[i]
        if j < len(nums) and nums[i] != nums[j]:
            nums[i], nums[j] = nums[j], nums[i]
        else:
            i += 1
    
    for i in range(len(nums)):
        if nums[i] != i:
            return i
    return len(nums)` }
  };

  return (
    <div className="space-y-8">
      <div className="bg-dark-700 rounded-2xl border border-dark-500 p-6 md:p-8">
        <h2 className="text-2xl font-bold text-white mb-4">Code Examples</h2>
        <p className="text-gray-300">Complete implementations of the Cyclic Sort pattern.</p>
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
