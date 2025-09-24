import React from 'react';
import { Camera } from 'lucide-react';
import { NavLink } from './NavLink';

export function Header() {
  return (
    <header className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <Camera className="h-8 w-8 text-indigo-600" />
            <span className="text-xl font-semibold text-gray-900">Lens & Light</span>
          </div>
          <nav className="flex space-x-8">
            <NavLink href="#home">Home</NavLink>
            <NavLink href="#portfolio">Portfolio</NavLink>
            <NavLink href="#services">Services</NavLink>
            <NavLink href="#about">About</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
}