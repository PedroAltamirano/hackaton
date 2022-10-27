import IEducation from 'types/education'

interface IProps {
  education: IEducation[]
}

const Education = ({ education }: IProps) => (
  <section id="education" className="skills-section py-3">
    <h3 className="text-uppercase text-primary mb-4">Education</h3>
    <ul className="list-unstyled resume-education-list">
      {education?.map((item, index) => (
        <li key={index} className="mb-3">
          <div className="font-weight-bold">
            <span>{item.name}</span>
          </div>
          <div className="text-muted">
            <span>Yachay Tech University</span>
          </div>
          <div className="text-muted">
            <span>2015 - 2021</span>
          </div>
        </li>
      ))}
    </ul>
  </section>
)

export default Education
