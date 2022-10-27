import { Stack } from 'react-bootstrap'
import IExperience from 'types/experience'

interface IProps {
  experience: IExperience[]
}

const Experience = ({ experience }: IProps) => (
  <section className="py-3">
    <h3 className="text-uppercase text-primary mb-4">Work experiences</h3>
    {experience?.map((item, index) => (
      <div key={index} className="my-4 mt-5 mt-md-4">
        <Stack className="flex-md-row">
          <h4>{item.name}</h4>
          <p className="ms-md-auto">
            {`${item.company} | ${item.since} - ${item.until}`}
          </p>
        </Stack>
        <p className="mb-0">{item.description}</p>
      </div>
    ))}
  </section>
)

export default Experience
