import React, { useRef, useEffect, useState } from 'react';
import GreenScreenVideoFile from '../../images/green screen new 00.27.mp4';

const GreenScreenVideo = () => {
  const videoRef = useRef(null);
  const [userInteracted, setUserInteracted] = useState(false);

  useEffect(() => {
    const handleIntersection = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && videoRef.current && userInteracted) {
          videoRef.current.play().catch(error => {
            console.error('Video play error:', error);
          });
        } else if (videoRef.current) {
          videoRef.current.pause();
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.5,
    });

    const currentVideoRef = videoRef.current; // Store the current ref value
    if (currentVideoRef) {
      observer.observe(currentVideoRef);
    }

    // Clean up observer on unmount
    return () => {
      if (currentVideoRef) {
        observer.unobserve(currentVideoRef); // Use the stored ref value here
      }
    };
  }, [userInteracted]);

  const handleUserInteraction = () => {
    setUserInteracted(true);
  };

  useEffect(() => {
    // Add event listener for user interaction
    window.addEventListener('click', handleUserInteraction, { once: true });
    window.addEventListener('keydown', handleUserInteraction, { once: true });

    return () => {
      window.removeEventListener('click', handleUserInteraction);
      window.removeEventListener('keydown', handleUserInteraction);
    };
  }, []);

  return (
    <div>
      <video
        ref={videoRef}
        src={GreenScreenVideoFile}
        loop
        playsInline
        controls
        style={{ width: '100%', height: 'auto' }}
      />
    </div>
  );
};

export default GreenScreenVideo;
