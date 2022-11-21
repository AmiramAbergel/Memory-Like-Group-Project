import axios from 'axios';

const BASE_URL = '';
/*
 * Api-handler, whenever we want to make an HTTP request we can get a reference to our baseUrl from the api.js file.
 */
export default axios.create({
    baseURL: BASE_URL,
});
