import React from 'react';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import MoviesList from './MoviesList/MoviesList';
// import NaviGationBar from './NaviGationBar/NaviGationBar';
import TopMoviesBanner from './TopMoviesBanner/TopMoviesBanner';
import UpcomingMovies from './UpcomingMovies/UpcomingMovies';
import YearTopMovieBanner from './YearTopMovieBanner/YearTopMovieBanner';

const Home = () => {
    return (
        <div>
            {/* <NaviGationBar></NaviGationBar> */}
            <Header></Header>
            <br />
            <br />
            <MoviesList></MoviesList>
            <UpcomingMovies></UpcomingMovies>
            <TopMoviesBanner></TopMoviesBanner>
            <YearTopMovieBanner></YearTopMovieBanner>
<<<<<<< HEAD
            {/* <MovieDetail></MovieDetail> */}
=======
>>>>>>> 76140ac11af98261a4c67edbc64ebd5144d81fc4
            <Footer></Footer>
        </div>
    );
};

export default Home;