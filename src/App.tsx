//react
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

//styles
import { GlobalCss } from './styles'

//components
import Header from './components/Header'
import Footer from './components/Footer'

//Routes
import Rotas from './routes'
import { store } from './store'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalCss />
        <div className="container">
          <Header />
        </div>
        <Rotas />
        <Footer />
      </BrowserRouter>
    </Provider>
  )
}

export default App
