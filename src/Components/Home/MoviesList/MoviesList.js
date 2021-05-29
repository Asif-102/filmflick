import React, { useEffect } from 'react';
import { Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { loadMovies } from '../../../redux/actions/filmFlickActions';
import MoviesCardLists from './MoviesCardLists/MoviesCardLists';

const MoviesList = () => {
    const movies = useSelector((state) => {
        return state.movies.movieLists;
    })

    const dispatch = useDispatch();

    useEffect(() => dispatch(loadMovies()), [dispatch])

    return (
        <div className="container text-white mt-5">
            <h3 className="pb-3">Latest Movies</h3>
            <Row>
                {
                    movies?.slice(0,4)?.map((allMovies)=>(<MoviesCardLists key={allMovies.id} allMovies={allMovies} />))
                }
            </Row>
        </div>
    );
};

export default MoviesList;