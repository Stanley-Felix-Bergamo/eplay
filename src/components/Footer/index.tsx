//styles
import { Container, SectionTitle, FooterSection, Link, Links } from './styles'

const currentYear = new Date().getFullYear()

const Footer = () => (
  <Container>
    <div className="container">
      <FooterSection>
        <SectionTitle>Categorias</SectionTitle>
        <Links>
          <li>
            <Link
              title="Clique aqui para acessar jogos RPG"
              to="/categories#rpg"
            >
              RPG
            </Link>
          </li>
          <li>
            <Link
              title="Clique aqui para acessar jogos Ação"
              to="/categories#action"
            >
              Ação
            </Link>
          </li>
          <li>
            <Link
              to="/categories#sports"
              title="Clique aqui para acessar jogos Esportes"
            >
              Esportes
            </Link>
          </li>
          <li>
            <Link
              to="/categories#simulation"
              title="Clique aqui para acessar jogos Simulação"
            >
              Simulação
            </Link>
          </li>
          <li>
            <Link
              to="/categories#fight"
              title="Clique aqui para acessar jogos Luta"
            >
              Luta
            </Link>
          </li>
        </Links>
      </FooterSection>
      <FooterSection>
        <SectionTitle>Acesso rápido</SectionTitle>
        <Links>
          <li>
            <Link
              title="Clique aqui para acessar a seção Promoções"
              to="/#on-sale"
            >
              Promoções
            </Link>
          </li>
          <li>
            <Link
              to="/#coming-soon"
              title="Clique aqui  para acessar  a seção de Em breve"
            >
              Em breve
            </Link>
          </li>
        </Links>
      </FooterSection>
      <p>{currentYear} - &copy; E-PLAY Todos os direitos reservados</p>
    </div>
  </Container>
)

export default Footer
