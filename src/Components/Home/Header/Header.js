import React from 'react';
import Slider from '../Slider/Slider';
import './Header.css';



const Header = () => {
 
    return (
        <div data-testid="header" className="header-area">
            <div className="slider-area">
                <Slider></Slider>
            </div>
        </div>
    );
};

export default Header;