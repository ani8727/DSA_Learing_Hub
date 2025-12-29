// routes.jsx - Centralized routing configuration
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from '../pages/Home';
import PatternList from '../pages/PatternList';
import PatternDetail from '../pages/PatternDetail';
import ProblemDetail from '../pages/ProblemDetail';
import Roadmap from '../pages/Roadmap';
import About from '../pages/About';

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/patterns" element={<PatternList />} />
    <Route path="/pattern/:category/:patternId" element={<PatternDetail />} />
    <Route path="/problem/:problemId" element={<ProblemDetail />} />
    <Route path="/roadmap/:type" element={<Roadmap />} />
    <Route path="/about" element={<About />} />
    {/* Redirect unknown routes to home */}
    <Route path="*" element={<Navigate to="/" replace />} />
  </Routes>
);

export default AppRoutes;