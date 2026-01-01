import { useState } from 'react';

const Code = () => {
  const [activeTab, setActiveTab] = useState('javascript');

  const codeExamples = {
    javascript: { label: 'JavaScript', code: `// Detect Cycle in Linked List
function hasCycle(head) {
  let slow = head, fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) return true;
  }
  return false;
}

// Find Middle of Linked List
function middleNode(head) {
  let slow = head, fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
}

// Happy Number
function isHappy(n) {
  const getNext = (num) => {
    let sum = 0;
    while (num > 0) {
      const digit = num % 10;
      sum += digit * digit;
      num = Math.floor(num / 10);
    }
    return sum;
  };
  
  let slow = n, fast = getNext(n);
  while (fast !== 1 && slow !== fast) {
    slow = getNext(slow);
    fast = getNext(getNext(fast));
  }
  return fast === 1;
}` },
    java: { label: 'Java', code: `public boolean hasCycle(ListNode head) {
    ListNode slow = head, fast = head;
    while (fast != null && fast.next != null) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow == fast) return true;
    }
    return false;
}` },
    cpp: { label: 'C++', code: `bool hasCycle(ListNode *head) {
    ListNode *slow = head, *fast = head;
    while (fast && fast->next) {
        slow = slow->next;
        fast = fast->next->next;
        if (slow == fast) return true;
    }
    return false;
}` }
  };

  return (
    <div className="space-y-8">
      <div className="bg-dark-700 rounded-2xl border border-dark-500 p-6 md:p-8">
        <h2 className="text-2xl font-bold text-white mb-4">Code Examples</h2>
        <p className="text-gray-300">Complete implementations of the Fast & Slow Pointers pattern.</p>
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
