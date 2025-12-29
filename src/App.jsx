import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Layout from './components/Layout';
import AppRoutes from './app/routes';

function App() {
  const rawBase = import.meta.env.BASE_URL || '/';
  const basename = rawBase !== '/' && rawBase.endsWith('/') ? rawBase.slice(0, -1) : rawBase;

  return (
    <BrowserRouter basename={basename}>
      <Layout>
        <AppRoutes />
      </Layout>
    </BrowserRouter>
  );
}

export default App;