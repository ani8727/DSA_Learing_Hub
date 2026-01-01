import { Link } from 'react-router-dom';
import { patternsData } from '../data/patternsData';

const LearningPath = () => {
  const foundationPatterns = patternsData.filter(p => ['two-pointers', 'sliding-window', 'fast-slow'].includes(p.id));
  const intermediatePatterns = patternsData.filter(p => ['merge-intervals', 'cyclic-sort', 'bfs', 'dfs'].includes(p.id));
  const advancedPatterns = patternsData.filter(p => ['union-find', 'graph'].includes(p.id));

  const pathSections = [
    {
      level: 1,
      title: 'Foundation Patterns',
      description: 'Start here! These patterns form the building blocks for more complex algorithms.',
      color: 'from-green-500 to-emerald-600',
      badgeColor: 'bg-green-500/20 text-green-400',
      patterns: foundationPatterns
    },
    {
      level: 2,
      title: 'Intermediate Patterns',
      description: 'Build on the foundations with these commonly used algorithmic patterns.',
      color: 'from-yellow-500 to-orange-600',
      badgeColor: 'bg-yellow-500/20 text-yellow-400',
      patterns: intermediatePatterns
    },
    {
      level: 3,
      title: 'Advanced Patterns',
      description: 'Master these patterns for competitive programming and complex interviews.',
      color: 'from-red-500 to-pink-600',
      badgeColor: 'bg-red-500/20 text-red-400',
      patterns: advancedPatterns
    }
  ];

  return (
    <div className="space-y-12">
      {/* Page Header */}
      <div className="animate-fadeIn">
        <h1 className="text-4xl font-bold text-white mb-4">Learning Path</h1>
        <p className="text-gray-400 max-w-2xl">
          Follow this structured path to master DSA patterns progressively. Each level builds upon the previous, ensuring solid understanding.
        </p>
      </div>

      {/* Path Overview */}
      <div className="bg-dark-700 rounded-2xl border border-dark-500 p-6 md:p-8 animate-fadeIn">
        <h2 className="text-2xl font-bold text-white mb-6">How to Use This Path</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="flex items-start space-x-4">
            <div className="w-10 h-10 rounded-full bg-accent-primary/20 text-accent-primary flex items-center justify-center flex-shrink-0 font-bold">1</div>
            <div>
              <h3 className="text-white font-medium mb-1">Study the Theory</h3>
              <p className="text-gray-400 text-sm">Understand when and why each pattern is used</p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <div className="w-10 h-10 rounded-full bg-accent-primary/20 text-accent-primary flex items-center justify-center flex-shrink-0 font-bold">2</div>
            <div>
              <h3 className="text-white font-medium mb-1">Practice Problems</h3>
              <p className="text-gray-400 text-sm">Solve curated problems for each pattern</p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <div className="w-10 h-10 rounded-full bg-accent-primary/20 text-accent-primary flex items-center justify-center flex-shrink-0 font-bold">3</div>
            <div>
              <h3 className="text-white font-medium mb-1">Review & Repeat</h3>
              <p className="text-gray-400 text-sm">Revisit and strengthen your understanding</p>
            </div>
          </div>
        </div>
      </div>

      {/* Learning Path Sections */}
      <div className="space-y-8">
        {pathSections.map((section, sectionIndex) => (
          <div key={section.level} className="animate-fadeIn" style={{ animationDelay: `${sectionIndex * 100}ms` }}>
            {/* Section Header */}
            <div className="flex items-center space-x-4 mb-6">
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${section.color} flex items-center justify-center text-white font-bold text-xl`}>
                {section.level}
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white">{section.title}</h2>
                <p className="text-gray-400">{section.description}</p>
              </div>
            </div>

            {/* Pattern Cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {section.patterns.map((pattern, index) => (
                <Link
                  key={pattern.id}
                  to={`/patterns/${pattern.id}/overview`}
                  className="group bg-dark-700 rounded-xl border border-dark-500 p-5 hover:border-accent-primary/50 transition-all card-hover"
                >
                  <div className="flex items-start justify-between mb-3">
                    <span className="text-3xl">{pattern.icon}</span>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${section.badgeColor}`}>
                      Level {section.level}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-accent-primary transition-colors">
                    {pattern.name}
                  </h3>
                  <p className="text-gray-400 text-sm line-clamp-2 mb-3">
                    {pattern.shortDescription}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">{pattern.problemCount} problems</span>
                    <span className="text-accent-primary text-sm group-hover:translate-x-1 transition-transform inline-flex items-center">
                      Start →
                    </span>
                  </div>
                </Link>
              ))}
            </div>

            {/* Connector Line */}
            {sectionIndex < pathSections.length - 1 && (
              <div className="flex justify-center my-8">
                <div className="w-0.5 h-12 bg-gradient-to-b from-dark-500 to-accent-primary/50"></div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Completion Section */}
      <div className="bg-gradient-to-br from-dark-700 to-dark-800 rounded-2xl border border-dark-500 p-8 text-center">
        <div className="text-5xl mb-4">🏆</div>
        <h2 className="text-2xl font-bold text-white mb-3">Complete the Path</h2>
        <p className="text-gray-400 max-w-lg mx-auto mb-6">
          After mastering all patterns, you'll be equipped to tackle most coding interview problems with confidence.
        </p>
        <Link
          to="/patterns"
          className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-accent-primary to-accent-secondary text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-accent-primary/30 transition-all"
        >
          <span>Start Your Journey</span>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default LearningPath;
