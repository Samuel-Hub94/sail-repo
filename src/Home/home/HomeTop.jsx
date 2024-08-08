import React from 'react';
import BigCard from './reusable/BiGCard/BigCard';
import './HomeTop.css';


const HomeTop = () => {
  return (
    <div className="home-top">
      <BigCard 
        platform="facebook"
        userName="nathanf"
        followNum="1987"
        followLabel="FOLLOWERS"
        todayNum="+12 Today"
      />
      <BigCard 
        platform="twitter"
        userName="nathanf"
        followNum="1044"
        followLabel="FOLLOWERS"
        todayNum="+99 Today"
      />
      <BigCard 
        platform="instagram"
        userName="realnathanf"
        followNum="11k"
        followLabel="FOLLOWERS"
        todayNum="+1099 Today"
      />
      <BigCard 
        platform="youtube"
        userName="Nathan F."
        followNum="8239"
        followLabel="SUBSCRIBERS"
        todayNum="-144 Today"
      />
    </div>
  );
};

export default HomeTop;

