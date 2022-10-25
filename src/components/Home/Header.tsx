import React from 'react'
import { Container } from 'react-bootstrap'

const Header = () => (
  <header
    className="vh-100 vw-100"
    style={{ backgroundImage: "url('/images/fondo_code_bk.jpg')" }}
  >
    <div className="d-flex align-items-center h-100">
      <Container fluid>
        <h1
          className="text-center text-white font-ps"
          data-period="3000"
          data-type="['<CODE>', '<PEDRO ALTAMIRANO>']"
        >
          HOLA
        </h1>
      </Container>
    </div>
  </header>
)

export default Header
