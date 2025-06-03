
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Navigation from '@/components/Navigation';

const PoemPage = () => {
  const [currentLine, setCurrentLine] = useState(0);
  const [showContent, setShowContent] = useState(false);

  // Placeholder poem structure - you can easily replace this
  const poemLines = [
    "Tere bina duniya hai thodi si feeki,",
    "Tu aaye toh har shaam ban jaaye filmi. 🌆",
    "Teri baatein — ek comfort zone,",
    "Tera smile — mera happy tone. 😊",
    "Kabhi hero, kabhi villain si tu,",
    "Kabhi sweet si chai, toh kabhi full caffeine brew! ☕",
    "Tu hasi toh lagta hai sab kuch sahi hai,",
    "Tu na ho toh sab kuch feels... not right. 🥺",
    "Teri dosti — meri proudest find,",
    "Ek aisi bond, jise duniya bhi na define kar paaye in kind. 🤝",
    "Aaj tere birthday pe yeh kehna hai zaroori,",
    "Tu hai meri life ki sabse khoobsurat theory. 📖",
    "Khush rehna, chamakti rehna forever,",
    "Kyunki tu jaise koi nahi... kabhi bhi, kabhi bhi never. 🌸"
  ];

  useEffect(() => {
    setShowContent(true);
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        setCurrentLine((prev) => {
          if (prev < poemLines.length - 1) {
            return prev + 1;
          }
          return prev;
        });
      }, 800);

      return () => clearInterval(interval);
    }, 1000);

    return () => clearTimeout(timer);
  }, [poemLines.length]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-birthday-mint/40 via-birthday-lavender/20 to-birthday-peach/30">
      <Navigation currentPage="/poem" />
      
      <div className="container mx-auto px-4 pt-24 pb-12">
        <div className={`max-w-4xl mx-auto ${showContent ? 'animate-fade-in-up' : 'opacity-0'}`}>
          
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-script text-birthday-gold mb-4">
              Words Just for You ✨
            </h1>
            <p className="text-xl text-gray-600 font-elegant">
              A poem written from the heart
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-birthday-pink to-birthday-gold mx-auto rounded-full mt-4"></div>
          </div>

          {/* Poem Container */}
          <div className="relative">
            {/* Background decorative elements */}
            <div className="absolute -top-8 -left-8 text-6xl text-birthday-pink/30 animate-pulse">"</div>
            <div className="absolute -bottom-8 -right-8 text-6xl text-birthday-pink/30 animate-pulse">"</div>
            
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12 relative overflow-hidden">
              
              {/* Poem paper texture effect */}
              <div className="absolute inset-0 opacity-5">
                <div className="w-full h-full bg-repeat" style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3C/g%3E%3C/svg%3E")`
                }}></div>
              </div>

              <div className="relative z-10 space-y-4 text-center">
                {poemLines.map((line, index) => (
                  <div
                    key={index}
                    className={`transition-all duration-1000 ${
                      index <= currentLine 
                        ? 'opacity-100 transform translate-y-0' 
                        : 'opacity-0 transform translate-y-4'
                    }`}
                  >
                    {line === "" ? (
                      <div className="h-4"></div>
                    ) : (
                      <p className={`
                        ${line.includes('[') ? 'text-birthday-gold font-script text-2xl' : 'text-gray-700 font-elegant text-xl'}
                        ${index === 0 || index === poemLines.length - 1 ? 'text-2xl font-bold text-purple-600' : ''}
                        leading-relaxed transition-all duration-500 hover:scale-105
                      `}>
                        {line}
                      </p>
                    )}
                  </div>
                ))}
              </div>

              {/* Decorative flourishes */}
              {currentLine >= poemLines.length - 1 && (
                <div className="flex justify-center mt-8 space-x-4 animate-fade-in-up">
                  <div className="text-2xl animate-bounce">🌸</div>
                  <div className="text-2xl animate-bounce" style={{ animationDelay: '0.2s' }}>✨</div>
                  <div className="text-2xl animate-bounce" style={{ animationDelay: '0.4s' }}>🌸</div>
                </div>
              )}
            </div>
          </div>

          {/* Instructions for customization */}
          <div className="mt-8 p-6 bg-birthday-gold/20 rounded-2xl">
            <p className="text-center text-gray-700 font-elegant">
              <strong>✏️ Customization Note:</strong> Replace the placeholder lines with your own heartfelt verses! 
              The poem structure is ready for your personal touch.
            </p>
          </div>

          {/* Navigation */}
          {currentLine >= poemLines.length - 1 && (
            <div className="text-center mt-8 space-y-4 animate-fade-in-up">
              <p className="text-lg text-gray-600 font-elegant">
                Want to know more about the birthday queen? 👑
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/about">
                  <Button 
                    size="lg"
                    className="bg-gradient-to-r from-birthday-gold to-yellow-400 hover:from-yellow-400 hover:to-birthday-gold text-white font-semibold py-4 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  >
                    👑 About Her Royal Excellence
                  </Button>
                </Link>
                <Link to="/photos">
                  <Button 
                    size="lg"
                    variant="outline"
                    className="border-2 border-purple-400 text-purple-600 hover:bg-purple-400 hover:text-white font-semibold py-4 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  >
                    📸 See Memories
                  </Button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PoemPage;
