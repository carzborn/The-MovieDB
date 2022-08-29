import { useQuery } from 'react-query'
import TheMovieDBAPI from '../services/TheMovieDBAPI'

const useMoviesByGenre = (id, page) => {
    return useQuery(['movies-by-genres', { id, page }], () => TheMovieDBAPI.getMovieByGenre(id, page), {keepPreviousData:true})
}

export default useMoviesByGenre