import { FIND_MOVIE_DETAIL, POPULAR_MOVIE_URL, API_KEY } from "../../Components/API/API";

export const ADD_TO_WATCH_LIST = 'ADD_TO_WATCH_LIST';
export const LOAD_MOVIES = 'LOAD_MOVIES';
export const MOVIE_DETAIL = 'MOVIE_DETAIL';

export const loadMovies = () => {
    return (dispatch) => {
        fetch(POPULAR_MOVIE_URL)
            .then(res => res.json())
            .then(data => {
                dispatch({
                    type: LOAD_MOVIES,
                    payload: data.results
                })
            })
    }
}

export const movieDetail = (payload) =>{
    return(dispatch) =>{
        fetch(`https://api.themoviedb.org/3/movie/${payload}?api_key=${API_KEY}&language=en-US`)
        .then(res => res.json())
        .then(data => {
            dispatch({
                type: MOVIE_DETAIL,
                payload: data
            })
        })
    }
}

export const addToWatchList = (payload) => {
    return {
        type: ADD_TO_WATCH_LIST,
        payload
    }
}