import React from 'react';
import fotoku from './fotoku.jpg';
import './Header.css';

const Header = () => {
    return (
        <div className='header'>
            <h2><br /><br />Hi...<br />Namaku Joko Sutejo</h2>
            <img src={fotoku} alt="ini fotoku" />
        </div>
    )
}

export default Header