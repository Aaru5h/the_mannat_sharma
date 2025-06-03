
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Navigation from '@/components/Navigation';

const CollagePage = () => {
  const [currentPhoto, setCurrentPhoto] = useState(0);
  const [showContent, setShowContent] = useState(false);

  const memoryPhotos = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=400&fit=crop",
      caption: "[Memory #1 - Add your caption here]",
      date: "[Date]"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=400&fit=crop",
      caption: "[Memory #2 - Add your caption here]",
      date: "[Date]"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=400&fit=crop",
      caption: "[Memory #3 - Add your caption here]",
      date: "[Date]"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=400&fit=crop",
      caption: "[Memory #4 - Add your caption here]",
      date: "[Date]"
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&h=400&fit=crop",
      caption: "[Memory #5 - Add your caption here]",
      date: "[Date]"
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=400&h=400&fit=crop",
      caption: "[Memory #6 - Add your caption here]",
      date: "[Date]"
    },
    {
      id: 7,
      src: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=400&fit=crop&crop=entropy",
      caption: "[Memory #7 - Add your caption here]",
      date: "[Date]"
    },
    {
      id: 8,
      src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=400&fit=crop&crop=faces",
      caption: "[Memory #8 - Add your caption here]",
      date: "[Date]"
    }
  ];

  useEffect(() => {
    setShowContent(true);
  }, []);

  const nextPhoto = () => {
    setCurrentPhoto((prev) => (prev + 1) % memoryPhotos.length);
  };

  const prevPhoto = () => {
    setCurrentPhoto((prev) => (prev - 1 + memoryPhotos.length) % memoryPhotos.length);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-birthday-lavender/40 via-birthday-mint/30 to-birthday-peach/40">
      <Navigation currentPage="/memories" />
      
      <div className="container mx-auto px-4 pt-24 pb-12">
        <div className={`max-w-7xl mx-auto ${showContent ? 'animate-fade-in-up' : 'opacity-0'}`}>
          
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-script text-birthday-gold mb-4">
              Memory Lane 📸
            </h1>
            <p className="text-xl text-gray-600 font-elegant">
              Our beautiful journey together
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-birthday-pink to-birthday-gold mx-auto rounded-full mt-4"></div>
          </div>

          {/* Featured Photo Display */}
          <div className="mb-12">
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8 relative overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                
                {/* Large Photo */}
                <div className="relative group">
                  <div className="aspect-square rounded-2xl overflow-hidden shadow-xl transform group-hover:scale-105 transition-all duration-500">
                    <img 
                      src={memoryPhotos[currentPhoto].src}
                      alt={`Memory ${currentPhoto + 1}`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                  </div>
                  
                  {/* Navigation Arrows */}
                  <button 
                    onClick={prevPhoto}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110"
                  >
                    <span className="text-2xl">←</span>
                  </button>
                  <button 
                    onClick={nextPhoto}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110"
                  >
                    <span className="text-2xl">→</span>
                  </button>
                </div>

                {/* Photo Description */}
                <div className="space-y-6">
                  <div className="bg-birthday-gold/20 rounded-2xl p-6">
                    <h3 className="text-2xl font-script text-birthday-gold mb-2">
                      {memoryPhotos[currentPhoto].date}
                    </h3>
                    <p className="text-lg text-gray-700 font-elegant leading-relaxed">
                      {memoryPhotos[currentPhoto].caption}
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <p className="text-sm text-gray-500 mb-4">
                      Photo {currentPhoto + 1} of {memoryPhotos.length}
                    </p>
                    <div className="flex justify-center space-x-2">
                      {memoryPhotos.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentPhoto(index)}
                          className={`w-3 h-3 rounded-full transition-all duration-300 ${
                            index === currentPhoto 
                              ? 'bg-birthday-gold scale-125' 
                              : 'bg-gray-300 hover:bg-birthday-pink'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Photo Grid */}
          <div className="mb-12">
            <h2 className="text-3xl font-script text-center text-birthday-gold mb-8">
              All Our Beautiful Moments ✨
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {memoryPhotos.map((photo, index) => (
                <div 
                  key={photo.id}
                  className={`relative group cursor-pointer transform transition-all duration-500 hover:scale-105 ${
                    index === currentPhoto ? 'ring-4 ring-birthday-gold shadow-2xl' : ''
                  }`}
                  onClick={() => setCurrentPhoto(index)}
                >
                  <div className="aspect-square rounded-xl overflow-hidden shadow-lg">
                    <img 
                      src={photo.src}
                      alt={`Memory ${index + 1}`}
                      className="w-full h-full object-cover group-hover:brightness-110 transition-all duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                    <div className="absolute bottom-2 left-2 text-white text-sm font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300">
                      Memory {index + 1}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Timeline Effect */}
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-birthday-pink to-birthday-gold rounded-full"></div>
            
            <div className="space-y-12">
              {memoryPhotos.slice(0, 4).map((photo, index) => (
                <div key={`timeline-${photo.id}`} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className="flex-1">
                    <div className={`bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-6 ${index % 2 === 0 ? 'mr-8' : 'ml-8'}`}>
                      <h4 className="text-xl font-script text-birthday-gold mb-2">{photo.date}</h4>
                      <p className="text-gray-700">{photo.caption}</p>
                    </div>
                  </div>
                  
                  <div className="w-16 h-16 bg-birthday-gold rounded-full flex items-center justify-center shadow-lg z-10">
                    <span className="text-white font-bold">{index + 1}</span>
                  </div>
                  
                  <div className="flex-1"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Customization Instructions */}
          <div className="mt-16 p-8 bg-gradient-to-r from-birthday-mint/40 to-birthday-lavender/40 rounded-3xl">
            <h3 className="text-2xl font-script text-center text-birthday-gold mb-4">
              📸 Photo Upload Instructions
            </h3>
            <div className="text-center space-y-4 text-gray-700 font-elegant">
              <p>
                <strong>Ready to add your real memories?</strong> Simply replace the placeholder images with your actual photos!
              </p>
              <p>
                Update the captions and dates to reflect your real shared experiences. Each photo slot is designed to showcase your most treasured moments together.
              </p>
              <p className="text-birthday-gold font-script text-lg">
                "The best memories are made with the best friends" ✨
              </p>
            </div>
          </div>

          {/* Secret Navigation */}
          <div className="text-center mt-12">
            <p className="text-lg text-gray-600 mb-4 font-elegant">
              Think you've seen everything? Think again... 👀
            </p>
            <Link to="/legend">
              <Button 
                size="lg"
                variant="outline"
                className="border-2 border-birthday-gold text-birthday-gold hover:bg-birthday-gold hover:text-white font-semibold py-4 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                🔍 Find the Hidden Surprise
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollagePage;
