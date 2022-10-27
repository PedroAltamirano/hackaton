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
import { getIcon } from 'utils/icons'

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
                  .map((skill, index) =>
                    getIcon(skill.icon, {
                      key: index,
                      size: '3x',
                      className: 'mr-2',
                    })
                  )}
              </div>
              <h6 className="item-title my-2">{category.name}</h6>
              <p className="m-0 p-0">
                {category.skills.map((skill) => skill.name).join(', ')}
              </p>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}

export default Skills
