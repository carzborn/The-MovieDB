import { useQuery } from 'react-query'
import TheMovieDBAPI from '../services/TheMovieDBAPI'

const useGenres = () => {
    return useQuery('genres', TheMovieDBAPI.getGenres )
}

export default useGenres