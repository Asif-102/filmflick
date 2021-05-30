import React from 'react';
import Slider from '../Slider/Slider';
import './Header.css';



const Header = () => {
 
    return (
        <div className="header-area">
            <div className="slider-area">
                <Slider></Slider>
            </div>
        </div>
    );
};

export default Header;