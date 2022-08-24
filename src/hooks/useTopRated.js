// Query that gets the top rated movies

import {useQuery} from "react-query";
import TheMovieDBAPI from '../services/TheMovieDBAPI'

const useTopRated = () => {
    return useQuery('top-rated', TheMovieDBAPI.getTopRated,{keepPreviousData: true})
}

export default useTopRated