import axios from 'axios'

axios.defaults.baseURL = 'https://api.themoviedb.org/3'

const API_KEY = import.meta.env.VITE_TMDB_API_KEY

const includeAdultFalse = `&include_adult=false`

const get = async (endpoint) => {
    const res = await axios.get(endpoint)
    return res.data
}

// Get a single movie
const getMovie = async (id) => {
	return get(`/movie/${id}?api_key=${API_KEY}&region=US&append_to_response=credits`)
}

// Get an actor
const getActor = async (id) => {
    return get(`/person/${id}?api_key=${API_KEY}&language=en-US&append_to_response=movie_credits`)
}

// Get the most popular movies
 const getPopular = async () => {
    return get(`/movie/popular?api_key=${API_KEY}&language=en-US&region=US&page=1${includeAdultFalse}`)
}

// Get the movies currently playing in cinemas
const getNowPlaying =  async () => {
    return get(`/movie/now_playing?api_key=${API_KEY}&language=en-US&region=US&page=1${includeAdultFalse}`)
}

// Get the top rated movies
const getTopRated = async () => {
    return get(`/movie/top_rated?api_key=${API_KEY}&language=en-US&region=US&page=1${includeAdultFalse}`)
}

// Get all genres
const getGenres = async () => {
    return get(`/genre/movie/list?api_key=${API_KEY}&region=US`) 
}

// Get movies by certain genre
const getMovieByGenre = async (genre, page) => {
    return get(`/discover/movie?api_key=${API_KEY}&with_genres=${genre}&page=${page}${includeAdultFalse}`)
}


export default  {
    getMovie,
    getActor,
    getPopular,
    getNowPlaying, 
    getTopRated,
    getGenres,
    getMovieByGenre,
}