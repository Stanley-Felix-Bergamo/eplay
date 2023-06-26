//react
import { BrowserRouter } from 'react-router-dom'

//styles
import { GlobalCss } from './styles'

//components
import Header from './components/Header'
import Footer from './components/Footer'

//Routes
import Rotas from './routes'

function App() {
  return (
    <BrowserRouter>
      <GlobalCss />
      <div className="container">
        <Header />
      </div>
      <Rotas />
      <Footer />
    </BrowserRouter>
  )
}

export default App
