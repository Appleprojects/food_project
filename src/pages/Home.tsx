import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Camera, Upload, Book, Utensils, Clock, Sparkles, 
  Brain, Leaf, ChefHat, Cpu, Database, Globe2,
  Sandwich, Scale, Heart, Zap
} from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, description, gradient }) => (
  <div className={`bg-gradient-to-br ${gradient} rounded-xl p-6 flex items-start space-x-4`}>
    <div className="bg-white rounded-full p-3">
      <Icon className="h-6 w-6 text-indigo-600" />
    </div>
    <div>
      <h3 className="font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 via-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16 relative">
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-pink-200 via-purple-200 to-indigo-200 blur-3xl opacity-30 rounded-full transform -translate-y-1/2"></div>
          <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 mb-6">
            Discover Your Food with AI
          </h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
            Experience the future of food recognition with our advanced AI platform. Instantly identify dishes, 
            get nutritional insights, and explore a world of culinary knowledge.
          </p>
        </div>

        {/* Main Features */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 text-center transform hover:-translate-y-1">
            <div className="bg-gradient-to-br from-indigo-500 to-purple-500 text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
              <Camera className="h-8 w-8" />
            </div>
            <h2 className="text-xl font-semibold mb-3 text-gray-800">Real-time Detection</h2>
            <p className="text-gray-600 mb-6">Use your camera to instantly identify dishes in real-time with our advanced AI technology.</p>
            <Link to="/classify" className="inline-flex items-center text-indigo-600 hover:text-indigo-700 font-medium">
              Try Camera <span className="ml-2">→</span>
            </Link>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 text-center transform hover:-translate-y-1">
            <div className="bg-gradient-to-br from-purple-500 to-pink-500 text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
              <Upload className="h-8 w-8" />
            </div>
            <h2 className="text-xl font-semibold mb-3 text-gray-800">Image Upload</h2>
            <p className="text-gray-600 mb-6">Upload food images to get detailed classification results with confidence scores.</p>
            <Link to="/classify" className="inline-flex items-center text-indigo-600 hover:text-indigo-700 font-medium">
              Upload Image <span className="ml-2">→</span>
            </Link>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 text-center transform hover:-translate-y-1">
            <div className="bg-gradient-to-br from-pink-500 to-rose-500 text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
              <Book className="h-8 w-8" />
            </div>
            <h2 className="text-xl font-semibold mb-3 text-gray-800">Food Database</h2>
            <p className="text-gray-600 mb-6">Explore our comprehensive food database with detailed nutrition information.</p>
            <Link to="/food-list" className="inline-flex items-center text-indigo-600 hover:text-indigo-700 font-medium">
              Browse Foods <span className="ml-2">→</span>
            </Link>
          </div>
        </div>

        {/* Technology Stack */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">Powered by Advanced Technology</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <Brain className="h-8 w-8 text-indigo-600 mb-4" />
              <h3 className="font-semibold mb-2">DenseNet201</h3>
              <p className="text-gray-600 text-sm">State-of-the-art deep learning model for accurate food recognition</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <Cpu className="h-8 w-8 text-purple-600 mb-4" />
              <h3 className="font-semibold mb-2">Fast API Backend</h3>
              <p className="text-gray-600 text-sm">High-performance Python backend for rapid predictions</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <Database className="h-8 w-8 text-pink-600 mb-4" />
              <h3 className="font-semibold mb-2">Rich Database</h3>
              <p className="text-gray-600 text-sm">Comprehensive food information and nutritional data</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <Globe2 className="h-8 w-8 text-indigo-600 mb-4" />
              <h3 className="font-semibold mb-2">React Frontend</h3>
              <p className="text-gray-600 text-sm">Modern, responsive user interface for seamless experience</p>
            </div>
          </div>
        </div>

        {/* Key Features Grid */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">Key Features</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <FeatureCard
              icon={ChefHat}
              title="20+ Cuisines"
              description="Wide variety of Indian and international dishes supported"
              gradient="from-indigo-100 to-purple-100"
            />
            <FeatureCard
              icon={Zap}
              title="Instant Results"
              description="Get food identification results in milliseconds"
              gradient="from-purple-100 to-pink-100"
            />
            <FeatureCard
              icon={Sparkles}
              title="95% Accuracy"
              description="High-precision AI model trained on vast dataset"
              gradient="from-pink-100 to-rose-100"
            />
            <FeatureCard
              icon={Sandwich}
              title="Food Recognition"
              description="Identify dishes from photos or real-time camera feed"
              gradient="from-indigo-100 to-purple-100"
            />
            <FeatureCard
              icon={Scale}
              title="Nutritional Info"
              description="Detailed nutritional values and serving sizes"
              gradient="from-purple-100 to-pink-100"
            />
            <FeatureCard
              icon={Heart}
              title="Health Insights"
              description="Understanding the health impact of your food choices"
              gradient="from-pink-100 to-rose-100"
            />
          </div>
        </div>

        {/* CTA Section */}
        <div className="relative overflow-hidden rounded-3xl">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-90"></div>
          <div className="relative px-8 py-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-6">Ready to explore?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Start identifying foods and discovering their nutritional value today with our AI-powered platform.
              Join thousands of users making informed food choices.
            </p>
            <Link
              to="/classify"
              className="inline-block bg-white text-indigo-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-transform duration-300"
            >
              Get Started Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;