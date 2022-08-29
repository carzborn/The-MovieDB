// Query for a specific movie

import {useQuery} from "react-query";
import TheMovieDBAPI from '../services/TheMovieDBAPI'

const useMovie= (id) => {
    return useQuery(['movie', id], () => TheMovieDBAPI.getMovie(id))
}

export default useMovie