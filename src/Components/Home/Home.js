import React from 'react';

import MoviesList from './MoviesList/MoviesList';
import NaviGationBar from './NaviGationBar/NaviGationBar';

const Home = () => {
    return (
        <div>
            <NaviGationBar></NaviGationBar>
            <MoviesList></MoviesList>
        </div>
    );
};

export default Home;