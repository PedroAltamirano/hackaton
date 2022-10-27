import IInterest from 'types/interests'

interface IProps {
  interests: IInterest[]
}

const Interests = ({ interests }: IProps) => (
  <section className="py-3">
    <h3 className="text-uppercase text-primary mb-4">INTERESTS</h3>
    <ul className="list-unstyled">
      {interests?.map((item, index) => (
        <li key={index} className="mb-2">
          {item.name}
        </li>
      ))}
    </ul>
  </section>
)

export default Interests
