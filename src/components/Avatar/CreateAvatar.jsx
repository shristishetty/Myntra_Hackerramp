import React, { useEffect, useRef } from 'react';

export default function CreateAvatar() {
  const iframeRef = useRef(null);

  useEffect(() => {
    const iframe = iframeRef.current;
    let frame;

    const handleMessage = (event) => {
      if (event.data.source !== 'readyplayerme') {
        return;
      }

      if (event.data.eventName === 'v1.frame.ready') {
        frame = event.source;
        frame.postMessage(
          {
            target: 'readyplayerme',
            type: 'open',
            data: {
              uploadImage: true,
              selectBodyType: false
            }
          },
          '*'
        );
      }
    };

    window.addEventListener('message', handleMessage);

    return () => {
      window.removeEventListener('message', handleMessage);
    };
  }, []);

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#f0f0f0', padding: '2rem' }}>
      <div style={{ width: '80%', height: '100%', overflow: 'auto', borderRadius: '15px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', backgroundColor: '#fff' }}>
        <iframe
          ref={iframeRef}
          src="https://hackerramp-x7bnmt.readyplayer.me/avatar?frameApi"
          style={{ width: '100%', height: '100%', border: 'none', borderRadius: '15px' }}
          allow="camera *; microphone *"
        ></iframe>
      </div>
    </div>
  );
}
