import Container from 'react-bootstrap/Container'
import usePopular from '../hooks/usePopular'
import MovieCard from '../components/MovieCard'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import WarningAlert from '../components/alerts/WarningAlert'



const PopularPage = () => {
    const {data, isSuccess, isError, error} = usePopular()
	return (

        <Container className="py-3 text-center">

            <h2>Popular Movies</h2>
            {isError && <WarningAlert message={error.message}/>}
            <Row lg={3} md={4} sm={6}>
                {isSuccess && data.results.map((movie,id) => (
                    <Col>
                        <MovieCard movie={movie} id={id} />
                    </Col>
                ))}
            </Row>

        </Container>
	)
}

export default PopularPage
