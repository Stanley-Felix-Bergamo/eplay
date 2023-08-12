//React
import { Link } from 'react-router-dom'
import { open } from '../../store/reducers/cart'

import { HashLink } from 'react-router-hash-link'

//Styles
import {
  HeaderBar,
  Links,
  LinkItem,
  CartButton,
  Hamburguer,
  HeaderRow,
  NavMobile
} from './styles'

//Images
import carrinho from '../../assets/images/carrinho.svg'
import logo from '../../assets/images/logo.svg'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { useState } from 'react'

const Header = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)
  const openCart = () => dispatch(open())
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <HeaderBar>
      <HeaderRow>
        <div>
          <Hamburguer onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <span />
            <span />
            <span />
          </Hamburguer>
        </div>
        <div>
          <Link to="/">
            <h1>
              <img src={logo} alt="Logo da Loja" />
            </h1>
          </Link>
          <nav>
            <Links>
              <LinkItem>
                <Link
                  title="Clique aki para acesssar a página de categorias"
                  to="/categories"
                >
                  Categorias
                </Link>
              </LinkItem>
              <LinkItem>
                <HashLink
                  title="Clique aki para acesssar a seção de em breve"
                  to="/#coming-soon"
                >
                  Em breve{' '}
                </HashLink>
              </LinkItem>
              <LinkItem>
                <HashLink
                  title="Clique aki para acesssar a seção de promoções"
                  to="/#on-sale"
                >
                  Promoções
                </HashLink>
              </LinkItem>
            </Links>
          </nav>
        </div>
        <CartButton role="button" onClick={openCart}>
          {items.length} <span>- produto(s)</span>
          <img src={carrinho} alt="Carrinho de compras" />
        </CartButton>
      </HeaderRow>
      <NavMobile className={isMenuOpen ? 'is-open' : ''}>
        <Links>
          <LinkItem>
            <Link
              title="Clique aki para acesssar a página de categorias"
              to="/categories"
              onClick={() => setIsMenuOpen(false)}
            >
              Categorias
            </Link>
          </LinkItem>
          <LinkItem>
            <HashLink
              title="Clique aki para acesssar a seção de em breve"
              to="/#coming-soon"
              onClick={() => setIsMenuOpen(false)}
            >
              Em breve{' '}
            </HashLink>
          </LinkItem>
          <LinkItem>
            <HashLink
              title="Clique aki para acesssar a seção de promoções"
              to="/#on-sale"
              onClick={() => setIsMenuOpen(false)}
            >
              Promoções
            </HashLink>
          </LinkItem>
        </Links>
      </NavMobile>
    </HeaderBar>
  )
}
export default Header
