import Container from 'react-bootstrap/Container'
import useTopRated from '../hooks/useTopRated'
import MovieCard from '../components/MovieCard'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const TopRatedPage = () => {

    const {data, isSuccess, isError, error} = useTopRated()

	return (

        <Container className="py-3 text-center">
            <div>
                <h2>Top Rated Movies</h2>
                <Row lg={3} md={4} sm={6}>
                    {isSuccess && data.results.map((movie,id) => (
                        <Col>
                            <MovieCard movie={movie} id={id} />
                        </Col>
                    ))}
                </Row>
            </div>
        </Container>
	)
}

export default TopRatedPage