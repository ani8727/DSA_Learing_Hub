// Sidebar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const categories = [
    { name: 'Array', slug: 'array' },
    { name: 'Linked List', slug: 'linked-list' },
    { name: 'Stack & Queue', slug: 'stack-queue' },
    { name: 'Tree', slug: 'tree' },
    { name: 'Graph', slug: 'graph' },
    { name: 'Dynamic Programming', slug: 'dynamic-programming' }
  ];

  return (
    <aside className="px-2 py-6">
      <h3 className="text-xs font-semibold uppercase text-muted mb-3">Categories</h3>
      <ul className="space-y-2">
        {categories.map(cat => (
          <li key={cat.slug}>
            <Link
              to={`/patterns?category=${cat.slug}`}
              className="block px-3 py-2 rounded-md text-sm hover:bg-brand/10 hover:text-brand"
            >
              {cat.name}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;