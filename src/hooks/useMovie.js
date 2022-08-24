// Query that gets a specific movie

import {useQuery} from "react-query";
import TheMovieDBAPI from '../services/TheMovieDBAPI'

const useMovie= () => {
    return useQuery('movie', TheMovieDBAPI.getMovie,{keepPreviousData: true})
}

export default useMovie