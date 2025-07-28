import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import GameCard from '../components/GameCard';
import AdBanner from '../components/AdBanner';
import { Filter, Grid, List } from 'lucide-react';

const Categories: React.FC = () => {
  const { category } = useParams<{ category: string }>();
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState('popular');
  const [filterBy, setFilterBy] = useState('all');

  const categories = [
    { name: 'All Games', slug: 'all', count: 1000 },
    { name: 'Action', slug: 'action', count: 150 },
    { name: 'Puzzle', slug: 'puzzle', count: 200 },
    { name: 'Racing', slug: 'racing', count: 80 },
    { name: 'Arcade', slug: 'arcade', count: 120 },
    { name: 'Strategy', slug: 'strategy', count: 90 },
    { name: 'Sports', slug: 'sports', count: 70 }
  ];

  const games = [
    {
      id: 'space-invaders',
      title: 'Space Invaders Classic',
      image: 'https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5,
      category: 'Arcade',
      plays: 15420
    },
    {
      id: 'puzzle-master',
      title: 'Puzzle Master',
      image: 'https://images.pexels.com/photos/1040173/pexels-photo-1040173.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 4,
      category: 'Puzzle',
      plays: 8932
    },
    {
      id: 'racing-thunder',
      title: 'Racing Thunder',
      image: 'https://images.pexels.com/photos/1213294/pexels-photo-1213294.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5,
      category: 'Racing',
      plays: 12567
    },
    {
      id: 'action-hero',
      title: 'Action Hero',
      image: 'https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 4,
      category: 'Action',
      plays: 9876
    },
    {
      id: 'strategy-wars',
      title: 'Strategy Wars',
      image: 'https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5,
      category: 'Strategy',
      plays: 6543
    },
    {
      id: 'sports-champion',
      title: 'Sports Champion',
      image: 'https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 4,
      category: 'Sports',
      plays: 11234
    }
  ];

  const currentCategory = categories.find(cat => cat.slug === category) || categories[0];
  const filteredGames = category && category !== 'all' 
    ? games.filter(game => game.category.toLowerCase() === category.toLowerCase())
    : games;

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-4">
            {currentCategory.name}
          </h1>
          <p className="text-gray-400">
            {currentCategory.count} games available
          </p>
        </div>

        {/* AdSense Banner */}
        {/* <div className="flex justify-center mb-8">
          <AdBanner size="leaderboard" />
        </div> */}

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-64">
            {/* Categories */}
            <div className="bg-gray-800 rounded-lg p-6 mb-6">
              <h3 className="text-white font-semibold mb-4">Categories</h3>
              <div className="space-y-2">
                {categories.map((cat) => (
                  <a
                    key={cat.slug}
                    href={`/categories/${cat.slug}`}
                    className={`block px-3 py-2 rounded-lg transition-colors ${
                      cat.slug === (category || 'all')
                        ? 'bg-green-600 text-white'
                        : 'text-gray-400 hover:text-white hover:bg-gray-700'
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <span>{cat.name}</span>
                      <span className="text-sm">{cat.count}</span>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Filters */}
            <div className="bg-gray-800 rounded-lg p-6 mb-6">
              <h3 className="text-white font-semibold mb-4 flex items-center">
                <Filter className="h-4 w-4 mr-2" />
                Filters
              </h3>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Sort by</label>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="w-full bg-gray-700 text-white rounded-lg px-3 py-2 text-sm"
                  >
                    <option value="popular">Most Popular</option>
                    <option value="newest">Newest</option>
                    <option value="rating">Highest Rated</option>
                    <option value="alphabetical">A-Z</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm text-gray-400 mb-2">Rating</label>
                  <select
                    value={filterBy}
                    onChange={(e) => setFilterBy(e.target.value)}
                    className="w-full bg-gray-700 text-white rounded-lg px-3 py-2 text-sm"
                  >
                    <option value="all">All Ratings</option>
                    <option value="5">5 Stars</option>
                    <option value="4">4+ Stars</option>
                    <option value="3">3+ Stars</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Ad Sidebar */}
            {/* <div className="hidden lg:block">
              <AdBanner size="rectangle" />
            </div> */}
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Controls */}
            <div className="flex items-center justify-between mb-6">
              <div className="text-gray-400">
                Showing {filteredGames.length} games
              </div>
              
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-lg transition-colors ${
                    viewMode === 'grid' ? 'bg-green-600 text-white' : 'bg-gray-700 text-gray-400'
                  }`}
                >
                  <Grid className="h-4 w-4" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-lg transition-colors ${
                    viewMode === 'list' ? 'bg-green-600 text-white' : 'bg-gray-700 text-gray-400'
                  }`}
                >
                  <List className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Games Grid */}
            <div className={`grid gap-6 ${
              viewMode === 'grid' 
                ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
                : 'grid-cols-1'
            }`}>
              {filteredGames.map((game) => (
                <GameCard key={game.id} {...game} />
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-12">
              <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg transition-colors">
                Load More Games
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;