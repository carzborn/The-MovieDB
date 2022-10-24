import React from 'react'
import useMoviesByGenre from '../hooks/useMoviesByGenre'
import {useParams, useSearchParams} from 'react-router-dom'
import MovieCard from '../components/MovieCard'
import Pagination from '../components/Pagination'

//bootstrap imports
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import GenresPage from './GenresPage'


const MovieByGenre = () => {
    const { id } = useParams()
    const [searchParams, setSearchParams] = useSearchParams({ page: 1 })
    const page = searchParams.get('page')
    const {data, isSuccess, isError, isLoading, error} = useMoviesByGenre(id, page)



return (
    <Container className="py-3 text-center">
        {isLoading && <h1>Loading movies</h1>}

        {isError && error.message}

        {isSuccess && (
            <>
                <Row>
                    {data.results.map((movie,id) =>(
                        <Col lg={4} md={3} sm={2}>
                            <MovieCard movie={movie} key={id}/>
                        </Col>
                    ))}
                </Row>

                <Pagination
                    page={page}
                    totalPages={data.total_pages} 
                    onChangePage={setSearchParams}
                />
            </>
        )}

    </Container>
)
}

export default MovieByGenre