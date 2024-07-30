import React, { useState, useEffect } from 'react';
import CreateAvatar from './Avatar/CreateAvatar';

const Contest = () => {
  const [showAvatarCreator, setShowAvatarCreator] = useState(false);

  const handleCreateAvatar = () => {
    setShowAvatarCreator(true);
  };

  useEffect(() => {
    const closeButton = document.getElementById('close-video-button');
    const videoContainer = document.getElementById('floating-video-container');
    
    const handleCloseButtonClick = () => {
      videoContainer.style.display = 'none';
    };

    closeButton.addEventListener('click', handleCloseButtonClick);

    return () => {
      closeButton.removeEventListener('click', handleCloseButtonClick);
    };
  }, []);

  return (
    <div>
      {!showAvatarCreator ? (
        <button onClick={handleCreateAvatar}>Create Avatar</button>
      ) : (
        <div style={{ width: '100%', height: '80vh' }}>
          <CreateAvatar />
        </div>
      )}



    {/* Floating video */}
      <div id="floating-video-container" style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        width: '300px',
        height: '200px',
        zIndex: 1000,
        border: '2px solid #fff',
        borderRadius: '8px',
        overflow: 'hidden',
        backgroundColor: 'rgba(0, 0, 0, 0.7)'
      }}>
        <video id="floating-video" style={{
          width: '100%',
          height: '100%',
        }} autoPlay muted loop>
          <source src="src/assets/FashionShow.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <button id="close-video-button" style={{
          position: 'absolute',
          top: '10px',
          right: '10px',
          backgroundColor: '#ff0000',
          color: '#fff',
          border: 'none',
          borderRadius: '50%',
          width: '30px',
          height: '30px',
          cursor: 'pointer',
        }}>X</button>
      </div>
    </div>
  );
};

export default Contest;
