import React, { useEffect } from 'react';
import { Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { loadMovies } from '../../../redux/actions/filmFlickActions';
import RecommendedCardLists from './RecommendedCardLists';

const Recommended = () => {
    const movies = useSelector((state) => {
        return state.movies.movieLists;
    })

    const dispatch = useDispatch();

    useEffect(() => dispatch(loadMovies()), [dispatch])

    return (
        <div className="container text-white">
            <h3 className="pb-3">Recommended For You
</h3>
            <Row>
                {
                    movies?.slice(0,4)?.map((allMovies)=>(<RecommendedCardLists key={allMovies.id} allMovies={allMovies} />))
                }
            </Row>
        </div>
    );
};

export default Recommended;