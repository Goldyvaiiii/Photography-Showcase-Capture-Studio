import React from 'react';

interface PortfolioItemProps {
  title: string;
  image: string;
  category: string;
}

export function PortfolioItem({ title, image, category }: PortfolioItemProps) {
  return (
    <div className="group relative overflow-hidden rounded-lg shadow-lg">
      <img
        src={image}
        alt={title}
        className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-300"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <p className="text-sm text-indigo-300 mb-1">{category}</p>
          <h3 className="text-xl font-semibold text-white">{title}</h3>
        </div>
      </div>
    </div>
  );
}