import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faMobileAlt } from '@fortawesome/free-solid-svg-icons'
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap'

const Contact = () => (
  <section id="contact" className="p-5 text-center text-black bg-light">
    <Container>
      <h2 className="mb-4 font-ps">contact me</h2>
      <Row>
        <Col md={7}>
          <Form>
            <Form.Group className="mb-3" controlId="name">
              <Form.Control
                type="text"
                placeholder="Name"
                name="name"
                required
                minLength={10}
                maxLength={50}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="email">
              <Form.Control
                type="email"
                placeholder="Email"
                required
                minLength={10}
                maxLength={50}
                inputMode="email"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="message">
              <Form.Control
                as="textarea"
                rows={4}
                placeholder="Write your message"
                required
                minLength={10}
                maxLength={250}
              />
            </Form.Group>

            <Button size="lg" active type="submit" className="mb-3 text-white">
              Send
            </Button>
          </Form>
        </Col>

        <Col md={5}>
          <Card className="mb-4">
            <Card.Body className="text-center">
              <Card.Title>
                <FontAwesomeIcon
                  icon={faEnvelope}
                  size="sm"
                  className="text-primary"
                />
                &nbsp;EMAIL
              </Card.Title>
              <hr className="my-4" />
              <Card.Text className="text-black-50">
                pedroaal04@gmail.com
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="mb-4">
            <Card.Body className="text-center">
              <Card.Title>
                <FontAwesomeIcon
                  icon={faMobileAlt}
                  size="sm"
                  className="text-primary"
                />
                &nbsp;Phone
              </Card.Title>
              <hr className="my-4" />
              <Card.Text className="text-black-50">+593 992979716</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  </section>
)

export default Contact
