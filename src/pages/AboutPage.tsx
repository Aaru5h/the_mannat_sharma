
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Navigation from '@/components/Navigation';

const AboutPage = () => {
  const [visibleSections, setVisibleSections] = useState<number[]>([]);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    setShowContent(true);
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        setVisibleSections(prev => {
          if (prev.length < 6) {
            return [...prev, prev.length];
          }
          return prev;
        });
      }, 800);

      return () => clearInterval(interval);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const profileData = {
    nicknames: ["Kammo", "Moti", "Buddhi"],
    funFacts: [
      "Expert at anything she sets her mind to!",
      "Brilliant editor", 
      "One of the Smartest and Kindest people I know",
      "Always available"
    ],
    bestAt: [
      "Editing skills top class😎",
      "Dance🥴",
      "Poetry",
      "Bhai ki awaaz🤌"
    ],
    brainStats: [
      { skill: "Sarcasm", percentage: 90 },
      { skill: "Kindness", percentage: 100 },
      { skill: "Humor", percentage: 98.7 },
      { skill: "Chaos Energy", percentage: 95 },
      { skill: "Wisdom", percentage: 94 },
      { skill: "Adventure Spirit", percentage: 88 }
    ],
  };

  const Section = ({ index, title, icon, children }: { index: number; title: string; icon: string; children: React.ReactNode }) => (
    <div className={`transition-all duration-1000 ${
      visibleSections.includes(index) 
        ? 'opacity-100 transform translate-y-0' 
        : 'opacity-0 transform translate-y-8'
    }`}>
      <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
        <div className="flex items-center mb-4">
          <span className="text-3xl mr-3">{icon}</span>
          <h3 className="text-2xl font-elegant font-bold text-gray-800">{title}</h3>
        </div>
        {children}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-birthday-peach/40 via-birthday-lavender/30 to-birthday-mint/40">
      <Navigation currentPage="/about" />
      
      <div className="container mx-auto px-4 pt-24 pb-12">
        <div className={`max-w-6xl mx-auto ${showContent ? 'animate-fade-in-up' : 'opacity-0'}`}>
          
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-script text-birthday-gold mb-4">
              Her Royal Excellence 👑
            </h1>
            <p className="text-xl text-gray-600 font-elegant">
              Everything you need to know about the woman of the hour
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-birthday-pink to-birthday-gold mx-auto rounded-full mt-4"></div>
          </div>

          {/* Profile Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Nicknames */}
            <Section index={0} title="Royal Titles" icon="👑">
              <div className="space-y-2">
                {profileData.nicknames.map((nickname, i) => (
                  <div key={i} className="bg-birthday-pink/20 rounded-full px-4 py-2 text-center">
                    <span className="font-script text-lg text-gray-700">{nickname}</span>
                  </div>
                ))}
              </div>
            </Section>

            {/* Fun Facts */}
            <Section index={1} title="Fun Facts" icon="🎂">
              <ul className="space-y-3">
                {profileData.funFacts.map((fact, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-birthday-gold mr-2">✨</span>
                    <span className="text-gray-700">{fact}</span>
                  </li>
                ))}
              </ul>
            </Section>

            {/* Best At */}
            <Section index={2} title="She's the Best At" icon="🥇">
              <div className="space-y-3">
                {profileData.bestAt.map((skill, i) => (
                  <div key={i} className="flex items-center">
                    <div className="w-3 h-3 bg-birthday-gold rounded-full mr-3 animate-pulse"></div>
                    <span className="text-gray-700 font-medium">{skill}</span>
                  </div>
                ))}
              </div>
            </Section>

            {/* Brain Stats */}
            <Section index={3} title="Brain Stats" icon="🧠">
              <div className="space-y-4">
                {profileData.brainStats.map((stat, i) => (
                  <div key={i}>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-700 font-medium">{stat.skill}</span>
                      <span className="text-birthday-gold font-bold">{stat.percentage}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-birthday-pink to-birthday-gold h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${stat.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </Section>

            {/* Quotes
            <Section index={4} title="Famous Quotes" icon="🗣️">
              <div className="space-y-4">
                {profileData.quotes.map((quote, i) => (
                  <div key={i} className="bg-birthday-lavender/30 rounded-lg p-3 relative">
                    <span className="text-birthday-gold text-2xl absolute -top-2 -left-2">"</span>
                    <p className="text-gray-700 italic pl-4">{quote}</p>
                    <span className="text-birthday-gold text-2xl absolute -bottom-2 -right-2">"</span>
                  </div>
                ))}
              </div>
            </Section> */}

            {/* Special Achievement */}
            <Section index={5} title="Special Achievement" icon="🌟">
              <div className="text-center bg-gradient-to-r from-birthday-gold/20 to-birthday-pink/20 rounded-xl p-6">
                <div className="text-4xl mb-4">Mujhse Dosti🏆</div>
                <h4 className="font-script text-2xl text-birthday-gold mb-2">
                  World's Bestestestest Friend Award
                </h4>
                <p className="text-gray-700">
                  Officially certified as the most amazing bestestestest friend in existence. 
                  No competition needed! 💕
                </p>
              </div>
            </Section>
          </div>

          {/* Customization Note */}
          <div className="mt-12 p-6 bg-birthday-mint/30 rounded-2xl">
            <p className="text-center text-gray-700 font-elegant">
              <strong>Happy Unnisva Janamdin🥳</strong> May tu jiye hazaarin laakhon saal aur mai tujhse aise hi tang karta rahu🥴
            </p>
            <p>Lobe U💛</p>
          </div>

          {/* Navigation */}
          {visibleSections.length >= 6 && (
            <div className="text-center mt-8 animate-fade-in-up">
              <p className="text-lg text-gray-600 mb-4 font-elegant">
                Photos Dekhte hai thodi bohot chal 📸✨
              </p>
              <Link to="/photos">
                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-purple-400 to-pink-400 hover:from-purple-500 hover:to-pink-500 text-white font-semibold py-4 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  📸 See a Little Something
                </Button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
