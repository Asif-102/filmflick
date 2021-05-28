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

    useEffect(() => dispatch(loadMovies()), [])

    return (
        <div className="container text-white">
            <h3>Movies</h3>
            <Row>
                {
                    movies?.map((allMovies)=>(<MoviesCardLists key={allMovies.id} allMovies={allMovies} />))
                }
            </Row>
        </div>
    );
};

export default MoviesList;