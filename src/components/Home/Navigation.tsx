import React from 'react'
import Image from 'next/image'
import { Container, Navbar, Nav } from 'react-bootstrap'
import { NAME } from 'constants/core'

const Navigation = () => (
  <Navbar
    expand="md"
    fixed="top"
    bg="black"
    variant="dark"
    className="font-cabin"
  >
    <Container>
      <Navbar.Brand
        href="#page-top"
        className="text-white d-flex align-items-center"
      >
        <Image
          src="/images/logo_100.png"
          loading="lazy"
          alt="logo"
          width={30}
          height={30}
        />
        &nbsp;&nbsp;{NAME}
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="menu" />
      <Navbar.Collapse className="justify-content-end" id="menu">
        <Nav className="ml-auto">
          <Nav.Link href="#about" className="text-white">
            About
          </Nav.Link>
          <Nav.Link href="#projects" className="text-white">
            Projects
          </Nav.Link>
          <Nav.Link href="#skills" className="text-white">
            Skills
          </Nav.Link>
          <Nav.Link href="#contact" className="text-white">
            Contact
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
)

export default Navigation
