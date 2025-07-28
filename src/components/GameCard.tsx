import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Star, Play } from 'lucide-react';

interface GameCardProps {
  id: string;
  title: string;
  thumbnail: string;
  rating?: number;
  category: string;
  players?: number;
}

const GameCard: React.FC<GameCardProps> = ({ id, title, thumbnail, rating = 5, category, players }) => {
  const navigate = useNavigate();

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`h-4 w-4 ${
          index < rating ? 'text-yellow-400 fill-current' : 'text-gray-600'
        }`}
      />
    ));
  };

  const handlePlayGame = () => {
    navigate(`/game/${id}`);
  };

  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-green-500/20 transition-all duration-300 group">
      <div className="relative overflow-hidden">
        <img
          src={thumbnail}
          alt={title}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
          <button
            onClick={handlePlayGame}
            className="opacity-0 group-hover:opacity-100 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-full flex items-center space-x-2 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0"
          >
            <Play className="h-4 w-4" />
            <span>Play Now</span>
          </button>
        </div>
        <div className="absolute top-2 right-2 bg-purple-600 text-white text-xs px-2 py-1 rounded">
          {category.charAt(0).toUpperCase() + category.slice(1)}
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="text-white font-semibold text-lg mb-2 line-clamp-1">{title}</h3>
        
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-1">
            {renderStars(rating)}
          </div>
          {players && (
            <span className="text-gray-400 text-sm">{players.toLocaleString()} players</span>
          )}
        </div>
        
        <button
          onClick={handlePlayGame}
          className="w-full bg-gray-700 hover:bg-green-600 text-white py-2 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
        >
          <Play className="h-4 w-4" />
          <span>Play Game</span>
        </button>
      </div>
    </div>
  );
};

export default GameCard;