import React from 'react';
import Footer from './Footer/Footer';
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
            <Footer></Footer>
        </div>
    );
};

export default Home;