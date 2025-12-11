import React from 'react';
import { Link } from 'react-router-dom';
import { Code2, Target, Brain, Zap, ArrowRight, BookOpen, Trophy, CheckCircle } from 'lucide-react';

const Home = () => {
  const topics = [
    { name: 'LinkedList', path: '/linkedlist', problems: 25, icon: '🔗' },
    { name: 'Arrays', path: '/arrays', problems: 30, icon: '📊' },
    { name: 'Two Pointer', path: '/two-pointer', problems: 20, icon: '👉' },
    { name: 'Sliding Window', path: '/sliding-window', problems: 18, icon: '🪟' },
    { name: 'Sorting', path: '/sorting', problems: 15, icon: '🔄' },
    { name: 'Strings', path: '/strings', problems: 22, icon: '📝' },
    { name: 'Trees', path: '/trees', problems: 28, icon: '🌲' },
    { name: 'Dynamic Programming', path: '/dynamic-programming', problems: 35, icon: '✨' }
  ];

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="text-center space-y-6 py-12">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
          <Trophy className="w-4 h-4" />
          Master DSA & Crack Any Interview
        </div>
        
        <h1 className="text-5xl md:text-6xl font-bold gradient-text leading-tight">
          Learn Data Structures<br />& Algorithm Patterns
        </h1>
        
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Complete pattern-based approach to mastering DSA. From fundamentals to advanced problems with real interview tricks.
        </p>
        
        <div className="flex flex-wrap gap-4 justify-center pt-4">
          <Link to="/linkedlist" className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-semibold hover:shadow-xl transition-all flex items-center gap-2 hover:-translate-y-1">
            Start Learning
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Stats */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {[
          { label: 'Topics', value: '8+' },
          { label: 'Patterns', value: '20+' },
          { label: 'Problems', value: '100+' },
          { label: 'Solutions', value: '100%' }
        ].map((stat, idx) => (
          <div key={idx} className="glass-effect p-6 rounded-xl text-center hover-lift">
            <div className="text-4xl font-bold gradient-text">{stat.value}</div>
            <div className="text-gray-600 mt-2">{stat.label}</div>
          </div>
        ))}
      </section>

      {/* Features */}
      <section className="grid md:grid-cols-2 gap-6">
        {[
          { icon: Target, title: 'Pattern-Based Learning', desc: 'Master 20+ core patterns that solve 80% of problems' },
          { icon: Code2, title: 'Complete Solutions', desc: 'Full C++ implementations with explanations' },
          { icon: Brain, title: 'Interview Tricks', desc: 'Memory aids from FAANG engineers' },
          { icon: Zap, title: '100+ Problems', desc: 'Curated from Easy to Hard with solutions' }
        ].map((feature, idx) => {
          const Icon = feature.icon;
          return (
            <div key={idx} className="glass-effect p-6 rounded-xl hover-lift">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Icon className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.desc}</p>
            </div>
          );
        })}
      </section>

      {/* Topics Grid */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-gray-800 text-center">Explore Topics</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {topics.map((topic, idx) => (
            <Link key={idx} to={topic.path} className="glass-effect p-6 rounded-xl hover-lift group">
              <div className="text-4xl mb-3">{topic.icon}</div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                {topic.name}
              </h3>
              <div className="flex items-center gap-2 text-gray-600 text-sm">
                <BookOpen className="w-4 h-4" />
                <span>{topic.problems} Problems</span>
              </div>
              <div className="mt-4 flex items-center text-blue-600 text-sm font-semibold">
                Start Learning
                <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Learning Path */}
      <section className="glass-effect p-8 rounded-xl">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Recommended Learning Path</h2>
        <div className="space-y-4">
          {[
            { step: 1, title: 'Master Fundamentals', topics: 'Arrays, LinkedList, Strings' },
            { step: 2, title: 'Learn Core Patterns', topics: 'Two Pointer, Sliding Window, Sorting' },
            { step: 3, title: 'Advanced Structures', topics: 'Trees, Graphs, Heaps' },
            { step: 4, title: 'Optimization', topics: 'Dynamic Programming, Greedy' }
          ].map((item) => (
            <div key={item.step} className="flex items-start gap-4 p-4 bg-white rounded-lg border border-gray-200">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                {item.step}
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.topics}</p>
              </div>
              <CheckCircle className="w-5 h-5 text-green-500 ml-auto flex-shrink-0" />
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-8 rounded-xl text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Master DSA?</h2>
        <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
          Join thousands who've cracked their dream job interviews!
        </p>
        <Link to="/linkedlist" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold hover:shadow-xl transition-all hover:-translate-y-1">
          Start Your Journey
          <ArrowRight className="w-5 h-5" />
        </Link>
      </section>
    </div>
  );
};

export default Home;