import React from 'react';
import StarRatings from '../Slider/StarRatings';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faShareAlt, faHeart, faPlus } from '@fortawesome/free-solid-svg-icons';
import trailer_icon from '../../../images/slider/3024584.png'
import Iframe from 'react-iframe'
const MovieDetail = () => {
    
    return (
        <div className="container pt-5">
            <div className="movie-detail">
            <Iframe url="http://www.youtube.com/embed/xDMP3i36naA"
        width="1050px"
        height="350px"
        id="myId"
        className="myClassname"
        display="initial"
        position="relative"/>
                <div className="name-link d-flex text-white">
                    <div className="col-md-9">
                     <h1>movie Name</h1>
                     <StarRatings></StarRatings>
                     <p>
                         <strong>Action</strong>
                         <strong>.</strong>
                         <strong>Adventure</strong>
                         <strong>.</strong>
                         <strong>Annimation</strong>
                         <strong>.</strong>
                         <strong>Biography</strong>
                         <strong>.</strong>
                         <strong>Drama</strong>
                         <strong>.</strong>
                         <strong>Family</strong>
                         <strong>.</strong>
                         <strong>Fantacy</strong>
                         <strong>.</strong>
                         <strong>Romance</strong>
                     </p>
                     <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur quos Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet est atque asperiores eligendi minus nostrum. soluta eum reprehenderit, enim odio.</p>
                     <div className="d-flex icons my-1" style={{display: 'none'}}>
                            <a href="/" className="mt-2" target="_blank" rel="noreferrer">
                                <FontAwesomeIcon icon={faShareAlt} className="fab" />
                            </a>
                            <a href="/" className="mt-2" target="_blank" rel="noreferrer">
                                <FontAwesomeIcon icon={faHeart} className="fab" />
                            </a>
                            <a href="/" className="mt-2 plus-icon" target="_blank" rel="noreferrer">
                                <FontAwesomeIcon icon={faPlus}className="fab" />
                            </a>
                        </div>
                    </div>
                    <div className="col-md-3">
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
            </div>
        </div>
    );
};

export default MovieDetail;