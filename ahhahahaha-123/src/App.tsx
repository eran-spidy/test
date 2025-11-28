import React from 'react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-400 via-pink-500 to-red-500">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-white mb-8 animate-bounce">
            🎉 ahhahahaha-123 🎉
          </h1>
          <p className="text-xl text-white mb-8 opacity-90">
            A React.js project with TypeScript and Tailwind CSS
          </p>
          <div className="space-y-4">
            <div className="bg-white bg-opacity-20 backdrop-blur-lg rounded-lg p-6 max-w-md mx-auto">
              <h2 className="text-2xl font-semibold text-white mb-4">Features</h2>
              <ul className="text-left text-white space-y-2">
                <li className="flex items-center">
                  <span className="text-green-300 mr-2">✅</span>
                  React.js with TypeScript
                </li>
                <li className="flex items-center">
                  <span className="text-green-300 mr-2">✅</span>
                  Tailwind CSS for styling
                </li>
                <li className="flex items-center">
                  <span className="text-green-300 mr-2">✅</span>
                  Beautiful gradient background
                </li>
                <li className="flex items-center">
                  <span className="text-green-300 mr-2">✅</span>
                  Responsive design
                </li>
              </ul>
            </div>
            <button className="bg-white text-purple-600 font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition duration-300 transform hover:scale-105 shadow-lg">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
