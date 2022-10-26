import Link from 'next/link'
import React from 'react'
import { Button, Col, Container, Row, Image } from 'react-bootstrap'
import IAbout from 'types/about'

interface IProps {
  about: IAbout
}

const About = ({ about }: IProps) => (
  <section id="about" className="bg-black text-center text-white p-5">
    <Container>
      <Row>
        <Col lg={8} className="mx-auto">
          <h2 className="font-ps">About me</h2>
          <p className="m-0">{about.short}</p>
          <Link href="resume">
            <Button variant="outline-primary" className="my-4">
              Resume
            </Button>
          </Link>
        </Col>
      </Row>
      <Image
        fluid
        className="mb-3"
        src="/images/fondo_code_little.png"
        alt="about-me"
      />
    </Container>
  </section>
)

export default About
