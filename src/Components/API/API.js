/*
    API_INFO
    
* API_KEY : api_key=870967436c1517d581daf3b245495790
* Popular Movie API: https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=<api_key>>
* Search API : https://api.themoviedb.org/3/search/company?query=<<QUERY>>&api_key=<<api_key>>&page=1
* Find By ID: https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US
* Image - https://image.tmdb.org/t/p/w1280
*/ 
// 

const API_KEY = '870967436c1517d581daf3b245495790';

export const POPULAR_MOVIE_URL = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}`;