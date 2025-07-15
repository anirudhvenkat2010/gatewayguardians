import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home.tsx';
import Contact from './components/contact.tsx';
import About from './components/about.tsx';
import Join from './components/Join.tsx';





function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/join" element={<Join  />} />
      </Routes>
    </Router>
  );
}

export default App;