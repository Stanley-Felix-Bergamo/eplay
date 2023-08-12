import { DotLoader } from 'react-spinners'
import { cores } from '../../styles'
import { Container } from './styles'

const Loader = () => (
  <Container>
    <DotLoader color={cores.branca} />
  </Container>
)

export default Loader
