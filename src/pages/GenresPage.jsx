import React from 'react'
import useGenres from '../hooks/useGenres'
import { Link } from 'react-router-dom'
import WarningAlert from '../components/alerts/WarningAlert'

//bootstrap imports
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'


// PAGE FOR ALL THE GENRES

const GenresPage = () => {
    const {data, isSuccess, isLoading, isError, error} = useGenres()

    return (
        <Container className='text-center p-3'>

            {isError && <WarningAlert message={error.message}/>}

            {isLoading && <div>Loading Genres...</div>}

            {isSuccess && (
                <>
                    <h2>Sort Movies by Genre</h2>

                    <Row>
                        {data.genres.map((genre) => (
                            <Col key={genre.id} className="py-2" lg={3} md={4} sm={6}>
                                <Button size='md' variant="primary" as={ Link } to={`/genres/${genre.id}`}>{genre.name}</Button>
                            </Col>
                        ))}
                    </Row>
                </>
            )}
        </Container>
    )
}

export default GenresPage