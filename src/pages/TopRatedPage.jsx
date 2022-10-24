import Container from 'react-bootstrap/Container'
import useTopRated from '../hooks/useTopRated'
import MovieCard from '../components/MovieCard'
import Row from 'react-bootstrap/Row'
import WarningAlert from '../components/alerts/WarningAlert'
import Col from 'react-bootstrap/Col'

const TopRatedPage = () => {

    const {data, isSuccess, isError, error} = useTopRated()

	return (

        <Container className="py-3 text-center">

            <h2>Top Rated Movies</h2>
            {isError && <WarningAlert message={error.message}/>}
            <Row>
                {isSuccess && data.results.map((movie,id) => (
                    <Col lg={4} md={3} sm={2}>
                        <MovieCard movie={movie} id={id} />
                    </Col>
                ))}
            </Row>

        </Container>
	)
}

export default TopRatedPage