import axios from 'axios'

axios.defaults.baseURL = 'https://api.themoviedb.org/3'

const get = async (endpoint) => {
    const res = await axios.get(endpoint)
    return res.data
}

export const getPopular = () => {
    return get(`/movie/popular?api_key=${import.meta.env.VITE_TMDB_API_KEY}&language=en-US&region=US&page=1`)
}

export const getNowPlaying = () => {
    return get(`/movie/now_playing?api_key=${import.meta.env.VITE_TMDB_API_KEY}&language=en-US&region=US&page=1`)
}

export const getTopRated = () => {
    return get(`/movie/top_rated?api_key=${import.meta.env.VITE_TMDB_API_KEY}&language=en-US&region=US&page=1`)
}

