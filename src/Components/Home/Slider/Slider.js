import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadMovies } from '../../../redux/actions/filmFlickActions';
import Carousel from 'react-bootstrap/Carousel';
import slider2 from '../../../images/slider/godzilla vs cong.jpg';
import slider3 from '../../../images/slider/POI.jpg';
import slider4 from '../../../images/slider/Fury.jpg';
import trailer_icon from '../../../images/slider/3024584.png'
import Aos from 'aos';
import 'aos/dist/aos.css';
import Typewriter from "typewriter-effect";
import './Slider.css'
import StarRatings from './StarRatings';

const Slider = () => {

    const movies = useSelector((state) => {
        return state.movies.movieLists;
    })

    const dispatch = useDispatch();

    useEffect(() => dispatch(loadMovies()), [dispatch])


    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

    return (
        <div className="">
            <Carousel controls={false} indicators interval={4500} pause={false}>
                <Carousel.Item>
                    <div className="header-area container">
                        <img src={slider2} alt="" className="d-block w-100 slider-img slider-area" />
                        <div className="col-lg-7 col-md-12 content p-0">
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
                            <p data-aos="fade-left">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, error aut? Voluptate laborum omnis dicta!</p>
                            <h6 className="font-weight-bold" data-aos="zoom-up">Htarring: ABC</h6>
                            <h6 className="font-weight-bold" data-aos="zoom-out">Generes: ABC</h6>
                            <h6 className="font-weight-bold" data-aos="zoom-in">Tags: A, B, C</h6>
                        </div>
                        <div className="col-lg-5 col-md-12 content d-flex justify-content-center">
                            <div className="svg">
                                <a className="button" target="_blank" href="/">
                                    <svg>
                                        <rect height="40" width="130" fill="transparent" />
                                    </svg>
                                    <span><img style={{ width: '15px', height: '15px' }} src={trailer_icon} alt="" /> Watch Trailer</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Slider;