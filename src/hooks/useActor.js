// Query fro an actor

import { useQuery } from 'react-query'
import TheMovieDBAPI from '../services/TheMovieDBAPI'

const useActor = (id) => {
    return useQuery(['actor', id], () => TheMovieDBAPI.getActor(id))
}

export default useActor