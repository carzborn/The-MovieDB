import Container from "react-bootstrap/Container"
import Card from "react-bootstrap/Card"
import ListGroup from "react-bootstrap/ListGroup"
import Col from "react-bootstrap/esm/Col"
import Row from "react-bootstrap/esm/Row"
import Image from "react-bootstrap/Image"
import Button from "react-bootstrap/Button"
import Table from "react-bootstrap/Table"
import { Link } from "react-router-dom"

const MovieInfo = ({ movie }) => {
    const ImgBaseUrl = 'https://image.tmdb.org/t/p/w500'

    return(
        <Container className="py-3">
            <h2>{movie.title}</h2>

            <Row>
                <Col>
                    <img src={ImgBaseUrl + movie.poster_path} alt='movie poster' className='poster'></img>
                </Col>

                <Col>
                <Card className="mb-3">
                        <Card.Header className='text-center'><h3>Overview</h3></Card.Header>
                        <ListGroup variant='flush'>
                        <ListGroup.Item>Premier: {movie.release_date}</ListGroup.Item>
                        <ListGroup.Item>Run Time: {movie.runtime} minutes</ListGroup.Item>
                        <ListGroup.Item>Budget: ${movie.budget}</ListGroup.Item>
                        <ListGroup.Item>Revenue: ${movie.revenue}</ListGroup.Item>
                        <ListGroup.Item><h6>Description</h6>{movie.overview}</ListGroup.Item>
                        </ListGroup>
                    </Card>

                    <Card>
                        <Card.Header className='text-center'><h3>Cast</h3></Card.Header>
                        <Table>
                            <tbody>
                                {movie.credits.cast.map((actor) =>(
                                    <tr key={actor.id}>
                                        <td>
                                            <a className="text-decoration-none"href={`/actor/${actor.id}`} as={Link}>{actor.name}</a>
                                        </td>
                                        <td><p>as</p></td>
                                        <td>{actor.character}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default MovieInfo