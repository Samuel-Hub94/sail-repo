// src/Home/home/SmallCard.js
import React from 'react';
import './smallCards.css';

const SmallCard = (props) => {
    const isPositive = props.changeRate.includes('+');
    const arrowClass = isPositive ? 'arrow-up' : 'arrow-down';

    return (
        <div className="small-card" style={{ borderTop: `6px solid ${props.borderColor}` }}>
            <div className="top-row">
                <small>{props.action}</small>
                <img src={props.imgSrc} alt={props.platform} className="platform-logo" />
            </div>
            <div className="bottom-row">
                <h1>{props.actionValue}</h1>
                <nav className={`arrow ${arrowClass}`}>{props.changeRate}</nav>
            </div>
        </div>
    );
}

export default SmallCard;
