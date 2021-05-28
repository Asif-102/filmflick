import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import filmFlickReducer from "../reducers/filmFlickReducers";
import { composeWithDevTools } from 'redux-devtools-extension';


const middleware = applyMiddleware(thunk);

const combinedReducer = combineReducers({
    movies: filmFlickReducer
})

export const store = createStore(combinedReducer, composeWithDevTools(middleware))
