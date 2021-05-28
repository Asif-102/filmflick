import React from 'react';
import NaviGationBar from '../NaviGationBar/NaviGationBar';
import MoviesList from './MoviesList/MoviesList';

const Home = () => {
    return (
        <div>
            <NaviGationBar></NaviGationBar>
            <MoviesList></MoviesList>
        </div>
    );
};

export default Home;