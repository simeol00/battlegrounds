import React from 'react';
import { Users, Target, Award, Heart } from 'lucide-react';

const AboutUs: React.FC = () => {
  const stats = [
    { icon: Users, label: 'Active Players', value: '50,000+' },
    { icon: Target, label: 'Games Available', value: '1,000+' },
    { icon: Award, label: 'Years Experience', value: '5+' },
    { icon: Heart, label: 'Player Satisfaction', value: '98%' }
  ];

  const team = [
    {
      name: 'Alex Johnson',
      role: 'Founder & CEO',
      description: 'Gaming enthusiast with 10+ years in the industry',
      image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      name: 'Sarah Chen',
      role: 'Head of Game Curation',
      description: 'Expert in finding and selecting the best HTML5 games',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      name: 'Mike Rodriguez',
      role: 'Technical Director',
      description: 'Ensures smooth gameplay and platform performance',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300'
    }
  ];

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white mb-6">About Battlegrounds</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We're passionate about bringing the best free HTML5 games to players worldwide. 
            Our platform connects gaming enthusiasts with carefully curated, high-quality games 
            that can be played instantly in any modern browser.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="bg-gray-800 rounded-lg p-6 text-center">
              <stat.icon className="h-12 w-12 text-green-400 mx-auto mb-4" />
              <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Our Story */}
        <div className="bg-gray-800 rounded-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-white mb-6">Our Story</h2>
          <div className="prose prose-lg text-gray-300">
            <p className="mb-4">
              Battlegrounds was founded in 2019 with a simple mission: make high-quality gaming 
              accessible to everyone, regardless of their device or location. We believe that 
              great games shouldn't require downloads, installations, or expensive hardware.
            </p>
            <p className="mb-4">
              Our team of gaming enthusiasts works tirelessly to discover, test, and curate 
              the best HTML5 games from developers around the world. We've built a platform 
              that not only showcases these games but also provides a seamless, ad-supported 
              experience that keeps our games free for everyone.
            </p>
            <p>
              Today, we're proud to serve over 50,000 active players monthly, offering more 
              than 1,000 carefully selected games across dozens of categories. From classic 
              arcade games to modern puzzle adventures, we've got something for every type 
              of gamer.
            </p>
          </div>
        </div>

        {/* Mission & Values */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <div className="bg-gray-800 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
            <p className="text-gray-300">
              To democratize gaming by providing free, instant access to high-quality HTML5 games. 
              We strive to create a platform where players can discover new favorites, enjoy 
              classic titles, and connect with a global gaming community.
            </p>
          </div>
          
          <div className="bg-gray-800 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-white mb-4">Our Values</h3>
            <ul className="text-gray-300 space-y-2">
              <li>• <strong className="text-green-400">Quality First:</strong> Every game is hand-tested and curated</li>
              <li>• <strong className="text-green-400">Accessibility:</strong> Free games for everyone, everywhere</li>
              <li>• <strong className="text-green-400">Community:</strong> Building connections through shared gaming experiences</li>
              <li>• <strong className="text-green-400">Innovation:</strong> Constantly improving our platform and user experience</li>
            </ul>
          </div>
        </div>

        {/* Team */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-gray-800 rounded-lg p-6 text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold text-white mb-2">{member.name}</h3>
                <div className="text-green-400 font-medium mb-3">{member.role}</div>
                <p className="text-gray-400 text-sm">{member.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact CTA */}
        <div className="bg-gradient-to-r from-green-600 to-purple-600 rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Get in Touch</h2>
          <p className="text-white mb-6">
            Have questions, suggestions, or want to partner with us? We'd love to hear from you!
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;