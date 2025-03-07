import React from 'react';
import { Link } from 'react-router-dom';
import { UtensilsCrossed } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <UtensilsCrossed className="h-8 w-8 text-indigo-600" />
              <span className="text-xl font-bold text-gray-800">FoodLens AI</span>
            </Link>
          </div>
          <div className="flex items-center space-x-8">
            <Link to="/" className="text-gray-600 hover:text-indigo-600">Home</Link>
            <Link to="/classify" className="text-gray-600 hover:text-indigo-600">AI Classifier</Link>
            <Link to="/food-list" className="text-gray-600 hover:text-indigo-600">Food List</Link>
            <Link to="/about" className="text-gray-600 hover:text-indigo-600">About</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;