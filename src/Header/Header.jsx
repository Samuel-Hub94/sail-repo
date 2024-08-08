import React from 'react';
import { Toggle } from '../components/Toggle';

const Header = ({ isDark, setIsDark }) => {
  return (
    <div className='App-header'>
      <section className='title'>
        <h2>Social Media Dashboard</h2>
        <p>Total Followers: 23,004</p>
      </section>
      <div className='mode'>
        <Toggle isChecked={isDark} handleChange={() => setIsDark(!isDark)} />
      </div>
    </div>
  );
};

export default Header;
