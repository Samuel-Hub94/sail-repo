// src/Home/home/BigCard.js
import React from 'react';
import './BCard.css';
import { getPlatformClass, getImgSrc, getBorderColor } from '../../utils';

const BigCard = ({ platform, userName, followNum, followLabel, todayNum }) => {
  const platformClass = getPlatformClass(platform);
  const imgSrc = getImgSrc(platform);
  const borderColor = getBorderColor(platform);

  const isPositive = todayNum.includes('+');
  const arrowClass = isPositive ? 'arrow-up' : 'arrow-down';

  const cardStyle = platform.toLowerCase() === 'instagram' ? {} : {
    borderTop: `4px solid ${borderColor}`,
    borderRadius: '10px',
  };

  return (
    <div className={`big-card ${platformClass}`} style={cardStyle}>
      <div className="big-card-header">
        <div className='header-img'> 
          <img src={imgSrc} alt={`${platform} icon`} className="platform-logo" />
        </div>  
        <div className='header-text'>
          <h3>@{userName}</h3>
        </div>
      </div>
      <div className="big-card-body">
        <h3>{followNum}</h3>
        <p>{followLabel}</p>
        <span className={`arrow ${arrowClass}`}>{todayNum}</span>
      </div>
    </div>
  );
};

export default BigCard;
