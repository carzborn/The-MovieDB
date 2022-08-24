import axios from 'axios'

axios.defaults.baseURL = 'https://api.themoviedb.org/3'

const API_KEY = import.meta.env.VITE_TMDB_API_KEY

const get = async (endpoint) => {
    const res = await axios.get(endpoint)
    return res.data
}

// Get a single movie
const getMovie = async (id) => {
	return get(`/movie/${id}?api_key=${API_KEY}&region=US`)
}

// Get the most popular movies
export const getPopular = async () => {
    return get(`/movie/popular?api_key=${API_KEY}&language=en-US&region=US&page=1`)
}

// Get the movies currently playing in cinemas
export const getNowPlaying =  async () => {
    return get(`/movie/now_playing?api_key=${API_KEY}&language=en-US&region=US&page=1`)
}

// Get the top rated movies
export const getTopRated = async () => {
    return get(`/movie/top_rated?api_key=${API_KEY}&language=en-US&region=US&page=1`)
}

const exports = {
    getMovie,
    getPopular,
    getNowPlaying, 
    getTopRated,
}
export default exports