import Container from 'react-bootstrap/Container'
import MovieInfo from '../components/MovieInfo'
import { useParams } from 'react-router-dom'
import useMovie from '../hooks/useMovie'
import WarningAlert from '../components/alerts/WarningAlert'

const SingleMoviePage = () => {

    const { id } = useParams()
    const { data, isSuccess, isError, error } = useMovie(id)

	return (

        <Container>
            {isError && <WarningAlert message={error.message}/>}
            {isSuccess && <MovieInfo movie={data}/>}

        </Container>
	)
}

export default SingleMoviePage
