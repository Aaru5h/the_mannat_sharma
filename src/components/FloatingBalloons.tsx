
import React from 'react';

const FloatingBalloons = () => {
  const balloons = [
    { id: 1, color: '#FFB6C1', x: '10%', delay: '0s' },
    { id: 2, color: '#FFD700', x: '20%', delay: '1s' },
    { id: 3, color: '#E6E6FA', x: '80%', delay: '2s' },
    { id: 4, color: '#FFCCCB', x: '90%', delay: '0.5s' },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {balloons.map((balloon) => (
        <div
          key={balloon.id}
          className="absolute bottom-0 w-16 h-20 animate-balloon"
          style={{
            left: balloon.x,
            animationDelay: balloon.delay
          }}
        >
          <div
            className="w-full h-16 rounded-full shadow-lg relative"
            style={{ backgroundColor: balloon.color }}
          >
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0.5 h-8 bg-gray-400"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FloatingBalloons;
