import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import AIClassifier from './pages/AIClassifier';
import About from './pages/About';
import FoodList from './pages/FoodList';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/classify" element={<AIClassifier />} />
          <Route path="/about" element={<About />} />
          <Route path="/food-list" element={<FoodList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;