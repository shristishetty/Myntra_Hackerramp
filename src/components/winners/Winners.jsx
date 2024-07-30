// src/Winners.js
import React from 'react';
import './Winners.css';

const Winners = () => {
  const winners = [
    { name: 'Ava', description: '1st place winner', rank: 1 },
    { name: 'Emma', description: '2nd place winner', rank: 2 },
    { name: 'Sophia', description: '3rd place winner', rank: 3 },
  ];

  return (
    <div className="winners-container">
      <h2>Previous Contest Winners</h2>
      <div className="announcement-banner">ANNOUNCEMENT</div>
      <div className="podium-container">
        <img src="/podium.png" alt="Podium" className="podium-image" />
        {winners.map((winner, index) => (
          <div key={index} className={`podium-avatar rank-${winner.rank}`}>
            <img src={`winner${winner.rank}.png`} alt={winner.name} className="winner-image" />
          </div>
        ))}
      </div>
      <div className="winner-info-container">
        {winners.map((winner, index) => (
          <div key={index} className="winner-info">
            <h3 className="winner-name">{winner.name}</h3>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default Winners;
