import React, { useEffect } from 'react';
import { Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { loadMovies } from '../../../redux/actions/filmFlickActions';
import UpcomingMoviesList from './UpcomingMoviesList';

const UpcomingMovies = () => {
    const movies = useSelector((state) => {
        return state.movies.movieLists;
    })

    const dispatch = useDispatch();

    useEffect(() => dispatch(loadMovies()), [dispatch])

    return (
        <div className="container text-white mt-5 mb-5 pt-4">
            <h3 className="pb-3">Upcoming Movies</h3>
            <Row>
                {
                    movies?.slice(6, 10)?.map((allMovies)=>(<UpcomingMoviesList key={allMovies.id} allMovies={allMovies} />))
                }
            </Row>
        </div>
    );
};

export default UpcomingMovies;