import Container from 'react-bootstrap/Container'
import usePopular from '../hooks/usePopular'
import MovieCard from '../components/MovieCard'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'



const PopularPage = () => {
    const {data, isSuccess, isError, error} = usePopular()
	return (

        <Container className="py-3 text-center">
            <div>
                <h2>Popular Movies</h2>
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

export default PopularPage
