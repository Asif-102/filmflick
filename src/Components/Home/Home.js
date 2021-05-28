import React from 'react';
import MoviesList from './MoviesList/MoviesList';
import NaviGationBar from './NaviGationBar/NaviGationBar';
import TopMoviesBanner from './TopMoviesBanner/TopMoviesBanner';

const Home = () => {
    return (
        <div>
            <NaviGationBar></NaviGationBar>
            <MoviesList></MoviesList>
            <TopMoviesBanner></TopMoviesBanner>
        </div>
    );
};

export default Home;