import React, { useEffect, useState } from 'react';
import { POPULAR_MOVIE_URL } from '../../API/API';

const MoviesList = () => {
    const [popularMovies, setPopularMovies] = useState([]);
    useEffect(()=>{
        fetch(POPULAR_MOVIE_URL)
        .then(res => res.json())
        .then(data => setPopularMovies(data.results))
    },[])
    return (
        <div  className="container">
            <h1>This is movie  List section</h1>
        </div>
    );
};

export default MoviesList;