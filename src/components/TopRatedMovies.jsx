import React from 'react'
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import useTopRated from '../hooks/useTopRated'
import { Link } from 'react-router-dom'

const TopRatedMovies = () => {
	
	const {data, isSuccess, isError, error} = useTopRated()

	return (

        <Container className='text-center'>
            <h2>Top Rated Movies</h2>
            <div className='d-flex justify-content-center flex-wrap' >
                
                {isSuccess && data.results.map((movie,id) => (

					<Card key={id} className='m-3'>
						<Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} /> ´
						<Card.Body>
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

export default TopRatedMovies
