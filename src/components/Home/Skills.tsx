import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDatabase } from '@fortawesome/free-solid-svg-icons'
import {
  faHtml5,
  faCss3Alt,
  faJs,
  faReact,
  faLaravel,
  faNodeJs,
  faLinux,
  faPython,
} from '@fortawesome/free-brands-svg-icons'
import { ISkillsCats } from 'types/skills'
import { Col, Container, Row } from 'react-bootstrap'

interface IProps {
  skillsCats: ISkillsCats[]
}

const Skills = ({ skillsCats }: IProps) => {
  console.log(
    '🚀 ~ file: Skills.tsx ~ line 88 ~ Skills ~ skillsCats',
    skillsCats
  )
  return (
    <section
      id="skills"
      className="text-white text-center p-5"
      style={{ backgroundImage: "url('/images/fondo_code_bk.jpg')" }}
    >
      <Container>
        <Row>
          <Col lg={8} className="mx-auto">
            <h1 className="font-ps">Skills</h1>
          </Col>
        </Row>
        <Row className="align-items-center no-gutters">
          {skillsCats.map((category, index) => (
            <Col key={index} xs={6} lg={3} className="text-center p-3">
              <div>
                {category.skills
                  .filter((skill) => skill.icon)
                  .map((skill, index) => (
                    <FontAwesomeIcon
                      key={index}
                      icon={skill.icon}
                      size="sm"
                      className="mr-2"
                    />
                  ))}
              </div>
              <h6 className="item-title my-2">{category.name}</h6>
              <p className="m-0 p-0">
                {category.skills.map((skill) => skill.name).join(', ')}
              </p>
            </Col>
          ))}
          <Col xs={6} lg={3} className="text-center p-3">
            <div>
              <FontAwesomeIcon icon={faHtml5} size="sm" className="mr-2" />
              <FontAwesomeIcon icon={faCss3Alt} size="sm" className="mr-2" />
              <FontAwesomeIcon icon={faJs} size="sm" />
            </div>
            <h6 className="item-title my-2">Frontend</h6>
            <p className="m-0 p-0">HTML, CSS, JavaScript, JQuery</p>
          </Col>
          <Col xs={6} lg={3} className="text-center p-3">
            <div>
              <FontAwesomeIcon icon={faReact} size="sm" className="mr-2" />
              <FontAwesomeIcon icon={faLaravel} size="sm" className="mr-2" />
              <FontAwesomeIcon icon={faDatabase} size="sm" className="mr-2" />
              <FontAwesomeIcon icon={faNodeJs} size="sm" />
            </div>
            <h6 className="item-title my-2">Backend</h6>
            <p className="m-0 p-0">PHP, SQL, NODE</p>
          </Col>
          <div className="col-6 col-lg-3 text-center p-3">
            <div>
              <FontAwesomeIcon icon={faLinux} size="sm" />
            </div>
            <h6 className="item-title my-2">
              IT&nbsp;<strong>Support</strong>
            </h6>
            <p className="m-0 p-0">Linux, nginx, apache</p>
          </div>
          <div className="col-6 col-lg-3 text-center p-3">
            <div>
              <FontAwesomeIcon icon={faPython} size="sm" />
            </div>
            <h6 className="item-title my-2">Programming</h6>
            <p className="m-0 p-0">Python, C</p>
          </div>
        </Row>
      </Container>
    </section>
  )
}

export default Skills
