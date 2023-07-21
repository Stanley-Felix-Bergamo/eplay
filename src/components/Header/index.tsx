//React
import { Link } from 'react-router-dom'

//Styles
import { HeaderBar, Links, LinkItem, LinkCart } from './styles'

//Images
import carrinho from '../../assets/images/carrinho.svg'
import logo from '../../assets/images/logo.svg'

const Header = () => (
  <HeaderBar>
    <div>
      <Link to="/">
        <img src={logo} alt="Logo da Loja" />
      </Link>
      <nav>
        <Links>
          <LinkItem>
            <Link to="/categories">Categorias</Link>
          </LinkItem>
          <LinkItem>
            <a href="#">Novidades </a>
          </LinkItem>
          <LinkItem>
            <a href="#">Promoções </a>
          </LinkItem>
        </Links>
      </nav>
    </div>
    <LinkCart href="#">
      0 - produto(s)
      <img src={carrinho} alt="Carrinho de compras" />
    </LinkCart>
  </HeaderBar>
)
export default Header
