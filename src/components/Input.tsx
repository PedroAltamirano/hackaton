interface IProps {
  label?: string
  name: string
}

const Input = ({ label, name }: IProps) => (
  <div className="flex flex-col">
    {label && <label htmlFor={name}>{label}</label>}
    <input
      type="text"
      name={name}
      className="bg-gray-300 rounded-full py-1 px-3"
    />
  </div>
)

export default Input
