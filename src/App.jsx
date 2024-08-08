import React, { useState } from 'react';
import './App.css';
import Home from './Home/Home';
import Header from './Header/Header';

const App = () => {
  const [isDark, setIsDark] = useState(true);

  return (
    <div className='App' data-theme={isDark ? 'Dark' : 'Light'}>
      <div className='header'>
        <div className='headerShade'>
          <Header isDark={isDark} setIsDark={setIsDark} />
          <Home />
        </div>
      </div>  
    </div>
  );
};

export default App;
