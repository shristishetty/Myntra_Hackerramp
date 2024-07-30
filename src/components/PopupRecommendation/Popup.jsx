// src/components/PopupRecommendation/Popup.js
import React from 'react';
import './Popup.css';
import { FaRegHeart } from 'react-icons/fa'; // Import the outlined heart icon

const Popup = ({ recommendations, onClose }) => {
  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <button className="close-button" onClick={onClose}>×</button>
        <h2>Recommended Items</h2>
        <div className="recommendations-grid">
          {recommendations.map((item, index) => (
            <div key={index} className="recommendation-card">
              <img src={item.image} alt={item.name} />
              <div className="recommendation-info">
                <button className="buy-button">Buy Now</button>
                <FaRegHeart className="like-button" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Popup;
