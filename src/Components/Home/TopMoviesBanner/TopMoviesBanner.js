import React, { useEffect } from 'react';
import topMovies from '../../../images/movie1.png';
import { loadMovies } from '../../../redux/actions/filmFlickActions';
import { useDispatch, useSelector } from 'react-redux';
import './TopMoviesBanner.css';
import BannerLists from './BannerLists/BannerLists';

const TopMoviesBanner = () => {

    const movies = useSelector((state) => {
        return state.movies.movieLists;
    })

    const dispatch = useDispatch();

    useEffect(() => dispatch(loadMovies()), [dispatch])
    
    const topMoviesStyle = {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.62), rgba(0, 0, 0, 0.62)),url(https://image.tmdb.org/t/p/w1280${movies[13]?.backdrop_path})`
    }
    const cardMovie = {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),url(${topMovies})`
    }
    return (
        <section data-testid="top-movies" className="container">
            <div className="top-movies" style={topMoviesStyle}>
                <div className="vertical-movies">
                    <ul className="list-inline d-flex  flex-column ml-4">
                        <h3 className="mb-4 pt-4 text-white">Top 10 in Hollywood</h3>
                        {
                            movies?.slice(15, 18)?.map((allMovies)=>(<BannerLists key={allMovies.id} allMovies={allMovies} />))
                        }
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default TopMoviesBanner;