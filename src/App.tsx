import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Brands from './pages/Brands';
import Services from './pages/Services';
import Distribution from './pages/Distribution';
import News from './pages/News';
import Careers from './pages/Careers';
import Contact from './pages/Contact';
import { Privacy, Terms } from './pages/Legal';

export default function App() {
  return <BrowserRouter><Routes><Route element={<Layout />}>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/soul-parfum" element={<Brands />} />
    <Route path="/services" element={<Services />} />
    <Route path="/distribution" element={<Distribution />} />
    <Route path="/news" element={<News />} />
    <Route path="/careers" element={<Careers />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/privacy" element={<Privacy />} />
    <Route path="/terms" element={<Terms />} />
    <Route path="/perfumes" element={<Navigate to="/soul-parfum" replace />} />
    <Route path="/products" element={<Navigate to="/soul-parfum" replace />} />
    <Route path="/brands" element={<Navigate to="/soul-parfum" replace />} />
    <Route path="*" element={<Navigate to="/" replace />} />
  </Route></Routes></BrowserRouter>;
}
