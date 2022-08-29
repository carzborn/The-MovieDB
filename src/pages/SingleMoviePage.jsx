import Container from 'react-bootstrap/Container'
import MovieInfo from '../components/MovieInfo'
import { useParams } from 'react-router-dom'
import useMovie from '../hooks/useMovie'

const SingleMoviePage = () => {

    const { id } = useParams()
    const { data, isSuccess, isError, error } = useMovie(id)

	return (

        <Container>

            {isSuccess && <MovieInfo movie={data}/>}

        </Container>
	)
}

export default SingleMoviePage
