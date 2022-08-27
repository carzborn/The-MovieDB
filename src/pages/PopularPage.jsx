import React from 'react'
import Container from 'react-bootstrap/Container'
import usePopular from '../hooks/usePopular'

const PopularPage = () => {
	
	const {data, isSuccess, isError, error} = usePopular()

	return (

        <Container>
            <div>
                <h2>Popular Movies</h2>
                {isSuccess && data.results.map((movie,id) => (
                    <ul>
                        <li key={id}>{movie.title}</li>
                    </ul>
                ))}
            </div>
        </Container>
	)
}

export default PopularPage
