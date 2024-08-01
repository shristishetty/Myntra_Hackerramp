
import React, { useState } from 'react';
import './Voting.css';

import avatar1 from '../../assets/avatars/avatar1.png';
import avatar2 from '../../assets/avatars/avatar2.png';
import avatar3 from '../../assets/avatars/avatar3.png';
import avatar4 from '../../assets/avatars/avatar4.png';

const Voting = () => {
  const [votes, setVotes] = useState([
    { name: 'Pankhudi', count: 25, image: avatar1 },
    { name: 'Hina', count: 22, image: avatar2 },
    { name: 'Shristi', count: 24, image: avatar3 },
    { name: 'Muskan', count: 19, image: avatar4 }
  ]);

  const handleVote = (index) => {
    const newVotes = [...votes];
    newVotes[index].count += 1;
    setVotes(newVotes);
  };

  return (
    <>
<div className="voting-container">
      <h1 className="text-2xl font-bold">Voting of Avatars</h1>
      <div className="avatar-container">
        {votes.map((avatar, index) => (
          <div key={index} className="avatar-card">
            <img src={avatar.image} alt={avatar.name} className="avatar-image" />
            <div className="avatar-info">
              <button onClick={() => handleVote(index)} className="vote-button">Vote</button>
              <span className="vote-count">{avatar.count}</span>
              <h3 className="avatar-name">{avatar.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default Voting;