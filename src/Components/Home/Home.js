import React from 'react';
import MoviesList from './MoviesList/MoviesList';
import NaviGationBar from './NaviGationBar/NaviGationBar';
import TopMoviesBanner from './TopMoviesBanner/TopMoviesBanner';
import YearTopMovieBanner from './YearTopMovieBanner/YearTopMovieBanner';

const Home = () => {
    return (
        <div>
            <NaviGationBar></NaviGationBar>
            <MoviesList></MoviesList>
            <TopMoviesBanner></TopMoviesBanner>
            <YearTopMovieBanner></YearTopMovieBanner>
        </div>
    );
};

export default Home;