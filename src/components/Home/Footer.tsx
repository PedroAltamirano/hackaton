import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons'
import { Button, Container, Stack } from 'react-bootstrap'
import ILink from 'types/links'

interface IProps {
  links: ILink[]
}

const Footer = ({ links }: IProps) => (
  <footer className="bg-black p-5">
    <Container>
      <Stack
        direction="horizontal"
        gap={2}
        className="justify-content-center mb-4"
      >
        {links.map((item, index) => (
          <Button
            key={index}
            size="lg"
            variant="outline-primary"
            className="btn-default mx-2"
            role="button"
            href={item.url}
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={item.icon} fixedWidth />
          </Button>
        ))}
        <Button
          size="lg"
          variant="outline-primary"
          className="btn-default mx-2"
          role="button"
          href="https://www.linkedin.com/in/pedro-altamirano/"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedinIn} fixedWidth />
        </Button>
        <Button
          size="lg"
          variant="outline-primary"
          className="btn-default mx-2"
          role="button"
          href="https://github.com/PedroAltamirano"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} fixedWidth />
        </Button>
      </Stack>

      <Container className="text-center text-white">
        <p>Pedro Altamirano 2022</p>
      </Container>
    </Container>
  </footer>
)

export default Footer
