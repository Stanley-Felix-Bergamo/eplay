import { useParams } from 'react-router-dom'
import Hero from '../../components/Hero'
import Section from '../../components/Section'
import Gallery from '../../components/Gallery'
import { useGetGameQuery } from '../../services/api'
import Loader from '../../components/Loader'

type GameParams = {
  id: string
}

const Product = () => {
  const { id } = useParams() as GameParams
  const { data: game } = useGetGameQuery(id)

  if (!game) {
    return <Loader />
  }

  return (
    <>
      <Hero game={game} />
      <Section title="Sobre o Jogo" background="black">
        <p>{game.description}</p>
      </Section>
      <Section title="Mais detalhes" background="gray">
        <p>
          <b>Plataforma:</b> {game.details.system} <br />
          <b>Desenvolvedor:</b> {game.details.developer} <br />
          <b>Editora:</b>
          {game.details.publisher}
          <br />
          <b>idiomas:</b> O jogo oferece suporte a diversos incluindo
          {game.details.languages}
        </p>
      </Section>
      <Section title="Galeria" background="black">
        <Gallery
          name={game.name}
          defaultCover={game.media.cover}
          items={game.media.gallery}
        />
      </Section>
    </>
  )
}

export default Product
