import React, { useState } from 'react';
import { Search, Filter, Clock, Siren as Fire, Scale, Leaf } from 'lucide-react';

const foodData = [
  {
    name: "Burger",
    category: "Fast Food",
    calories: 250,
    prepTime: "15 mins",
    servingSize: "1 burger (150g)",
    nutrients: {
      protein: "15g",
      carbs: "30g",
      fat: "12g",
      fiber: "2g",
      sugar: "4g"
    },
    ingredients: [
      "Beef patty",
      "Sesame bun",
      "Lettuce",
      "Tomato",
      "Onion",
      "Cheese",
      "Mayo"
    ],
    healthBenefits: [
      "High in protein",
      "Good source of iron",
      "Contains essential vitamins"
    ],
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800"
  },
  {
    name: "Butter Naan",
    category: "Indian Bread",
    calories: 180,
    prepTime: "20 mins",
    servingSize: "1 piece (60g)",
    nutrients: {
      protein: "5g",
      carbs: "28g",
      fat: "7g",
      fiber: "1g",
      sugar: "1g"
    },
    ingredients: [
      "All-purpose flour",
      "Yogurt",
      "Butter",
      "Yeast",
      "Sugar",
      "Salt"
    ],
    healthBenefits: [
      "Good source of carbohydrates",
      "Contains calcium from yogurt",
      "Provides energy"
    ],
    image: "https://images.unsplash.com/photo-1626200419199-391ae4be7a41?auto=format&fit=crop&w=800"
  },
  {
    name: "Chai",
    category: "Beverages",
    calories: 80,
    prepTime: "10 mins",
    servingSize: "1 cup (150ml)",
    nutrients: {
      protein: "2g",
      carbs: "15g",
      fat: "3g",
      fiber: "0g",
      sugar: "12g"
    },
    ingredients: [
      "Black tea",
      "Milk",
      "Cardamom",
      "Ginger",
      "Cinnamon",
      "Sugar"
    ],
    healthBenefits: [
      "Rich in antioxidants",
      "Aids digestion",
      "Boosts immunity"
    ],
    image: "https://images.unsplash.com/photo-1561336313-0bd5e0b27ec8?auto=format&fit=crop&w=800"
  },
  {
    name: "Chapati",
    category: "Indian Bread",
    calories: 120,
    prepTime: "15 mins",
    servingSize: "1 piece (30g)",
    nutrients: {
      protein: "3g",
      carbs: "20g",
      fat: "4g",
      fiber: "2g",
      sugar: "0g"
    },
    ingredients: [
      "Whole wheat flour",
      "Water",
      "Salt",
      "Oil"
    ],
    healthBenefits: [
      "High in fiber",
      "Complex carbohydrates",
      "Low in fat"
    ],
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800"
  },
  {
    name: "Chole Bhature",
    category: "North Indian",
    calories: 450,
    prepTime: "45 mins",
    servingSize: "2 bhature with chole (300g)",
    nutrients: {
      protein: "15g",
      carbs: "65g",
      fat: "18g",
      fiber: "8g",
      sugar: "3g"
    },
    ingredients: [
      "Chickpeas",
      "All-purpose flour",
      "Spices",
      "Onion",
      "Tomato",
      "Oil"
    ],
    healthBenefits: [
      "High in protein",
      "Rich in fiber",
      "Good source of iron"
    ],
    image: "https://images.unsplash.com/photo-1626132647957-5c59846ae899?auto=format&fit=crop&w=800"
  },
  {
    name: "Dal Makhani",
    category: "North Indian",
    calories: 320,
    prepTime: "40 mins",
    servingSize: "1 bowl (200g)",
    nutrients: {
      protein: "12g",
      carbs: "45g",
      fat: "10g",
      fiber: "7g",
      sugar: "2g"
    },
    ingredients: [
      "Black lentils",
      "Kidney beans",
      "Butter",
      "Cream",
      "Spices",
      "Tomato"
    ],
    healthBenefits: [
      "High in protein",
      "Rich in iron",
      "Good source of fiber"
    ],
    image: "https://images.unsplash.com/photo-1626132600068-4c3e4363d53f?auto=format&fit=crop&w=800"
  },
  {
    name: "Dhokla",
    category: "Gujarati",
    calories: 160,
    prepTime: "30 mins",
    servingSize: "2 pieces (100g)",
    nutrients: {
      protein: "6g",
      carbs: "25g",
      fat: "5g",
      fiber: "3g",
      sugar: "1g"
    },
    ingredients: [
      "Gram flour",
      "Semolina",
      "Yogurt",
      "Green chili",
      "Mustard seeds",
      "Curry leaves"
    ],
    healthBenefits: [
      "Low in calories",
      "Good protein content",
      "Fermented food"
    ],
    image: "https://images.unsplash.com/photo-1626132600798-87edcd19c5dd?auto=format&fit=crop&w=800"
  },
  {
    name: "Fried Rice",
    category: "Indo-Chinese",
    calories: 280,
    prepTime: "25 mins",
    servingSize: "1 plate (200g)",
    nutrients: {
      protein: "8g",
      carbs: "45g",
      fat: "9g",
      fiber: "3g",
      sugar: "2g"
    },
    ingredients: [
      "Rice",
      "Mixed vegetables",
      "Soy sauce",
      "Eggs",
      "Green onions",
      "Oil"
    ],
    healthBenefits: [
      "Contains vegetables",
      "Good source of energy",
      "Balanced meal"
    ],
    image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=800"
  },
  {
    name: "Idli",
    category: "South Indian",
    calories: 120,
    prepTime: "35 mins",
    servingSize: "2 pieces (80g)",
    nutrients: {
      protein: "4g",
      carbs: "22g",
      fat: "2g",
      fiber: "2g",
      sugar: "0g"
    },
    ingredients: [
      "Rice",
      "Urad dal",
      "Fenugreek seeds",
      "Salt"
    ],
    healthBenefits: [
      "Low in calories",
      "Easy to digest",
      "Fermented food"
    ],
    image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800"
  },
  {
    name: "Jalebi",
    category: "Dessert",
    calories: 150,
    prepTime: "40 mins",
    servingSize: "2 pieces (50g)",
    nutrients: {
      protein: "2g",
      carbs: "30g",
      fat: "5g",
      fiber: "0g",
      sugar: "25g"
    },
    ingredients: [
      "All-purpose flour",
      "Sugar",
      "Saffron",
      "Cardamom",
      "Oil"
    ],
    healthBenefits: [
      "Quick energy source",
      "Contains saffron",
      "Mood enhancer"
    ],
    image: "https://images.unsplash.com/photo-1589302937846-b3b5b5ce7c3d?auto=format&fit=crop&w=800"
  },
  {
    name: "Kaathi Rolls",
    category: "Street Food",
    calories: 350,
    prepTime: "25 mins",
    servingSize: "1 roll (200g)",
    nutrients: {
      protein: "12g",
      carbs: "40g",
      fat: "15g",
      fiber: "3g",
      sugar: "2g"
    },
    ingredients: [
      "Paratha",
      "Eggs",
      "Chicken/Paneer",
      "Onions",
      "Bell peppers",
      "Spices"
    ],
    healthBenefits: [
      "High in protein",
      "Contains vegetables",
      "Complete meal"
    ],
    image: "https://images.unsplash.com/photo-1626132600347-6d81734c2033?auto=format&fit=crop&w=800"
  },
  {
    name: "Kadai Paneer",
    category: "North Indian",
    calories: 300,
    prepTime: "35 mins",
    servingSize: "1 serving (200g)",
    nutrients: {
      protein: "15g",
      carbs: "12g",
      fat: "22g",
      fiber: "4g",
      sugar: "5g"
    },
    ingredients: [
      "Paneer",
      "Bell peppers",
      "Onions",
      "Tomatoes",
      "Kadai masala",
      "Cream"
    ],
    healthBenefits: [
      "Rich in protein",
      "Contains calcium",
      "Vitamin C from peppers"
    ],
    image: "https://images.unsplash.com/photo-1626132600455-67dd61496a36?auto=format&fit=crop&w=800"
  },
  {
    name: "Kulfi",
    category: "Dessert",
    calories: 180,
    prepTime: "4 hours",
    servingSize: "1 piece (80g)",
    nutrients: {
      protein: "4g",
      carbs: "22g",
      fat: "8g",
      fiber: "0g",
      sugar: "20g"
    },
    ingredients: [
      "Milk",
      "Sugar",
      "Cardamom",
      "Pistachios",
      "Almonds"
    ],
    healthBenefits: [
      "Contains calcium",
      "Rich in nuts",
      "Good for bones"
    ],
    image: "https://images.unsplash.com/photo-1626132600576-3f49a3c5c154?auto=format&fit=crop&w=800"
  },
  {
    name: "Masala Dosa",
    category: "South Indian",
    calories: 165,
    prepTime: "30 mins",
    servingSize: "1 dosa (120g)",
    nutrients: {
      protein: "4g",
      carbs: "25g",
      fat: "6g",
      fiber: "3g",
      sugar: "0g"
    },
    ingredients: [
      "Rice",
      "Urad dal",
      "Potatoes",
      "Onions",
      "Mustard seeds",
      "Curry leaves"
    ],
    healthBenefits: [
      "Fermented food good for gut health",
      "Low in calories",
      "Rich in complex carbohydrates"
    ],
    image: "https://images.unsplash.com/photo-1630409351241-e90e7f5e434d?auto=format&fit=crop&w=800"
  },
  {
    name: "Momos",
    category: "Street Food",
    calories: 220,
    prepTime: "45 mins",
    servingSize: "6 pieces (180g)",
    nutrients: {
      protein: "8g",
      carbs: "30g",
      fat: "7g",
      fiber: "2g",
      sugar: "1g"
    },
    ingredients: [
      "All-purpose flour",
      "Vegetables/Chicken",
      "Onions",
      "Garlic",
      "Ginger",
      "Spices"
    ],
    healthBenefits: [
      "Low in calories",
      "Contains vegetables",
      "Good protein source"
    ],
    image: "https://images.unsplash.com/photo-1626132600683-65d21761d639?auto=format&fit=crop&w=800"
  },
  {
    name: "Paani Puri",
    category: "Street Food",
    calories: 150,
    prepTime: "20 mins",
    servingSize: "6 pieces (100g)",
    nutrients: {
      protein: "3g",
      carbs: "25g",
      fat: "5g",
      fiber: "1g",
      sugar: "2g"
    },
    ingredients: [
      "Semolina",
      "Mint",
      "Tamarind",
      "Spices",
      "Potato filling",
      "Chickpeas"
    ],
    healthBenefits: [
      "Contains digestive spices",
      "Light snack",
      "Rich in herbs"
    ],
    image: "https://images.unsplash.com/photo-1626132600742-8b8b5e7c5c58?auto=format&fit=crop&w=800"
  },
  {
    name: "Pakode",
    category: "Snacks",
    calories: 200,
    prepTime: "25 mins",
    servingSize: "4 pieces (100g)",
    nutrients: {
      protein: "6g",
      carbs: "18g",
      fat: "12g",
      fiber: "2g",
      sugar: "1g"
    },
    ingredients: [
      "Gram flour",
      "Onions",
      "Potatoes",
      "Green chilies",
      "Spices",
      "Oil"
    ],
    healthBenefits: [
      "Good protein content",
      "Contains vegetables",
      "Rich in minerals"
    ],
    image: "https://images.unsplash.com/photo-1626132600821-b6fb13bc89c1?auto=format&fit=crop&w=800"
  },
  {
    name: "Pav Bhaji",
    category: "Street Food",
    calories: 350,
    prepTime: "40 mins",
    servingSize: "1 plate (250g)",
    nutrients: {
      protein: "8g",
      carbs: "45g",
      fat: "16g",
      fiber: "5g",
      sugar: "4g"
    },
    ingredients: [
      "Mixed vegetables",
      "Butter",
      "Pav bread",
      "Onions",
      "Tomatoes",
      "Spices"
    ],
    healthBenefits: [
      "Rich in vegetables",
      "Good source of fiber",
      "Contains multiple nutrients"
    ],
    image: "https://images.unsplash.com/photo-1626132600901-3e4dd4e4773f?auto=format&fit=crop&w=800"
  },
  {
    name: "Pizza",
    category: "Fast Food",
    calories: 280,
    prepTime: "30 mins",
    servingSize: "1 slice (100g)",
    nutrients: {
      protein: "12g",
      carbs: "35g",
      fat: "10g",
      fiber: "2g",
      sugar: "3g"
    },
    ingredients: [
      "Pizza dough",
      "Cheese",
      "Tomato sauce",
      "Vegetables",
      "Herbs",
      "Olive oil"
    ],
    healthBenefits: [
      "Contains calcium",
      "Good protein source",
      "Includes vegetables"
    ],
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=800"
  },
  {
    name: "Samosa",
    category: "Snacks",
    calories: 250,
    prepTime: "45 mins",
    servingSize: "1 piece (75g)",
    nutrients: {
      protein: "4g",
      carbs: "28g",
      fat: "14g",
      fiber: "2g",
      sugar: "1g"
    },
    ingredients: [
      "All-purpose flour",
      "Potatoes",
      "Peas",
      "Spices",
      "Oil"
    ],
    healthBenefits: [
      "Contains vegetables",
      "Good source of energy",
      "Rich in spices"
    ],
    image: "https://images.unsplash.com/photo-1626132600984-13dce7330e88?auto=format&fit=crop&w=800"
  }
];

