import { ADD_TO_WATCH_LIST, LOAD_MOVIES } from "../actions/filmFlickActions";

const initialState = {
    movieLists: [],
    watchLists: [],
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
        case ADD_TO_WATCH_LIST: {
            return state;
        }
        default: {
            return state;
        }
    }
}

export default filmFlickReducer;