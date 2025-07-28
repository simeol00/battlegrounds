import React from 'react';
import GameCard from '../components/GameCard';
import AdBanner from '../components/AdBanner';
import { Zap, Trophy, Clock } from 'lucide-react';

const Home: React.FC = () => {
  const featuredGames = [
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
    "description": "Shoot and match marbles to stop the chain before it’s too late!",
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
    "id": "snakesandladders",
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

  const stats = [
    { icon: Zap, label: 'Active Players', value: '50K+' },
    { icon: Trophy, label: 'Games Available', value: '1000+' },
    { icon: Clock, label: 'Hours Played', value: '1M+' }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Play Free <span className="text-green-400">HTML5 Games</span> Online
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Discover thousands of games across all categories. No downloads, no registration required.
            Jump into action with our curated collection of the best browser games.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {stats.map((stat, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700">
                <stat.icon className="h-8 w-8 text-green-400 mx-auto mb-3" />
                <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
          
          {/* AdSense Leaderboard */}
          {/* <div className="flex justify-center mb-8">
            <AdBanner size="leaderboard" />
          </div> */}
        </div>
      </section>

      {/* Featured Games */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Featured Games</h2>
            <p className="text-gray-400 text-lg">Handpicked games that our community loves</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {featuredGames.map((game) => (
              <GameCard key={game.id} {...game} />
            ))}
          </div>
        </div>
      </section>

      {/* Ad Section */}
      {/* <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center">
          <AdBanner size="rectangle" />
        </div>
      </section> */}

      {/* What Our Players Say */}
      <section className="py-16 bg-gray-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">What Our Players Say</h2>
            <p className="text-gray-400 text-lg">Join thousands of satisfied gamers worldwide</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Alex M.",
                location: "New York, USA",
                rating: 5,
                review: "Amazing collection of games! I've been playing here for months and there's always something new to discover. The games load fast and work perfectly.",
                game: "Snake Dash"
              },
              {
                name: "Sarah K.",
                location: "London, UK", 
                rating: 5,
                review: "Love that I don't need to download anything. Perfect for quick gaming sessions during breaks. The puzzle games are my favorite!",
                game: "Block Puzzle"
              },
              {
                name: "Mike R.",
                location: "Toronto, Canada",
                rating: 5,
                review: "Great variety of games and they all run smoothly in my browser. The action games are incredibly fun and addictive!",
                game: "War Ship"
              },
              {
                name: "Emma L.",
                location: "Sydney, Australia",
                rating: 5,
                review: "My kids and I love playing these games together. Safe, fun, and completely free. Highly recommend to other families!",
                game: "Ludo"
              },
              {
                name: "David P.",
                location: "Berlin, Germany",
                rating: 5,
                review: "Impressive HTML5 games that work on any device. I play on my phone, tablet, and computer - always a smooth experience.",
                game: "Racing Thunder"
              },
              {
                name: "Lisa T.",
                location: "Tokyo, Japan",
                rating: 5,
                review: "The best free gaming site I've found. No annoying downloads or registrations. Just pure gaming fun whenever I want!",
                game: "Bubble Shooter"
              }
            ].map((review, index) => (
              <div key={index} className="bg-gray-800 rounded-lg p-6 hover:bg-gray-750 transition-colors">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {review.name.charAt(0)}
                  </div>
                  <div className="ml-4">
                    <h4 className="text-white font-semibold">{review.name}</h4>
                    <p className="text-gray-400 text-sm">{review.location}</p>
                  </div>
                </div>
                
                <div className="flex items-center mb-3">
                  {Array.from({ length: review.rating }, (_, i) => (
                    <span key={i} className="text-yellow-400 text-lg">★</span>
                  ))}
                </div>
                
                <p className="text-gray-300 mb-4 leading-relaxed">"{review.review}"</p>
                
                <div className="text-green-400 text-sm font-medium">
                  Favorite Game: {review.game}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;