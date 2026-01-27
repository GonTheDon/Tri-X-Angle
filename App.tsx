import React, { useState } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Businesses from './pages/Businesses';
import Community from './pages/Community';
import Database from './pages/Database';
import Models from './pages/Models';
import Plans from './pages/Plans';
import BusinessDetail from './pages/BusinessDetail';
import { AccessProvider } from './components/AccessContext';
import AccessModal from './components/AccessModal';

const App: React.FC = () => {
  const [isRequestModalOpen, setIsRequestModalOpen] = useState(false);

  return (
    <AccessProvider>
      <HashRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home onRequestAccess={() => setIsRequestModalOpen(true)} />} />
            <Route path="/about" element={<About />} />
            <Route path="/businesses" element={<Businesses />} />
            <Route path="/businesses/:id" element={<BusinessDetail />} />
            <Route path="/community" element={<Community />} />
            <Route path="/database" element={<Database />} />
            <Route path="/models" element={<Models />} />
            <Route path="/plans" element={<Plans />} />
          </Routes>
          <AccessModal isOpen={isRequestModalOpen} onClose={() => setIsRequestModalOpen(false)} />
        </Layout>
      </HashRouter>
    </AccessProvider>
  );
};

export default App;