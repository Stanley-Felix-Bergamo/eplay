//Images
import starwars from '../../assets/images/star_wars.png'
import zelda from '../../assets/images/zelda.png'

//Components
import ProductsList from '../../components/ProductsList'

//Models
import Game from '../../models/Game'

const promocoes: Game[] = [
  {
    id: 1,
    category: 'Ação',
    description: 'Um Jedi',
    title: 'Star Wars',
    system: 'Windows',
    infos: ['30%', 'R$98,00'],
    image: starwars
  },
  {
    id: 2,
    category: 'Ação',
    description: 'Um Jedi',
    title: 'Star Wars',
    system: 'Windows',
    infos: ['30%', 'R$98,00'],
    image: starwars
  },
  {
    id: 3,
    category: 'Ação',
    description: 'Um Jedi',
    title: 'Star Wars',
    system: 'Windows',
    infos: ['30%', 'R$98,00'],
    image: starwars
  },
  {
    id: 4,
    category: 'Ação',
    description: 'Um Jedi',
    title: 'Star Wars',
    system: 'Windows',
    infos: ['30%', 'R$98,00'],
    image: starwars
  }
]
const emBreve: Game[] = [
  {
    id: 5,
    category: 'Ação',
    description: 'a Historia de Link',
    title: 'Zelda',
    system: 'Nintendo',
    infos: ['25%', 'R$108,00'],
    image: zelda
  },
  {
    id: 6,
    category: 'Ação',
    description: 'a Historia de Link',
    title: 'Zelda',
    system: 'Nintendo',
    infos: ['25%', 'R$108,00'],
    image: zelda
  },
  {
    id: 7,
    category: 'Ação',
    description: 'a Historia de Link',
    title: 'Zelda',
    system: 'Nintendo',
    infos: ['25%', 'R$108,00'],
    image: zelda
  },
  {
    id: 8,
    category: 'Ação',
    description: 'a Historia de Link',
    title: 'Zelda',
    system: 'Nintendo',
    infos: ['25%', 'R$108,00'],
    image: zelda
  }
]

const Categories = () => (
  <>
    <ProductsList games={promocoes} title="RPG" background="gray" />
    <ProductsList games={emBreve} title="Ação" background="black" />
    <ProductsList games={promocoes} title="Aventura" background="gray" />
    <ProductsList games={emBreve} title="FPS" background="black" />
  </>
)

export default Categories
