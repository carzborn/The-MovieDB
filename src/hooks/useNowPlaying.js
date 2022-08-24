// Query that gets the movies playing in cinemas

import {useQuery} from "react-query";
import TheMovieDBAPI from '../services/TheMovieDBAPI'

const useNowPlaying = () => {
    return useQuery('now-playing', TheMovieDBAPI.getNowPlaying, {keepPreviousData: true})
}

export default useNowPlaying;