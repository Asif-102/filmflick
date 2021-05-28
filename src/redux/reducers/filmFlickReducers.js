import { ADD_TO_WATCH_LIST } from "../actions/filmFlickActions";

const initialState = {
    movieList: [],
    watchList: [],
}

const filmFlickReducer = (state = initialState, action) =>{
    switch(action.type){
        case ADD_TO_WATCH_LIST: {
            return state;
        }
        default: {
            return state;
        }
    }
}

export default filmFlickReducer;