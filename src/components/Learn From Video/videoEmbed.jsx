import React from 'react';
import '../../styles/video.css'

export const VideoEmbed = () => {
  const videoUrls = ["https://www.youtube.com/embed/GCmz1yFkhDY", "https://www.youtube.com/embed/2M5pOCCKD1M", "https://www.youtube.com/embed/NfBHKMkozRY"];
  return (
    <div className="video-embed-container">
      <h1 className='video-title'>Listen From Learners </h1>
      <div className="video-container">
        {videoUrls.map((url, index) =>
        (
          <div key={index} >
            <iframe src={url} className='embed-video'
             allowFullScreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            ></iframe>
          </div>
        )
        )}
      </div>
    </div>
  );
};
