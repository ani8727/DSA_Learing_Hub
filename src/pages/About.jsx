import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="space-y-12 max-w-4xl mx-auto">
      {/* Page Header */}
      <div className="animate-fadeIn text-center">
        <h1 className="text-4xl font-bold text-white mb-4">About DSA Pattern Hub</h1>
        <p className="text-gray-400 text-lg">
          A comprehensive learning platform for mastering Data Structures and Algorithms through proven patterns.
        </p>
      </div>

      {/* Mission Section */}
      <div className="bg-dark-700 rounded-2xl border border-dark-500 p-8 animate-fadeIn">
        <div className="flex items-center space-x-4 mb-6">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-primary/20 to-accent-secondary/20 flex items-center justify-center">
            <span className="text-2xl">🎯</span>
          </div>
          <h2 className="text-2xl font-bold text-white">Our Mission</h2>
        </div>
        <p className="text-gray-300 leading-relaxed">
          We believe that learning Data Structures and Algorithms shouldn't be about memorizing hundreds of solutions. 
          Instead, by understanding the underlying patterns, you can develop intuition that helps you solve new problems 
          you've never seen before. Our platform is designed to teach you these patterns systematically, 
          building your problem-solving skills from the ground up.
        </p>
      </div>

      {/* What You'll Learn */}
      <div className="bg-dark-700 rounded-2xl border border-dark-500 p-8 animate-fadeIn">
        <div className="flex items-center space-x-4 mb-6">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500/20 to-green-600/20 flex items-center justify-center">
            <span className="text-2xl">📚</span>
          </div>
          <h2 className="text-2xl font-bold text-white">What You'll Learn</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            'Two Pointers Technique',
            'Sliding Window Pattern',
            'Fast & Slow Pointers',
            'Merge Intervals',
            'Cyclic Sort',
            'Breadth-First Search (BFS)',
            'Depth-First Search (DFS)',
            'Union-Find Algorithm',
            'Graph Algorithms'
          ].map((topic, index) => (
            <div key={index} className="flex items-center space-x-3 p-3 bg-dark-600 rounded-lg">
              <span className="w-2 h-2 rounded-full bg-accent-primary"></span>
              <span className="text-gray-300">{topic}</span>
            </div>
          ))}
        </div>
      </div>

      {/* How It Works */}
      <div className="bg-dark-700 rounded-2xl border border-dark-500 p-8 animate-fadeIn">
        <div className="flex items-center space-x-4 mb-6">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-blue-600/20 flex items-center justify-center">
            <span className="text-2xl">⚙️</span>
          </div>
          <h2 className="text-2xl font-bold text-white">How It Works</h2>
        </div>
        <div className="space-y-6">
          <div className="flex items-start space-x-4">
            <div className="w-10 h-10 rounded-full bg-accent-primary/20 text-accent-primary flex items-center justify-center font-bold flex-shrink-0">1</div>
            <div>
              <h3 className="text-white font-semibold mb-1">Learn the Pattern</h3>
              <p className="text-gray-400">Read through the theory and understand when and why each pattern is used.</p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <div className="w-10 h-10 rounded-full bg-accent-primary/20 text-accent-primary flex items-center justify-center font-bold flex-shrink-0">2</div>
            <div>
              <h3 className="text-white font-semibold mb-1">Study Examples</h3>
              <p className="text-gray-400">Go through code examples in multiple languages to see the pattern in action.</p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <div className="w-10 h-10 rounded-full bg-accent-primary/20 text-accent-primary flex items-center justify-center font-bold flex-shrink-0">3</div>
            <div>
              <h3 className="text-white font-semibold mb-1">Practice Problems</h3>
              <p className="text-gray-400">Solve curated problems that apply the pattern you just learned.</p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <div className="w-10 h-10 rounded-full bg-accent-primary/20 text-accent-primary flex items-center justify-center font-bold flex-shrink-0">4</div>
            <div>
              <h3 className="text-white font-semibold mb-1">Test Your Understanding</h3>
              <p className="text-gray-400">Use interactive exercises to solidify your knowledge.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Tech Stack */}
      <div className="bg-dark-700 rounded-2xl border border-dark-500 p-8 animate-fadeIn">
        <div className="flex items-center space-x-4 mb-6">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-purple-600/20 flex items-center justify-center">
            <span className="text-2xl">💻</span>
          </div>
          <h2 className="text-2xl font-bold text-white">Built With</h2>
        </div>
        <div className="flex flex-wrap gap-3">
          {['React', 'Vite', 'Tailwind CSS', 'React Router', 'JavaScript'].map((tech) => (
            <span key={tech} className="px-4 py-2 bg-dark-600 rounded-xl text-gray-300 font-medium">
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="text-center py-8">
        <h2 className="text-2xl font-bold text-white mb-4">Ready to Start Learning?</h2>
        <Link
          to="/patterns"
          className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-accent-primary to-accent-secondary text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-accent-primary/30 transition-all"
        >
          <span>Explore Patterns</span>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default About;
