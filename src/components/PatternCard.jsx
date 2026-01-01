import { Link } from 'react-router-dom';

const PatternCard = ({ pattern, index }) => {
  const getDifficultyClass = (difficulty) => {
    switch (difficulty) {
      case 'Easy':
        return 'badge-easy';
      case 'Medium':
        return 'badge-medium';
      case 'Hard':
        return 'badge-hard';
      default:
        return 'badge-medium';
    }
  };

  return (
    <div
      className="group bg-dark-700 rounded-2xl border border-dark-500 p-6 card-hover animate-fadeIn"
      style={{ animationDelay: `${index * 50}ms` }}
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent-primary/20 to-accent-secondary/20 flex items-center justify-center text-3xl group-hover:scale-110 transition-transform">
          {pattern.icon}
        </div>
        <span className={`px-3 py-1 rounded-full text-xs font-medium ${getDifficultyClass(pattern.difficulty)}`}>
          {pattern.difficulty}
        </span>
      </div>

      {/* Content */}
      <div className="mb-4">
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-accent-primary transition-colors">
          {pattern.name}
        </h3>
        <p className="text-gray-400 text-sm line-clamp-2">
          {pattern.shortDescription}
        </p>
      </div>

      {/* Meta Info */}
      <div className="flex flex-wrap gap-2 mb-4">
        <span className="px-2 py-1 bg-dark-600 rounded-lg text-xs text-gray-300">
          {pattern.category}
        </span>
        <span className="px-2 py-1 bg-dark-600 rounded-lg text-xs text-gray-300">
          {pattern.problemCount} problems
        </span>
        <span className="px-2 py-1 bg-dark-600 rounded-lg text-xs text-gray-300">
          {pattern.timeComplexity}
        </span>
      </div>

      {/* Key Insights Preview */}
      <div className="mb-5">
        <p className="text-xs text-gray-500 mb-2">Key Insights:</p>
        <ul className="space-y-1">
          {pattern.keyInsights.slice(0, 2).map((insight, idx) => (
            <li key={idx} className="text-xs text-gray-400 flex items-start">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-primary mt-1.5 mr-2 flex-shrink-0" />
              <span className="line-clamp-1">{insight}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Action Button */}
      <Link
        to={`/patterns/${pattern.id}/overview`}
        className="block w-full py-3 px-4 bg-gradient-to-r from-accent-primary to-accent-secondary text-white text-center font-medium rounded-xl hover:shadow-lg hover:shadow-accent-primary/30 transition-all group-hover:scale-[1.02]"
      >
        <span className="flex items-center justify-center space-x-2">
          <span>Explore Pattern</span>
          <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </span>
      </Link>
    </div>
  );
};

export default PatternCard;
