import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<div>Home Page</div>} />
        <Route path="/chat" element={<div>Chat</div>} />
        <Route path="/events" element={<div>Events</div>} />
        <Route path="/clubs" element={<div>Clubs</div>} />
        <Route path="/profile" element={<div>Profile</div>} />
      </Routes>
    </Router>
  );
};

export default App;