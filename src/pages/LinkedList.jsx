import React from 'react';
import { BookOpen, Code, Target, Brain } from 'lucide-react';
import Section from '../components/Section';
import CodeBlock from '../components/CodeBlock';

const LinkedList = () => {
  return (
    <div className="space-y-6">
      <div className="glass-effect rounded-xl p-8">
        <h1 className="text-4xl font-bold gradient-text mb-3">LinkedList Mastery Guide 🔗</h1>
        <p className="text-gray-600 text-lg">Complete guide with patterns, problems, and interview tricks</p>
      </div>

      <Section title="LinkedList Definition" icon={BookOpen} defaultOpen>
        <div className="space-y-4">
          <p className="text-gray-700 leading-relaxed text-lg">
            A <strong>LinkedList</strong> is a linear data structure where elements (nodes) are connected via pointers.
          </p>
          
          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-lg">
            <h4 className="font-semibold text-blue-900 mb-3 text-lg">Basic Node Structure:</h4>
            <CodeBlock code={`struct Node {
    int data;
    Node* next;
    
    Node(int val) : data(val), next(nullptr) {}
};`} />
          </div>

          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div className="bg-green-50 p-6 rounded-xl border border-green-200">
              <h4 className="font-semibold text-green-900 mb-3 text-lg">✅ Advantages</h4>
              <ul className="text-gray-700 space-y-2">
                <li>• Dynamic size (no fixed capacity)</li>
                <li>• O(1) insertion/deletion at head</li>
                <li>• No memory waste</li>
                <li>• Easy insertion in middle</li>
              </ul>
            </div>
            <div className="bg-red-50 p-6 rounded-xl border border-red-200">
              <h4 className="font-semibold text-red-900 mb-3 text-lg">❌ Disadvantages</h4>
              <ul className="text-gray-700 space-y-2">
                <li>• No random access (O(n))</li>
                <li>• Extra memory for pointers</li>
                <li>• Not cache-friendly</li>
                <li>• Sequential traversal only</li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      <Section title="Types of LinkedList" icon={Target}>
        <div className="space-y-6">
          <div className="border-l-4 border-blue-500 pl-6">
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">1️⃣ Singly LinkedList</h3>
            <p className="text-gray-600 mb-3">Each node points to next node only</p>
            <CodeBlock code={`struct Node {
    int data;
    Node* next;
};

// Visualization: 1 -> 2 -> 3 -> 4 -> NULL`} />
          </div>

          <div className="border-l-4 border-green-500 pl-6">
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">2️⃣ Doubly LinkedList</h3>
            <p className="text-gray-600 mb-3">Each node has prev and next pointers</p>
            <CodeBlock code={`struct Node {
    int data;
    Node* next;
    Node* prev;
};

// Visualization: NULL <- 1 <-> 2 <-> 3 <-> 4 -> NULL`} />
          </div>

          <div className="border-l-4 border-purple-500 pl-6">
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">3️⃣ Circular LinkedList</h3>
            <p className="text-gray-600 mb-3">Last node points back to first node</p>
            <CodeBlock code={`struct Node {
    int data;
    Node* next;
};

// Visualization: 1 -> 2 -> 3 -> 4 -> (back to 1)`} />
          </div>
        </div>
      </Section>

      <Section title="Core Patterns" icon={Brain}>
        <div className="space-y-6">
          <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600">
            <h3 className="text-xl font-semibold mb-2">Pattern 1: Two Pointer (Slow-Fast)</h3>
            <p className="text-gray-700 mb-3">Use for: Middle element, cycle detection, kth from end</p>
            <CodeBlock code={`Node* slow = head;
Node* fast = head;

while (fast && fast->next) {
    slow = slow->next;        // 1 step
    fast = fast->next->next;  // 2 steps
}
// slow at middle when fast at end`} />
          </div>

          <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-600">
            <h3 className="text-xl font-semibold mb-2">Pattern 2: Reverse LinkedList</h3>
            <CodeBlock code={`Node* reverse(Node* head) {
    Node *prev = nullptr, *curr = head, *next = nullptr;
    while (curr) {
        next = curr->next;
        curr->next = prev;
        prev = curr;
        curr = next;
    }
    return prev;
}
// Time: O(n), Space: O(1)`} />
          </div>

          <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-600">
            <h3 className="text-xl font-semibold mb-2">Pattern 3: Cycle Detection</h3>
            <CodeBlock code={`bool hasCycle(Node* head) {
    Node *slow = head, *fast = head;
    while (fast && fast->next) {
        slow = slow->next;
        fast = fast->next->next;
        if (slow == fast) return true;
    }
    return false;
}
// Floyd's Algorithm`} />
          </div>
        </div>
      </Section>

      <Section title="Must-Solve Problems" icon={Code}>
        <div className="space-y-4">
          <div className="bg-yellow-50 p-4 rounded-lg">
            <h4 className="font-semibold text-yellow-900 mb-3">📝 Easy Problems:</h4>
            <ul className="text-gray-700 space-y-2">
              <li>• Reverse LinkedList (LC 206)</li>
              <li>• Middle of LinkedList (LC 876)</li>
              <li>• Merge Two Sorted Lists (LC 21)</li>
              <li>• Delete Node (LC 237)</li>
              <li>• Palindrome LinkedList (LC 234)</li>
            </ul>
          </div>
          
          <div className="bg-orange-50 p-4 rounded-lg">
            <h4 className="font-semibold text-orange-900 mb-3">📝 Medium Problems:</h4>
            <ul className="text-gray-700 space-y-2">
              <li>• Linked List Cycle II (LC 142)</li>
              <li>• Remove Nth Node From End (LC 19)</li>
              <li>• Reorder List (LC 143)</li>
              <li>• Add Two Numbers (LC 2)</li>
              <li>• Rotate List (LC 61)</li>
            </ul>
          </div>

          <div className="bg-red-50 p-4 rounded-lg">
            <h4 className="font-semibold text-red-900 mb-3">📝 Hard Problems:</h4>
            <ul className="text-gray-700 space-y-2">
              <li>• Reverse Nodes in k-Group (LC 25)</li>
              <li>• Merge K Sorted Lists (LC 23)</li>
              <li>• Copy List with Random Pointer (LC 138)</li>
            </ul>
          </div>
        </div>
      </Section>

      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-8 rounded-xl text-center">
        <h3 className="text-2xl font-bold mb-3">🎯 Master the Patterns!</h3>
        <p className="text-blue-100">
          Focus on 7 core patterns. 80% of LinkedList problems use these combinations!
        </p>
      </div>
    </div>
  );
};

export default LinkedList;