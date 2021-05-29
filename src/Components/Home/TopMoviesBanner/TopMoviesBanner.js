import React from 'react';
import topMovies from '../../../images/movie1.png';
import './TopMoviesBanner.css';

const TopMoviesBanner = () => {
    const topMoviesStyle = {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.49)),url(${topMovies})`
    }
    const cardMovie = {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)),url(${topMovies})`
    }
    return (
        <section className="container">
            <div className="top-movies" style={topMoviesStyle}>
                <div className="vertical-movies">
                    <ul className="list-inline d-flex  flex-column ml-4">
                        <h3 className="mb-4 pt-4 text-white">Top 10 in Hollywood</h3>
                        <li className="mt-3 topMovieItem">
                            <div className="card" style={cardMovie}>
                                <div className="card-body">
                                    <h5 className="card-title">Jurassic World</h5>
                                    <div className="d-flex align-items-center pb-2">
                                        <div className="badge badge-secondary p-1">Action</div>
                                        <span className="ml-2">1hr : 28mins</span>
                                    </div>
                                    <div className="card-btn">
                                        <a href="/" className="btn btn-style px-4">Play Now</a>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="mt-3 topMovieItem">
                            <div className="card" style={cardMovie}>
                                <div className="card-body">
                                    <h5 className="card-title">Jurassic World</h5>
                                    <div className="d-flex align-items-center pb-2">
                                        <div className="badge badge-secondary p-1">Action</div>
                                        <span className="ml-2">1hr : 28mins</span>
                                    </div>
                                    <div className="card-btn">
                                        <a href="/" className="btn btn-style px-4">Play Now</a>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="mt-3 topMovieItem">
                            <div className="card" style={cardMovie}>
                                <div className="card-body">
                                    <h5 className="card-title">Jurassic World</h5>
                                    <div className="d-flex align-items-center pb-2">
                                        <div className="badge badge-secondary p-1">Action</div>
                                        <span className="ml-2">1hr : 28mins</span>
                                    </div>
                                    <div className="card-btn">
                                        <a href="/" className="btn btn-style px-4">Play Now</a>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default TopMoviesBanner;