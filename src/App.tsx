import React from 'react';
import { Carousel } from './components/Carousel';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-white mb-8">
          Trading Cards Collection
        </h1>
        <Carousel />
      </div>
    </div>
  );
}

export default App;