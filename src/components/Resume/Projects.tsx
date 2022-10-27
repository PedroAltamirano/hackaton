import { Stack } from 'react-bootstrap'

import IProject from 'types/project'

interface IProps {
  projects: IProject[]
}

const Projects = ({ projects }: IProps) => (
  <section id="projects" className="py-3">
    <h3 className="text-uppercase text-primary">Projects</h3>
    {projects?.map((item) => (
      <div key={item.name} className="my-4 mt-5 mt-md-4">
        <Stack className="flex-md-row mb-2 p-0">
          <h4 className="">{item.name}</h4>
          <p className="ms-md-auto">{item.role}</p>
        </Stack>

        <p className="text-justify">{item.description}</p>
      </div>
    ))}
  </section>
)

export default Projects
