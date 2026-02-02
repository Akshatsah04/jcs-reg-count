import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Leaderboard from './components/Leaderboard';
import Navbar from './components/Navbar';
import BackgroundParticles from './components/BackgroundParticles';
import Prizes from './pages/Prizes';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container relative min-h-screen">
        <BackgroundParticles />
        <Navbar />
        <Routes>
          <Route path="/" element={<Leaderboard />} />
          <Route path="/prizes" element={<Prizes />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
