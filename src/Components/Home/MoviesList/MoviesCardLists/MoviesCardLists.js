import React from 'react';
import { Col } from 'react-bootstrap';

const MoviesCardLists = ({ allMovies }) => {
    const { poster_path } = allMovies;
    return (
        <Col xs={4} md={2} className="mb-2 pl-2 pr-2 pb-2">
            <img className="img-fluid" src={`https://image.tmdb.org/t/p/w1280${poster_path}`} alt='' />
        </Col>
    );
};

export default MoviesCardLists;