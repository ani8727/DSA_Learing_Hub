import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import LinkedList from './pages/LinkedList';
import Arrays from './pages/Arrays';
import TwoPointer from './pages/TwoPointer';
import SlidingWindow from './pages/SlidingWindow';
import Sorting from './pages/Sorting';
import Strings from './pages/Strings';
import Trees from './pages/Trees';
import DynamicProgramming from './pages/DynamicProgramming';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/linkedlist" element={<LinkedList />} />
          <Route path="/arrays" element={<Arrays />} />
          <Route path="/two-pointer" element={<TwoPointer />} />
          <Route path="/sliding-window" element={<SlidingWindow />} />
          <Route path="/sorting" element={<Sorting />} />
          <Route path="/strings" element={<Strings />} />
          <Route path="/trees" element={<Trees />} />
          <Route path="/dynamic-programming" element={<DynamicProgramming />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;