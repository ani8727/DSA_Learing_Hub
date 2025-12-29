import React from 'react';
import { Link } from 'react-router-dom';
import { Code2, Target, Brain, Zap, ArrowRight } from 'lucide-react';

const features = [
  { icon: Target, title: 'Pattern-First Learning', desc: 'Master core patterns that solve 80% of DSA problems' },
  { icon: Code2, title: 'C++ Templates', desc: 'Reusable code templates for each pattern' },
  { icon: Brain, title: 'Mental Models', desc: 'Build intuition, not just memorize solutions' },
  { icon: Zap, title: 'Scalable Structure', desc: 'Easy to add new patterns and problems' }
];

const Home = () => {
  return (
    <div className="space-y-12 font-sans bg-linear-to-br from-slate-50 to-slate-200 dark:from-slate-900 dark:to-slate-800 min-h-screen px-4">
      {/* Hero Section */}
      <section className="text-center space-y-6 py-12 bg-white/70 dark:bg-slate-800/70 backdrop-blur rounded-2xl shadow-md mx-auto max-w-4xl mt-8">
        <h1 className="text-5xl md:text-6xl font-extrabold text-blue-700 dark:text-blue-400 leading-tight mb-6">
          DSA Learning Hub
        </h1>
        <p className="text-xl text-gray-700 dark:text-gray-200 max-w-2xl mx-auto mb-8">
          A pattern-based Data Structures & Algorithms learning platform focused on building problem-solving intuition.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link to="/patterns" className="px-8 py-4 bg-linear-to-r from-blue-600 to-blue-700 text-white rounded-lg font-semibold hover:shadow transition-all flex items-center gap-2 hover:-translate-y-1">
            Explore Patterns
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Features */}
      <section className="bg-white/70 dark:bg-slate-900/70 rounded-2xl p-8 shadow-sm mx-auto max-w-5xl">
        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
              return (
              <div key={idx} className="bg-slate-50/80 dark:bg-slate-800/70 p-6 rounded-xl shadow-sm transition-transform duration-200 hover:-translate-y-1 flex flex-col gap-3">
                <div className="bg-blue-100 dark:bg-blue-900 rounded-xl p-3 w-fit mb-2 border border-blue-200 dark:border-blue-800">
                  <Icon className="w-6 h-6 text-blue-600 dark:text-blue-300" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">{feature.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center py-8 bg-linear-to-r from-blue-50 to-blue-100 dark:from-blue-900 dark:to-blue-800 rounded-2xl border border-blue-200 dark:border-blue-800 mx-auto max-w-3xl">
        <h2 className="text-2xl font-bold text-blue-700 dark:text-blue-300 mb-2">Start Learning Patterns</h2>
        <p className="text-gray-700 dark:text-gray-200 mb-4">Pick a pattern, learn the mental model, solve problems.</p>
        <Link to="/patterns" className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all">
          View All Patterns <ArrowRight className="inline w-4 h-4 ml-1" />
        </Link>
      </section>

      {/* Footer */}
      <footer className="text-center text-gray-500 dark:text-gray-400 py-6 text-sm">
        DSA Learning Hub<br />
        © 2025 by Aniket Gupta
      </footer>
    </div>
  );
};

export default Home;