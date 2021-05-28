import React from 'react';
import { Col } from 'react-bootstrap';

const MoviesCardLists = ({ allMovies }) => {
    const { poster_path } = allMovies;
    return (
        <Col xs={6} md={3} className="mb-2">
            <img className="img-fluid" src={`https://image.tmdb.org/t/p/w1280${poster_path}`} alt='' />
        </Col>
    );
};

export default MoviesCardLists;