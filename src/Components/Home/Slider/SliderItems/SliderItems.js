import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import StarRatings from '../StarRatings';

const SliderItems = () => {
    return (
        <Carousel.Item>
            <div className="header-area">
                <img
                    className="d-block w-100 custom-img slider-area"
                    src={slider2}
                    alt="First slide"
                />
                <div className="col-md-6 content">
                    {/* <h1 data-aos="zoom-in-right" data-aos-delay="200">Movie Name</h1> */}
                    <h1 className="font-weight-bolder text-uppercase">
                        <Typewriter data-aos="zoom-in-right" data-aos-delay="200"
                            options={{
                                strings: ["GodZilla vs Cong"],
                                autoStart: true,
                                loop: true,
                                delay: 50
                            }}
                        />
                    </h1>
                    <StarRatings></StarRatings>
                    {/* <ReactStars
                                count={5}
                                
                                size={24}
                                isHalf={true}
                                emptyIcon={<i className="far fa-star"></i>}
                                halfIcon={<i className="fa fa-star-half-alt"></i>}
                                fullIcon={<i className="fa fa-star"></i>}
                                activeColor="#ffd700"
                            /> */}

                    <p data-aos="fade-left">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, error aut? Voluptate laborum omnis dicta!</p>
                    <h6 className="font-weight-bold" data-aos="zoom-up">Htarring: ABC</h6>
                    <h6 className="font-weight-bold" data-aos="zoom-out">Generes: ABC</h6>
                    <h6 className="font-weight-bold" data-aos="zoom-in">Tags: A, B, C</h6>
                </div>
                <div className="col-md-6 content">
                    <div class="svg">
                        <a class="button" target="_blank" href="https://www.youtube.com/watch?v=odM92ap8_c0&ab_channel=WarnerBros.PicturesWarnerBros.Pictures">
                            <svg>
                                <rect height="40" width="130" fill="transparent" />
                            </svg>
                            <span><img style={{ width: '15px', height: '15px' }} src={trailer_icon} alt="" /> Watch Trailer</span>
                        </a>
                    </div>
                </div>
            </div>


        </Carousel.Item>
    );
};

export default SliderItems;