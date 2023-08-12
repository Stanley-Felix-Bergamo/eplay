import { useNavigate } from 'react-router-dom'
import { close, remove } from '../../store/reducers/cart'
import { RootReducer } from '../../store'
import { useDispatch, useSelector } from 'react-redux'
import Button from '../Button'
import Tag from '../Tag'
import {
  Overlay,
  CartContainer,
  Sidebar,
  Prices,
  Qantity,
  CartItem
} from './styles'
import { formataPreco, getTotalPrice } from '../../utils'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const removeItem = (id: number) => dispatch(remove(id))
  const navigate = useNavigate()

  const dispatch = useDispatch()
  const closeCart = () => dispatch(close())

  const goToCheckout = () => {
    navigate('/checkout')
    closeCart()
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <Sidebar>
        <ul>
          {items.map((item) => (
            <CartItem key={item.id}>
              <img src={item.media.thumbnail} alt={item.name} />
              <div>
                <h3>{item.name}</h3>
                <Tag>{item.details.category}</Tag>
                <Tag>{item.details.system}</Tag>
                <span>{formataPreco(item.prices.current)}</span>
              </div>
              <button type="button" onClick={() => removeItem(item.id)} />
            </CartItem>
          ))}
        </ul>
        <Qantity>{items.length} Jogo(s) no Carrinho</Qantity>
        <Prices>
          Total de {formataPreco(getTotalPrice(items))}{' '}
          <span>Em até 6x sem juros</span>
        </Prices>
        <Button
          title="Clique aqui para continuar com a compra"
          type="button"
          onClick={goToCheckout}
        >
          Continuar com a compra
        </Button>
      </Sidebar>
    </CartContainer>
  )
}

export default Cart
