
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Navigation from '@/components/Navigation';

const MessagePage = () => {
  const [currentParagraph, setCurrentParagraph] = useState(0);
  const [showContent, setShowContent] = useState(false);

  const messageParagraphs = [
    "Happy Birthday, Kammo! 🌟",
    
    "Aaj ka din sirf tera hai — ek dum mast waala day 👑✨",
    
    "Tujh jaise log zindagi mein ek baar milte hain, aur jo mil jaye… unki life sorted ho jaati hai.",
    
    "Teri har smile ek vibe hai,",
    "Tera har rant ek episode,",
    "Aur teri dosti... ek priceless blessing 💖",
    
    "Kabhi kabhi sochta hoon ki agar tu meri life mein na hoti, toh main kitna zyada boring insaan hota 😅",
    
    "Aaj sirf wish nahi kar raha...",
    "dil se dua hai — tu hamesha khush rahe, maze kare, aur duniya ko apni sparkle se chamkaaye!",
    
    "Love you meri bestie,",
    "Tere bina toh vibes bhi adhoori lagti hai 💫",
    "Now go eat cake, dance like no one's watching, and soak in all the birthday love! 🥳🎂",
    "Tera idiot-friend-for-life 😌",
  ];

  useEffect(() => {
    setShowContent(true);
    const interval = setInterval(() => {
      setCurrentParagraph((prev) => {
        if (prev < messageParagraphs.length - 1) {
          return prev + 1;
        }
        return prev;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [messageParagraphs.length]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-birthday-lavender/40 via-white to-birthday-mint/30">
      <Navigation currentPage="/message" />
      
      <div className="container mx-auto px-4 pt-24 pb-12">
        <div className={`max-w-4xl mx-auto ${showContent ? 'animate-fade-in-up' : 'opacity-0'}`}>
          
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-script text-birthday-gold mb-4">
              A Message From the Heart 💌
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-birthday-pink to-birthday-gold mx-auto rounded-full"></div>
          </div>

          {/* Message Content */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12 relative overflow-hidden">
            
            {/* Decorative elements */}
            <div className="absolute top-4 right-4 text-4xl animate-bounce">💝</div>
            <div className="absolute bottom-4 left-4 text-3xl animate-pulse">✨</div>
            
            <div className="space-y-6">
              {messageParagraphs.map((paragraph, index) => (
                <div
                  key={index}
                  className={`transition-all duration-1000 ${
                    index <= currentParagraph 
                      ? 'opacity-100 transform translate-y-0' 
                      : 'opacity-0 transform translate-y-4'
                  }`}
                >
                  <p className={`
                    ${index === 0 ? 'text-3xl font-script text-birthday-gold' : 'text-lg'}
                    ${index === messageParagraphs.length - 1 ? 'text-xl font-semibold text-purple-600' : ''}
                    font-elegant leading-relaxed text-gray-700 mb-4
                  `}>
                    {paragraph}
                  </p>
                  {index === 0 && <div className="w-16 h-0.5 bg-birthday-pink rounded-full mb-4"></div>}
                </div>
              ))}
            </div>

            {/* Signature */}
            {currentParagraph >= messageParagraphs.length - 1 && (
              <div className="mt-8 text-right animate-fade-in-up">
                <p className="text-2xl font-script text-birthday-gold">
                  With all my love,
                </p>
                <p className="text-xl font-script text-gray-600 mt-2">
                  Your Best Friend Forever 💕
                </p>
              </div>
            )}
          </div>

          {/* Navigation */}
          {currentParagraph >= messageParagraphs.length - 1 && (
            <div className="text-center mt-8 animate-fade-in-up">
              <p className="text-lg text-gray-600 mb-4 font-elegant">
                Aapke liye kuch likha hai ✨
              </p>
              <Link to="/poem">
                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-purple-400 to-pink-400 hover:from-purple-500 hover:to-pink-500 text-white font-semibold py-4 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  Read the Poem 📝✨
                </Button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MessagePage;
