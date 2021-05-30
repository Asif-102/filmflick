import { ADD_TO_WATCH_LIST, LOAD_MOVIES, MOVIE_DETAIL } from "../actions/filmFlickActions";

const initialState = {
    movieLists: [],
    movieDetail: [],
}

const filmFlickReducer = (state = initialState, action) =>{
    switch(action.type){
        case LOAD_MOVIES: {
            const newState = {
                ...state,
                movieLists: action.payload
            };
            return newState;
        }
        case MOVIE_DETAIL:{
            const newState = {
                ...state,
                movieDetail: action.payload
            };
            return newState;
        }
        case ADD_TO_WATCH_LIST: {
            return state;
        }
        default: {
            return state;
        }
    }
}

export default filmFlickReducer;