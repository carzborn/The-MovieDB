import React from 'react'
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import useNowPlaying from '../hooks/useNowPlaying'
import { Link } from 'react-router-dom'

const MoviesPlaying = () => {
	
	const {data, isSuccess, isError, error} = useNowPlaying()

	return (

        <Container className='text-center'>
            <h2>Movies currently in cinemas</h2>
            <div className='d-flex justify-content-center flex-wrap' >
                
                {isSuccess && data.results.map((movie,id) => (

					<Card key={id} className='m-3'>
						<Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} /> ´
						<Card.Body className='d-flex flex-column'>
							<Card.Title>{movie.title}</Card.Title>
                            <Button 
                                variant='primary' 
                                size='sm' 
                                as={Link}
                                to={`/movie/${movie.id}`}
                            >
                                Read More
                            </Button>
						</Card.Body>
					</Card>
                ))}
            </div>
        </Container>
	)
}

export default MoviesPlaying
