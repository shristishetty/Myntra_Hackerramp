import React, { useEffect } from 'react';

const cards = [
  { id: 1, text: 'Card 1' },
  { id: 2, text: 'Card 2' },
  { id: 3, text: 'Card 3' },
  { id: 4, text: 'Card 4' },
  { id: 5, text: 'Card 5' },
];

const Carousel = () => {
  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      @keyframes scroll {
        0% { transform: translateX(0); }
        100% { transform: translateX(-50%); }
      }
      .carousel {
        display: flex;
        width: 200%;
        animation: scroll 10s linear infinite;
      }
      .carousel-item {
        flex: 0 0 20%;
        margin: 1rem;
        background-color: #e0e0e0;
        text-align: center;
        line-height: 10rem;
        font-size: 1.5rem;
        border-radius: 0.5rem;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="relative w-full h-40 overflow-hidden">
      <div className="carousel">
        {cards.map((card) => (
          <div key={card.id} className="carousel-item">
            {card.text}
          </div>
        ))}
        {cards.map((card) => (
          <div key={card.id + cards.length} className="carousel-item">
            {card.text}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
