import React from 'react';
import { Link } from 'react-router-dom';
import { Gamepad2 } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 border-t border-gray-800 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center space-x-2 text-2xl font-bold text-green-400 mb-4">
              <Gamepad2 className="h-8 w-8" />
              <span>Battlegrounds</span>
            </Link>
            <p className="text-gray-400 mb-4">
              The ultimate destination for free HTML5 games. Play thousands of games across all categories without downloads or registration.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/" className="block text-gray-400 hover:text-green-400 transition-colors">
                Home
              </Link>
              <Link to="/categories" className="block text-gray-400 hover:text-green-400 transition-colors">
                Categories
              </Link>
              <Link to="/top-rated" className="block text-gray-400 hover:text-green-400 transition-colors">
                Top Rated
              </Link>
              <Link to="/new-games" className="block text-gray-400 hover:text-green-400 transition-colors">
                New Games
              </Link>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <div className="space-y-2">
              <Link to="/about" className="block text-gray-400 hover:text-green-400 transition-colors">
                About Us
              </Link>
              <Link to="/contact" className="block text-gray-400 hover:text-green-400 transition-colors">
                Contact Us
              </Link>
              <Link to="/privacy" className="block text-gray-400 hover:text-green-400 transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="block text-gray-400 hover:text-green-400 transition-colors">
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © {currentYear} Battlegrounds. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;