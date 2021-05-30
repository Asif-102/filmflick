import React from 'react';
import ReactDOM from  'react-dom';
import TopMoviesBanner from '../Components/Home/TopMoviesBanner/TopMoviesBanner';

it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<TopMoviesBanner></TopMoviesBanner>, div)
})