import axios from 'axios';

const movieDB = axios.create({
    timeout: 5000,
    baseURL: 'https://api.themoviedb.org/3/movie',  
    params: {
        api_key: 'dc13bc6b5099f78490e0c24b13e7a7d0',
        language: 'es-ES',
    }
});

export default movieDB;