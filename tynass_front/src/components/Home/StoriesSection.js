import React from 'react';
import './StoriesSection.css';

const StoriesSection = () => {
  return (
    <div className="stories-section">
      <h2>AR & Social Media Experiences</h2>
      <div className="stories-container">
        <div className="story">
          <video src="/assets/vid1.mp4" muted loop autoPlay></video>
        </div>
        <div className="story">
          <video src="/assets/vid2.mp4" muted loop autoPlay></video>
        </div>
        <div className="story">
          <video src="assets/vid3.mp4" muted loop autoPlay></video>
        </div>
        
      </div>
    </div>
  );
};

export default StoriesSection;
