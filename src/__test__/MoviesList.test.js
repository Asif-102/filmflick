import React from 'react';
import ReactDOM from  'react-dom';
import MoviesList from '../Components/Home/MoviesList/MoviesList';

it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<MoviesList></MoviesList>, div)
})