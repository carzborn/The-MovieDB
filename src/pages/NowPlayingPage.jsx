import React from 'react'
import Container from 'react-bootstrap/Container'
import useNowPlaying from '../hooks/useNowPlaying'

const NowPlayingPage = () => {

     const {data, isSuccess, isError, error} = useNowPlaying()

    return (
        <Container>
            <div>
                <h2>Movies playing in cinemas</h2>
                {isSuccess && data.results.map((movie,id) => (
                    <ul>
                        <li key={id}>{movie.title}</li>
                    </ul>
                ))}
            </div>
        </Container>
  )
}

export default NowPlayingPage