import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Saas03App from '../CATALOG/SAAS/Saas_03/src/App';
import Ecommerce01Demo from './pages/demos/Ecommerce01Demo';
import Ecommerce02Demo from './pages/demos/Ecommerce02Demo';
import Home from './pages/Home';
import About from './pages/About';
import Catalog from './pages/Catalog';
import CatalogDetail from './pages/CatalogDetail';
import Blog from './pages/Blog';
import Contact from './pages/Contact';


const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/saas-03/*" element={<Saas03App />} />
        <Route path="/ecommerce-01/*" element={<Ecommerce01Demo />} />
        <Route path="/ecommerce-02/*" element={<Ecommerce02Demo />} />
        <Route path="*" element={
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/catalog" element={<Catalog />} />
              <Route path="/catalog/:id" element={<CatalogDetail />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Layout>
        } />
      </Routes>
    </Router>
  );
};

export default App;