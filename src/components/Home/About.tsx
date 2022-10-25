import Link from 'next/link'
import React from 'react'
import { Button, Col, Container, Row, Image } from 'react-bootstrap'

const About = () => (
  <section id="about" className="bg-black text-center text-white p-5">
    <Container>
      <Row>
        <Col lg={8} className="mx-auto">
          <h2 className="font-ps">About me</h2>
          <p className="m-0">
            Information technology (IT) student at Yachay Tech, with a focus on
            data science. Currently a project developer for a startup, with the
            aim of becoming a project manager. In the area in which I have
            achieved the greatest development is the backend, in addition to IT
            support.
          </p>
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
