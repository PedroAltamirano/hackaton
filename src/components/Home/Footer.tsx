import { NAME } from 'constants/core'
import React from 'react'
import { Button, Container, Stack } from 'react-bootstrap'
import ILink from 'types/links'
import { getIcon } from 'utils/icons'

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
        {links?.map((item, index) => (
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
            {getIcon(item.icon)}
          </Button>
        ))}
      </Stack>

      <Container className="text-center text-white">
        <p>{NAME} 2022</p>
      </Container>
    </Container>
  </footer>
)

export default Footer
