import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faShareAlt, faHeart, faPlus } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import '../MoviesList/MoviesCardLists/MoviesCardLists.css';

const UpcomingMoviesList = ({ allMovies }) => {
    const { poster_path,  title, popularity, id } = allMovies;

    const cardMovie = {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)),url(https://image.tmdb.org/t/p/w1280${poster_path})`
    }

    return (
        <div className="col-md-3 mb-2 pb-2">
           <div className="latestMovieItem">
                <div  className="p-0" >
                    <div  className="card border-0 latest-movies" style={cardMovie}>
                        <div className="card-body">
                            <h5 className="card-title text-white">{title}</h5>
                            <div className="d-flex align-items-center pb-2">
                                <div className="badge badge-secondary p-1">Popularity</div>
                                <span className="ml-2">{popularity}</span>
                            </div>
                            <div className="card-btn">
                                <Link to={`movie/${id}`} className="btn btn-style px-3 ">
                                    <FontAwesomeIcon icon={faPlay} />
                                    <span className="ml-2 text-uppercase">Play Now</span>
                                </Link>
                            </div>
                        </div>
                        <div className="flex-column icons my-1" style={{display: 'none'}}>
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
                </div>
            </div>
        </div>
    );
};

export default UpcomingMoviesList;