// Movie Card component
import {Link} from 'react-router-dom'; 

// Bootstrap imports
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';

const imgBaseUrl = 'https://image.tmdb.org/t/p/w500'

const MovieCard = ({movie}) => {

    return (
            <Card className='m-3'>
                <Card.Img variant='top' src={imgBaseUrl + movie.poster_path} ></Card.Img>
                <Card.Body>
                    <Card.Title>{movie.title}</Card.Title>
                    <Card.Text className="d-flex justify-content-center">
                    <Button 
                        variant='primary' 
                        size='sm' 
                        as={Link}
                        to={`/movie/${movie.id}`}
                        >
                       Read More
                    </Button>
                    </Card.Text>
                    
                </Card.Body>
            </Card>
    )
}

export default MovieCard