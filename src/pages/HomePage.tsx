
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import ConfettiAnimation from '@/components/ConfettiAnimation';
import FloatingBalloons from '@/components/FloatingBalloons';
import Navigation from '@/components/Navigation';

const HomePage = () => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-birthday-pink/30 via-birthday-peach/20 to-birthday-lavender/30 relative overflow-hidden">
      <ConfettiAnimation />
      <FloatingBalloons />
      <Navigation currentPage="/" />
      
      <div className="min-h-screen flex flex-col items-center justify-center px-4 pt-20">
        <div className={`text-center space-y-8 ${showContent ? 'animate-fade-in-up' : 'opacity-0'}`}>
          
          {/* Main Title */}
          <div className="space-y-4">
            <h1 className="text-6xl md:text-8xl font-elegant font-bold text-transparent bg-clip-text bg-gradient-to-r from-birthday-gold via-pink-500 to-purple-600 animate-sparkle">
              HAPPY BIRTHDAY
            </h1>
            <h2 className="text-4xl md:text-6xl font-script text-birthday-gold drop-shadow-lg">
              [Her Name]! 🎉
            </h2>
          </div>

          {/* Photo placeholder */}
          <div className="relative mx-auto w-64 h-64 rounded-full overflow-hidden shadow-2xl border-4 border-birthday-gold animate-balloon">
            <img 
              src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=400&fit=crop&crop=face"
              alt="Birthday girl"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-birthday-pink/20 to-transparent"></div>
          </div>

          {/* Birthday message */}
          <div className="max-w-2xl mx-auto">
            <p className="text-xl md:text-2xl text-gray-700 font-elegant leading-relaxed">
              Today we celebrate the most amazing, wonderful, 
              and absolutely incredible person I know! 
              🌟✨
            </p>
          </div>

          {/* Navigation buttons */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-lg mx-auto pt-8">
            <Link to="/message">
              <Button 
                size="lg" 
                className="w-full bg-gradient-to-r from-birthday-pink to-birthday-gold hover:from-pink-400 hover:to-yellow-400 text-white font-semibold py-4 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                💌 Read the Message
              </Button>
            </Link>
            
            <Link to="/poem">
              <Button 
                size="lg" 
                variant="outline"
                className="w-full border-2 border-birthday-gold text-birthday-gold hover:bg-birthday-gold hover:text-white font-semibold py-4 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                ✨ See the Poem
              </Button>
            </Link>
            
            <Link to="/about">
              <Button 
                size="lg" 
                variant="outline"
                className="w-full border-2 border-purple-400 text-purple-600 hover:bg-purple-400 hover:text-white font-semibold py-4 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                👑 About the Queen
              </Button>
            </Link>
            
            <Link to="/memories">
              <Button 
                size="lg" 
                className="w-full bg-gradient-to-r from-purple-400 to-pink-400 hover:from-purple-500 hover:to-pink-500 text-white font-semibold py-4 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                📸 Memory Lane
              </Button>
            </Link>
          </div>

          {/* Fun birthday fact */}
          <div className="mt-12 p-6 bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg max-w-md mx-auto">
            <p className="text-lg font-script text-gray-700">
              "Life is a party, and you're the guest of honor!" 🎈
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
