import { Container, Stack } from 'react-bootstrap'

import IAbout from 'types/about'
import ILink from 'types/links'
import { getIcon } from 'utils/icons'

interface IProps {
  about: IAbout
  links: ILink[]
}

const Footer = ({ about, links }: IProps) => (
  <footer className="text-center py-4">
    <Stack
      direction="horizontal"
      gap={4}
      className="justify-content-center mb-4 text-muted"
    >
      {links
        ?.filter((link) => !!link.icon)
        .map((link, index) => (
          <a
            key={index}
            className="text-muted"
            href={link.url}
            target="_blank"
            rel="noreferrer"
          >
            {getIcon(link.icon, { size: 'lg', className: 'mr-2' })}
            {link.name}
          </a>
        ))}
    </Stack>

    <Container className="text-muted">{about.name} 2020</Container>
  </footer>
)

export default Footer
