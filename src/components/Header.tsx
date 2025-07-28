import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Gamepad2 } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-gray-900 border-b border-gray-800 fixed top-0 left-0 right-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 text-2xl font-bold text-green-400">
            <Gamepad2 className="h-8 w-8" />
            <span>Battlegrounds</span>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;