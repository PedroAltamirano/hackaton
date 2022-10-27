import { Container } from 'react-bootstrap'
import { Typewriter } from 'react-simple-typewriter'

const Header = () => (
  <header
    id="page-top"
    className="vh-100 vw-100"
    style={{ backgroundImage: "url('/images/fondo_code_bk.jpg')" }}
  >
    <div className="d-flex align-items-center h-100">
      <Container fluid>
        <h1 className="text-center text-white font-ps jumbo">
          <Typewriter
            words={['<CODE>', '<BACKEND>', '<DEVELOPER>', '</>']}
            typeSpeed={110}
            delaySpeed={3000}
            loop={0}
          />
        </h1>
      </Container>
    </div>
  </header>
)

export default Header
