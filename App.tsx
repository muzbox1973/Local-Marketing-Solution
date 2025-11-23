import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Solution from './pages/Solution';
import CaseStudy from './pages/CaseStudy';
import Pricing from './pages/Pricing';
import Consulting from './pages/Consulting';

const App: React.FC = () => {
  return (
    <HashRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/solution" element={<Solution />} />
          <Route path="/cases" element={<CaseStudy />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/consulting" element={<Consulting />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
};

export default App;