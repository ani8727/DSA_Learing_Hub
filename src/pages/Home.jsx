import { Link } from 'react-router-dom';
import PatternCard from '../components/PatternCard';
import { patternsData } from '../data/patternsData';

const Home = () => {
  const featuredPatterns = patternsData.slice(0, 6);

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-dark-700 via-dark-800 to-dark-700 border border-dark-500 p-8 md:p-12">
        {/* Background Decoration */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-secondary/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

        <div className="relative z-10">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div className="max-w-2xl">
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-accent-primary/20 rounded-full text-accent-primary text-sm font-medium mb-6">
                <span>🚀</span>
                <span>Pattern-Based Learning</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Master DSA Through{' '}
                <span className="gradient-text">Patterns</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
                Stop memorizing solutions. Learn the underlying patterns that solve hundreds of coding problems. 
                Build intuition and confidence for technical interviews.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/patterns"
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-accent-primary to-blue-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-accent-primary/30 transition-all group"
                >
                  <span>Start Learning</span>
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
                <Link
                  to="/learning-path"
                  className="inline-flex items-center justify-center px-8 py-4 bg-dark-600 border border-dark-500 text-white font-semibold rounded-xl hover:bg-dark-500 transition-all"
                >
                  <span>View Learning Path</span>
                </Link>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 lg:gap-6">
              <div className="bg-dark-800/80 backdrop-blur rounded-2xl p-6 border border-dark-500 text-center">
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">9+</div>
                <div className="text-gray-400 text-sm">Core Patterns</div>
              </div>
              <div className="bg-dark-800/80 backdrop-blur rounded-2xl p-6 border border-dark-500 text-center">
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">100+</div>
                <div className="text-gray-400 text-sm">Practice Problems</div>
              </div>
              <div className="bg-dark-800/80 backdrop-blur rounded-2xl p-6 border border-dark-500 text-center">
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">3</div>
                <div className="text-gray-400 text-sm">Languages</div>
              </div>
              <div className="bg-dark-800/80 backdrop-blur rounded-2xl p-6 border border-dark-500 text-center">
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">∞</div>
                <div className="text-gray-400 text-sm">Free Forever</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Patterns Section */}
      <section>
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-white mb-4">Why Learn Through Patterns?</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Patterns are reusable solutions to commonly occurring problems. Once you master them, you can solve new problems by recognizing which pattern applies.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-dark-700 rounded-2xl p-6 border border-dark-500 card-hover">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500/20 to-green-600/20 flex items-center justify-center mb-4">
              <span className="text-2xl">🧠</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Build Intuition</h3>
            <p className="text-gray-400 text-sm">
              Stop guessing. Develop deep understanding of why certain approaches work for specific problem types.
            </p>
          </div>

          <div className="bg-dark-700 rounded-2xl p-6 border border-dark-500 card-hover">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-blue-600/20 flex items-center justify-center mb-4">
              <span className="text-2xl">⚡</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Solve Faster</h3>
            <p className="text-gray-400 text-sm">
              Recognize patterns instantly and apply proven solutions. Reduce problem-solving time dramatically.
            </p>
          </div>

          <div className="bg-dark-700 rounded-2xl p-6 border border-dark-500 card-hover">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-purple-600/20 flex items-center justify-center mb-4">
              <span className="text-2xl">🎯</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Ace Interviews</h3>
            <p className="text-gray-400 text-sm">
              Pattern knowledge is what separates successful interview candidates from the rest. Be prepared.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Patterns Section */}
      <section>
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-white mb-2">Featured Patterns</h2>
            <p className="text-gray-400">Start with these essential algorithmic patterns</p>
          </div>
          <Link
            to="/patterns"
            className="hidden sm:inline-flex items-center space-x-2 text-accent-primary hover:text-accent-secondary transition-colors"
          >
            <span>View All</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredPatterns.map((pattern, index) => (
            <PatternCard key={pattern.id} pattern={pattern} index={index} />
          ))}
        </div>

        <div className="mt-8 text-center sm:hidden">
          <Link
            to="/patterns"
            className="inline-flex items-center space-x-2 px-6 py-3 bg-dark-600 rounded-xl text-white hover:bg-dark-500 transition-colors"
          >
            <span>View All Patterns</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>

      {/* Learning Path Preview */}
      <section className="bg-dark-700 rounded-3xl border border-dark-500 p-8 md:p-12">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          <div className="max-w-xl">
            <h2 className="text-3xl font-bold text-white mb-4">
              Structured Learning Path
            </h2>
            <p className="text-gray-400 mb-6">
              Follow our recommended progression from basic to advanced patterns. Each pattern builds upon the previous, ensuring solid foundational understanding.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 rounded-full bg-accent-success/20 text-accent-success flex items-center justify-center font-bold">1</div>
                <div>
                  <p className="text-white font-medium">Foundation Patterns</p>
                  <p className="text-gray-400 text-sm">Two Pointers, Sliding Window, Fast & Slow</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 rounded-full bg-accent-warning/20 text-accent-warning flex items-center justify-center font-bold">2</div>
                <div>
                  <p className="text-white font-medium">Intermediate Patterns</p>
                  <p className="text-gray-400 text-sm">Merge Intervals, Cyclic Sort, BFS & DFS</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 rounded-full bg-red-500/20 text-red-500 flex items-center justify-center font-bold">3</div>
                <div>
                  <p className="text-white font-medium">Advanced Patterns</p>
                  <p className="text-gray-400 text-sm">Union-Find, Graph Algorithms, Dynamic Programming</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center lg:items-end">
            <div className="bg-dark-800 rounded-2xl p-6 border border-dark-500 text-center mb-4">
              <div className="text-5xl font-bold gradient-text mb-2">9</div>
              <div className="text-gray-400">Patterns to Master</div>
            </div>
            <Link
              to="/learning-path"
              className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-accent-primary to-accent-secondary text-white font-medium rounded-xl hover:shadow-lg hover:shadow-accent-primary/30 transition-all"
            >
              <span>View Full Path</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center py-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Ready to Master DSA?
        </h2>
        <p className="text-gray-400 max-w-xl mx-auto mb-8">
          Join thousands of developers who have leveled up their problem-solving skills through pattern-based learning.
        </p>
        <Link
          to="/patterns"
          className="inline-flex items-center justify-center px-10 py-4 bg-gradient-to-r from-accent-primary to-accent-secondary text-white text-lg font-semibold rounded-xl hover:shadow-lg hover:shadow-accent-primary/30 transition-all"
        >
          Get Started Now
        </Link>
      </section>
    </div>
  );
};

export default Home;
