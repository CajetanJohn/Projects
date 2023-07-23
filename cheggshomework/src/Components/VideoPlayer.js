import React, { useRef, useState, useEffect } from 'react';
import video from '../Assets/video/asian_teacher_conducts_an_online_lesson.mp4';

const VideoPlayer = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    setIsPlaying(!videoRef.current.paused);
  }, []);

  const handleTogglePlay = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div>
      <video ref={videoRef} loop autoPlay muted>
        <source src={video} type="video/mp4" />
      </video>     
    </div>
  );
};

export default VideoPlayer;
