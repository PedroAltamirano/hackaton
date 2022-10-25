import React from 'react'
import { Col, Container, Row, Image } from 'react-bootstrap'

const Projects = () => (
  <section id="projects" className="bg-light">
    <Container className="p-5">
      <Row className="align-items-center no-gutters mb-5">
        <Col lg={7} xl={8}>
          <a href="https://www.servigraf.me/">
            <Image
              fluid
              className="mb-3 mb-lg-0"
              alt="main-proyect"
              src="/images/fondo_servigraf.jpeg"
            />
          </a>
        </Col>
        <Col lg={5} xl={4}>
          <div className="text-center text-md-left">
            <h4 className="text-black font-ps">ServiGraf</h4>
            <p className="text-black-50">
              It&apos;s an ERP (enterprise resource planner) the purpose of this
              program is to have a production management based on different
              modules that manage different parts of the company. Written in web
              technologies and using databases, the main feature of the system
              is to provide detailed information on the production of each
              month, helping to make effective decisions.
            </p>
          </div>
        </Col>
      </Row>

      <Row className="no-gutters mb-5 mb-lg-0">
        <Col lg={6} className="p-0">
          <a href="https://colaboratoriociudadano.org">
            <Image
              fluid
              alt="project-1"
              src="/images/fondo_colaboratorio.jpeg"
            />
          </a>
        </Col>
        <Col lg={6} className="p-0">
          <div className="bg-black text-center h-100">
            <div className="d-flex h-100">
              <div className="my-auto px-5 text-left text-lg-left">
                <h4 className="text-white mb-2 project-heading font-ps font-24">
                  Colaboratorio
                </h4>
                <p className="mb-0 text-white-50">
                  This is a donation system. The main function of the system is
                  to store and present data for donations. The system use
                  laravel and postgresql, as well as integration with a payment
                  button.
                </p>
              </div>
            </div>
          </div>
        </Col>
      </Row>

      <Row className="no-gutters mb-0">
        <Col lg={6} className="p-0">
          <a href="https://joselitoexpress.com">
            <Image fluid alt="project-1" src="/images/fondo_joselito.jpeg" />
          </a>
        </Col>
        <Col lg={6} className="p-0 order-md-first">
          <div className="bg-black text-right h-100">
            <div className="d-flex h-100">
              <div className="my-auto px-5 text-center text-lg-left">
                <h4 className="text-white mb-2 project-heading font-ps">
                  Joselitoexpress
                </h4>
                <p className="mb-0 text-white-50">
                  It is a mobile delivery application that makes use of rest
                  api. The apps administration is made by a web system. The
                  mobile application is created with the ionic, and its web
                  system is created with laravel.
                </p>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  </section>
)

export default Projects
