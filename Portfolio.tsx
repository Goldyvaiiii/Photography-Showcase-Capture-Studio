import React from 'react';
import { PortfolioItem } from './PortfolioItem';

const portfolioItems = [
  {
    id: 1,
    title: 'Wedding Photography',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552',
    category: 'Weddings'
  },
  {
    id: 2,
    title: 'Portrait Photography',
    image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04',
    category: 'Portraits'
  },
  {
    id: 3,
    title: 'Nature Photography',
    image: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e',
    category: 'Nature'
  },
  {
    id: 4,
    title: 'Event Photography',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865',
    category: 'Events'
  },
  {
    id: 5,
    title: 'Street Photography',
    image: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df',
    category: 'Street'
  },
  {
    id: 6,
    title: 'Architecture Photography',
    image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625',
    category: 'Architecture'
  }
];

export function Portfolio() {
  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Portfolio</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item) => (
            <PortfolioItem key={item.id} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}