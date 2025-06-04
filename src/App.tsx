import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home.tsx';
import Contact from './components/contact.tsx';
import About from './components/about.tsx';
import Welcome from './components/Welcome.tsx';
import Join from './components/Join.tsx';
import Staff from './components/Staff.tsx';





function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/join" element={<Join  />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/staff" element={<Staff />} />
      </Routes>
    </Router>
  );
}

export default App;