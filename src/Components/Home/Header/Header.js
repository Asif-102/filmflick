import React from 'react';
import NaviGationBar from '../NaviGationBar/NaviGationBar';
import Slider from '../Slider/Slider';
import './Header.css';



const Header = () => {
    return (
        <div className="header-area">
            <div className="slider-area">
                
                <Slider></Slider>
            </div>
            <div className="content">
                <div className="container">
                    <div className="row">

                        <div className="col-md-6 text-area d-flex align-items-center">
                      
                        </div>

                        <div className="col-md-6 img-area text-center">
                       
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;