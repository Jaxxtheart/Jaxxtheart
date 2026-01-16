import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Website from './pages/Website';
import ApplicationPortal from './pages/ApplicationPortal';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Website />} />
        <Route path="/apply" element={<ApplicationPortal />} />
      </Routes>
    </Router>
  );
}

export default App;
