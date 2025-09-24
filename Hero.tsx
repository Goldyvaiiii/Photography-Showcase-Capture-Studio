import React from 'react';

export function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1452587925148-ce544e77e70d"
          alt="Camera lens"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
          Capturing Life's Beautiful Moments
        </h1>
        <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
          Professional photography services for weddings, portraits, and special events
        </p>
        <button className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-indigo-700 transition-colors duration-200">
          View Portfolio
        </button>
      </div>
    </section>
  );
}