// Actor info Component
import { Link } from "react-router-dom"

// Bootstrap imports
import Container from "react-bootstrap/Container"
import Card from "react-bootstrap/Card"
import ListGroup from "react-bootstrap/ListGroup"
import Col from "react-bootstrap/esm/Col"
import Row from "react-bootstrap/esm/Row"
import Table from "react-bootstrap/Table"
import Button from 'react-bootstrap/Button'

const ActorInfo = ({ actor }) => {

    // Base url for image
    const ImgBaseUrl = 'https://image.tmdb.org/t/p/w500'

    return(
        <Container className="py-3">
            <h2>{actor.name}</h2>

            <Row>
                <Col>
                    <img src={ImgBaseUrl + actor.profile_path} alt='actor profilepicture' className='poster'></img>
                </Col>

                <Col>
                <Card className="mb-3">
                        <Card.Header className='text-center'><h3>About</h3></Card.Header>
                        <ListGroup variant='flush'>
                        <ListGroup.Item>Date of Birth {actor.birthday}</ListGroup.Item>
                        <ListGroup.Item>Place of Birth: {actor.place_of_birth}</ListGroup.Item>
                        <ListGroup.Item><h6>Biography</h6>{actor.biography}</ListGroup.Item>
                        </ListGroup>
                    </Card>

                    <Card>
                        <Card.Header className='text-center'><h3>Seen in</h3></Card.Header>
                        <Table>
                            <tbody>
                                {actor.movie_credits.cast.map((movie) =>(
                                    <tr key={movie.id}>
                                        <td>
                                            <Button className="text-decoration-none" to={`/movie/${movie.id}`} as={Link}>{movie.title}</Button>
                                        </td>
                                        <td>as</td>
                                        <td>{movie.character}</td>
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

export default ActorInfo