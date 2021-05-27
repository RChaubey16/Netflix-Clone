import axios from 'axios';

/** base url to make requests to the movie database */
const instance = axios.create({
    baseURL: 'https://api.themoviedb.org/3'
});

// We will just append the requests to the baseURL and hit the API
// Ex.
// instance.get('/foo-bar');
// https://api.themoviedb.org/3/foo-bar

export default instance; 