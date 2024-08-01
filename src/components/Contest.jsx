import React, { useState, useEffect } from 'react';
import CreateAvatar from './Avatar/CreateAvatar';
import { EmojiSliderDemo } from './EmojiSliderDemo';
import Voting from './voting/Voting';
import Winners from './winners/Winners';
import CreateUserComponent from './Avatar/CreateUserComponent';

const Contest = () => {
  const [showAvatarCreator, setShowAvatarCreator] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [position, setPosition] = useState({ top: 20, left: 20 });

  const handleCreateAvatar = () => {
    setShowAvatarCreator(true);
  };

  useEffect(() => {
    const closeButton = document.getElementById('close-video-button');
    const videoContainer = document.getElementById('floating-video-container');
    const videoElement = document.getElementById('floating-video');

    const handleCloseButtonClick = () => {
      videoContainer.style.display = 'none';
      if (videoElement) {
        videoElement.pause();
      }
    };

    if (closeButton) {
      closeButton.addEventListener('click', handleCloseButtonClick);
    }

    return () => {
      if (closeButton) {
        closeButton.removeEventListener('click', handleCloseButtonClick);
      }
    };
  }, []);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setDragStart({ x: e.clientX - position.left, y: e.clientY - position.top });
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      setPosition({ top: e.clientY - dragStart.y, left: e.clientX - dragStart.x });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  });

  return (
    <div style={{ minHeight: '100vh', overflow: 'auto' }}>
      {!showAvatarCreator ? (
        <div>
          <EmojiSliderDemo onParticipateClick={handleCreateAvatar} />
        </div>
      ) : (
        <div style={{ width: '100%', height: '80vh' }}>
          <CreateAvatar />
          <Voting />
          <Winners />
        </div>
      )}

      {/* Floating video */}
      <div
        id="floating-video-container"
        onMouseDown={handleMouseDown}
        style={{
          position: 'fixed',
          top: `${position.top}px`,
          left: `${position.left}px`,
          width: '180px',
          height: '320px',
          zIndex: 1000,
          border: '2px solid #fff',
          borderRadius: '8px',
          overflow: 'hidden',
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          cursor: 'move',
        }}
      >
        <video
          id="floating-video"
          style={{
            width: '100%',
            height: '100%',
          }}
          autoPlay
          loop
        >
          <source src="src/assets/walking.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <button
          id="close-video-button"
          style={{
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
          }}
        >
          X
        </button>
      </div>

          <CreateUserComponent />
    </div>
  );
};

export default Contest;
