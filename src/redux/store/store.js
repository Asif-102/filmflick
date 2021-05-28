import { createStore, combineReducers } from "redux";
import filmFlickReducer from "../reducers/filmFlickReducers";
import { composeWithDevTools } from 'redux-devtools-extension';

const combinedReducer = combineReducers({
    movies: filmFlickReducer
})

export const store = createStore(combinedReducer, composeWithDevTools())
