
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Navigation from '@/components/Navigation';

const EasterEggPage = () => {
  const [showContent, setShowContent] = useState(false);
  const [currentJoke, setCurrentJoke] = useState(0);

  const surpriseContent = [
    {
      type: "greeting",
      content: "If You're Reading This, You're a Legend! 🏆"
    },
    {
      type: "joke",
      content: "Why did I make a whole website for your birthday? Because a simple 'Happy Birthday' text wasn't extra enough for someone as extra as you! 😂"
    },
    {
      type: "meme",
      content: "Me: I'll just make a simple birthday message\nAlso me: *creates an entire multi-page website with animations* 🤪"
    },
    {
      type: "secret",
      content: "Secret confession: I spent way too much time picking the perfect colors for this website because I knew you'd notice if they weren't perfect! 💅"
    },
    {
      type: "surprise",
      content: "[INSERT YOUR SPECIAL SURPRISE/GIFT MESSAGE HERE - maybe a hint about a real gift, a special plan, or a heartfelt surprise you have prepared!]"
    }
  ];

  useEffect(() => {
    setShowContent(true);
    const interval = setInterval(() => {
      setCurrentJoke((prev) => (prev + 1) % (surpriseContent.length - 1));
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-400/40 via-pink-400/30 to-birthday-gold/40 relative overflow-hidden">
      <Navigation />
      
      {/* Floating emojis background */}
      <div className="absolute inset-0 pointer-events-none">
        {['🎉', '🎊', '🎈', '✨', '🌟', '💖', '🦄', '🎁'].map((emoji, index) => (
          <div
            key={index}
            className="absolute text-4xl animate-bounce"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          >
            {emoji}
          </div>
        ))}
      </div>

      <div className="container mx-auto px-4 pt-24 pb-12 relative z-10">
        <div className={`max-w-4xl mx-auto text-center ${showContent ? 'animate-fade-in-up' : 'opacity-0'}`}>
          
          {/* Main Title */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-6xl font-script text-white mb-6 drop-shadow-lg">
              🏆 LEGEND STATUS UNLOCKED! 🏆
            </h1>
            <div className="text-6xl mb-6 animate-sparkle">🎭</div>
            <p className="text-xl text-white/90 font-elegant">
              You found the secret page! Only true legends make it here 😎
            </p>
          </div>

          {/* Rotating Content */}
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12 mb-8 relative overflow-hidden">
            
            {/* Decorative elements */}
            <div className="absolute top-4 left-4 text-3xl animate-spin">🌟</div>
            <div className="absolute top-4 right-4 text-3xl animate-pulse">✨</div>
            <div className="absolute bottom-4 left-4 text-3xl animate-bounce">🎉</div>
            <div className="absolute bottom-4 right-4 text-3xl animate-ping">💖</div>

            <div className="space-y-8">
              {surpriseContent.map((item, index) => (
                <div
                  key={index}
                  className={`transition-all duration-1000 ${
                    index === 0 || index === currentJoke + 1 || index === surpriseContent.length - 1
                      ? 'opacity-100 transform translate-y-0' 
                      : 'opacity-0 transform translate-y-8 absolute'
                  }`}
                >
                  {item.type === "greeting" && (
                    <h2 className="text-3xl md:text-4xl font-elegant font-bold text-birthday-gold">
                      {item.content}
                    </h2>
                  )}
                  
                  {item.type === "joke" && index === currentJoke + 1 && (
                    <div className="bg-birthday-pink/20 rounded-2xl p-6">
                      <p className="text-xl text-gray-700 font-elegant leading-relaxed">
                        {item.content}
                      </p>
                    </div>
                  )}
                  
                  {item.type === "meme" && index === currentJoke + 1 && (
                    <div className="bg-birthday-lavender/30 rounded-2xl p-6">
                      <pre className="text-lg text-gray-700 font-mono whitespace-pre-wrap">
                        {item.content}
                      </pre>
                    </div>
                  )}
                  
                  {item.type === "secret" && index === currentJoke + 1 && (
                    <div className="bg-birthday-gold/20 rounded-2xl p-6">
                      <p className="text-xl text-gray-700 font-elegant leading-relaxed italic">
                        {item.content}
                      </p>
                    </div>
                  )}
                  
                  {item.type === "surprise" && (
                    <div className="bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-2xl p-8 border-4 border-birthday-gold border-dashed">
                      <h3 className="text-2xl font-script text-birthday-gold mb-4">
                        🎁 Special Surprise 🎁
                      </h3>
                      <p className="text-lg text-gray-700 font-elegant">
                        {item.content}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Progress indicator */}
            <div className="flex justify-center space-x-2 mt-8">
              {Array.from({ length: surpriseContent.length - 2 }).map((_, index) => (
                <div
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentJoke ? 'bg-birthday-gold scale-125' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Achievement Badge */}
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8 mb-8">
            <div className="text-6xl mb-4">🏅</div>
            <h3 className="text-2xl font-script text-birthday-gold mb-4">
              Achievement Unlocked!
            </h3>
            <p className="text-lg text-gray-700 font-elegant">
              "Website Explorer Extraordinaire"
            </p>
            <p className="text-sm text-gray-500 mt-2">
              You've successfully navigated through all the pages of this birthday tribute!
            </p>
          </div>

          {/* Customization Note */}
          <div className="bg-birthday-mint/30 rounded-2xl p-6 mb-8">
            <p className="text-gray-700 font-elegant">
              <strong>🎯 Easter Egg Customization:</strong> Replace the surprise message above with your actual surprise - 
              maybe a hint about a real gift, special plans, or a heartfelt message you've been saving for last!
            </p>
          </div>

          {/* Navigation Back */}
          <div className="space-y-4">
            <p className="text-white/90 text-lg font-elegant">
              Ready to start the journey again? 🎢
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/">
                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-birthday-gold to-yellow-400 hover:from-yellow-400 hover:to-birthday-gold text-white font-semibold py-4 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  🏠 Back to the Beginning
                </Button>
              </Link>
              <Link to="/memories">
                <Button 
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-purple-600 font-semibold py-4 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  📸 Back to Memories
                </Button>
              </Link>
            </div>
          </div>

          {/* Final message */}
          <div className="mt-12 text-white/80 font-script text-xl">
            You truly are a legend for making it this far! 🌟
          </div>
        </div>
      </div>
    </div>
  );
};

export default EasterEggPage;
