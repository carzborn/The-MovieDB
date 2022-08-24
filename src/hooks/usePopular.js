// Query that gets the most popular movies

import {useQuery} from "react-query";
import TheMovieDBAPI from '../services/TheMovieDBAPI'

const usePopular = () => {
    return useQuery('popular', TheMovieDBAPI.getPopular, {keepPreviousData: true})
}

export default usePopular