import React from 'react';
import ReactDOM from  'react-dom';
import YearTopMovieBanner from '../Components/Home/YearTopMovieBanner/YearTopMovieBanner';

it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<YearTopMovieBanner></YearTopMovieBanner>, div)
})