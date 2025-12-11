import React from 'react';
import { Move, Target, Code } from 'lucide-react';
import Section from '../components/Section';
import CodeBlock from '../components/CodeBlock';

const TwoPointer = () => {
  return (
    <div className="space-y-6">
      <div className="glass-effect rounded-xl p-8">
        <h1 className="text-4xl font-bold gradient-text mb-3">Two Pointer Pattern 👉👈</h1>
        <p className="text-gray-600 text-lg">Master efficient two pointer techniques</p>
      </div>

      <Section title="Core Concept" icon={Move} defaultOpen>
        <div className="space-y-4">
          <p className="text-gray-700 text-lg">
            Two pointer technique uses two pointers to iterate through data structures simultaneously.
          </p>

          <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600">
            <h4 className="font-semibold text-blue-900 mb-3">🎯 When to Use:</h4>
            <ul className="text-gray-700 space-y-2">
              <li>• Sorted array problems</li>
              <li>• Finding pairs with target sum</li>
              <li>• Removing duplicates</li>
              <li>• Palindrome checking</li>
              <li>• Partitioning arrays</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section title="Two Pointer Patterns" icon={Target}>
        <div className="space-y-6">
          <div className="border-l-4 border-blue-500 pl-6">
            <h3 className="text-xl font-semibold mb-2">Pattern 1: Opposite Ends</h3>
            <p className="text-gray-600 mb-3">Start from both ends, move towards center</p>
            <CodeBlock code={`// Two Sum II - Sorted Array
vector<int> twoSum(vector<int>& nums, int target) {
    int left = 0, right = nums.size() - 1;
    
    while (left < right) {
        int sum = nums[left] + nums[right];
        if (sum == target) {
            return {left + 1, right + 1};
        } else if (sum < target) {
            left++;
        } else {
            right--;
        }
    }
    return {};
}
// Time: O(n), Space: O(1)`} />
          </div>

          <div className="border-l-4 border-green-500 pl-6">
            <h3 className="text-xl font-semibold mb-2">Pattern 2: Fast & Slow</h3>
            <CodeBlock code={`// Remove Duplicates
int removeDuplicates(vector<int>& nums) {
    if (nums.empty()) return 0;
    
    int slow = 0;
    for (int fast = 1; fast < nums.size(); fast++) {
        if (nums[fast] != nums[slow]) {
            slow++;
            nums[slow] = nums[fast];
        }
    }
    return slow + 1;
}
// Time: O(n), Space: O(1)`} />
          </div>

          <div className="border-l-4 border-purple-500 pl-6">
            <h3 className="text-xl font-semibold mb-2">Pattern 3: Fixed Distance</h3>
            <CodeBlock code={`// Remove Nth from End
ListNode* removeNthFromEnd(ListNode* head, int n) {
    ListNode dummy(0);
    dummy.next = head;
    ListNode *first = &dummy, *second = &dummy;
    
    // Move first n+1 steps ahead
    for (int i = 0; i <= n; i++) {
        first = first->next;
    }
    
    // Move both
    while (first) {
        first = first->next;
        second = second->next;
    }
    
    second->next = second->next->next;
    return dummy.next;
}`} />
          </div>
        </div>
      </Section>

      <Section title="Practice Problems" icon={Code}>
        <CodeBlock code={`// Container With Most Water (LC 11)
int maxArea(vector<int>& height) {
    int left = 0, right = height.size() - 1;
    int maxWater = 0;
    
    while (left < right) {
        int h = min(height[left], height[right]);
        int w = right - left;
        maxWater = max(maxWater, h * w);
        
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }
    return maxWater;
}`} />
      </Section>

      <div className="bg-gradient-to-r from-pink-600 to-rose-600 text-white p-8 rounded-xl text-center">
        <h3 className="text-2xl font-bold mb-3">🎯 Pro Tip</h3>
        <p className="text-pink-100">
          Two pointer works best with sorted arrays. If unsorted, consider sorting first (if order doesn't matter)!
        </p>
      </div>
    </div>
  );
};

export default TwoPointer;

