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
    <div className="space-y-12 font-body">
      {/* Hero Section - Glass primary container with surface-high content */}
      <section className="text-center space-y-6 py-12 glass-primary rounded-2xl border border-medium shadow-lg">
        <div className="surface-high mx-auto max-w-6xl p-8 rounded-xl border border-subtle">
          {/* Badge - Accent background */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent text-primary rounded-full text-sm font-caption shadow-md border border-medium mb-6">
            <Trophy className="w-4 h-4" />
            Master DSA & Crack Any Interview
          </div>
          
          <h1 className="text-5xl md:text-6xl font-display text-primary leading-tight mb-6">
            Learn Data Structures<br />& Algorithm Patterns
          </h1>
          
          <p className="text-xl text-secondary max-w-2xl mx-auto font-body mb-8">
            Complete pattern-based approach to mastering DSA. From fundamentals to advanced problems with real interview tricks.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/linkedlist" className="px-8 py-4 gradient-accent text-white rounded-xl font-heading hover:shadow-xl transition-all flex items-center gap-2 hover:-translate-y-1 border border-strong">
              Start Learning
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Stats - Secondary background container with card hierarchy */}
      <section className="bg-secondary rounded-2xl p-6 border border-light">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { label: 'Topics', value: '8+' },
            { label: 'Patterns', value: '20+' },
            { label: 'Problems', value: '100+' },
            { label: 'Solutions', value: '100%' }
          ].map((stat, idx) => (
            <div key={idx} className="card-primary p-6 rounded-xl text-center hover:card-secondary transition-all duration-300 hover:-translate-y-1 border border-subtle hover:border-medium">
              <div className="text-4xl font-display text-accent mb-2">{stat.value}</div>
              <div className="text-secondary font-caption">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features - Tertiary background container with card hierarchy */}
      <section className="bg-tertiary rounded-2xl p-6 border border-medium">
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { icon: Target, title: 'Pattern-Based Learning', desc: 'Master 20+ core patterns that solve 80% of problems' },
            { icon: Code2, title: 'Complete Solutions', desc: 'Full C++ implementations with explanations' },
            { icon: Brain, title: 'Interview Tricks', desc: 'Memory aids from FAANG engineers' },
            { icon: Zap, title: '100+ Problems', desc: 'Curated from Easy to Hard with solutions' }
          ].map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div key={idx} className="card-primary p-6 rounded-xl hover:surface-highest transition-all duration-300 hover:-translate-y-1 border border-light hover:border-medium hover:shadow-lg">
                <div className="surface-mid rounded-xl p-3 w-fit mb-4 border border-subtle">
                  <Icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-heading text-primary mb-2">{feature.title}</h3>
                <p className="text-secondary font-body">{feature.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Topics Grid - Accent background with card hierarchy */}
      <section className="bg-accent rounded-2xl p-6 border border-strong">
        <div className="space-y-6">
          <h2 className="text-3xl font-display text-primary text-center">Explore Topics</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {topics.map((topic, idx) => (
              <Link key={idx} to={topic.path} className="card-primary p-6 rounded-xl hover:surface-highest group transition-all duration-300 hover:-translate-y-1 border border-light hover:border-medium hover:shadow-lg">
                <div className="text-4xl mb-3">{topic.icon}</div>
                <h3 className="text-lg font-heading text-primary mb-2 group-hover:text-accent transition-colors">
                  {topic.name}
                </h3>
                <div className="flex items-center gap-2 text-tertiary text-sm font-caption mb-4">
                  <BookOpen className="w-4 h-4" />
                  <span>{topic.problems} Problems</span>
                </div>
                <div className="flex items-center text-accent text-sm font-caption">
                  Start Learning
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Path - Glass effect with nested hierarchy */}
      <section className="glass-secondary p-8 rounded-2xl border border-medium">
        <div className="surface-high p-6 rounded-xl border border-light">
          <h2 className="text-2xl font-display text-primary mb-6 text-center">Recommended Learning Path</h2>
          <div className="space-y-4">
            {[
              { step: 1, title: 'Master Fundamentals', topics: 'Arrays, LinkedList, Strings' },
              { step: 2, title: 'Learn Core Patterns', topics: 'Two Pointer, Sliding Window, Sorting' },
              { step: 3, title: 'Advanced Structures', topics: 'Trees, Graphs, Heaps' },
              { step: 4, title: 'Optimization', topics: 'Dynamic Programming, Greedy' }
            ].map((item) => (
              <div key={item.step} className="flex items-start gap-4 p-4 surface-mid rounded-xl border border-subtle hover:surface-high transition-all duration-300">
                <div className="surface-highest w-8 h-8 gradient-accent text-white rounded-full flex items-center justify-center font-display flex-shrink-0 text-sm border border-strong">
                  {item.step}
                </div>
                <div className="flex-1">
                  <h3 className="font-heading text-primary mb-1">{item.title}</h3>
                  <p className="text-sm text-secondary font-body">{item.topics}</p>
                </div>
                <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA - Gradient accent with card hierarchy */}
      <section className="gradient-accent text-white p-8 rounded-2xl text-center border border-strong shadow-lg">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-display mb-4">Ready to Master DSA?</h2>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto font-body">
            Join thousands who've cracked their dream job interviews!
          </p>
          <Link to="/linkedlist" className="inline-flex items-center gap-2 px-8 py-4 surface-highest text-accent rounded-xl font-heading hover:shadow-xl transition-all hover:-translate-y-1 border border-light">
            Start Your Journey
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;