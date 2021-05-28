import { POPULAR_MOVIE_URL } from "../../Components/API/API";

export const ADD_TO_WATCH_LIST = 'ADD_TO_WATCH_LIST';
export const LOAD_MOVIES = 'LOAD_MOVIES';

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

export const addToWatchList = (payload) => {
    return {
        type: ADD_TO_WATCH_LIST,
        payload
    }
}