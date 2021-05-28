import React, { useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadMovies } from '../../../redux/actions/filmFlickActions';

const MoviesList = () => {
    const movies = useSelector((state) =>{
        return state.movies.movieLists;
    })

    const dispatch = useDispatch();
    
    useEffect(()=> dispatch(loadMovies()) ,[])

    return (
        <div  className="container">
            <h1>Total Movies {movies.length}</h1>
        </div>
    );
};

export default MoviesList;