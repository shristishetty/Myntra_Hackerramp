// src/Voting.js
import React, { useState } from 'react';
import './Voting.css';

const Voting = () => {
  const [votes, setVotes] = useState([
    { name: 'Pankhudi', count: 25, description: 'Description' },
    { name: 'Hina', count: 22, description: 'Description' },
    { name: 'Shristi', count: 24, description: 'Description' },
    { name: 'Neha', count: 19, description: 'Description' }
  ]);

  const handleVote = (index) => {
    const newVotes = [...votes];
    newVotes[index].count += 1;
    setVotes(newVotes);
  };


  return (
    <div className="voting-container">
      <h1 className = "text-2xl font-bold">Voting of Avatars</h1>
      <div className="avatar-container">
        {votes.map((avatar, index) => (
          <div key={index} className="avatar-card">
            <img src={`avatar${index + 1}.png`} alt={avatar.name} className="avatar-image" />
            <div className="avatar-info">
              <button onClick={() => handleVote(index)} className="vote-button">Vote</button>
              <span className="vote-count">{avatar.count}</span>
              <h3 className="avatar-name">{avatar.name}</h3>
              <p className="avatar-description">{avatar.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Voting;
