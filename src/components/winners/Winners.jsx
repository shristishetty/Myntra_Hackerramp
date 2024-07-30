// src/components/winners/Winners.js
import React, { useState } from 'react';
import './Winners.css';
import Popup from '../PopupRecommendation/Popup';
// Import the images
import podium from '../../assets/podium.png';
import winner1 from '../../assets/winner1.png';
import winner2 from '../../assets/winner2.png';
import winner3 from '../../assets/winner3.png';

import recommendation1 from '../../assets/recommendation1.png';
import recommendation2 from '../../assets/recommendation2.png';
import recommendation3 from '../../assets/recommendation3.png';
import recommendation4 from '../../assets/recommendation4.png';
import recommendation5 from '../../assets/recommendation5.png';
import recommendation6 from '../../assets/recommendation6.png';
import recommendation7 from '../../assets/recommendation7.png';
import recommendation8 from '../../assets/recommendation8.png';
import recommendation9 from '../../assets/recommendation9.png';

const Winners = () => {
  const winners = [
    { name: 'Ava', description: '1st place winner', rank: 1, image: winner1 },
    { name: 'Emma', description: '2nd place winner', rank: 2, image: winner2 },
    { name: 'Sophia', description: '3rd place winner', rank: 3, image: winner3 },
  ];

  const [selectedWinner, setSelectedWinner] = useState(null);
  const [recommendations, setRecommendations] = useState([]);

  const recommendationsData = {
    Emma: [
      { image: recommendation1, name: 'Item 1' },
      { image: recommendation2, name: 'Item 2' },
      { image: recommendation3, name: 'Item 3' },
    ],
    Ava: [
      { image: recommendation4, name: 'Item 4' },
      { image: recommendation5, name: 'Item 5' },
      { image: recommendation6, name: 'Item 6' },
    ],
    Sophia: [
      { image: recommendation7, name: 'Item 7' },
      { image: recommendation8, name: 'Item 8' },
      { image: recommendation9, name: 'Item 9' },
    ],
  };

  const handleAvatarClick = (winner) => {
    setSelectedWinner(winner);
    setRecommendations(recommendationsData[winner.name]);
  };

  const handleClosePopup = () => {
    setSelectedWinner(null);
    setRecommendations([]);
  };

  return (
    <div className="winners-container">
      <h2>Previous Contest Winners</h2>
      <div className="announcement-banner">ANNOUNCEMENT</div>
      <div className="podium-container">
        <img src={podium} alt="Podium" className="podium-image" />
        {winners.map((winner, index) => (
          <div
            key={index}
            className={`podium-avatar rank-${winner.rank}`}
            onClick={() => handleAvatarClick(winner)}
          >
            <img src={winner.image} alt={winner.name} className="winner-image" />
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
      {selectedWinner && (
        <Popup recommendations={recommendations} onClose={handleClosePopup} />
      )}
    </div>
  );
};

export default Winners;
