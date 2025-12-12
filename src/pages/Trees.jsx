import React from 'react';
import { TreePine, Target, Code } from 'lucide-react';
import Section from '../components/Section';
import CodeBlock from '../components/CodeBlock';

const Trees = () => {
  return (
    <div className="space-y-6">
      <div className="card-modern rounded-xl p-8">
        <h1 className="text-4xl font-bold gradient-text mb-3">Tree Data Structures 🌲</h1>
        <p className="text-gray-700 dark:text-gray-300 text-lg">Master tree traversals and common patterns</p>
      </div>

      <Section title="Tree Fundamentals" icon={TreePine} defaultOpen>
        <div className="space-y-4">
          <CodeBlock code={`// Tree Node Structure
struct TreeNode {
    int val;
    TreeNode* left;
    TreeNode* right;
    TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
};`} />

          <div className="grid md:grid-cols-3 gap-4 mt-4">
            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <h4 className="font-semibold text-green-900 mb-2">Inorder (LNR)</h4>
              <p className="text-sm text-gray-700">Left → Node → Right</p>
              <p className="text-xs text-gray-600 mt-2">Use: BST sorted order</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <h4 className="font-semibold text-blue-900 mb-2">Preorder (NLR)</h4>
              <p className="text-sm text-gray-700">Node → Left → Right</p>
              <p className="text-xs text-gray-600 mt-2">Use: Copy tree</p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
              <h4 className="font-semibold text-purple-900 mb-2">Postorder (LRN)</h4>
              <p className="text-sm text-gray-700">Left → Right → Node</p>
              <p className="text-xs text-gray-600 mt-2">Use: Delete tree</p>
            </div>
          </div>

          <CodeBlock code={`// Inorder Traversal (Recursive)
void inorder(TreeNode* root) {
    if (!root) return;
    inorder(root->left);
    cout << root->val << " ";
    inorder(root->right);
}

// Level Order Traversal (BFS)
vector<vector<int>> levelOrder(TreeNode* root) {
    vector<vector<int>> result;
    if (!root) return result;
    
    queue<TreeNode*> q;
    q.push(root);
    
    while (!q.empty()) {
        int size = q.size();
        vector<int> level;
        
        for (int i = 0; i < size; i++) {
            TreeNode* node = q.front();
            q.pop();
            level.push_back(node->val);
            
            if (node->left) q.push(node->left);
            if (node->right) q.push(node->right);
        }
        result.push_back(level);
    }
    return result;
}

// Maximum Depth
int maxDepth(TreeNode* root) {
    if (!root) return 0;
    return 1 + max(maxDepth(root->left), maxDepth(root->right));
}`} />
        </div>
      </Section>

      <Section title="Common Tree Patterns" icon={Target}>
        <div className="space-y-4">
          <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-600">
            <h4 className="font-semibold text-green-900 mb-2">🎯 Key Patterns:</h4>
            <ul className="text-gray-700 space-y-2">
              <li>• DFS (Recursion) for depth problems</li>
              <li>• BFS (Queue) for level problems</li>
              <li>• Path Sum with backtracking</li>
              <li>• Serialize/Deserialize</li>
              <li>• LCA (Lowest Common Ancestor)</li>
            </ul>
          </div>

          <div className="border-l-4 border-blue-500 pl-6">
            <h3 className="text-xl font-semibold mb-2">Path Sum Problem</h3>
            <CodeBlock code={`bool hasPathSum(TreeNode* root, int targetSum) {
    if (!root) return false;
    if (!root->left && !root->right) {
        return root->val == targetSum;
    }
    return hasPathSum(root->left, targetSum - root->val) ||
           hasPathSum(root->right, targetSum - root->val);
}`} />
          </div>
        </div>
      </Section>

      <Section title="Must-Solve Problems" icon={Code}>
        <div className="space-y-4">
          <div className="bg-yellow-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">📝 Essential Problems:</h4>
            <ul className="text-gray-700 space-y-1">
              <li>• Maximum Depth (LC 104)</li>
              <li>• Invert Binary Tree (LC 226)</li>
              <li>• Level Order Traversal (LC 102)</li>
              <li>• Validate BST (LC 98)</li>
              <li>• Lowest Common Ancestor (LC 236)</li>
            </ul>
          </div>
        </div>
      </Section>

      <div className="bg-gradient-to-r from-green-600 to-teal-600 text-white p-8 rounded-xl text-center">
        <h3 className="text-2xl font-bold mb-3">🌲 Remember</h3>
        <p className="text-green-100">
          DFS for depth, BFS for level. Most tree problems are recursive!
        </p>
      </div>
    </div>
  );
};

export default Trees;