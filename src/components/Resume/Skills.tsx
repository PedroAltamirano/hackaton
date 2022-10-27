import { ISkill } from 'types/skills'

interface IProps {
  skills: ISkill[]
}

const Skills = ({ skills }: IProps) => (
  <section className="py-3">
    <h3 className="text-uppercase text-primary mb-4">Skills</h3>
    <div>
      <h6 className="item-title mb-2">Hard Skills</h6>
      <ul className="list-unstyled resume-skills-list">
        {skills
          ?.filter((item) => item.isHard)
          .map((item, index) => (
            <li key={index} className="mb-2">
              {item.name}
            </li>
          ))}
      </ul>
    </div>
    <div>
      <h6 className="item-title mb-2">Soft Skills</h6>
      <ul className="list-unstyled resume-skills-list">
        {skills
          ?.filter((item) => item.isSoft)
          .map((item, index) => (
            <li key={index} className="mb-2">
              {item.name}
            </li>
          ))}
      </ul>
    </div>
  </section>
)

export default Skills