const categories = ["All", "Fast Food", "Indian Bread", "South Indian", "North Indian", "Street Food", "Snacks", "Dessert", "Beverages", "Gujarati", "Indo-Chinese"];

const FoodList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredFoods = foodData.filter(food => {
    const matchesSearch = food.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || food.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Comprehensive Food Database</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Explore our detailed collection of foods with nutritional information, ingredients, and health benefits.
        </p>
      </div>

      {/* Search and Filter */}
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search foods..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-2">
          <Filter className="text-gray-400" />
          <select
            className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            {categories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Food Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredFoods.map((food, index) => (
          <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <img
              src={food.image}
              alt={food.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">{food.name}</h3>
                  <span className="text-sm text-indigo-600 font-medium">{food.category}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Clock className="h-4 w-4 mr-1" />
                  <span className="text-sm">{food.prepTime}</span>
                </div>
              </div>

              {/* Nutrition Quick Facts */}
              <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-gray-50 rounded-lg">
                <div className="text-center">
                  <Fire className="h-5 w-5 mx-auto text-orange-500 mb-1" />
                  <div className="text-sm font-semibold">{food.calories}</div>
                  <div className="text-xs text-gray-500">calories</div>
                </div>
                <div className="text-center">
                  <Scale className="h-5 w-5 mx-auto text-blue-500 mb-1" />
                  <div className="text-sm font-semibold">{food.servingSize}</div>
                  <div className="text-xs text-gray-500">serving</div>
                </div>
                <div className="text-center">
                  <Leaf className="h-5 w-5 mx-auto text-green-500 mb-1" />
                  <div className="text-sm font-semibold">{food.nutrients.protein}</div>
                  <div className="text-xs text-gray-500">protein</div>
                </div>
              </div>

              {/* Detailed Nutrition */}
              <div className="mb-6">
                <h4 className="font-semibold mb-2">Nutrition Facts</h4>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  {Object.entries(food.nutrients).map(([key, value]) => (
                    <div key={key} className="flex justify-between">
                      <span className="capitalize text-gray-600">{key}</span>
                      <span className="font-medium">{value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Ingredients */}
              <div className="mb-6">
                <h4 className="font-semibold mb-2">Key Ingredients</h4>
                <div className="flex flex-wrap gap-2">
                  {food.ingredients.map((ingredient, i) => (
                    <span key={i} className="px-2 py-1 bg-gray-100 rounded-full text-sm text-gray-600">
                      {ingredient}
                    </span>
                  ))}
                </div>
              </div>

              {/* Health Benefits */}
              <div>
                <h4 className="font-semibold mb-2">Health Benefits</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  {food.healthBenefits.map((benefit, i) => (
                    <li key={i} className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></span>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FoodList;