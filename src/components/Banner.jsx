import React from 'react';
import '../styles/banner.css'; // Create this CSS file in the same directory

const Banner = () => {
  return (
    <div className="banner">
        <div className='banner-content'>
            <p className="banner-text">Hi! I'm Minindu</p>
            <div className="waving-hand">👋</div> {/* Add waving hand */}
        </div>
    </div>
  );
};

export default Banner;