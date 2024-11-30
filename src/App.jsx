import React from 'react';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import AboutMe from './Pages/AboutMe';
import Skills from './Pages/Skills';
import Contact from './Pages/Contact';
import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
        {/* You can add more routes as needed */}
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
