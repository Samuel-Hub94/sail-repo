import React from 'react';
import SmallCard from '../home/reusable/SmallCard/SmallCard';
import {getImgSrc } from './utils'; // Adjust the path based on your folder structure
import './HomeBottom.css';

const HomeBottom = () => {
    const cards = [
        { action: 'Page Views', actionValue: '87', platform: 'Facebook', changeRate: '+3%' },
        { action: 'Likes', actionValue: '52', platform: 'Facebook', changeRate: '-2%' },
        { action: 'Likes', actionValue: '5462', platform: 'Instagram', changeRate: '+2257%' },
        { action: 'Profile Views', actionValue: '52k', platform: 'Instagram', changeRate: '+1375%' },
        { action: 'Retweets', actionValue: '117', platform: 'Twitter', changeRate: '+303%' },
        { action: 'Likes', actionValue: '507', platform: 'Twitter', changeRate: '+553%' },
        { action: 'Likes', actionValue: '107', platform: 'YouTube', changeRate: '-19%' },
        { action: 'Total Views', actionValue: '1407', platform: 'YouTube', changeRate: '-12%' }
    ];

    const cardElements = cards.map((card, i) => {
        const imgSrc = getImgSrc(card.platform);

        return (
            <SmallCard 
                key={i} 
                {...card} 
                imgSrc={imgSrc} 
            />
        );
    });

    return (
        <div className="home-bottom">
            <div className='card-container'>
                <section className="overview">
                    <h2>Overview - Today</h2>
                </section>
                <section className="cards">
                    <div className="small-cards">
                    {cardElements}
                    </div> 
                </section>
            </div>    
        </div>
    );
};

export default HomeBottom;
