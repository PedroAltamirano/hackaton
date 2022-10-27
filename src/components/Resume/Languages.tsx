import ILanguage from 'types/languages'

interface IProps {
  languages: ILanguage[]
}

const Languages = ({ languages }: IProps) => (
  <section className="py-3">
    <h3 className="text-uppercase text-primary mb-4">Languages</h3>
    <ul className="list-unstyled">
      {languages?.map((item, index) => (
        <li key={index} className="mb-2">
          {item.name}&nbsp;
          <span className="text-muted">{`(${item.level})`}</span>
        </li>
      ))}
    </ul>
  </section>
)

export default Languages
