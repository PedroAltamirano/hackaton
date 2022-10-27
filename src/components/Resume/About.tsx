import { Stack, Image } from 'react-bootstrap'

import IAbout from 'types/about'

interface IProps {
  about: IAbout
}

const About = ({ about }: IProps) => (
  <div id="resume-intro" className="py-3">
    <Stack gap={4} className="flex-md-row align-items-center">
      <Image
        className="rounded rounded-circle mx-auto"
        src={about.image}
        alt="profile"
        width={120}
        height={120}
      />
      <p className="text-justify mb-0">{about.description}</p>
    </Stack>
  </div>
)

export default About
