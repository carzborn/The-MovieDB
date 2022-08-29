import Container from 'react-bootstrap/Container'
import useNowPlaying from '../hooks/useNowPlaying'
import MovieCard from '../components/MovieCard'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const NowPlayingPage = () => {

    const {data, isSuccess, isError, error} = useNowPlaying()
	return (

        <Container className="py-3 text-center">
            <div>
                <h2>Movies Playing In Cinemas</h2>
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

export default NowPlayingPage