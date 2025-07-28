import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Star, Heart, Share2, Gamepad2, ArrowLeft } from 'lucide-react';

const GamePage: React.FC = () => {
  const { gameId } = useParams<{ gameId: string }>();
  const navigate = useNavigate();
  const [userRating, setUserRating] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  // Game data from Home.tsx
  const allGames = [
    {
      "id": "feedmonster",
      "title": "Feed Monster",
      "thumbnail": "https://demonisblack.com/assets/img/contents/icons/feedmonster.png",
      "category": "puzzle",
      "players": 452,
      "description": "Keep your monster happy by feeding it tasty treats before it gets too hungry!",
      "featured": true,
      "link": "https://gamercraze.site/games/feedmonster"
    },
    {
      "id": "warship",
      "title": "War Ship",
      "thumbnail": "https://demonisblack.com/assets/img/contents/icons/warship.png",
      "category": "action",
      "players": 513,
      "description": "Command your battleship, destroy enemies, and rule the seas in epic naval battles!",
      "featured": true,
      "link": "https://gamercraze.site/games/warship"
    },
    {
      "id": "playludo",
      "title": "Ludo",
      "thumbnail": "https://demonisblack.com/assets/img/contents/icons/playludo.png",
      "category": "puzzle",
      "players": 920,
      "description": "A fun and classic board game roll, race, and be the first to get all your pieces home!",
      "featured": true,
      "link": "https://gamercraze.site/games/playludo"
    },
    {
      "id": "playdominoes",
      "title": "Dominoes",
      "thumbnail": "https://demonisblack.com/assets/img/contents/icons/playdominoes.png",
      "category": "puzzle",
      "players": 841,
      "description": "Match tiles, plan your moves, and outsmart your opponents in this classic strategy game!",
      "featured": true,
      "link": "https://gamercraze.site/games/playdominoes"
    },
    {
      "id": "slideout",
      "title": "Slide Out",
      "thumbnail": "https://demonisblack.com/assets/img/contents/icons/slideout.png",
      "category": "puzzle",
      "players": 775,
      "description": "Slide the blocks, clear the path, and escape the puzzle in this fun brain-teasing game!",
      "featured": true,
      "link": "https://gamercraze.site/games/slideout"
    },
    {
      "id": "blockpuzzle",
      "title": "Block Puzzle",
      "thumbnail": "https://demonisblack.com/assets/img/contents/icons/blockpuzzle.png",
      "category": "puzzle",
      "players": 568,
      "description": "Fit the blocks into the grid and clear lines in this brain-teasing puzzle.",
      "featured": true,
      "link": "https://gamercraze.site/games/blockpuzzle"
    },
    {
      "id": "bubbleshooter",
      "title": "Bubble Shooter",
      "thumbnail": "https://demonisblack.com/assets/img/contents/icons/bubbleshooter.png",
      "category": "arcade",
      "players": 885,
      "description": "Match and pop bubbles to clear the board in this fun arcade game.",
      "featured": true,
      "link": "https://gamercraze.site/games/bubbleshooter"
    },
    {
      "id": "cannonpaint",
      "title": "Cannon Paint",
      "thumbnail": "https://demonisblack.com/assets/img/contents/icons/cannonpaint.png",
      "category": "arcade",
      "players": 752,
      "description": "Shoot colorful paint and cover every surface to win!",
      "featured": false,
      "link": "https://gamercraze.site/games/cannonpaint"
    },
    {
      "id": "commander",
      "title": "Commander",
      "thumbnail": "https://gamercraze.site/games/Commander/commander.png",
      "category": "adventure",
      "players": 423,
      "description": "Lead your army and dominate the battlefield.",
      "featured": false,
      "link": "https://gamercraze.site/games/Commander"
    },
    {
      "id": "destress",
      "title": "Destress",
      "thumbnail": "https://gamercraze.site/games/destress/destress.jpg",
      "category": "puzzle",
      "players": 159,
      "description": "Relax with calming mini-games designed to ease your stress.",
      "featured": false,
      "link": "https://gamercraze.site/games/destress"
    },
    {
      "id": "extremefollowers",
      "title": "Extreme Followers",
      "thumbnail": "https://demonisblack.com/assets/img/contents/icons/extremefollowers.png",
      "category": "arcade",
      "players": 952,
      "description": "Grow your follower army and become a social media icon!",
      "featured": false,
      "link": "https://gamercraze.site/games/extremefollowers"
    },
    {
      "id": "findmate",
      "title": "Find Mate",
      "thumbnail": "https://demonisblack.com/assets/img/contents/icons/findmate.png",
      "category": "puzzle",
      "players": 753,
      "description": "Match identical tiles and clear the board in this fun puzzle.",
      "featured": false,
      "link": "https://gamercraze.site/games/findmate"
    },
    {
      "id": "findme",
      "title": "Find Me",
      "thumbnail": "https://demonisblack.com/assets/img/contents/icons/findme.png",
      "category": "puzzle",
      "players": 456,
      "description": "Spot the hidden character in a crowd before time runs out!",
      "featured": false,
      "link": "https://gamercraze.site/games/findme"
    },
    {
      "id": "findminime",
      "title": "Find Minime",
      "thumbnail": "https://demonisblack.com/assets/img/contents/icons/findminime.png",
      "category": "puzzle",
      "players": 652,
      "description": "Can you find the mini version of the target? Test your eyes!",
      "featured": false,
      "link": "https://gamercraze.site/games/findminime"
    },
    {
      "id": "fourcolors",
      "title": "Four Colors",
      "thumbnail": "https://demonisblack.com/assets/img/contents/icons/fourcolors.png",
      "category": "arcade",
      "players": 851,
      "description": "Play a fun and fast-paced card game similar to Uno!",
      "featured": false,
      "link": "https://gamercraze.site/games/fourcolors"
    },
    {
      "id": "luckyballs",
      "title": "Lucky Balls",
      "thumbnail": "https://demonisblack.com/assets/img/contents/icons/luckyballs.png",
      "category": "arcade",
      "players": 869,
      "description": "Match and eliminate colorful balls before the timer runs out.",
      "featured": false,
      "link": "https://gamercraze.site/games/luckyballs"
    },
    {
      "id": "marbleblast",
      "title": "Marble Blast",
      "thumbnail": "https://demonisblack.com/assets/img/contents/icons/marbleblast.png",
      "category": "arcade",
      "players": 752,
      "description": "Shoot and match marbles to stop the chain before it's too late!",
      "featured": false,
      "link": "https://gamercraze.site/games/marbleblast"
    },
    {
      "id": "mazerotate",
      "title": "Maze Rotate",
      "thumbnail": "https://demonisblack.com/assets/img/contents/icons/mazerotate.png",
      "category": "puzzle",
      "players": 789,
      "description": "Rotate the maze to help the ball reach the goal.",
      "featured": false,
      "link": "https://gamercraze.site/games/mazerotate"
    },
    {
      "id": "onestroke",
      "title": "One Stroke",
      "thumbnail": "https://demonisblack.com/assets/img/contents/icons/onestroke.png",
      "category": "puzzle",
      "players": 789,
      "description": "Draw the shape in one stroke without lifting your finger.",
      "featured": false,
      "link": "https://gamercraze.site/games/onestroke"
    },
    {
      "id": "playmaze",
      "title": "Play Maze",
      "thumbnail": "https://demonisblack.com/assets/img/contents/icons/playmaze.png",
      "category": "adventure",
      "players": 475,
      "description": "Navigate through tricky mazes and reach the end.",
      "featured": false,
      "link": "https://gamercraze.site/games/playmaze"
    },
    {
      "id": "pocketdino",
      "title": "Pocket Dino",
      "thumbnail": "https://demonisblack.com/assets/img/contents/icons/pocketdino.png",
      "category": "adventure",
      "players": 574,
      "description": "Take care of your tiny dinosaur friend in this cute pet simulator.",
      "featured": false,
      "link": "https://gamercraze.site/games/pocketdino"
    },
    {
      "id": "quizgame2",
      "title": "Quiz Game 2",
      "thumbnail": "https://demonisblack.com/assets/img/contents/icons/quizgame2.png",
      "category": "puzzle",
      "players": 352,
      "description": "Challenge your brain with tricky trivia and fun facts.",
      "featured": false,
      "link": "https://gamercraze.site/games/quizgame2"
    },
    {
      "id": "rainbowbead",
      "title": "Rainbow Bead",
      "thumbnail": "https://demonisblack.com/assets/img/contents/icons/rainbowbead.png",
      "category": "puzzle",
      "players": 653,
      "description": "Match colorful beads in this relaxing puzzle adventure.",
      "featured": false,
      "link": "https://gamercraze.site/games/rainbowbead"
    },
    {
      "id": "skipcard",
      "title": "Skip Card",
      "thumbnail": "https://demonisblack.com/assets/img/contents/icons/skipcard.png",
      "category": "arcade",
      "players": 562,
      "description": "Strategically skip and play cards to win the game.",
      "featured": false,
      "link": "https://gamercraze.site/games/skipcard"
    },
    {
      "id": "snakedash",
      "title": "Snake Dash",
      "thumbnail": "https://demonisblack.com/assets/img/contents/icons/snakedash.png",
      "category": "arcade",
      "players": 262,
      "description": "Control your snake, collect dots, and avoid crashing.",
      "featured": true,
      "link": "https://gamercraze.site/games/snakedash"
    },
    {
      "id": "snakesandladders",
      "title": "Snakes and Ladders",
      "thumbnail": "https://demonisblack.com/assets/img/contents/icons/snakesandladders.png",
      "category": "arcade",
      "players": 789,
      "description": "Classic board game fun! Roll the dice and race to the top.",
      "featured": false,
      "link": "https://gamercraze.site/games/snakesandladders"
    },
    {
      "id": "speedracer",
      "title": "Speed Racer",
      "thumbnail": "https://demonisblack.com/assets/img/contents/icons/speedracer.png",
      "category": "arcade",
      "players": 609,
      "description": "Hit the gas, dodge obstacles, and race to the finish line at lightning speed!",
      "featured": false,
      "link": "https://gamercraze.site/games/speedracer"
    },
    {
      "id": "tanks",
      "title": "Tanks",
      "thumbnail": "https://gamercraze.site/games/Tanks/tanks.png",
      "category": "Action",
      "players": 989,
      "description": "Control your tank and defeat enemies in this action game.",
      "featured": false,
      "link": "https://gamercraze.site/games/Tanks"
    }
  ];

  const game = allGames.find(g => g.id === gameId) || allGames[0];
  
  // Get related games (same category, excluding current game)
  const relatedGames = allGames
    .filter(g => g.category.toLowerCase() === game.category.toLowerCase() && g.id !== game.id)
    .slice(0, 6);

  const handleRating = (rating: number) => {
    setUserRating(rating);
  };

  const handlePlayRelatedGame = (gameId: string) => {
    navigate(`/game/${gameId}`);
  };

  const renderStars = (rating: number, interactive: boolean = false) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`h-5 w-5 ${
          index < rating ? 'text-yellow-400 fill-current' : 'text-gray-600'
        } ${interactive ? 'cursor-pointer hover:text-yellow-400' : ''}`}
        onClick={interactive ? () => handleRating(index + 1) : undefined}
      />
    ));
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <div className="bg-gray-800 border-b border-gray-700 p-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <button
            onClick={() => navigate('/')}
            className="flex items-center space-x-2 text-gray-400 hover:text-green-400 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Home</span>
          </button>
          <h1 className="text-xl font-bold text-white">{game.title}</h1>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setIsLiked(!isLiked)}
              className={`p-2 rounded-lg transition-colors ${
                isLiked ? 'bg-red-600 text-white' : 'bg-gray-700 text-gray-400 hover:text-white'
              }`}
            >
              <Heart className={`h-4 w-4 ${isLiked ? 'fill-current' : ''}`} />
            </button>
            <button className="p-2 bg-gray-700 text-gray-400 hover:text-white rounded-lg transition-colors">
              <Share2 className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row min-h-screen">
        {/* Game Area - Left Side */}
        <div className="lg:w-2/3 p-4">
          <div className="bg-black rounded-lg overflow-hidden h-full min-h-[600px]">
            {/* Game Iframe - Actual HTML5 Game */}
            <iframe
              src={game.link}
              title={game.title}
              className="w-full h-full min-h-[600px] border-0"
              allowFullScreen
              allow="gamepad; microphone; camera"
              sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-pointer-lock"
            />
          </div>
        </div>

        {/* Game Info - Right Side */}
        <div className="lg:w-1/3 p-4 bg-gray-800 overflow-y-auto">
          <div className="space-y-6">
            {/* Game Title and Stats */}
            <div>
              <div className="flex items-center space-x-2 mb-2">
                <span className="bg-purple-600 text-white px-2 py-1 rounded text-xs">
                  {game.category.charAt(0).toUpperCase() + game.category.slice(1)}
                </span>
                <div className="flex items-center space-x-1">
                  {renderStars(5)}
                  <span className="text-sm text-gray-400">({game.players})</span>
                </div>
              </div>
              <p className="text-sm text-gray-400 mb-4">
                {game.players.toLocaleString()} players • Category: {game.category.charAt(0).toUpperCase() + game.category.slice(1)}
              </p>
            </div>

            {/* Description */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-3">About This Game</h3>
              <p className="text-gray-300 text-sm leading-relaxed">{game.description}</p>
            </div>

            {/* Controls */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-3">Controls</h3>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="bg-gray-700 px-2 py-1 rounded text-xs text-white font-mono">
                    Mouse
                  </span>
                  <span className="text-gray-400 text-sm">Click to interact</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="bg-gray-700 px-2 py-1 rounded text-xs text-white font-mono">
                    Arrow Keys
                  </span>
                  <span className="text-gray-400 text-sm">Move/Navigate</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="bg-gray-700 px-2 py-1 rounded text-xs text-white font-mono">
                    Space
                  </span>
                  <span className="text-gray-400 text-sm">Action/Jump</span>
                </div>
              </div>
            </div>

            {/* Tags */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-3">Tags</h3>
              <div className="flex flex-wrap gap-2">
                <span className="bg-gray-700 text-gray-300 px-2 py-1 rounded text-xs hover:bg-gray-600 cursor-pointer transition-colors">
                  #{game.category}
                </span>
                <span className="bg-gray-700 text-gray-300 px-2 py-1 rounded text-xs hover:bg-gray-600 cursor-pointer transition-colors">
                  #html5
                </span>
                <span className="bg-gray-700 text-gray-300 px-2 py-1 rounded text-xs hover:bg-gray-600 cursor-pointer transition-colors">
                  #browser
                </span>
                <span className="bg-gray-700 text-gray-300 px-2 py-1 rounded text-xs hover:bg-gray-600 cursor-pointer transition-colors">
                  #free
                </span>
              </div>
            </div>

            {/* Rating */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-3">Rate This Game</h3>
              <div className="flex items-center space-x-2">
                <div className="flex items-center space-x-1">
                  {renderStars(userRating, true)}
                </div>
                {userRating > 0 && (
                  <span className="text-green-400 text-sm">Thanks!</span>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Games - Bottom */}
      <div className="bg-gray-900 p-4 border-t border-gray-700">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-lg font-semibold text-white mb-4">More {game.category.charAt(0).toUpperCase() + game.category.slice(1)} Games</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {relatedGames.map((relatedGame) => (
              <div 
                key={relatedGame.id} 
                className="bg-gray-800 rounded-lg overflow-hidden hover:bg-gray-700 transition-colors cursor-pointer"
                onClick={() => handlePlayRelatedGame(relatedGame.id)}
              >
                <img
                  src={relatedGame.thumbnail}
                  alt={relatedGame.title}
                  className="w-full h-24 object-cover"
                />
                <div className="p-3">
                  <h4 className="text-white text-sm font-medium truncate">{relatedGame.title}</h4>
                  <div className="flex items-center space-x-1 mt-1">
                    {renderStars(5)}
                  </div>
                  <p className="text-gray-400 text-xs mt-1">{relatedGame.players.toLocaleString()} players</p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Show all games if not enough related games */}
          {relatedGames.length < 6 && (
            <>
              <h3 className="text-lg font-semibold text-white mb-4 mt-8">More Games You Might Like</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {allGames
                  .filter(g => g.id !== game.id && !relatedGames.some(rg => rg.id === g.id))
                  .slice(0, 6)
                  .map((otherGame) => (
                    <div 
                      key={otherGame.id} 
                      className="bg-gray-800 rounded-lg overflow-hidden hover:bg-gray-700 transition-colors cursor-pointer"
                      onClick={() => handlePlayRelatedGame(otherGame.id)}
                    >
                      <img
                        src={otherGame.thumbnail}
                        alt={otherGame.title}
                        className="w-full h-24 object-cover"
                      />
                      <div className="p-3">
                        <h4 className="text-white text-sm font-medium truncate">{otherGame.title}</h4>
                        <div className="flex items-center space-x-1 mt-1">
                          {renderStars(5)}
                        </div>
                        <p className="text-gray-400 text-xs mt-1">{otherGame.players.toLocaleString()} players</p>
                      </div>
                    </div>
                  ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default GamePage;