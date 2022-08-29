import Container from 'react-bootstrap/Container'
import ActorInfo from '../components/ActorInfo'
import { useParams } from 'react-router-dom'
import useActor from '../hooks/useActor'
import WarningAlert from '../components/alerts/WarningAlert'

const ActorPage = () => {

    const { id } = useParams()
    const { data, isSuccess, isError, error } = useActor(id)

	return (

        <Container>
            {isError && <WarningAlert message={error.message}/>}

            {isSuccess && (<ActorInfo actor={data}/>)}
        </Container>
	)
}

export default ActorPage
