import React, { useEffect } from 'react';

const cards = [
  { id: 1, imgUrl: 'https://img.freepik.com/free-photo/young-woman-beautiful-dress_1303-17514.jpg?t=st=1722360033~exp=1722363633~hmac=755c2047f6ceb4a01d06de06e00bce1e8b4474bf95510a9724151548ac67b4cb&w=996' },
  { id: 2, imgUrl: 'https://img.freepik.com/free-photo/young-woman-beautiful-dress_1303-17514.jpg?t=st=1722360033~exp=1722363633~hmac=755c2047f6ceb4a01d06de06e00bce1e8b4474bf95510a9724151548ac67b4cb&w=996' },
  { id: 3, timgUrl: 'https://img.freepik.com/free-photo/young-woman-beautiful-dress_1303-17514.jpg?t=st=1722360033~exp=1722363633~hmac=755c2047f6ceb4a01d06de06e00bce1e8b4474bf95510a9724151548ac67b4cb&w=996' },
  { id: 4, imgUrl: 'https://img.freepik.com/free-photo/young-woman-beautiful-dress_1303-17514.jpg?t=st=1722360033~exp=1722363633~hmac=755c2047f6ceb4a01d06de06e00bce1e8b4474bf95510a9724151548ac67b4cb&w=996' },
  { id: 5, imgUrl: 'https://img.freepik.com/free-photo/young-woman-beautiful-dress_1303-17514.jpg?t=st=1722360033~exp=1722363633~hmac=755c2047f6ceb4a01d06de06e00bce1e8b4474bf95510a9724151548ac67b4cb&w=996' },
];

const InfiniteCards = () => {
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
    <div className="relative w-400 h-60 overflow-hidden">
      <div className="carousel">
        {cards.map((card) => (
          <div key={card.id} className="carousel-item">
            <img src = {card.imgUrl} alt= {`Card${card.id}`}/>
          </div>
        ))}
        {cards.map((card) => (
          <div key={card.id + cards.length} className="carousel-item">
            <img src = {card.imgUrl} alt= {`Card${card.id}`}/>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfiniteCards;
