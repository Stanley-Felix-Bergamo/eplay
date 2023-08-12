//Styles
import { Container, List, Title } from './styled'

//Components
import Product from '../Product'
import { formataPreco } from '../../utils'
import Loader from '../Loader'

export type Props = {
  title: string
  background: 'gray' | 'black'
  games?: Game[]
  id?: string
  isLoading: boolean
}

const ProductsList = ({ title, background, games, id, isLoading }: Props) => {
  const getGamesTags = (game: Game) => {
    const tags = []

    if (game.release_date) {
      tags.push(game.release_date)
    }
    if (game.prices.discount) {
      tags.push(`${game.prices.discount}%`)
    }
    if (game.prices.current) {
      tags.push(formataPreco(game.prices.current))
    }
    return tags
  }

  if (isLoading) {
    return <Loader />
  }
  return (
    <Container id={id} background={background}>
      <div className="container">
        <Title>{title}</Title>
        <List>
          {games &&
            games.map((game) => (
              <li key={game.id}>
                <Product
                  id={game.id}
                  category={game.details.category}
                  description={game.description}
                  image={game.media.thumbnail}
                  infos={getGamesTags(game)}
                  system={game.details.system}
                  title={game.name}
                />
              </li>
            ))}
        </List>
      </div>
    </Container>
  )
}

export default ProductsList
