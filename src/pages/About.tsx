import React from 'react';
import { Brain, Server, Database } from 'lucide-react';

const About = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">About FoodLens AI</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Leveraging cutting-edge AI technology to revolutionize food recognition and nutritional awareness.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-16 mb-16">
        <div>
          <h2 className="text-2xl font-bold mb-6">Our Technology</h2>
          <div className="space-y-6">
            <div className="flex items-start">
              <Brain className="h-6 w-6 text-indigo-600 mt-1 mr-4" />
              <div>
                <h3 className="font-semibold mb-2">Advanced AI Model</h3>
                <p className="text-gray-600">
                  Powered by DenseNet201, our model has been trained on thousands of food images to provide accurate classification results.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <Server className="h-6 w-6 text-indigo-600 mt-1 mr-4" />
              <div>
                <h3 className="font-semibold mb-2">Fast API Backend</h3>
                <p className="text-gray-600">
                  Built with Python FastAPI for lightning-fast processing and real-time predictions.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <Database className="h-6 w-6 text-indigo-600 mt-1 mr-4" />
              <div>
                <h3 className="font-semibold mb-2">Comprehensive Database</h3>
                <p className="text-gray-600">
                  Extensive collection of food items with detailed nutritional information.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-8">
          <h2 className="text-2xl font-bold mb-6">Supported Foods</h2>
          <div className="grid grid-cols-2 gap-4">
            <ul className="space-y-2 text-gray-700">
              <li>• Burger</li>
              <li>• Butter Naan</li>
              <li>• Chai</li>
              <li>• Chapati</li>
              <li>• Chole Bhature</li>
              <li>• Dal Makhani</li>
              <li>• Dhokla</li>
              <li>• Fried Rice</li>
              <li>• Idli</li>
              <li>• Jalebi</li>
            </ul>
            <ul className="space-y-2 text-gray-700">
              <li>• Kaathi Rolls</li>
              <li>• Kadai Paneer</li>
              <li>• Kulfi</li>
              <li>• Masala Dosa</li>
              <li>• Momos</li>
              <li>• Paani Puri</li>
              <li>• Pakode</li>
              <li>• Pav Bhaji</li>
              <li>• Pizza</li>
              <li>• Samosa</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Get Started Today</h2>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          Whether you're curious about what's on your plate or want to learn more about different cuisines, 
          our AI-powered food recognition system is here to help.
        </p>
        <button className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors">
          Try the Classifier
        </button>
      </div>
    </div>
  );
};

export default About;