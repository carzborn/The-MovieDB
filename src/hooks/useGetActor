import { useQuery } from 'react-query'
import tmdbAPI from '../services/tmbdAPI'

const useGetActors = (id) => {
    return useQuery(['actor', id], () => tmdbAPI.getActor(id))
}

export default useGetActors