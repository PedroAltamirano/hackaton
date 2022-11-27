interface IProps {
  type?: 'text' | 'password'
  label?: string
  name: string
  error?: string
  onChange: any
}

const Input = ({ type = 'text', label, name, error, onChange }: IProps) => (
  <div className="flex flex-col">
    {error && <div className="text-red-500">{error}</div>}
    {label && <label htmlFor={name}>{label}</label>}
    <input
      type={type}
      name={name}
      onChange={onChange}
      className="bg-gray-300 rounded-full py-1 px-3"
    />
  </div>
)

export default Input
