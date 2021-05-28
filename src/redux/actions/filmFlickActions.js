export const ADD_TO_WATCH_LIST = 'ADD_TO_WATCH_LIST';

export const addToWatchList = (payload) =>{
    return {
        type: ADD_TO_WATCH_LIST,
        payload
    }
}