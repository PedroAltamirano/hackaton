import { Col, Container, Row, Image } from 'react-bootstrap'

import { HALF } from 'constants/core'
import IProject from 'types/project'

interface IProps {
  projects: IProject[]
}

const Projects = ({ projects }: IProps) => {
  const principal = projects[0]
  const secondaries = projects.slice(1)

  return (
    <section id="projects" className="bg-light py-5">
      <Container className="p-5">
        <Row className="align-items-center no-gutters mb-5">
          <Col lg={7} xl={8}>
            <a href={principal.url}>
              <Image
                fluid
                className="mb-3 mb-md-0"
                alt={principal.name}
                src={principal.image}
              />
            </a>
          </Col>
          <Col lg={5} xl={4}>
            <div className="text-center text-md-left">
              <h4 className="text-black font-ps">{principal.name}</h4>
              <p className="text-black-50">{principal.short}</p>
            </div>
          </Col>
        </Row>

        {secondaries.map((item, index) => (
          <Row
            key={index}
            className={`no-gutters ${
              index === secondaries.length - 1 ? 'mb-0' : 'mb-5 mb-md-0'
            }`}
          >
            <Col lg={6} className="p-0">
              <a href={item.url}>
                <Image fluid alt={item.name} src={item.image} />
              </a>
            </Col>
            <Col
              lg={6}
              className={`p-0 ${(index + 1) % HALF === 0 && 'order-md-first'}`}
            >
              <div className="bg-black text-center h-100">
                <div className="d-flex h-100">
                  <div className="my-auto px-5 text-left text-md-left">
                    <h4 className="text-white mb-2 font-ps font-24">
                      {item.name}
                    </h4>
                    <p className="mb-0 text-white-50">{item.short}</p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        ))}
      </Container>
    </section>
  )
}

export default Projects
