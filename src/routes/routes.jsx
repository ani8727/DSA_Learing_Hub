import { Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import PatternLayout from '../layouts/PatternLayout';
import Home from '../pages/Home';
import Patterns from '../pages/Patterns';
import LearningPath from '../pages/LearningPath';
import About from '../pages/About';

// Pattern Pages - Sliding Window
import SlidingWindowOverview from '../patterns/sliding-window/Overview';
import SlidingWindowTheory from '../patterns/sliding-window/Theory';
import SlidingWindowTypes from '../patterns/sliding-window/Types';
import SlidingWindowProblems from '../patterns/sliding-window/Problems';
import SlidingWindowCode from '../patterns/sliding-window/Code';
import SlidingWindowInteractive from '../patterns/sliding-window/Interactive';

// Pattern Pages - Two Pointers
import TwoPointersOverview from '../patterns/two-pointers/Overview';
import TwoPointersTheory from '../patterns/two-pointers/Theory';
import TwoPointersTypes from '../patterns/two-pointers/Types';
import TwoPointersProblems from '../patterns/two-pointers/Problems';
import TwoPointersCode from '../patterns/two-pointers/Code';
import TwoPointersInteractive from '../patterns/two-pointers/Interactive';

// Pattern Pages - Fast Slow
import FastSlowOverview from '../patterns/fast-slow/Overview';
import FastSlowTheory from '../patterns/fast-slow/Theory';
import FastSlowTypes from '../patterns/fast-slow/Types';
import FastSlowProblems from '../patterns/fast-slow/Problems';
import FastSlowCode from '../patterns/fast-slow/Code';
import FastSlowInteractive from '../patterns/fast-slow/Interactive';

// Pattern Pages - Merge Intervals
import MergeIntervalsOverview from '../patterns/merge-intervals/Overview';
import MergeIntervalsTheory from '../patterns/merge-intervals/Theory';
import MergeIntervalsTypes from '../patterns/merge-intervals/Types';
import MergeIntervalsProblems from '../patterns/merge-intervals/Problems';
import MergeIntervalsCode from '../patterns/merge-intervals/Code';
import MergeIntervalsInteractive from '../patterns/merge-intervals/Interactive';

// Pattern Pages - Cyclic Sort
import CyclicSortOverview from '../patterns/cyclic-sort/Overview';
import CyclicSortTheory from '../patterns/cyclic-sort/Theory';
import CyclicSortTypes from '../patterns/cyclic-sort/Types';
import CyclicSortProblems from '../patterns/cyclic-sort/Problems';
import CyclicSortCode from '../patterns/cyclic-sort/Code';
import CyclicSortInteractive from '../patterns/cyclic-sort/Interactive';

// Pattern Pages - BFS
import BfsOverview from '../patterns/bfs/Overview';
import BfsTheory from '../patterns/bfs/Theory';
import BfsTypes from '../patterns/bfs/Types';
import BfsProblems from '../patterns/bfs/Problems';
import BfsCode from '../patterns/bfs/Code';
import BfsInteractive from '../patterns/bfs/Interactive';

// Pattern Pages - DFS
import DfsOverview from '../patterns/dfs/Overview';
import DfsTheory from '../patterns/dfs/Theory';
import DfsTypes from '../patterns/dfs/Types';
import DfsProblems from '../patterns/dfs/Problems';
import DfsCode from '../patterns/dfs/Code';
import DfsInteractive from '../patterns/dfs/Interactive';

// Pattern Pages - Union Find
import UnionFindOverview from '../patterns/union-find/Overview';
import UnionFindTheory from '../patterns/union-find/Theory';
import UnionFindTypes from '../patterns/union-find/Types';
import UnionFindProblems from '../patterns/union-find/Problems';
import UnionFindCode from '../patterns/union-find/Code';
import UnionFindInteractive from '../patterns/union-find/Interactive';

// Pattern Pages - Graph
import GraphOverview from '../patterns/graph/Overview';
import GraphTheory from '../patterns/graph/Theory';
import GraphTypes from '../patterns/graph/Types';
import GraphProblems from '../patterns/graph/Problems';
import GraphCode from '../patterns/graph/Code';
import GraphInteractive from '../patterns/graph/Interactive';

const AppRoutes = () => {
  return (
    <Routes>
      {/* Main Layout Routes */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/patterns" element={<Patterns />} />
        <Route path="/learning-path" element={<LearningPath />} />
        <Route path="/about" element={<About />} />
      </Route>

      {/* Pattern Routes - Sliding Window */}
      <Route path="/patterns/sliding-window" element={<PatternLayout />}>
        <Route index element={<Navigate to="overview" replace />} />
        <Route path="overview" element={<SlidingWindowOverview />} />
        <Route path="theory" element={<SlidingWindowTheory />} />
        <Route path="types" element={<SlidingWindowTypes />} />
        <Route path="problems" element={<SlidingWindowProblems />} />
        <Route path="code" element={<SlidingWindowCode />} />
        <Route path="interactive" element={<SlidingWindowInteractive />} />
      </Route>

      {/* Pattern Routes - Two Pointers */}
      <Route path="/patterns/two-pointers" element={<PatternLayout />}>
        <Route index element={<Navigate to="overview" replace />} />
        <Route path="overview" element={<TwoPointersOverview />} />
        <Route path="theory" element={<TwoPointersTheory />} />
        <Route path="types" element={<TwoPointersTypes />} />
        <Route path="problems" element={<TwoPointersProblems />} />
        <Route path="code" element={<TwoPointersCode />} />
        <Route path="interactive" element={<TwoPointersInteractive />} />
      </Route>

      {/* Pattern Routes - Fast Slow */}
      <Route path="/patterns/fast-slow" element={<PatternLayout />}>
        <Route index element={<Navigate to="overview" replace />} />
        <Route path="overview" element={<FastSlowOverview />} />
        <Route path="theory" element={<FastSlowTheory />} />
        <Route path="types" element={<FastSlowTypes />} />
        <Route path="problems" element={<FastSlowProblems />} />
        <Route path="code" element={<FastSlowCode />} />
        <Route path="interactive" element={<FastSlowInteractive />} />
      </Route>

      {/* Pattern Routes - Merge Intervals */}
      <Route path="/patterns/merge-intervals" element={<PatternLayout />}>
        <Route index element={<Navigate to="overview" replace />} />
        <Route path="overview" element={<MergeIntervalsOverview />} />
        <Route path="theory" element={<MergeIntervalsTheory />} />
        <Route path="types" element={<MergeIntervalsTypes />} />
        <Route path="problems" element={<MergeIntervalsProblems />} />
        <Route path="code" element={<MergeIntervalsCode />} />
        <Route path="interactive" element={<MergeIntervalsInteractive />} />
      </Route>

      {/* Pattern Routes - Cyclic Sort */}
      <Route path="/patterns/cyclic-sort" element={<PatternLayout />}>
        <Route index element={<Navigate to="overview" replace />} />
        <Route path="overview" element={<CyclicSortOverview />} />
        <Route path="theory" element={<CyclicSortTheory />} />
        <Route path="types" element={<CyclicSortTypes />} />
        <Route path="problems" element={<CyclicSortProblems />} />
        <Route path="code" element={<CyclicSortCode />} />
        <Route path="interactive" element={<CyclicSortInteractive />} />
      </Route>

      {/* Pattern Routes - BFS */}
      <Route path="/patterns/bfs" element={<PatternLayout />}>
        <Route index element={<Navigate to="overview" replace />} />
        <Route path="overview" element={<BfsOverview />} />
        <Route path="theory" element={<BfsTheory />} />
        <Route path="types" element={<BfsTypes />} />
        <Route path="problems" element={<BfsProblems />} />
        <Route path="code" element={<BfsCode />} />
        <Route path="interactive" element={<BfsInteractive />} />
      </Route>

      {/* Pattern Routes - DFS */}
      <Route path="/patterns/dfs" element={<PatternLayout />}>
        <Route index element={<Navigate to="overview" replace />} />
        <Route path="overview" element={<DfsOverview />} />
        <Route path="theory" element={<DfsTheory />} />
        <Route path="types" element={<DfsTypes />} />
        <Route path="problems" element={<DfsProblems />} />
        <Route path="code" element={<DfsCode />} />
        <Route path="interactive" element={<DfsInteractive />} />
      </Route>

      {/* Pattern Routes - Union Find */}
      <Route path="/patterns/union-find" element={<PatternLayout />}>
        <Route index element={<Navigate to="overview" replace />} />
        <Route path="overview" element={<UnionFindOverview />} />
        <Route path="theory" element={<UnionFindTheory />} />
        <Route path="types" element={<UnionFindTypes />} />
        <Route path="problems" element={<UnionFindProblems />} />
        <Route path="code" element={<UnionFindCode />} />
        <Route path="interactive" element={<UnionFindInteractive />} />
      </Route>

      {/* Pattern Routes - Graph */}
      <Route path="/patterns/graph" element={<PatternLayout />}>
        <Route index element={<Navigate to="overview" replace />} />
        <Route path="overview" element={<GraphOverview />} />
        <Route path="theory" element={<GraphTheory />} />
        <Route path="types" element={<GraphTypes />} />
        <Route path="problems" element={<GraphProblems />} />
        <Route path="code" element={<GraphCode />} />
        <Route path="interactive" element={<GraphInteractive />} />
      </Route>

      {/* Fallback Route */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default AppRoutes;
