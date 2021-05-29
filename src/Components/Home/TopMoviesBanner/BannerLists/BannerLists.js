import React from 'react';

const BannerLists = ({allMovies}) => {
    const { backdrop_path, original_title, vote_average } = allMovies;
    const cardMovie = {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.62), rgba(0, 0, 0, 0.62)),url(https://image.tmdb.org/t/p/w1280${backdrop_path})`
    }
    return (
        <li className="mt-3 topMovieItem">
            <div className="card border-0" style={cardMovie}>
                <div className="card-body">
                    <h5 className="card-title">{original_title}</h5>
                    <div className="d-flex align-items-center pb-2">
                        <div className="badge badge-secondary p-1">Vote Average</div>
                        <span className="ml-2">: {vote_average}</span>
                    </div>
                    <div className="card-btn" style={{ display: 'none' }}>
                        <a href="/" className="btn btn-style px-4">Play Now</a>
                    </div>
                </div>
            </div>
        </li>
    );
};

export default BannerLists;