import { ROUTES_API } from 'config/routes'
import { useState } from 'react'
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap'
import { Controller, useForm } from 'react-hook-form'

import sendMail from 'services/mail'
import { getIcon } from 'utils/icons'

const Contact = () => {
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm()

  const [isLoading, setIsLoading] = useState(false)

  const onSubmit = async (formData: any) => {
    setIsLoading(true)
    await fetch(ROUTES_API.CONTACT, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        // eslint-disable-next-line @typescript-eslint/naming-convention
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
    setIsLoading(false)
  }

  return (
    <section id="contact" className="p-5 text-center text-black bg-light">
      <Container>
        <h2 className="mb-4 font-ps">contact me</h2>
        <Row>
          <Col md={7}>
            <Form onSubmit={handleSubmit(onSubmit)} onReset={reset}>
              <Form.Group className="mb-3" controlId="name">
                <Controller
                  control={control}
                  name="name"
                  defaultValue=""
                  render={({ field: { onChange, value, ref } }) => (
                    <Form.Control
                      onChange={onChange}
                      value={value}
                      ref={ref}
                      isInvalid={!!errors.name}
                      type="text"
                      placeholder="Name"
                      required
                      minLength={10}
                      maxLength={50}
                    />
                  )}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="email">
                <Controller
                  control={control}
                  name="email"
                  defaultValue=""
                  render={({ field: { onChange, value, ref } }) => (
                    <Form.Control
                      onChange={onChange}
                      value={value}
                      ref={ref}
                      isInvalid={!!errors.email}
                      type="email"
                      placeholder="Email"
                      required
                      minLength={10}
                      maxLength={50}
                      inputMode="email"
                    />
                  )}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="message">
                <Controller
                  control={control}
                  name="message"
                  defaultValue=""
                  render={({ field: { onChange, value, ref } }) => (
                    <Form.Control
                      onChange={onChange}
                      value={value}
                      ref={ref}
                      isInvalid={!!errors.message}
                      as="textarea"
                      rows={4}
                      placeholder="Write your message"
                      required
                      minLength={10}
                      maxLength={250}
                    />
                  )}
                />
              </Form.Group>

              <Button
                size="lg"
                type="submit"
                className="mb-3 text-white"
                disabled={isLoading}
              >
                {isLoading ? 'Sending...' : 'Send'}
              </Button>
            </Form>
          </Col>

          <Col md={5}>
            <Card className="mb-4">
              <Card.Body className="text-center">
                <Card.Title className="align-items-center mb-0">
                  {getIcon('envelop', {
                    className: 'text-primary',
                  })}
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
                <Card.Title className="align-items-center mb-0">
                  {getIcon('mobile', {
                    className: 'text-primary',
                  })}
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
}

export default Contact
