import { Col, ListGroup, Row } from 'react-bootstrap'

import IAbout from 'types/about'
import { getIcon } from 'utils/icons'

interface IProps {
  about: IAbout
}

const Header = ({ about }: IProps) => (
  <Row id="resume-header" className="align-items-center">
    <Col md={6} lg={8} xl={9}>
      <h2 className="text-uppercase text-primary">{about.name}</h2>
      <h4>{about.title}</h4>
    </Col>
    <Col md={6} lg={4} xl={3} className="border-start">
      <ListGroup className="list-unstyled mb-0">
        <ListGroup.Item className="border border-0 text-muted">
          {getIcon('phone', { className: 'mr-2' })}
          &nbsp;
          {about.phone}
        </ListGroup.Item>
        <ListGroup.Item className="border border-0 text-muted">
          {getIcon('envelop', { className: 'mr-2' })}
          &nbsp;
          {about.mail}
        </ListGroup.Item>
        <ListGroup.Item className="border border-0 text-muted">
          {getIcon('marker', { className: 'mr-2' })}
          &nbsp;
          {about.location}
        </ListGroup.Item>
      </ListGroup>
    </Col>
  </Row>
)

export default Header
