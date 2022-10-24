import Container from 'react-bootstrap/Container'
import useNowPlaying from '../hooks/useNowPlaying'
import MovieCard from '../components/MovieCard'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import WarningAlert from '../components/alerts/WarningAlert'

const NowPlayingPage = () => {

    const {data, isSuccess, isError, error} = useNowPlaying()
	return (

        <Container className="py-3 text-center">

            <h2>Movies Playing In Cinemas</h2>
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

export default NowPlayingPage