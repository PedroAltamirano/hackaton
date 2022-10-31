import { Button, Container, Stack } from 'react-bootstrap'

import IAbout from 'types/about'
import ILink from 'types/links'
import { getIcon } from 'utils/icons'

interface IProps {
  about: IAbout
  links: ILink[]
}

const Footer = ({ about, links }: IProps) => (
  <footer className="bg-black p-5">
    <Container>
      <Stack
        direction="horizontal"
        gap={2}
        className="justify-content-center mb-4"
      >
        {links
          ?.filter((link) => !!link.icon)
          .map((link, index) => (
            <Button
              key={index}
              size="lg"
              variant="outline-primary"
              className="btn-default mx-2"
              role="button"
              href={link.url}
              target="_blank"
              rel="noreferrer"
            >
              {getIcon(link.icon)}
            </Button>
          ))}
      </Stack>

      <Container className="text-center text-white">
        <p>{about.name} 2022</p>
      </Container>
    </Container>
  </footer>
)

export default Footer
